import admin from 'firebase-admin'

interface FirebaseAdminAppParams {
  projectId: string
  clientEmail: string
  storageBucket: string
  privateKey: string
}

function formatPrivateKey(key: string) {
  // Remove quotes and handle escaped newlines properly
  return key.replace(/\\n/g, '\n').replace(/^"(.*)"$/, '$1')
}

export function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
  const privateKey = formatPrivateKey(params.privateKey)

  if (admin.apps.length > 0) {
    return admin.app()
  }

  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey,
  })

  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    storageBucket: params.storageBucket,
  })
}

export async function initAdmin() {
  const params = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
    clientEmail: process.env.NEXT_FIREBASE_CLIENT_EMAIL as string,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
    privateKey: process.env.NEXT_FIREBASE_PRIVATE_KEY as string,
  }

  // Validate that all required environment variables are present
  if (!params.projectId || !params.clientEmail || !params.storageBucket || !params.privateKey) {
    throw new Error('Missing required Firebase Admin environment variables')
  }

  return createFirebaseAdminApp(params)
}

export async function getAdminDb() {
  const app = await initAdmin()
  return app.firestore()
}
