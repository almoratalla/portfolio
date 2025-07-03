import TestPageWrapper from '@/components/TestPageWrapper'

export default function TestExportFeature() {
  return (
    <TestPageWrapper title="Post Export Feature Test">
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Export Feature Implementation ✅</h2>
          <p className="text-gray-700 mb-4">
            The post export feature has been successfully implemented with the following components:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Export Button in Admin Panel</strong>
                <p className="text-sm text-gray-600">Added to all post edit pages</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Markdown Export API</strong>
                <p className="text-sm text-gray-600">/api/export-post</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>JSON Export API</strong>
                <p className="text-sm text-gray-600">/api/export-post-json</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Rich Text to Markdown Converter</strong>
                <p className="text-sm text-gray-600">Handles images, code blocks, formatting</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">How to Test</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Go to the PayloadCMS admin panel</li>
            <li>Navigate to Posts → Edit any post</li>
            <li>Look for the &quot;Export Post&quot; section at the top</li>
            <li>Click &quot;Export as Markdown&quot; or &quot;Export as JSON&quot;</li>
            <li>The file should download automatically</li>
          </ol>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Features Included</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Markdown export with frontmatter and formatted content</li>
            <li>JSON export with complete post data</li>
            <li>Image handling with proper URLs and alt text</li>
            <li>Code block preservation</li>
            <li>Custom block conversion (personal reflections, banners)</li>
            <li>Metadata inclusion (title, slug, dates, etc.)</li>
            <li>Error handling and user feedback</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">API Endpoints</h3>
          <div className="space-y-2 font-mono text-sm">
            <div>GET /api/export-post?id=&#123;postId&#125;</div>
            <div>GET /api/export-post-json?id=&#123;postId&#125;</div>
          </div>
        </div>
      </div>
    </TestPageWrapper>
  )
}
