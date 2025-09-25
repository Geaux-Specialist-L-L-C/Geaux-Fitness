# 💡 Developer Prompts for GitHub Copilot

This guide provides **ready-to-use prompts** for GitHub Copilot to accelerate development of the Fitness Habit Tracker app.  
Use these in your code editor as comments to guide Copilot’s suggestions.

---

## 🎯 General Tips for Prompting
- Always be **specific**: mention the file, function, or goal.
- Prefer **small, incremental prompts** over large requests.
- Use **comments** above where you want Copilot to generate code.

---

## 🏗️ Backend Prompts

### 📌 Habit Tracking
```js
// Create an Express route POST /habits to create a new habit for a user
js
Copy code
// Add a Mongoose schema for Habit with name, frequency, streakCount, and completedDates array
js
Copy code
// Write a controller function that marks a habit as completed for today
📊 Analytics & Revenue
js
Copy code
// Create a service function that calculates total affiliate revenue grouped by month
js
Copy code
// Write a function that aggregates completed habit data for the last 7 days
🧪 Backend Testing
js
Copy code
// Write a Jest test for POST /habits to ensure a habit is created correctly
js
Copy code
// Create a Jest test for getAnalytics that verifies weekly streak count is calculated
🎨 Frontend Prompts (React Native + Expo)
📱 Screens
js
Copy code
// Create a React Native screen for showing user habits with checkboxes and streak counts
js
Copy code
// Build a dashboard screen that shows total habits completed, streak length, and earnings
🎛️ Components
js
Copy code
// Suggest a reusable React Native button component with primary and secondary styles
js
Copy code
// Add a chart component using react-native-svg-charts to display weekly habit completion
🎨 Styling
js
Copy code
// Write Tailwind-style utility classes for dashboard cards with rounded corners and shadows
js
Copy code
// Create a dark mode theme toggle using React Context
🧪 Frontend Testing
js
Copy code
// Write a React Testing Library test that checks if the dashboard shows earnings > 0
js
Copy code
// Add a test to ensure a habit checkbox updates the completed state when clicked
🏆 Gamification Prompts
js
Copy code
// Create a function that awards points for streak milestones (7, 30, 90 days)
js
Copy code
// Suggest a notification system to alert users when their streak is about to break
js
Copy code
// Generate a function to calculate user rank based on total habits completed
⚡ Optimization Prompts
js
Copy code
// Optimize MongoDB aggregation with indexes for completedDates queries
js
Copy code
// Implement caching for dashboard analytics with Redis
🚀 CI/CD & DevOps Prompts
yaml
Copy code
# Add a GitHub Actions step that runs backend Jest tests and uploads coverage report
yaml
Copy code
# Add a job to automatically deploy backend to Render after main branch push
yaml
Copy code
# Create a job to lint frontend code and run React Native tests on pull requests
📚 Useful Links
React Native Docs

Expo Docs

Express Docs

Mongoose Docs

Jest Docs

GitHub Copilot Best Practices

Use these prompts as a starting point, then iterate with Copilot suggestions. Small, focused prompts yield better results than long open-ended ones.

yaml
Copy code

---

This file makes your repo **developer-friendly** and ensures everyone (including future contributors) knows how to leverage Copilot effectively.  

Would you like me to also generate a **`docs/PROGRESS.md`** template that you can use to track milestone completion, deployments, and pending features (like a mini project roadmap)? This would help keep your repo organized as development progresses.







Ask ChatGPT
