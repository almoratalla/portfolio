// Test script for page views API
async function testPageViewsAPI() {
  const baseUrl = 'http://localhost:3000'
  const testPageId = 'test-page-123'

  try {
    // Test GET - should return 0 views initially
    console.log('Testing GET endpoint...')
    const getResponse = await fetch(`${baseUrl}/api/page-views/${testPageId}`)
    const getData = await getResponse.json()
    console.log('GET response:', getData)

    // Test POST - should increment views
    console.log('Testing POST endpoint...')
    const postResponse = await fetch(`${baseUrl}/api/page-views/${testPageId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
      }),
    })
    const postData = await postResponse.json()
    console.log('POST response:', postData)

    // Test GET again - should show incremented views
    console.log('Testing GET endpoint again...')
    const getResponse2 = await fetch(`${baseUrl}/api/page-views/${testPageId}`)
    const getData2 = await getResponse2.json()
    console.log('GET response after POST:', getData2)

  } catch (error) {
    console.error('Test error:', error)
  }
}

testPageViewsAPI()
