import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-news-wise-blue-start to-news-wise-purple-end text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 text-center px-4">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">News Wise</h1>
          <p className="text-xl md:text-2xl text-news-wise-accent font-semibold">AI-Powered News Analysis & Summary</p>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            News Wise is a sophisticated Chrome extension designed to empower users with the ability to critically
            evaluate the credibility of news articles and efficiently digest information. By leveraging advanced
            analytical techniques, News Wise provides an authenticity score for news content and offers clear, concise
            reasoning behind its assessment, alongside a convenient article summarization feature.
          </p>
          <Link href="https://github.com/Sparksaak/NewsWise/archive/refs/heads/main.zip" download>
            <button className="mt-8 px-8 py-3 text-lg bg-news-wise-accent hover:bg-news-wise-accent/90 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 inline-flex items-center justify-center font-medium">
              Download Extension
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-news-wise-accent">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="pb-4 text-center">
                <h3 className="text-xl font-semibold text-news-wise-accent">Authenticity Scoring</h3>
              </div>
              <div className="text-center">
                <p className="text-white">
                  Get an immediate credibility score for any news article you are viewing, helping you quickly gauge its
                  trustworthiness.
                </p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="pb-4 text-center">
                <h3 className="text-xl font-semibold text-news-wise-accent">Reasoning Transparency</h3>
              </div>
              <div className="text-center">
                <p className="text-white">
                  Understand the factors that contribute to an article&apos;s authenticity score, including source
                  reputation, factual consistency, bias indicators, and more.
                </p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="pb-4 text-center">
                <h3 className="text-xl font-semibold text-news-wise-accent">Article Summarization</h3>
              </div>
              <div className="text-center">
                <p className="text-white">
                  Generate concise summaries of lengthy news articles, allowing you to grasp key information without
                  reading the full text.
                </p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="pb-4 text-center">
                <h3 className="text-xl font-semibold text-news-wise-accent">User-Friendly Interface</h3>
              </div>
              <div className="text-center">
                <p className="text-white">
                  Seamlessly integrated into your browsing experience with an intuitive and professional design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-news-wise-accent">How It Works</h2>
          <p className="text-lg md:text-xl text-white text-center mb-12 leading-relaxed">
            News Wise employs a multi-faceted approach to determine article authenticity:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
              <div className="pb-4">
                <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                  Source Analysis
                </h3>
              </div>
              <div>
                <p className="text-white">Evaluates the reputation and historical accuracy of the news source.</p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
              <div className="pb-4">
                <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                  Content Analysis
                </h3>
              </div>
              <div>
                <p className="text-white">
                  Examines the article for common indicators of misinformation, such as sensational language, logical
                  fallacies, and unsupported claims.
                </p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
              <div className="pb-4">
                <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                  Cross-Referencing
                </h3>
              </div>
              <div>
                <p className="text-white">
                  Compares information presented in the article with other reputable sources to identify discrepancies
                  or corroborating evidence.
                </p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
              <div className="pb-4">
                <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                  Bias Detection
                </h3>
              </div>
              <div>
                <p className="text-white">Identifies potential ideological or political biases within the content.</p>
              </div>
            </div>
          </div>
          <p className="text-lg md:text-xl text-white text-center mt-12 leading-relaxed">
            The authenticity score is a composite metric derived from these analyses, providing a comprehensive overview
            of the article&apos;s reliability. The summarization feature utilizes natural language processing (NLP) to
            extract the most salient points from the article.
          </p>
        </div>
      </section>

      {/* Installation Guide Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-news-wise-accent">Installation Guide</h2>
          <p className="text-lg md:text-xl text-white text-center mb-8">
            Follow these steps to install the News Wise Chrome Extension:
          </p>
          <ol className="space-y-8 text-lg text-white">
            <li>
              <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    1. Download & Unpack
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white">Download the News Wise repository as a ZIP file.</p>
                  <p className="text-white">
                    Extract the contents to a designated folder on your computer. Remember this folder&apos;s location!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    2. Open Chrome Extensions
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white">Open your Chrome browser.</p>
                  <p className="text-white">
                    Type <code className="bg-gray-700 px-2 py-1 rounded">chrome://extensions</code> into the address bar
                    and press Enter.
                  </p>
                  <p className="text-white">
                    Alternatively, click the three-dot menu in the top-right corner, go to &quot;More tools,&quot; and
                    then select &quot;Extensions.&quot;
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    3. Enable Developer Mode
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white">
                    In the top-right corner of the Extensions page, toggle on &quot;Developer mode.&quot;
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    4. Load Unpacked
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white">
                    Click the &quot;Load unpacked&quot; button that appears after enabling Developer mode.
                  </p>
                  <p className="text-white">Navigate to and select the extracted News Wise extension folder.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    5. Pin Extension (Optional)
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white">
                    Click the puzzle piece icon next to your profile avatar in the Chrome toolbar and pin the News Wise
                    icon for easy access.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-news-wise-accent">How to Use</h2>
          <ol className="space-y-6 text-lg text-white">
            <li>
              <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                   1. Navigate to a News Article
                  </h3>
                </div>
                <div>
                  <p className="text-white">Open any news article in your Chrome browser.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-news-wise-card-blue text-white rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    2. Activate Extension
                  </h3>
                </div>
                <div>
                  <p className="text-white">
                    Click the News Wise extension icon in the extensions toolbar to activate the extension.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} News Wise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
