## Day 1 

**Hours worked:** 2

**What I did:**  
Set up the Next.js project using TypeScript and Tailwind CSS. Built the homepage UI for the AI Spend Audit tool and created the initial audit form with localStorage persistence.

**What I learned:**  
Learned how to manage React form state and persist data using localStorage inside a Next.js client component.

**Blockers / what I'm stuck on:**  
Still planning the structure for the audit recommendation logic and pricing data.

**Plan for tomorrow:**  
Create pricing data files and start building the audit engine logic for recommendations and savings calculations.

## Day 2

**Hours worked:** 5

**What I did:**  
Created the pricing data structure and implemented the first version of the audit engine. Added recommendation logic, savings calculations, seat handling, and dynamic audit results UI.

**What I learned:**  
Learned how to separate business logic into reusable utility files and connect frontend state with calculation logic.

**Blockers / what I'm stuck on:**  
Need to improve recommendation quality and support more AI tools/plans.

**Plan for tomorrow:**  
Improve the results page design and begin backend integration for saving audits.

## Day 3 

**Hours worked:** 5

**What I did:**  
Improved the audit form UI by replacing manual text inputs with dropdown selections for tools and plans. Enhanced the audit engine with more realistic recommendation logic, savings calculations, and reasoning messages. Redesigned the audit results section with a highlighted annual savings card and cleaner layout.

**What I learned:**  
Learned how to structure conditional business logic more effectively and improve user experience through controlled form inputs and clearer result presentation.

**Blockers / what I'm stuck on:**  
Need to implement backend functionality for storing audits and generating shareable public URLs.

**Plan for tomorrow:**  
Set up Supabase integration, save audit reports to the database, and start implementing shareable audit result pages.

## Day 4 

**Hours worked:** 6

**What I did:**  
Integrated Supabase backend for storing completed audits. Added email capture functionality and implemented audit persistence with unique IDs for future shareable report URLs.

**What I learned:**  
Learned how to connect a Next.js frontend to Supabase and persist structured audit data in a PostgreSQL database.

**Blockers / what I'm stuck on:**  
Need to build actual public shareable audit pages and improve security around public audit visibility.

**Plan for tomorrow:**  
Implement shareable audit pages, AI-generated summaries, deployment, and testing.

## Day 5 

**Hours worked:** 6

**What I did:**  
Built dynamic shareable audit pages using Next.js route segments and Supabase queries. Added AI-style summaries, metadata for SEO, basic unit testing, and deployed the application to Vercel.

**What I learned:**  
Learned how to create dynamic routes in Next.js App Router and fetch data server-side from Supabase.

**Blockers / what I'm stuck on:**  
Need more comprehensive test coverage and stronger audit recommendation intelligence.

**Plan for tomorrow:**  
Focus on documentation, polishing UI, improving responsiveness, and final submission cleanup.