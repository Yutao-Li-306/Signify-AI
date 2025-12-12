# Signify AI

> Social Media Stock Market Signifier and Predictor App

---

## Mission Statement

**Signify AI** — A social media stock market signifier and predictor app that aggregates analysis from Reddit, Discord, and other social forums to identify top-performing independent analysts and generate winning investment strategies.

---

## The Why

There are thousands of independent stock analysts online whose performance often rivals that of institutional firms — as famously demonstrated by **@TheRoaringKitty** during the GameStop short squeeze.

Many of these freelance analysts share detailed trade breakdowns, reasoning, and investment research publicly — effectively performing most of the financial due diligence for free. This creates an opportunity for other investors to leverage their analysis and make smarter investment decisions without needing institutional-level expertise.

### The Opportunity

Because these analysts are scattered across platforms like Reddit, Discord, and Facebook, we have access to an enormous pool of data. By aggregating and analyzing their insights, the challenge of choosing an investment strategy shifts from **financial analysis** to **social signal analysis** — understanding which analysts and ideas the collective market finds credible.

Retail traders already react to these discussions, which in turn amplifies their influence on market movement. This feedback loop — between retail investors and public analysts — strengthens the predictive power of sentiment-based investment tracking.

### The Solution

If we can build a **social credibility and performance grading system**, we can identify the most trustworthy and consistently accurate freelance analysts in real time. With the help of AI, this system could continuously analyze thousands of opinions, evaluate them through fact-checking, data projections, and paper-trading backtests, and rank analysts by reliability and past performance.

**The result:** An AI-driven intelligence layer capable of curating and tracking the best ongoing investment strategies across public forums — dynamically diversified for risk reduction — and ultimately designed to outperform the S&P 500 by harnessing the collective wisdom of thousands of hours of human financial analysis.

---

**Signify AI LLC**  
*Harnessing the collective wisdom of independent financial analysts*

---

## Quick Start

### Local Development

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run dev
```

### Docker

```bash
# Production
docker-compose up --build

# Development
docker-compose -f docker-compose.dev.yml up --build
```

### Deployment

- **Coolify**: See [README.COOLIFY.md](./README.COOLIFY.md) or [COOLIFY_QUICK_START.md](./COOLIFY_QUICK_START.md)
- **Docker**: See [README.DOCKER.md](./README.DOCKER.md)

---

## Project Structure

```
Signify-AI/
├── frontend/          # Next.js application
├── backend/           # Backend API
├── docker-compose.yml # Production Docker setup
└── README.md          # This file
```
