# IgnitePress - Modern React & Tailwind Blog Template

IgnitePress is a feature-rich, modern, and fast blog template built with React and Tailwind CSS. It's designed for writers, developers, and creators who want a professional, ready-to-use solution with a stunning design and great performance.

## Key Features

- **Built with Modern Tech:** React 18 & Tailwind CSS.
- **Stunning Design:** A clean, high-energy design that's easy on the eyes.
- **Light & Dark Mode:** Seamless theme switching with user preference saved in local storage.
- **Fully Responsive:** Looks great on all devices, from mobile phones to desktops.
- **SEO Optimized:** Dynamic page titles and meta descriptions for better search engine ranking.
- **Engaging Post Experience:**
    - Sidebar with recent posts to keep readers engaged.
    - "You Might Also Like" section to recommend relevant content.
    - Social sharing buttons (Twitter, Facebook, LinkedIn, Copy Link).
- **Content-Driven:**
    - Beautiful landing page to attract readers.
    - Dedicated "All Articles" page with live search, tag filtering, and pagination.
    - Category pages to browse posts by topic.
- **Functional Contact Form:** A clean, ready-to-use contact form.
- **Easy to Customize:**
    - Blog posts are managed in a single, simple file (`src/data/posts.ts`).
    - Colors, fonts, and branding are easily configurable via `tailwind.config`.
- **Essential Pages Included:** Comes with About, Contact, Start Here, Privacy, and Resources pages.
- **Great UX:** Includes a "scroll to top" button and a sticky search/filter bar.

## Getting Started

This template is built as a static-ready React application. You can deploy the contents to any static hosting service (like Netlify, Vercel, GitHub Pages, etc.).

## Customization

### Managing Blog Posts

All blog posts are stored in the `src/data/posts.ts` file. To add, edit, or remove a post, simply modify the `posts` array in this file.

Each post object has the following structure:
```typescript
{
  id: number;          // Unique ID for the post
  slug: string;        // URL-friendly identifier (e.g., 'my-first-post')
  title: string;       // The title of the post
  author: string;      // The author's name
  date: string;        // Publication date (e.g., 'November 3, 2024')
  summary: string;     // A short summary for post cards and SEO
  content: string;     // The full content of the post. Use '\n\n' for paragraphs.
  imageUrl: string;    // URL for the post's featured image
  tags: string[];      // An array of tags for categorization (e.g., ['Productivity', 'Habits'])
}
```

### Connecting the Contact Form

The contact form in `src/pages/ContactPage.tsx` is a frontend-only component. To make it functional, you need to connect it to a backend or a form-handling service. A simple and free option is **Formspree**.

**How to use Formspree:**
1.  Go to [Formspree.io](https://formspree.io/) and create a new form. You'll get a unique endpoint URL.
2.  Open `src/pages/ContactPage.tsx`.
3.  Find the `<form>` element and add your Formspree endpoint to the `action` attribute and set the `method` to `POST`.

    ```jsx
    <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST">
      // ... your form fields
    </form>
    ```
4.  That's it! Formspree will handle submissions and forward them to your email. You can remove the `onSubmit` handler from the form element as Formspree will handle the submission.

### Changing Branding & Styling

- **Brand Name:** The brand name "IgnitePress" can be changed in `src/components/Header.tsx` and `src/components/Footer.tsx`.
- **Copyright Name:** Change `[Your Brand Name]` in `src/components/Footer.tsx`.
- **Colors & Fonts:** All colors and fonts are defined in the `tailwind.config` object within `index.html`. You can easily change the primary color, fonts, etc., there.
- **Logo:** The text-based logo is in `src/components/Header.tsx`. You can replace it with your own SVG or image component if you wish.
- **SEO Defaults:** Default SEO title and description can be changed in `index.html`.

## License

This template is licensed under the **MIT License**. See the `LICENSE` file for details. You are free to use this template for personal and commercial projects.
