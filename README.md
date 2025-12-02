# Doodax.com - Intelligent Text Simplification Platform

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Doodax.com-blue?style=for-the-badge)](https://doodax.com/tools/text-simplification-tool/index.html)

**Doodax.com** is a state-of-the-art, single-page web application engineered to simplify complex English text for better comprehension. Designed with a focus on accessibility and education, it serves students, educators, and non-native speakers by providing instant lexical simplification and vocabulary building tools.

The interface is built with a modern, friendly "Cosmic" aesthetic to make the learning process comfortable and engaging.

## 🚀 Key Features

*   **Advanced Text Simplification:** Core engine capable of parsing complex text and suggesting simpler synonyms and sentence structures.
*   **Immersive User Experience:** Features a dynamic, animated galaxy background and glassmorphic UI elements for a modern feel.
*   **Vocabulary Learning:** Interactive system where users can click on simplified words to learn the original vocabulary in context.
*   **Educational Analytics:** (Simulated) Tracking of reading time and points to gamify the learning experience.
*   **SEO Optimized:** Built with full Schema.org JSON-LD structured data, meta tags, and semantic HTML for maximum search engine visibility.
*   **Comprehensive Legal Compliance:** Includes built-in modal support for Privacy Policy, DMCA, Terms of Service, and Google Policy disclaimers.

## 🛠 Technology Stack

*   **Frontend Framework:** React 19 (Functional Components & Hooks)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (via CDN) with Custom CSS Animations
*   **Build Tool:** Vite
*   **Icons:** Heroicons (SVG)

## 📂 Project Structure

```bash
/
├── public/                 # Static assets served to the root
│   ├── favicon.svg         # Brand Icon
│   ├── robots.txt          # SEO Crawler Directives
│   └── sitemap.xml         # SEO Site Map
├── src/
│   ├── components/
│   │   ├── LegalModals.tsx    # Modal logic for About, Privacy, DMCA, etc.
│   │   ├── SeoArticle.tsx     # Main SEO content block with "Read More" logic
│   │   ├── ThemeLayout.tsx    # Sticky Glassmorphic Header
│   │   └── TranslatorTool.tsx # The Core Text Input/Output Component
│   ├── App.tsx             # Root Component & Layout Manager
│   └── index.tsx           # Entry Point
├── README.md               # Project Documentation
└── metadata.json           # App Permissions & Metadata
```

## 🚦 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/doodax-simplifier.git
    cd doodax-simplifier
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to view the application.

## 🌍 SEO & Accessibility

This project is built with a "User First" approach.
*   **Robots.txt & Sitemap:** Included in the public root to guide search crawlers.
*   **Semantic HTML:** Proper use of `<header>`, `<main>`, `<article>`, and `<nav>` tags.
*   **ARIA Attributes:** Accessibility labels for screen readers.
*   **Meta Data:** Full description, keywords, and author tags in `index.html`.

## 📜 License & Credits

*   **Brand:** Doodax.com
*   **Developer:** [HSINI MOHAMED](https://github.com/hsinidev)
*   **Contact:** hsini.web@gmail.com

---
*Powered by HSINI MOHAMED*
