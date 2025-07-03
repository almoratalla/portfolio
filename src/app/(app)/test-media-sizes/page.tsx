import { MediaBlock } from '@/blocks/MediaBlock/Component'
import TestPageWrapper from '@/components/TestPageWrapper'

export default function MediaSizeTest() {
  // Mock media object for testing
  const mockMedia = {
    id: 'test-id',
    filename: 'Transfiguration of Jesus.webp',
    url: '/media/Transfiguration of Jesus.webp',
    width: 900,
    height: 1350,
    alt: 'Transfiguration of Jesus',
    caption: null,
    mimeType: 'image/webp',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  return (
    <TestPageWrapper title="Media Block Size Test">
      <div className="space-y-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Small Size</h2>
          <MediaBlock
            position="default"
            size="small"
            media={mockMedia}
            blockType="mediaBlock"
            enableGutter={false}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Medium Size</h2>
          <MediaBlock
            position="default"
            size="medium"
            media={mockMedia}
            blockType="mediaBlock"
            enableGutter={false}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Large Size (Default)</h2>
          <MediaBlock
            position="default"
            size="large"
            media={mockMedia}
            blockType="mediaBlock"
            enableGutter={false}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Fullscreen Position</h2>
          <MediaBlock
            position="fullscreen"
            size="large"
            media={mockMedia}
            blockType="mediaBlock"
            enableGutter={false}
          />
        </div>
      </div>
    </TestPageWrapper>
  )
}
