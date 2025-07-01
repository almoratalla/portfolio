## 🔥 Firestore Security Rules for Your Collection

Copy and paste these rules into your Firebase Console → Firestore Database → Rules:

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

## 📊 Expected Document Structure

When page views are tracked, documents in the `alainmoratalla_pageViews` collection will look like this:

```javascript
// Document ID: the page/post slug (e.g., "my-blog-post-slug")
{
  pageId: "my-blog-post-slug",
  views: 42,
  lastViewed: Timestamp,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## 🧪 Testing Your Setup

1. **Start Development Server**: `npm run dev`
2. **Visit a Blog Post**: Navigate to any post (e.g., `http://localhost:3000/posts/your-post-slug`)
3. **Check Firebase Console**: Go to Firestore Database → Data → `alainmoratalla_pageViews` collection
4. **Verify Document Creation**: You should see a new document with the post slug as the ID
5. **Test View Increment**: Refresh the page and see the view count increase

## 🚨 Important: Apply Security Rules

Don't forget to publish your security rules in the Firebase Console:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `alainmoratalla-portfolio`
3. Navigate to **Firestore Database** → **Rules**
4. Replace the existing rules with the ones above
5. Click **Publish**

## ✅ Your Configuration Is Ready!

Your `.env` file contains:

- ✅ Firebase API Key
- ✅ Project ID: `alainmoratalla-portfolio`
- ✅ Firestore collection: `alainmoratalla_pageViews`
- ✅ All required environment variables

The system is now configured to save page views to your specific Firestore collection!
