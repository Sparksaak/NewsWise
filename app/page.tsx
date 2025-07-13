import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News Wise API</h1>
          <p className="text-xl text-gray-600 mb-8">AI-Powered News Analysis & Summarization</p>

          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8">
            <p className="font-bold">OpenAI API Key Required:</p>
            <p>This API requires a valid OpenAI API key to function.</p>
            <p>Add OPENAI_API_KEY to your environment variables to use the service.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">API Endpoint</h2>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <code className="text-sm">POST /api/analyze</code>
            </div>

            <div className="text-left">
              <h3 className="text-lg font-semibold mb-3">Request Body:</h3>
              <pre className="bg-gray-100 rounded-lg p-4 text-sm overflow-x-auto mb-6">
                {`{
  "title": "Article title",
  "content": "Full article content...",
  "author": "Author name",
  "publishDate": "2024-01-01",
  "url": "https://example.com/article",
  "domain": "example.com"
}`}
              </pre>

              <h3 className="text-lg font-semibold mb-3">Response:</h3>
              <pre className="bg-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
                {`{
  "score": 85,
  "confidence": 92,
  "reasoning": "Analysis explanation...",
  "verdict": "TRUSTWORTHY",
  "summary": "Concise 2-3 sentence summary...",
  "flags": ["potential concerns"]
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">TRUSTWORTHY</h3>
            <p className="text-gray-600 text-sm">Score: 75-100%</p>
            <p className="text-gray-600 text-sm">Reliable source, factual content, proper attribution</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-600">QUESTIONABLE</h3>
            <p className="text-gray-600 text-sm">Score: 50-74%</p>
            <p className="text-gray-600 text-sm">Mixed signals, verify with other sources</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">❌</div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">FAKE</h3>
            <p className="text-gray-600 text-sm">Score: 0-49%</p>
            <p className="text-gray-600 text-sm">Likely misinformation, avoid sharing</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">🔍 Analysis Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• AI-powered content analysis with GPT-4</li>
              <li>• Intelligent article summarization</li>
              <li>• Source credibility assessment</li>
              <li>• Bias and manipulation detection</li>
              <li>• Clear conclusion classification</li>
              <li>• Detailed reasoning and flags</li>
              <li>• Confidence scoring</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">🛠️ Chrome Extension</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Automatic news page detection</li>
              <li>• One-click analysis & summarization</li>
              <li>• Prominent conclusion display</li>
              <li>• Visual authenticity meter</li>
              <li>• Concise article summaries</li>
              <li>• Cached results for performance</li>
              <li>• Works on major news websites</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">📄 Summarization Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Key Benefits</h4>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Save time with concise summaries</li>
                <li>• Understand main points quickly</li>
                <li>• Get context before reading full article</li>
                <li>• Identify key claims and facts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Summary Quality</h4>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• 2-3 sentence concise format</li>
                <li>• Captures essential information</li>
                <li>• Neutral, objective tone</li>
                <li>• Highlights main arguments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">🚀 Setup Instructions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">1. Get OpenAI API Key</h4>
              <p className="text-gray-600">
                Visit{" "}
                <a
                  href="https://platform.openai.com/api-keys"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenAI API Keys
                </a>{" "}
                to create an account and generate an API key.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">2. Environment Variables</h4>
              <p className="text-gray-600">
                Create a <code className="bg-gray-100 px-1 rounded">.env.local</code> file in your project root:
              </p>
              <pre className="bg-gray-100 rounded p-2 mt-2 text-sm">OPENAI_API_KEY=your_openai_api_key_here</pre>
            </div>
            <div>
              <h4 className="font-semibold">3. Start the Server</h4>
              <pre className="bg-gray-100 rounded p-2 mt-2 text-sm">npm run dev</pre>
            </div>
            <div>
              <h4 className="font-semibold">4. Install Chrome Extension</h4>
              <p className="text-gray-600">Load the extension folder in Chrome's developer mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
