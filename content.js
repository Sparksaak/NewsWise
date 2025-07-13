// Content script that runs on all pages
class NewsWiseContent {
    constructor() {
        this.init()
    }

    init() {
        // Only run on news websites
        if (this.isNewsWebsite()) {
            this.injectIndicator()
            this.observePageChanges()
        }
    }

    isNewsWebsite() {
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
            /localhost/i, // For testing
        ]

        return newsPatterns.some((pattern) => pattern.test(window.location.href))
    }

    injectIndicator() {
        // Remove existing indicator if present
        const existing = document.getElementById("news-wise-indicator")
        if (existing) {
            existing.remove()
        }

        // Create floating indicator
        const indicator = document.createElement("div")
        indicator.id = "news-wise-indicator"
        indicator.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 10px 15px;
      border-radius: 25px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      border: none;
      outline: none;
    `

        indicator.innerHTML = `
      <span>📰</span>
      <span>Check with News Wise</span>
    `

        // Add hover effects
        indicator.addEventListener("mouseenter", () => {
            indicator.style.transform = "scale(1.05)"
        })

        indicator.addEventListener("mouseleave", () => {
            indicator.style.transform = "scale(1)"
        })

        // Handle click - open extension popup
        indicator.addEventListener("click", () => {
            // Since we can't directly open the popup, we'll show a message
            this.showClickMessage()
        })

        document.body.appendChild(indicator)
    }

    showClickMessage() {
        // Create a temporary message
        const message = document.createElement("div")
        message.style.cssText = `
      position: fixed;
      top: 70px;
      right: 20px;
      z-index: 10001;
      background: #333;
      color: white;
      padding: 10px 15px;
      border-radius: 8px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      max-width: 200px;
    `
        message.textContent = "Click the News Wise extension icon in your browser toolbar to analyze this article!"

        document.body.appendChild(message)

        // Remove message after 3 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message)
            }
        }, 3000)
    }

    observePageChanges() {
        // Watch for dynamic content changes (SPA navigation)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                    // Check if new article content was added
                    const hasArticleContent = Array.from(mutation.addedNodes).some(
                        (node) =>
                            node.nodeType === Node.ELEMENT_NODE &&
                            (node.querySelector("article") || node.querySelector(".article-body") || node.querySelector("h1")),
                    )

                    if (hasArticleContent) {
                        this.updateIndicator()
                    }
                }
            })
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        })
    }

    updateIndicator() {
        const indicator = document.getElementById("news-wise-indicator")
        if (indicator) {
            // Flash the indicator to show new content detected
            indicator.style.animation = "news-wise-pulse 0.5s ease-in-out"
            setTimeout(() => {
                indicator.style.animation = ""
            }, 500)
        }
    }
}

// Initialize content script
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => new NewsWiseContent())
} else {
    new NewsWiseContent()
}

// Add CSS for pulse animation
const style = document.createElement("style")
style.textContent = `
  @keyframes news-wise-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`
document.head.appendChild(style)
