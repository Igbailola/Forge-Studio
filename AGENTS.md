# AGENTS.md — Forge Studio Website

## Project Overview
**Project Name:** Forge Studio  
**Type:** Multi-page business/marketing website  
**Purpose:** Showcase services, display portfolio work, build trust, and generate leads for a creative digital agency.

---

## Agency Identity
- **Name:** Forge Studio
- **Tagline:** We design and build digital experiences that matter.
- **Services Offered:**
  - UI/UX Design
  - Website Development
  - Branding
  - Product Design
- **Target Audience:** Startups, small businesses, entrepreneurs, and companies seeking digital design and development services.

---

## Pages & Structure

| Page         | Key Sections                                                                 |
|--------------|------------------------------------------------------------------------------|
| Home         | Hero, Services Preview, Portfolio Preview, Testimonials, CTA, Footer        |
| About        | Story, Mission, Team, Values                                                 |
| Services     | Detailed service cards (UI/UX, Web Dev, Branding, Product Design)           |
| Portfolio    | Project grid with tags, descriptions, and placeholder images                 |
| Testimonials | Client quotes, names, company, and star ratings                              |
| FAQ          | Accordion-style common questions and answers                                 |
| Contact      | Contact form (Name, Email, Message), contact details, map placeholder        |

---

## Design System

### Visual Style
- **Aesthetic:** Modern flat design, minimal, professional
- **Layout:** Generous white space, clean grid, card-based components
- **Corner Radius:** Rounded corners throughout (8–16px)
- **Animations:** Subtle fade-ins, hover lifts, smooth transitions (no heavy motion)

### Color Palette
| Token           | Value      | Usage                          |
|-----------------|------------|--------------------------------|
| `--color-primary`   | `#0F0F0F`  | Text, headings, navbar         |
| `--color-accent`    | `#FF4D00`  | CTAs, highlights, active links |
| `--color-bg`        | `#FFFFFF`  | Page background                |
| `--color-surface`   | `#F6F6F6`  | Cards, sections                |
| `--color-muted`     | `#888888`  | Subtext, captions              |
| `--color-border`    | `#E0E0E0`  | Dividers, card borders         |

### Typography
- **Heading Font:** `Inter` or `Plus Jakarta Sans` — Bold/Semibold
- **Body Font:** `Inter` — Regular/Medium
- **Scale:** H1: 56px → H6: 18px; Body: 16px; Caption: 13px

### Spacing System
- Base unit: `8px`
- Section padding: `80px` top/bottom (desktop), `48px` (mobile)
- Component gap: `24px`

---

## Component Library

### Global Components
- `Navbar` — Logo + nav links + CTA button; sticky on scroll; hamburger menu on mobile
- `Footer` — Logo, nav links, social icons, copyright
- `Button` — Primary (accent fill), Secondary (outline), Ghost (text only)
- `Badge` — Small label tags for service/portfolio categories

### Page-Specific Components
- `HeroSection` — Full-width, headline, subheading, dual CTA buttons, hero visual/image
- `ServiceCard` — Icon, title, short description, "Learn More" link
- `PortfolioCard` — Image, project title, category badge, hover overlay
- `TestimonialCard` — Avatar, quote, client name, company, star rating
- `FAQAccordion` — Question toggle, animated answer reveal
- `ContactForm` — Name, Email, Message fields; Submit button; validation states

---

## Routing / Navigation