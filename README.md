# PROQRA Website

> **UK–India sourcing for fabricated metalwork, sold on quality assurance rather than price.**
> Primary buyer: UK engineering and manufacturing SMEs.

---

## What Is PROQRA?

PROQRA helps UK engineering firms source sheet metal fabrication and welded assemblies from vetted Indian suppliers (principally in Pune, Coimbatore, and Rajkot). Every supplier is verified in person before they quote, and every order is inspected against the customer's drawing before dispatch.

---

## Project Structure Guide (Plain English)

Here is where everything lives in this project:

```
├── app/                        # The pages and routes of the website
│   ├── page.tsx               # Home page (/)
│   ├── how-we-source/         # The 6-stage vetting process page (/how-we-source)
│   ├── quality/               # Quality checks & defect policy page (/quality)
│   ├── capabilities/          # Materials, processes & specs page (/capabilities)
│   ├── about/                 # "Why PROQRA exists" company page (/about)
│   ├── get-started/           # Drawing upload & quote enquiry page (/get-started)
│   ├── api/submit-lead/       # Email & form submission handler
│   ├── layout.tsx             # Global layout & metadata (title, meta description)
│   ├── globals.css            # Styles and fonts
│   ├── sitemap.ts             # Google search sitemap (all 6 pages)
│   └── robots.ts              # Search engine crawler instructions
│
├── components/                 # Reusable visual building blocks
│   ├── home/                  # Sections on the home page:
│   │   ├── Hero.tsx           # Top headline & action buttons
│   │   ├── ProblemSection.tsx # "The overseas sourcing dilemma"
│   │   ├── WhatWeDo.tsx       # Vetting, inspection, logistics summary
│   │   ├── WhyIndia.tsx       # 2026 tariff position & capability
│   │   ├── HowItWorks.tsx     # 4-step drawing-to-delivery process
│   │   └── ClosingCTA.tsx     # "Start with one part" pilot callout
│   │
│   └── layout/                # Global header & footer:
│       ├── Navbar.tsx         # Top navigation bar
│       └── Footer.tsx         # Bottom footer with contact & legal details
│
├── types/                     # Data definitions (form fields, leads)
├── lib/                       # Helper functions
└── public/                    # Static assets (favicons, brand icons)
```

---

## Running the Website Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run locally**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Check for errors**:
   ```bash
   npm run build
   ```

---

## Contact

- **General Enquiries**: [hello@proqra.co.uk](mailto:hello@proqra.co.uk)
- **Website**: [proqra.co.uk](https://proqra.co.uk)
