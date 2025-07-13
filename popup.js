class NewsWisePopup {
    constructor() {
        this.init()
    }

    async init() {
        this.elements = {
            status: document.getElementById("status"),
            statusText: document.getElementById("statusText"),
            error: document.getElementById("error"),
            verdictContainer: document.getElementById("verdictContainer"),
            verdict: document.getElementById("verdict"),
            meterContainer: document.getElementById("meterContainer"),
            meterFill: document.getElementById("meterFill"),
            score: document.getElementById("score"),
            summary: document.getElementById("summary"),
            summaryText: document.getElementById("summaryText"),
            reasoning: document.getElementById("reasoning"),
            reasoningText: document.getElementById("reasoningText"),
            analyzeBtn: document.getElementById("analyzeBtn"),
            btnText: document.getElementById("btnText"),
            loading: document.getElementById("loading"),
        }

        this.elements.analyzeBtn.addEventListener("click", () => this.analyzeArticle())

        await this.checkCurrentPage()
    }

    async checkCurrentPage() {
        try {
            const [tab] = await window.chrome.tabs.query({ active: true, currentWindow: true })

            if (!tab) {
                this.showError("Unable to access current tab")
                return
            }

            // Check if it's a news page
            const isNewsPage = await this.isNewsWebsite(tab.url)

            if (isNewsPage) {
                this.elements.statusText.textContent = "News article detected"
                this.elements.analyzeBtn.disabled = false

                // Check if we have cached results
                const cached = await this.getCachedResults(tab.url)
                if (cached) {
                    this.displayResults(cached)
                }
            } else {
                this.elements.statusText.textContent = "Not a news website"
                this.elements.analyzeBtn.disabled = true
            }
        } catch (error) {
            this.showError("Error checking current page: " + error.message)
        }
    }

    async isNewsWebsite(url) {
        const newsPatterns = [
            /news/i,
            /cnn\.com/i,
            /bbc\.com/i,
            /reuters\.com/i,
            /ap\.org/i,
            /nytimes\.com/i,
            /washingtonpost\.com/i,
            /theguardian\.com/i,
            /foxnews\.com/i,
            /nbcnews\.com/i,
            /abcnews\.go\.com/i,
            /cbsnews\.com/i,
            /npr\.org/i,
            /usatoday\.com/i,
            /wsj\.com/i,
            /bloomberg\.com/i,
            /politico\.com/i,
            /huffpost\.com/i,
            /buzzfeed\.com/i,
            /vox\.com/i,
            /article/i,
            /story/i,
        ]

        return newsPatterns.some((pattern) => pattern.test(url))
    }

    async analyzeArticle() {
        try {
            this.setLoading(true)
            this.hideError()

            const [tab] = await window.chrome.tabs.query({ active: true, currentWindow: true })

            if (!tab) {
                throw new Error("Unable to access current tab")
            }

            console.log("Starting analysis for:", tab.url)

            // First, inject the extraction script
            await window.chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    // Define the extraction function in the page context
                    window.extractArticleContent = () => {
                        console.log("Starting content extraction...")

                        const article = {
                            title: "",
                            content: "",
                            author: "",
                            publishDate: "",
                            url: window.location.href,
                            domain: window.location.hostname,
                        }

                        // Get page title as fallback
                        const pageTitle = document.title || ""

                        // Enhanced title extraction
                        const titleSelectors = [
                            "h1",
                            "h1.headline",
                            "h1.title",
                            ".headline h1",
                            ".title h1",
                            ".article-title",
                            ".story-headline",
                            ".entry-title",
                            ".post-title",
                            ".article-header h1",
                            ".content-header h1",
                            "header h1",
                            ".main-headline",
                            ".story-title",
                            '[data-testid="headline"]',
                            '[role="heading"][aria-level="1"]',
                            ".headline-text",
                            ".article-headline",
                        ]

                        // Try each selector
                        for (const selector of titleSelectors) {
                            try {
                                const elements = document.querySelectorAll(selector)
                                for (const element of elements) {
                                    if (element && element.textContent) {
                                        const text = element.textContent.trim()
                                        if (text.length > 10 && text.length < 200) {
                                            article.title = text
                                            console.log("Found title with selector:", selector, "->", text.substring(0, 50))
                                            break
                                        }
                                    }
                                }
                                if (article.title) break
                            } catch (e) {
                                console.log("Error with selector:", selector, e)
                            }
                        }

                        // Use page title as fallback
                        if (!article.title && pageTitle.length > 10) {
                            article.title = pageTitle.split(" - ")[0].split(" | ")[0].trim()
                            console.log("Using page title as fallback:", article.title)
                        }

                        // Enhanced content extraction
                        const contentSelectors = [
                            "article",
                            ".article-body",
                            ".story-body",
                            ".post-content",
                            ".entry-content",
                            ".article-content",
                            ".story-content",
                            ".main-content",
                            ".content",
                            ".article-text",
                            ".body-text",
                            ".story-text",
                            '[data-testid="article-body"]',
                            '[data-module="ArticleBody"]',
                            ".RichTextArticleBody",
                            ".ArticleBody",
                            ".zn-body__paragraph",
                            "main",
                        ]

                        let bestContent = ""
                        let maxLength = 0

                        // Try each content selector
                        for (const selector of contentSelectors) {
                            try {
                                const container = document.querySelector(selector)
                                if (container) {
                                    // Get all text content, prioritizing paragraphs
                                    const paragraphs = container.querySelectorAll("p")
                                    let containerText = ""

                                    if (paragraphs.length > 0) {
                                        containerText = Array.from(paragraphs)
                                            .map((p) => p.textContent.trim())
                                            .filter((text) => text.length > 20)
                                            .join(" ")
                                    } else {
                                        containerText = container.textContent.trim()
                                    }

                                    if (containerText.length > maxLength) {
                                        maxLength = containerText.length
                                        bestContent = containerText
                                        console.log("Found content with selector:", selector, "Length:", containerText.length)
                                    }
                                }
                            } catch (e) {
                                console.log("Error with content selector:", selector, e)
                            }
                        }

                        // Ultimate fallback: get all paragraphs on the page
                        if (!bestContent || bestContent.length < 100) {
                            console.log("Using fallback paragraph extraction...")
                            const allParagraphs = document.querySelectorAll("p")
                            if (allParagraphs.length > 0) {
                                const allText = Array.from(allParagraphs)
                                    .map((p) => p.textContent.trim())
                                    .filter((text) => text.length > 30)
                                    .slice(0, 15) // Take first 15 substantial paragraphs
                                    .join(" ")

                                if (allText.length > bestContent.length) {
                                    bestContent = allText
                                    console.log("Fallback content length:", allText.length)
                                }
                            }
                        }

                        article.content = bestContent

                        // Author extraction
                        const authorSelectors = [
                            ".author",
                            ".byline",
                            ".writer",
                            ".article-author",
                            ".story-author",
                            ".author-name",
                            ".byline-author",
                            '[data-testid="author"]',
                            '[rel="author"]',
                        ]

                        for (const selector of authorSelectors) {
                            try {
                                const element = document.querySelector(selector)
                                if (element && element.textContent) {
                                    let authorText = element.textContent.trim()
                                    authorText = authorText.replace(/^(By\s+|Author:\s*)/i, "")
                                    if (authorText.length > 0 && authorText.length < 100) {
                                        article.author = authorText
                                        break
                                    }
                                }
                            } catch (e) {
                                console.log("Error with author selector:", selector, e)
                            }
                        }

                        // Date extraction
                        const dateSelectors = [
                            "time",
                            ".date",
                            ".publish-date",
                            ".article-date",
                            ".timestamp",
                            '[data-testid="timestamp"]',
                        ]

                        for (const selector of dateSelectors) {
                            try {
                                const element = document.querySelector(selector)
                                if (element) {
                                    const dateText =
                                        element.textContent.trim() || element.getAttribute("datetime") || element.getAttribute("data-date")
                                    if (dateText && dateText.length > 0) {
                                        article.publishDate = dateText
                                        break
                                    }
                                }
                            } catch (e) {
                                console.log("Error with date selector:", selector, e)
                            }
                        }

                        console.log("Final extracted data:", {
                            title: article.title ? `"${article.title.substring(0, 50)}..."` : "NOT FOUND",
                            contentLength: article.content.length,
                            author: article.author || "NOT FOUND",
                            publishDate: article.publishDate || "NOT FOUND",
                            url: article.url,
                        })

                        return article
                    }
                },
            })

            // Now execute the extraction
            const results = await window.chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    if (typeof window.extractArticleContent === "function") {
                        return window.extractArticleContent()
                    } else {
                        throw new Error("Extraction function not available")
                    }
                },
            })

            const articleData = results[0].result

            console.log("Extracted article data:", articleData)

            // Better validation with more helpful error messages
            if (!articleData) {
                throw new Error("Failed to extract any article data from the page")
            }

            if (!articleData.title || articleData.title.length < 5) {
                throw new Error(`Article title not found or too short. Found: "${articleData.title || "none"}"`)
            }

            if (!articleData.content || articleData.content.length < 50) {
                throw new Error(
                    `Article content too short (${articleData.content?.length || 0} characters). Need at least 50 characters. This might not be an article page.`,
                )
            }

            // Send to backend for analysis
            const analysis = await this.sendForAnalysis(articleData)

            // Cache results
            await this.cacheResults(tab.url, analysis)

            // Display results
            this.displayResults(analysis)
        } catch (error) {
            console.error("Analysis error:", error)
            this.showError("Analysis failed: " + error.message)
        } finally {
            this.setLoading(false)
        }
    }

    async sendForAnalysis(articleData) {
        // First, check if the server is running
        try {
            console.log("Checking server connection...")
            const healthCheck = await fetch("http://localhost:3000", {
                method: "GET",
                mode: "cors",
            })
            console.log("Server health check:", healthCheck.status)
        } catch (healthError) {
            console.error("Server health check failed:", healthError)
            throw new Error("Cannot connect to backend server. Make sure it's running on http://localhost:3000")
        }

        console.log("Sending analysis request...")
        const response = await fetch("http://localhost:3000/api/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(articleData),
        })

        console.log("Response status:", response.status)

        if (!response.ok) {
            const errorText = await response.text()
            console.error("API Error Response:", errorText)

            let errorMessage = `Analysis request failed: ${response.status}`
            try {
                const errorData = JSON.parse(errorText)
                if (errorData.error) {
                    errorMessage = errorData.error
                    if (errorData.details) {
                        errorMessage += `: ${errorData.details}`
                    }
                }
            } catch (parseError) {
                errorMessage += ` - ${errorText}`
            }

            throw new Error(errorMessage)
        }

        const result = await response.json()
        console.log("Analysis result:", result)
        return result
    }

    displayResults(analysis) {
        const { score, confidence, verdict, reasoning, summary } = analysis

        // Show verdict prominently
        this.elements.verdictContainer.style.display = "block"
        this.elements.verdict.textContent = verdict
        this.elements.verdict.className = `verdict ${verdict.toLowerCase()}`

        // Show meter
        this.elements.meterContainer.style.display = "block"

        // Set meter color based on verdict
        let color
        if (verdict === "TRUSTWORTHY") {
            color = "#10B981" // Green
        } else if (verdict === "QUESTIONABLE") {
            color = "#F59E0B" // Yellow
        } else {
            color = "#EF4444" // Red
        }

        this.elements.meterFill.style.width = `${score}%`
        this.elements.meterFill.style.background = color
        this.elements.score.textContent = `${score}% (${confidence}% confidence)`

        // Show summary
        if (summary) {
            this.elements.summary.style.display = "block"
            this.elements.summaryText.textContent = summary
        }

        // Show reasoning
        if (reasoning) {
            this.elements.reasoning.style.display = "block"
            this.elements.reasoningText.textContent = reasoning
        }
    }

    async getCachedResults(url) {
        const result = await window.chrome.storage.local.get([url])
        const cached = result[url]

        if (cached && Date.now() - cached.timestamp < 3600000) {
            // 1 hour cache
            return cached.data
        }

        return null
    }

    async cacheResults(url, data) {
        await window.chrome.storage.local.set({
            [url]: {
                data,
                timestamp: Date.now(),
            },
        })
    }

    setLoading(loading) {
        this.elements.analyzeBtn.disabled = loading
        this.elements.btnText.style.display = loading ? "none" : "inline"
        this.elements.loading.style.display = loading ? "flex" : "none"
    }

    showError(message) {
        this.elements.error.textContent = message
        this.elements.error.style.display = "block"
    }

    hideError() {
        this.elements.error.style.display = "none"
    }
}

// Initialize popup
new NewsWisePopup()
