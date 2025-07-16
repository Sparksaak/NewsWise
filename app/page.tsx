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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <path d="M12 17V3" />
                <path d="m6 11 6 6 6-6" />
                <path d="M19 21H5" />
              </svg>{" "}
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
            <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="pb-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-news-wise-accent mb-4 mx-auto"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-xl font-semibold text-news-wise-accent">Authenticity Scoring</h3>
              </div>
              <div className="text-center">
                <p className="text-white">
                  Get an immediate credibility score for any news article you are viewing, helping you quickly gauge its
                  trustworthiness.
                </p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="pb-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-news-wise-accent mb-4 mx-auto"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                  <path d="M10 10h.01" />
                  <path d="M14 14h.01" />
                </svg>
                <h3 className="text-xl font-semibold text-news-wise-accent">Reasoning Transparency</h3>
              </div>
              <div className="text-center">
                <p className="text-white">
                  Understand the factors that contribute to an article&apos;s authenticity score, including source
                  reputation, factual consistency, bias indicators, and more.
                </p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="pb-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-news-wise-accent mb-4 mx-auto"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" x2="16" y1="13" y2="13" />
                  <line x1="8" x2="16" y1="17" y2="17" />
                  <line x1="8" x2="12" y1="9" y2="9" />
                </svg>
                <h3 className="text-xl font-semibold text-news-wise-accent">Article Summarization</h3>
              </div>
              <div className="text-center">
                <p className="text-white">
                  Generate concise summaries of lengthy news articles, allowing you to grasp key information without
                  reading the full text.
                </p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="pb-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-news-wise-accent mb-4 mx-auto"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M2 22h20" />
                </svg>
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
            <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
              <div className="pb-4">
                <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-news-wise-accent mb-3"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M10 10h.01" />
                  </svg>{" "}
                  Source Analysis
                </h3>
              </div>
              <div>
                <p className="text-white">Evaluates the reputation and historical accuracy of the news source.</p>
              </div>
            </div>
            <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
              <div className="pb-4">
                <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-news-wise-accent mb-3"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="8" x2="16" y1="13" y2="13" />
                    <line x1="8" x2="16" y1="17" y2="17" />
                    <line x1="8" x2="12" y1="9" y2="9" />
                  </svg>{" "}
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
            <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
              <div className="pb-4">
                <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-news-wise-accent mb-3"
                  >
                    <path d="M17 17H7V7h10v10Z" />
                    <path d="M19 19H5V5h14v14Z" />
                    <path d="M10 10h.01" />
                    <path d="M14 14h.01" />
                  </svg>{" "}
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
            <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
              <div className="pb-4">
                <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-news-wise-accent mb-3"
                  >
                    <path d="M12 2c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z" />
                    <path d="M12 12v10" />
                    <path d="M17 17l-5 5-5-5" />
                  </svg>{" "}
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
              <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 mr-3 text-news-wise-accent"
                    >
                      <path d="M12 17V3" />
                      <path d="m6 11 6 6 6-6" />
                      <path d="M19 21H5" />
                    </svg>{" "}
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
              <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 mr-3 text-news-wise-accent"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>{" "}
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
              <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 mr-3 text-news-wise-accent"
                    >
                      <rect width="20" height="12" x="2" y="6" rx="6" ry="6" />
                      <circle cx="16" cy="12" r="2" />
                    </svg>{" "}
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
              <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 mr-3 text-news-wise-accent"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2 0 0 1-2.5-2.5Z" />
                    </svg>{" "}
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
              <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 mr-3 text-news-wise-accent"
                    >
                      <path d="M12 17V2l7 7-7 7Z" />
                      <path d="M12 17H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7Z" />
                    </svg>{" "}
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
              <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 mr-3 text-news-wise-accent"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
                    1. Navigate to a News Article
                  </h3>
                </div>
                <div>
                  <p className="text-white">Open any news article in your Chrome browser.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-news-wise-card-blue rounded-xl shadow-lg p-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-news-wise-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 mr-3 text-news-wise-accent"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
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
