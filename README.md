# 🏋️‍♂️ Elitra Fitness Tracker

**Live demo:** [fitnesstrackercom.netlify.app](https://fitnesstrackercom.netlify.app/)  
**Team:** *Elitra*  
**AI Co-pilot used:** *Lovable* — a GPT-5 powered product design assistant.

---

## 💡 Overview
**Elitra Fitness Tracker** is a next-generation web app that blends **habit tracking**, **AI-driven coaching**, and **motivational psychology** to help users build their ideal physique — sustainably and intelligently.

Users set personal goals, track daily habits, and visualize progress through adaptive dashboards and streak-based gamification. The built-in **AI Coach** delivers personalized insights, reminders, and encouragement based on user behavior and preferences.

---

## ✨ Core Features
- **Goal Setting:** Define target physique, weight, or strength goals.
- **Visual Progress:** Side-by-side *current vs. ideal physique* visualizer.
- **Journey Graphs:** Track body metrics, habit streaks, and milestones over time.
- **AI Coach:** Adaptive motivational chatbot using behavioral psychology.
- **Gamified Streaks:**  
  - One missed day per month forgiven.  
  - Two consecutive inactive days → streak reset.  
  - Earn XP, badges, and rewards for consistency.
- **Privacy First:** All photos and metrics are private by default.
- **Responsive Design:** Built for mobile-first use with dark-mode elegance.

---

## 🧠 Motivation
Fitness apps often fade from user attention due to low engagement and unclear progress feedback.  
**Elitra** keeps motivation alive through:
- Immediate feedback loops (visual + emotional).
- Ethical behavioral nudges (“psyops” done right).
- Personal tone adaptation — your coach learns *how you like to be motivated.*

---

## 🧱 Tech Stack
| Layer | Tool | Why |
|-------|------|-----|
| Frontend | **React + TypeScript** | Fast, maintainable, interactive UI |
| Backend | **Node.js / Express (or NestJS)** | Robust, async-ready APIs |
| Database | **PostgreSQL** | Reliable for relational + timeseries data |
| Visualization | **D3.js / SVG-based charts** | Smooth, responsive graphs |
| AI Coach | **OpenAI API (LLM)** | Personalized motivation and advice |
| Auth | **OAuth + JWT (Auth0 / Firebase)** | Secure authentication |
| Storage | **S3-compatible bucket** | Safe image & progress storage |
| Hosting | **Vercel + Netlify** | Fast CI/CD and global CDN |
| Analytics | **Mixpanel / PostHog** | Behavior insights and feedback loops |

---

## 🎨 Design Language
- **Dark-mode first** with deep charcoal background (`#0B0C10`).
- Accents of **electric blue** and **teal green** evoke focus and vitality.
- Minimalist typography (`Inter`, `Roboto Mono`) ensures clarity.
- Subtle animations encourage calm motivation rather than anxiety.

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18  
- PostgreSQL or Supabase instance  
- `.env` file with API keys for Auth & AI (see below)

### Setup
```bash
# 1. Clone the repo
git clone https://github.com/elitra/fitness-tracker.git

# 2. Move into the folder
cd fitness-tracker

# 3. Install dependencies
npm install

# 4. Run the app
npm start
