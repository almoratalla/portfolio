# Firebase Firestore Setup Guide

## 🔥 Firebase Configuration

To use Firebase Firestore for persistent page view tracking, follow these steps:

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "alain-portfolio")
4. Enable/disable Google Analytics (optional)
5. Click "Create project"

### 2. Set up Firestore Database

1. In your Firebase project console, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development) or "Start in production mode"
4. Select a location for your database (choose closest to your users)
5. Click "Done"

### 3. Get Firebase Configuration

1. In the Firebase console, click the gear icon ⚙️ → "Project settings"
2. Scroll down to "Your apps" section
3. Click the web icon `</>` to add a web app
4. Enter your app name and optionally enable Firebase Hosting
5. Copy the Firebase configuration object

### 4. Set Environment Variables

Add these to your `.env.local` file (create if it doesn't exist):

```bash
# Firebase configuration for Firestore page views
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 5. Configure Firestore Security Rules

In the Firebase console, go to Firestore Database → Rules and update:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to alainmoratalla_pageViews collection
    match /alainmoratalla_pageViews/{document} {
      allow read, write: if true;
    }
  }
}
```

**Note:** For production, you should implement more restrictive security rules.

### 6. Test the Setup

1. Start your Next.js development server: `npm run dev`
2. Navigate to a blog post page
3. Check the Firebase console → Firestore Database to see if page view documents are being created

### 7. Production Security Rules (Recommended)

For production, use more secure rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /alainmoratalla_pageViews/{document} {
      // Allow read for all, write only for increment operations
      allow read: if true;
      allow create, update: if true; // You can add more specific validation here
    }
  }
}
```

## 🎯 Data Structure

The Firestore collection `alainmoratalla_pageViews` will contain documents with:

```javascript
{
  pageId: "post-slug-or-id",
  views: 42,
  lastViewed: timestamp,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## 🔧 Troubleshooting

### Common Issues:

1. **"Firebase not configured" error**

   - Check your environment variables are set correctly
   - Ensure variable names start with `NEXT_PUBLIC_`

2. **Permission denied errors**

   - Check your Firestore security rules
   - Ensure rules allow read/write to `alainmoratalla_pageViews` collection

3. **Network errors**
   - Check your Firebase project ID is correct
   - Ensure your app is added to the Firebase project

### Development vs Production

- **Development**: Use test mode rules for easier debugging
- **Production**: Implement stricter security rules and consider authentication

### Alternative: Local Development

If you don't want to set up Firebase immediately, the page views will fall back gracefully and show 0 views without errors. The UI will still work perfectly!
