import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface ArticleData {
  title: string
  content: string
  author: string
  publishDate: string
  url: string
  domain?: string
}

interface AnalysisResult {
  score: number
  confidence: number
  reasoning: string
  verdict: "TRUSTWORTHY" | "QUESTIONABLE" | "FAKE"
  summary: string
  flags: string[]
}

// Handle CORS preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    console.log("Received analysis request")

    // Add CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }

    // Check if OpenAI API key is available first
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key not found")
      return NextResponse.json(
        {
          error: "OpenAI API key not configured",
          details: "Please add OPENAI_API_KEY to your environment variables to use the News Wise API.",
        },
        {
          status: 500,
          headers: corsHeaders,
        },
      )
    }

    const articleData: ArticleData = await request.json()
    console.log("Article data:", {
      title: articleData.title?.substring(0, 50),
      contentLength: articleData.content?.length,
      domain: articleData.domain,
    })

    if (!articleData.content || articleData.content.length < 50) {
      return NextResponse.json(
        {
          error: "Article content too short or missing",
          details: `Content length: ${articleData.content?.length || 0} characters`,
        },
        {
          status: 400,
          headers: corsHeaders,
        },
      )
    }

    // Analyze the article using AI (includes summarization)
    const analysis = await analyzeArticle(articleData)

    // Combine results
    const result: AnalysisResult = {
      ...analysis
    }

    console.log("Analysis completed successfully")
    return NextResponse.json(result, {
      headers: corsHeaders,
    })
  } catch (error) {
    console.error("Analysis error:", error)

    // Return detailed error information
    return NextResponse.json(
      {
        error: "Analysis failed",
        details: error instanceof Error ? error.message : "Unknown error",
        stack: process.env.NODE_ENV === "development" ? (error instanceof Error ? error.stack : undefined) : undefined,
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      },
    )
  }
}

function getVerdictFromScore(score: number): "TRUSTWORTHY" | "QUESTIONABLE" | "FAKE" {
  if (score >= 75) return "TRUSTWORTHY"
  if (score >= 50) return "QUESTIONABLE"
  return "FAKE"
}

async function analyzeArticle(article: ArticleData): Promise<Omit<AnalysisResult, "sources">> {
  const prompt = `
    Analyze the following news article for potential misinformation, bias, and authenticity, and provide a concise summary.
    
    Title: ${article.title}
    Author: ${article.author || "Unknown"}
    Publication Date: ${article.publishDate || "Unknown"}
    Source Domain: ${article.domain || "Unknown"}
    
    Content: ${article.content.substring(0, 3000)}
    
    Please evaluate this article based on:
    1. Factual accuracy indicators
    2. Source credibility
    3. Language patterns (sensationalism, bias, emotional manipulation)
    4. Logical consistency
    5. Verifiable claims vs opinions
    6. Publication source reputation
    
    Also provide a concise 2-3 sentence summary of the main points of the article.
    
    Provide your analysis in the following JSON format:
    {
      "score": <number 0-100, where 100 is most authentic>,
      "confidence": <number 0-100, confidence in the assessment>,
      "reasoning": "<detailed explanation of the assessment>",
      "summary": "<2-3 sentence summary of the article's main points>",
      "flags": ["<array of specific concerns found>"]
    }
    
    Be thorough but concise in your reasoning and summary.
  `

  console.log("Calling OpenAI API...")

  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt,
    system:
      "You are an expert fact-checker, media literacy specialist, and news summarizer. Analyze news articles objectively, provide detailed assessments of their authenticity and reliability, and create concise, informative summaries. Always respond with valid JSON.",
  })

  console.log("OpenAI response received:", text.substring(0, 200))

  try {
    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      console.log("Successfully parsed AI response")

      // Validate the response structure
      if (typeof parsed.score !== "number" || typeof parsed.confidence !== "number") {
        throw new Error("Invalid response structure from AI")
      }

      const score = Math.max(0, Math.min(100, parsed.score))
      const verdict = getVerdictFromScore(score)

      return {
        score,
        confidence: Math.max(0, Math.min(100, parsed.confidence)),
        reasoning: parsed.reasoning || "No reasoning provided",
        summary: parsed.summary || "Summary not available",
        verdict,
        flags: Array.isArray(parsed.flags) ? parsed.flags : [],
      }
    } else {
      throw new Error("No JSON found in AI response")
    }
  } catch (parseError) {
    console.error("Failed to parse AI response:", parseError)
    console.log("Raw AI response:", text)
    throw new Error(
      `Failed to parse AI analysis response: ${parseError instanceof Error ? parseError.message : "Unknown parsing error"}`,
    )
  }
}
