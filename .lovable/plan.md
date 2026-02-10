

# EngiPath AI — Full UI Build Plan

## Overview
Build the complete frontend for EngiPath AI, an AI-guided roadmap and mentorship platform for engineering students. All pages and components will be built with realistic UI (static/mock data). Backend (Supabase), AI, and payments will be added later.

---

## 1. Design System & Theme Setup
- Dark theme as default with light/dark mode toggle
- Color palette: Primary (#2563EB), Secondary (#22C55E), Accent (#A855F7), dark backgrounds (#020617, #0F172A)
- Typography: Inter font
- Custom CSS variables for both themes
- Logo rendered as a styled text/icon mark (reference image style — AI brain + roadmap path aesthetic)

## 2. App Layout & Navigation
- **Left sidebar navigation** using ShadCN Sidebar component
- Sidebar sections: Dashboard, My Roadmap, Domain Exploration, Tasks & Progress, AI Mentor Insights, Internship Planner, Placement Planner, Communication Skills, Billing, Account Settings
- Collapsible sidebar with icons in mini mode
- Top header with theme toggle, notifications bell, and user avatar dropdown
- Mobile-responsive hamburger menu

## 3. Public Pages
- **Landing Page** — Hero section, features grid, how it works steps, pricing cards (placeholder), testimonials, CTA
- **How It Works** — Step-by-step visual flow
- **Features** — Feature cards with icons
- **Roadmaps** — Sample roadmap previews
- **Pricing** — 3-tier pricing cards (Free, Pro, Premium) with feature comparison
- **About** — Team and mission
- **Blog** — Blog listing with sample cards
- **Contact** — Contact form
- **Privacy Policy & Terms** — Static content pages

## 4. Auth Pages (UI Only)
- **Login** — Email/password + Google OAuth button
- **Register** — Signup form with validation
- **Forgot Password** — Email input form
- **Verify Email** — Confirmation screen

## 5. Onboarding Flow (UI Only)
- Multi-step wizard:
  1. Select academic year & branch
  2. Choose interests (Web, Data, Core CS, etc.) — multi-select chips
  3. Enter current skill level (beginner/intermediate/advanced)
  4. Define career goal (Internship / Placement / Exploration)
  5. "Generating your roadmap..." loading animation
  6. Roadmap preview with CTA to dashboard

## 6. User Dashboard
- **Overview cards**: Progress %, tasks completed, current streak, skill level
- **Current roadmap snapshot** with timeline visualization
- **Upcoming milestones** list
- **AI mentor insights** section (static cards with tips)
- **Quick actions**: Continue learning, explore domains, check placement readiness

## 7. My Roadmap Page
- **Semester-wise roadmap** displayed as a vertical timeline
- Weekly/monthly task breakdown with expandable sections
- "Focus now" and "Avoid now" flag badges on tasks
- Progress bar per semester
- Filter by: All, In Progress, Completed, Upcoming

## 8. Domain Exploration Module
- Domain cards (Web Dev, Data Science, Core CS, AI/ML, etc.)
- Domain trial view: 5–14 day structured plan with daily micro-tasks
- End-of-trial assessment UI (interest rating, difficulty rating)
- AI recommendation card: continue / switch domain

## 9. Tasks & Progress Page
- Task list with checkboxes, priority badges, due dates
- Filters: by domain, status, priority
- Progress charts (recharts): skill growth over time, tasks completed per week
- Streak tracker

## 10. AI Mentor Insights Page
- Insight cards with categories: Career Tips, Skill Suggestions, Focus Areas
- "Ask AI" input box (UI only, no backend)
- Personalized recommendation cards based on mock profile data

## 11. Internship Planner
- Semester-based timeline view
- Resume readiness checklist with progress
- Skill readiness score (circular progress)
- Internship window alerts (timeline markers)
- Action items list

## 12. Placement Planner
- Placement preparation phases (visual timeline)
- Company preparation cards
- Mock interview schedule
- Readiness score dashboard

## 13. Communication Skills Page
- Weekly communication task cards
- English improvement suggestions list
- Interview readiness tips
- Presentation practice roadmap (checklist format)

## 14. Account Settings
- Profile editing (name, email, branch, year)
- Theme preference toggle
- Notification settings
- Password change form

## 15. Billing Page (Placeholder)
- Current plan display
- Upgrade/downgrade buttons (non-functional)
- Payment history table (empty state)

## 16. Admin Panel
- **Admin Dashboard**: User stats, AI usage analytics (charts), subscription overview
- **Users**: User table with search, filter, role badges
- **Analytics**: Charts for signups, active users, AI requests
- **Roadmaps**: Template management list
- **Payments**: Transaction table (empty state)
- **Logs**: Error and activity log table

---

## Technical Approach
- React Router for all routing (public, auth, user, admin sections)
- ShadCN UI components throughout
- Recharts for data visualizations
- React Hook Form + Zod for all forms
- Zustand or React context for mock auth state
- Fully responsive, mobile-first design
- Clean folder structure: pages, components, layouts, hooks, lib

