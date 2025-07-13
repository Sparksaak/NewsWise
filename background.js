// Background service worker for the Chrome extension
const chrome = window.chrome // Declare the chrome variable

chrome.runtime.onInstalled.addListener(() => {
    console.log("News Wise extension installed")
})

// Handle messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyzeArticle") {
        handleArticleAnalysis(request.data)
            .then((result) => sendResponse({ success: true, data: result }))
            .catch((error) => sendResponse({ success: false, error: error.message }))
        return true // Keep message channel open for async response
    }

    if (request.action === "openPopup") {
        // We can't programmatically open the popup, but we can show a notification
        chrome.action.setBadgeText({ text: "!" })
        chrome.action.setBadgeBackgroundColor({ color: "#FF0000" })

        // Clear badge after 3 seconds
        setTimeout(() => {
            chrome.action.setBadgeText({ text: "" })
        }, 3000)

        sendResponse({ success: true })
    }
})

async function handleArticleAnalysis(articleData) {
    try {
        const response = await fetch("http://localhost:3000/api/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(articleData),
        })

        if (!response.ok) {
            throw new Error("Analysis request failed")
        }

        return await response.json()
    } catch (error) {
        console.error("Analysis error:", error)
        throw error
    }
}

// Clean up old cached results periodically
chrome.alarms.create("cleanup", { periodInMinutes: 60 })

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "cleanup") {
        cleanupCache()
    }
})

async function cleanupCache() {
    const storage = await chrome.storage.local.get()
    const now = Date.now()
    const toRemove = []

    for (const [key, value] of Object.entries(storage)) {
        if (value.timestamp && now - value.timestamp > 86400000) {
            // 24 hours
            toRemove.push(key)
        }
    }

    if (toRemove.length > 0) {
        await chrome.storage.local.remove(toRemove)
    }
}
