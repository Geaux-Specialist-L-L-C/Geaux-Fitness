# 🤖 GitHub Copilot Instructions

This document tells GitHub Copilot how to assist with this project effectively.

---

## 📌 Project Overview
Fitness Habit Tracker is a **full-stack habit-tracking fitness app** with:
- 📊 **Analytics dashboard** (tasks, revenue, subscriptions)
- 💪 **Habit tracking** (daily streaks, completion stats)
- 🧾 **Subscription & affiliate tracking** (residual income feature)
- 📱 **React Native + Expo frontend**
- ⚙️ **Node.js + Express + MongoDB backend**
- 🐳 **Dockerized** for local and production parity
- 🚀 **CI/CD via GitHub Actions**

---

## 🎯 Goals for Copilot
Copilot should:
- Suggest **clean, modular, and well-documented code**
- Follow **functional component + hooks** pattern in React
- Generate **REST API endpoints** in Express
- Write **Jest tests** for backend and frontend
- Recommend **MongoDB Mongoose schema design**
- Help with **performance optimization**
- Generate **developer-friendly comments** and **type-safe code**

---

## 💻 Coding Style Guidelines
- **Frontend**: React Native with functional components + hooks
- **Backend**: Express with modular routes + services
- **Naming**: Use descriptive names (e.g., `DashboardScreen`, `HabitService`)
- **Testing**: Jest + React Testing Library for frontend; Jest for backend
- **Formatting**: Follow Prettier defaults
- **Error Handling**: Use `try/catch` for async calls, return structured error responses

---

## ✍️ Recommended Prompts for Developers

When working on the project, try prompting Copilot with comments like:

### 🔧 Backend
```js
// Create a new Express route to fetch habits by userId
js
Copy code
// Suggest a Mongoose schema for tracking affiliate sales with date and revenue
js
Copy code
// Write a Jest test for DashboardService.getAnalytics
🎨 Frontend
js
Copy code
// Add a React Native chart for weekly habit completion using react-native-svg-charts
js
Copy code
// Suggest a dark mode toggle implementation for the dashboard screen
🧪 Testing
js
Copy code
// Write a React Testing Library test that verifies the dashboard shows completed tasks count
⚡ Optimization
js
Copy code
// Optimize this API call with caching and error retries
🔐 Security Guidance
Copilot should not:

Suggest storing secrets or credentials in code

Commit .env values or private keys

Generate code with hardcoded passwords

📚 Resources for Copilot
React Native Docs: https://reactnative.dev/docs

Expo Docs: https://docs.expo.dev/

Express Docs: https://expressjs.com/

Mongoose Docs: https://mongoosejs.com/

Jest Docs: https://jestjs.io/

yaml
Copy code

---

## 📄 **.github/ISSUE_TEMPLATE/feature_request.md**

```markdown
---
name: 🚀 Feature request
about: Suggest a new feature or enhancement
title: "[Feature] "
labels: enhancement
assignees: ''
---

## ✨ Feature Description
_Describe the feature or idea clearly._

## 📊 Motivation
_Why is this feature important for the app?_

## 🧩 Possible Implementation
_Describe how this could be implemented (frontend, backend, UI changes)._

## 📸 Mockups / Examples
_Attach screenshots, diagrams, or sketches if possible._