# MAParoo Marketing Website Requirements

## Project Overview

Create a marketing website for MAParoo mobile app with homepage and privacy policy pages. This will be a **separate Next.js project** deployed to Vercel.

## Required Pages

### 1. Homepage (Marketing Page)

**Purpose:** App Store marketing URL for MAParoo iOS app

**Required Content:**

- Hero section with app tagline: "Discover Kid-Friendly Places, Powered by Parents"
- Brief description: MAParoo helps families discover and share kid-friendly places with age-appropriate recommendations
- Key features showcase:
  - Age-based filtering (0-12 years)
  - Real parent reviews and photos
  - Interactive maps with kid amenities
  - Private kid profiles
  - Events calendar
- App Store download button (link to: `https://apps.apple.com/app/id6757502261`)
- Screenshots/mockups of the app (optional but recommended)
- Footer with links to privacy policy and support email

**Design Requirements:**

- Modern, clean, family-friendly design
- Mobile-responsive
- Fast loading (optimized for SEO)
- Consistent with MAParoo brand (see Brand Guide below)

### 2. Privacy Policy Page

**Purpose:** Required for App Store submission (collecting user data)

**Content Source:**
Use template from `/docs/PRIVACY_POLICY_TEMPLATE.md` in the main repo as base content.

**Key Sections Required:**

1. Information We Collect
   - Email address and authentication data
   - Kid profiles (names, ages) - private, never shared
   - Photos uploaded by users
   - Reviews and ratings
   - Location data (when in use)
   - Device information

2. How We Use Information
   - Provide age-appropriate recommendations
   - Display user-contributed content (photos/reviews)
   - Improve app experience
   - Comply with legal obligations

3. Data Storage & Security
   - Hosted on Supabase (US-based servers)
   - Industry-standard encryption
   - Kid profiles are private (not shared with other users)

4. Third-Party Services
   - Google Maps API (for maps and place data)
   - Supabase (authentication, database, storage)
   - Expo (app delivery)

5. User Rights
   - Access your data
   - Delete your account and data
   - Opt-out of data collection

6. Children's Privacy
   - App is designed for families with children
   - Kid profiles are private and protected
   - Parents control all data

7. Contact Information
   - Email: support@maparoo.app (or your preferred email)
   - Last updated: February 11, 2026

**Design Requirements:**

- Simple, readable layout
- Table of contents with jump links
- Last updated date visible
- Legal-friendly formatting

## Tech Stack

### Required Technologies

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Domain:** TBD (can start with Vercel subdomain: `maparoo.vercel.app`)

### Project Structure

```
maparoo-website/
├── app/
│   ├── page.tsx              # Homepage
│   ├── privacy-policy/
│   │   └── page.tsx          # Privacy Policy
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── hero.tsx
│   ├── features.tsx
│   ├── app-store-button.tsx
│   └── footer.tsx
├── public/
│   └── images/               # App screenshots, logo
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Brand Guide (From MAParoo Brand Guidelines)

### Colors

- **Primary:** `#4A90E2` (Blue) - Trust, reliability, exploration
- **Secondary:** `#7ED321` (Green) - Growth, freshness, kid-friendly
- **Accent:** `#F5A623` (Orange) - Energy, fun, warmth
- **Background:** `#E6F4FE` (Light Blue) - Soft, clean, welcoming
- **Neutral Dark:** `#4A4A4A` (Charcoal) - Text, readability
- **Neutral Light:** `#F8F9FA` (Off-white) - Backgrounds, cards

### Typography

- **Headings:** Inter (Bold, Semi-bold)
- **Body:** Inter (Regular)
- **Accent/Fun:** Quicksand (for playful elements)

### Tone & Voice

- **Helpful:** Clear, practical information
- **Friendly:** Warm but not overly casual
- **Trustworthy:** Accurate, reliable recommendations
- **Empowering:** Give parents control and confidence

### Design Principles

- Clean, uncluttered layouts
- Family-friendly imagery
- Accessible (WCAG AA minimum)
- Fast loading times
- Mobile-first responsive design

## URLs Needed for App Store

Once deployed, provide these URLs:

1. **Marketing URL:** `https://maparoo.app` or `https://maparoo.vercel.app`
2. **Privacy Policy URL:** `https://maparoo.app/privacy-policy`
3. **Support URL:** `mailto:support@maparoo.app` (or create a support page)

## Deployment Instructions

### Initial Setup

1. Create new Next.js project with TypeScript and Tailwind
2. Build homepage and privacy policy pages
3. Test locally: `npm run dev`
4. Build for production: `npm run build`

### Deploy to Vercel

1. Create Vercel account (if not already)
2. Connect GitHub repo
3. Import project to Vercel
4. Configure build settings:
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy
6. (Optional) Add custom domain: `maparoo.app`

### Post-Deployment

1. Test all pages on live URL
2. Verify mobile responsiveness
3. Check SEO meta tags
4. Update App Store Connect with URLs:
   - Marketing URL
   - Privacy Policy URL
   - Support URL

## Content Guidelines

### Homepage Copy Suggestions

**Hero Headline:**
"Discover Kid-Friendly Places, Powered by Parents"

**Subheadline:**
"Real recommendations from real families. Find playgrounds, museums, restaurants, and activities perfect for your child's age."

**Features:**

1. **Age-Based Discovery**
   "Filter places by your child's age (0-12 years) to find activities that match their developmental stage."

2. **Parent-Powered Reviews**
   "See real photos and reviews from other parents. Know what to expect before you go."

3. **Interactive Maps**
   "Explore nearby places with detailed amenity information: parking, restrooms, nursing rooms, and more."

4. **Private Kid Profiles**
   "Create profiles for each child to get personalized recommendations. Your data stays private."

5. **Events Calendar**
   "Never miss kid-friendly events in your area. From story time to festivals."

**Call to Action:**
"Download MAParoo on the App Store"

### Privacy Policy Notes

- Use clear, plain language (avoid excessive legalese)
- Emphasize privacy protections (especially for kid data)
- Be transparent about data collection and usage
- Include effective date and version history
- Provide clear contact information

## Timeline

- Setup project: 1 hour
- Build homepage: 2-4 hours
- Build privacy policy page: 1-2 hours
- Testing and deployment: 1 hour
- **Total estimate:** 5-8 hours

## Success Criteria

✅ Homepage loads fast (<2s) and is mobile-responsive
✅ Privacy policy is complete, accurate, and readable
✅ All links work (App Store, email, internal navigation)
✅ SEO meta tags are configured
✅ Deployed to Vercel with stable URL
✅ URLs ready to add to App Store Connect

## Next Steps

1. Create new GitHub repo: `maparoo-website`
2. Initialize Next.js project with requirements above
3. Build pages following brand guide
4. Deploy to Vercel
5. Update App Store Connect with URLs

## Contact

For questions or clarifications about MAParoo brand, features, or content, refer to:

- Main repo: `maparoo` (mobile app)
- Brand guide: `/docs/BRAND_GUIDE.md`
- Privacy template: `/docs/PRIVACY_POLICY_TEMPLATE.md`
