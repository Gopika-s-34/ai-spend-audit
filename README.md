# AI Spend Audit

AI Spend Audit is a SaaS-style web application that helps startups identify unnecessary spending on AI tools and discover cost-saving opportunities.

Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

---

# Live Demo

Deployed on Vercel.

[Live Demo](https://ai-spend-audit-rho-sable.vercel.app/)


---

# Features

* AI tool spend analysis
* Smart savings recommendations
* Estimated yearly savings calculation
* Shareable audit reports
* Dynamic audit pages
* Local storage persistence
* Supabase database integration
* Responsive modern UI
* Loading states and validations

---

# Screenshots

## Home Page

![Home Page](screenshots/homepage.png)


## Audit Result

![Audit Result](screenshots/audit.png)


## Shared Report

![Shared Report](screenshots/shared_report.png)


---


# Tech Stack

Frontend:

* Next.js 16
* React
* TypeScript
* Tailwind CSS

Backend:

* Supabase

Deployment:

* Vercel

---

# Folder Structure

```bash
app/
 ├── audit/
 │    └── [id]/
 │         └── page.tsx
 ├── globals.css
 ├── layout.tsx
 └── page.tsx

lib/
 ├── auditEngine.ts
 └── supabase.ts

screenshots/

README.md
DEVLOG.md
ARCHITECTURE.md
```

---

# Local Setup

## Clone Repository

```bash
git clone https://github.com/Gopika-s-34/ai-spend-audit.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

# Environment Variables

Create:

```bash
.env.local
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_key
```

---

# Database

Supabase table:

```sql
audits
```

Columns:

* id
* tool
* plan
* spend
* seats
* recommendation
* savings
* yearly_savings
* email

---

# Testing

Audit engine tests were written using Jest/Vitest to validate recommendation logic and savings calculations.

Covered test cases:

- savings calculation accuracy
- yearly savings computation
- overspending detection
- plan downgrade recommendations
- alternative tool recommendation logic

Run tests:

```bash
npm test
```

---

# Challenges Faced

* Configuring Supabase Row Level Security
* Dynamic routing with Next.js App Router
* Managing environment variables
* Creating shareable audit reports

---

# Future Improvements

* Authentication
* Dashboard analytics
* Export reports as PDF
* Charts and visual insights
* AI-generated optimization suggestions

---

# Key Decisions & Tradeoffs

1. Used Next.js App Router for dynamic audit pages and shareable URLs, despite added routing complexity.

2. Chose Supabase instead of building a custom backend to speed up development and simplify database management.

3. Used hardcoded pricing logic for audit calculations because deterministic financial recommendations are more reliable than LLM-generated calculations.

4. Added localStorage persistence so users do not lose form data on refresh, improving UX without requiring authentication.

5. Prioritized mobile responsiveness and fast loading over advanced dashboard analytics for the MVP scope.

---

# Author

Gopika

GitHub:

```bash
https://github.com/Gopika-s-34
```

---

# License

MIT License
