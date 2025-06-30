# Personal Reflection Block - Usage Guide

## Overview

The Personal Reflection block is a custom Payload CMS field designed specifically for blog posts where most content is verbatim from speakers/presenters, but you want to add your own personal thoughts and insights.

## Features

- **Visual Distinction**: Clearly separates your personal reflections from the speaker's original content
- **Multiple Styles**: Choose from different visual styles to match the tone of your reflection
- **Customizable Labels**: Change the title from "Personal Reflection" to "My Thoughts", "Key Takeaway", etc.
- **Dark Mode Support**: Automatically adapts to light and dark themes
- **Responsive Design**: Works well on all device sizes

## How to Use

### 1. In the Payload Admin Panel

1. Navigate to your Posts collection
2. Create or edit a blog post
3. In the rich text editor, click the **"+"** button to add a new block
4. Select **"Personal Reflection"** from the block types
5. Configure your reflection:
   - **Reflection Title**: Optional custom title (default: "Personal Reflection")
   - **Your Reflection**: Write your personal thoughts using the rich text editor
   - **Style**: Choose the visual style (see styles below)
   - **Show Author**: Toggle to show/hide the "Personal Reflection" indicator

### 2. Available Styles

#### Default (Gray)

- Clean, minimal appearance
- Good for general thoughts and observations
- Icon: 💭

#### Highlighted (Blue)

- Bright, attention-grabbing style
- Perfect for key insights and important takeaways
- Icon: 💡

#### Callout (Amber)

- Warm, energetic appearance
- Great for exciting discoveries and "aha moments"
- Icon: ⚡

#### Sidebar (Gray, Floating)

- Floats to the right side of the content
- Ideal for brief notes and quick thoughts
- Smaller width, doesn't interrupt main flow
- Icon: 📝

### 3. Writing Tips

- **Be Authentic**: Share your genuine thoughts and reactions
- **Add Context**: Explain why something resonated with you
- **Connect Ideas**: Link the speaker's content to your own experiences
- **Ask Questions**: Pose questions that the content made you think about
- **Provide Examples**: Share related examples from your own life or work

### 4. Example Usage

```
[Speaker's verbatim content about leadership principles...]

[Personal Reflection Block - Highlighted Style]
Title: "Key Insight"
Content: "This reminds me of a situation I faced last year when leading a project team. The speaker's point about authentic communication really hits home - I've seen how being genuine with team members builds trust so much faster than trying to maintain a 'perfect' facade."

[More speaker content...]

[Personal Reflection Block - Sidebar Style]
Title: "Quick Note"
Content: "Need to research more about this topic - sounds like something our team could implement."
```

## Technical Details

### Block Configuration

- **Slug**: `personalReflection`
- **Interface Name**: `PersonalReflectionBlock`
- **Rich Text Editor**: Lexical with standard formatting features

### Styling Classes

The component uses Tailwind CSS classes and automatically adapts to your theme's color scheme.

## Customization

If you want to modify the appearance or add new styles:

1. Edit `/src/blocks/PersonalReflection/Component.tsx`
2. Add new style options in `/src/blocks/PersonalReflection/config.ts`
3. Update the `getStyleClasses()` function to include your new styles

## Best Practices

1. **Use Sparingly**: Don't over-use reflections - they should highlight truly important insights
2. **Be Consistent**: Stick to a consistent style within each post
3. **Add Value**: Make sure your reflections add meaningful commentary, not just restate what was said
4. **Consider Flow**: Place reflections at natural break points in the content
5. **Review Before Publishing**: Ensure your reflections enhance rather than distract from the main content

## Troubleshooting

If the Personal Reflection block doesn't appear in your editor:

1. Ensure the block is properly imported in your Posts collection
2. Check that the component is registered in the RichText serializer
3. Verify that types have been regenerated with `npm run generate:types`

## How This Block Was Created

This custom block was built following Payload CMS best practices. Here's a summary of the process:

### 1. Block Configuration (`/src/blocks/PersonalReflection/config.ts`)

- Defined the block structure with fields for title, content, style, and showAuthor
- Used Lexical rich text editor for the content field
- Set up TypeScript interface name for type generation

### 2. React Component (`/src/blocks/PersonalReflection/Component.tsx`)

- Created a React component that renders the block on the frontend
- Implemented different visual styles with Tailwind CSS
- Added responsive design and dark mode support
- Used icons and visual indicators to distinguish reflection content

### 3. Integration Steps

- Added block to Posts collection configuration
- Imported component in RichText serializer
- Added rendering case in serialize.tsx switch statement
- Generated TypeScript types with `npm run generate:types`

For a complete tutorial on creating your own custom blocks, see `CUSTOM_BLOCKS_TUTORIAL.md` in the project root.
