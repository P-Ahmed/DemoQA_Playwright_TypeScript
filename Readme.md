<img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="120"/>

# 🎭 Playwright + TypeScript UI Test Automation Framework

A modern, scalable UI automation framework built with **Playwright** and **TypeScript**, implementing best industry practices, SOLID principles, and clean test architecture.

---

## 🚀 Quick Start

```bash
git clone https://github.com/P-Ahmed/DemoQA_Playwright_TypeScript.git
cd DemoQA_Playwright_TypeScript
npm install && npx playwright install
npx playwright test
```

---

## 🧠 Key Test Design Techniques

✅ **Equivalence Partitioning** (e.g., email validation)  
✅ **Boundary Value Analysis** (e.g., progress bar: 0%, 50%, 100%)  
✅ **State Transition Testing** (e.g., start → progress → complete)  
✅ **Error Guessing** (e.g., form validations)  
✅ **Positive & Negative Scenarios**  
✅ **Data-Driven Testing**  
✅ **Page Object Model (POM)**  
✅ **Modular, Maintainable Design**

---

## 💡 SOLID Principles in Action

- **S**ingle Responsibility: One page, one responsibility  
- **O**pen/Closed: Extend pages/tests without modifying them  
- **L**iskov Substitution: Common base for all pages  
- **I**nterface Segregation: Lean, focused responsibilities  
- **D**ependency Inversion: Tests depend on abstractions

---

## 🛠️ Best Practices Used

- ✅ Page Object Model (POM)
- ✅ Parallel & Cross-Browser Testing (Chrome, Firefox, Safari)
- ✅ Auto-Waiting & Error Handling
- ✅ Test Isolation & Atomic Design
- ✅ Visual Proof (Screenshots & Videos on Failures)
- ✅ HTML Reporting
- ✅ CI-Friendly Environment Configurations

---

## 📁 Project Structure (Clean & Modular)

```
src/
├── tests/        → Test specs
├── pages/        → Page objects
├── utils/        → Helpers & utilities
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

---

## 🧪 Common Test Commands

| Command                                       | Purpose                        |
|----------------------------------------------|--------------------------------|
| `npx playwright test`                         | Run all tests (headless)       |
| `npx playwright test --headed`               | Run with browser UI            |
| `npx playwright test src/tests/forms.spec.ts`| Run a specific test file       |
| `npx playwright show-report`                 | View test report (HTML)        |

---

## 🐛 Troubleshooting

**Problem:** Tests fail on startup  
**Fix:**  
```bash
npx playwright install --with-deps
```

**Problem:** Element not found  
**Fix:**  
- Double-check selectors  
- Add appropriate waits

---

## 📌 Highlights at a Glance

✨ **TypeScript + Playwright**  
🧱 **Modular & Scalable**  
🚦   **Visual & HTML Reporting**  
🧪 **Test Design Coverage**  
🚀 **CI/CD Ready**

## 📋 Test Run - Report

## 🎥 Video Recording
https://www.loom.com/share/836e10d4cde944568e358d8ec85f7b17?sid=a48c022b-d0ed-41e8-a7a5-d1699713c238

## 📸 Screenshots
![Screenshot_1](https://github.com/user-attachments/assets/e59e7001-cb6e-40b5-af19-afe009b67052)
