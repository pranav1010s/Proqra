# PROQRA Website

> **Precision Manufacturing Sourcing & Supplier Approval in India for UK Industry.**
> Auditing shop floors, verifying CapEx and production lead times, and delivering technical sign-offs so UK manufacturers can procure directly with confidence.

---

## Architecture & Directory Structure

```
├── app/                        # Next.js App Router (pages, layouts & API handlers)
│   ├── about/                  # Company story & on-the-ground presence (/about)
│   ├── api/                    # Server-side API endpoints
│   │   ├── submit-contact/     # Client inquiry & drawing upload handler (/api/submit-contact)
│   │   └── submit-supplier/    # Indian manufacturer application handler (/api/submit-supplier)
│   ├── client-confidentiality/ # NDA, IP protection & CAD confidentiality (/client-confidentiality)
│   ├── for-suppliers/          # Indian supplier onboarding & machine upload (/for-suppliers)
│   ├── how-we-source/          # 7-Step qualification framework (/how-we-source)
│   ├── legal-disclaimer/       # Trade terms & commercial disclosures (/legal-disclaimer)
│   ├── privacy-policy/         # GDPR-compliant privacy policy (/privacy-policy)
│   ├── quality/                # Quality & Capabilities: 4-pillar audit framework (/quality)
│   ├── globals.css             # Tailwind base styles & custom typography utilities
│   ├── layout.tsx              # Root HTML shell, font loader & global SEO metadata
│   ├── page.tsx                # Homepage (/)
│   ├── robots.ts               # Search engine crawler directives
│   └── sitemap.ts              # XML sitemap generator
│
├── components/                 # Modular React components
│   ├── home/                   # Homepage sections (rendered in order on /)
│   │   ├── Hero.tsx            # Hero section with shop-floor video & primary CTAs
│   │   ├── QuickOverview.tsx   # Core value proposition & direct procurement model
│   │   ├── InteractiveProcessSection.tsx # Interactive 7-step sourcing timeline
│   │   ├── ClustersPreview.tsx # Indian manufacturing clusters (Pune, Rajkot, Coimbatore, Chennai)
│   │   └── FinalCTASection.tsx # Client drawing upload form & technical inquiry box
│   └── layout/                 # Global layout components
│       ├── Navbar.tsx          # Top navigation bar with desktop & mobile drawer
│       └── Footer.tsx          # Footer with site navigation, contact, and legal links
│
├── lib/                        # Core utilities & service helpers
│   ├── sendEmail.ts            # Resend email dispatcher with backup failover support
│   └── utils.ts                # Tailwind class merging utility (`cn`)
│
├── types/                      # Shared TypeScript interfaces
│   └── index.ts                # ClientInquiry, SupplierSubmission, and Email interfaces
│
├── public/                     # Static media and assets
│   ├── images/                 # High-resolution shop-floor, metrology & parts photography
│   ├── videos/                 # Optimized background video loops (WebM)
│   ├── favicon.ico             # Standard browser favicon
│   └── icon.svg                # Vector brand favicon
│
├── next.config.js              # Server configuration with 308 redirects for legacy paths
├── tailwind.config.js          # Design system color tokens & breakpoints
└── tsconfig.json               # TypeScript configuration with `@/*` root alias
```

---

## Key Pages & Navigation

| Route | Page Name | Purpose |
|---|---|---|
| `/` | **Home** | Overview of PROQRA, video hero, 7-step interactive process, clusters, and drawing quote form |
| `/how-we-source` | **How We Source** | In-depth breakdown of the 7-step supplier qualification framework |
| `/quality` | **Quality & Capabilities** | 4-pillar audit framework (CapEx, Lead Times, Quality Systems, Safety), evaluated processes & baseline parameters |
| `/for-suppliers` | **For Suppliers** | Onboarding portal for Indian machine shops and manufacturers to apply with machine lists |
| `/about` | **About Us** | The story behind PROQRA, addressing the overseas sourcing dilemma for UK SMEs |
| `/privacy-policy` | **Privacy Policy** | GDPR compliance, data retention, and contact rights |
| `/client-confidentiality` | **Client Confidentiality** | NDA protection, drawing security, and intellectual property terms |
| `/legal-disclaimer` | **Legal Disclaimer** | Operating disclosures and commercial terms |

*Note: Legacy routes (`/capabilities`, `/suppliers`, `/confidentiality`, `/disclaimer`, `/privacy`, `/get-started`) are automatically redirected via permanent HTTP 308 redirects configured in `next.config.js`.*

---

## Form Submissions & Email Routing

- **Client Inquiries** (`/api/submit-contact`):
  - Accepts standard form data or `multipart/form-data` with attached engineering drawings (up to 25MB).
  - Routes directly to `hello@proqra.co.uk` via Resend with client drawings attached.
  - Automatically fails over to backup recipient (`pranavss1010@gmail.com`) if primary delivery encounters an issue.

- **Supplier Applications** (`/api/submit-supplier`):
  - Collects factory location, machine details, and equipment lists/brochures (up to 20MB).
  - Routes notifications to `hello@proqra.co.uk` with backup failover.

---

## Development & Production

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Check TypeScript types
npx tsc --noEmit

# 4. Create optimized production build
npm run build
```
