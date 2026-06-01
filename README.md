
# Accessible & Semantic Personal Portfolio Skeleton

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![Accessibility](https://img.shields.io/badge/WCAG%202.2-AA-blue?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-success?style=for-the-badge)](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

Developed in the period of Web development internship at Thiranex, an Ed-Tech company.

##  Project Overview
This project is a multi-page personal portfolio website built with a strict focus on **Modern Semantic HTML5 standards** and **WCAG (Web Content Accessibility Guidelines) 2.2 AA compliance**. 

The goal was to move away from generic "div-soup" layouts and build a flawless, fully-accessible structural skeleton. It serves as an optimized foundation that scores a perfect **100/100 on Google Lighthouse Accessibility and SEO audits**.

---

##  Project Preview


Portfolio Structure Preview
<img width="1600" height="754" alt="WhatsApp Image 2026-06-02 at 1 51 32 AM" src="https://github.com/user-attachments/assets/5abc96a4-b693-477b-a482-2a91f08e4246" />


---

##  Key Features

### 1. Advanced HTML5 Semantic Architecture
Instead of using non-semantic `<div>` or `<span>` blocks for layout grids, this site maps out content regions using precise landmark tags:
* `<header>` & `<footer>` for universal branding and utility layouts.
* `<nav>` to safely wrap the primary global navigation.
* `<main>` to explicitly isolate unique page content for search engine indexers.
* `<section>` & `<article>` to group distinct content clusters safely.
* `<aside>` for supplementary secondary data.

### 2. Comprehensive Digital Accessibility (a11y)
* **Screen Reader Optimization:** Integrated missing structural context seamlessly using specific `aria-labels`, `aria-expanded` attributes, and explicit landmark roles.
* **Keyboard Navigability:** Full logical `Tab` flow index mapping across all elements. Interactive anchors and form controls include mandatory `:focus-visible` ring indicators.
* **Content Hierarchy:** Flawless sequential heading arrangement (`<h1>` through `<h6>`) ensuring zero skipped steps.

### 3. Technical SEO & Meta Management
* Configured tailored `<head>` blocks independently for every view page.
* Integrated descriptive `<title>` tags (strictly limited under 60 characters) and context descriptions (under 160 characters).
* Embedded fundamental Open Graph property metadata (`og:title`, `og:description`) to optimize how links render when shared across social channels.

### 4. Fully Navigable Contact Form
* A native `<form>` setup pairing all interface fields explicitly with localized `<label for="...">` parameters.
* Implemented built-in client-side structural form validation (`required`, native `type="email"` parameters).
* Added standard ARIA configurations (`aria-describedby` & `aria-invalid`) to pass programmatic errors directly to assisted technologies.

---

## 📂 Project Architecture

```text
├── index.html       # Home Page Layout
├── about.html       # About Me Narrative Layout
├── projects.html    # Engineering Showcases
├── contact.html     # Accessible Validation Form
└── README.md        # Technical Documentation
