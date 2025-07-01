// Test script for the page views status API
async function testStatusAPI() {
    const baseUrl = 'http://localhost:3000'

    try {
        console.log('Testing page views status endpoint...')
        const response = await fetch(`${baseUrl}/api/page-views/status`)

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        console.log('Status API response:')
        console.log(JSON.stringify(data, null, 2))

    } catch (error) {
        console.error('Status API test error:', error.message)
    }
}

testStatusAPI()
