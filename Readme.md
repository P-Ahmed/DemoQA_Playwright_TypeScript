```markdown
# Playwright UI Test Automation Framework

## Overview
Automated UI testing solution built with Playwright and TypeScript, demonstrating industry best practices including SOLID principles and maintainable code structure.

## 🚀 Quick Start

1. Clone repo:

   ```bash
   git clone https://github.com/your-username/your-repo.git && cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install && npx playwright install
   ```

3. Run tests:
   ```bash
   npx playwright test
   ```

## 📂 Project Structure
```
├── src/
│   ├── tests/
│   │   │── fixtures
│   │   ├── elements.spec.ts
│   │   ├── forms.spec.ts
│   │   └── widgets.spec.ts
│   ├── pages/
│   │   ├── basePage.ts
│   │   ├── elementsPage.ts
│   │   ├── formsPage.ts
│   │   └── widgetsPage.ts
│   └── utils/
│       └── helper.ts
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## 🔧 Configuration
Edit `playwright.config.ts` to:
- Adjust timeouts
- Configure browsers

## 🧪 Test Commands

| Command | Description |
|---------|-------------|
| `npx playwright test` | Run all tests |
| `npx playwright test --headed` | Run in UI mode |
| `npx playwright test npx playwright test src/tests/widgets.spec.ts` | Run specific tests |
| `npx playwright show-report` | View HTML report |

## 🛠️ Technical Highlights

✅ **SOLID Principles**  
✅ **Page Object Model**  
✅ **Parallel Execution**  
✅ **Visual Testing**  
✅ **CI/CD Ready**

## 🐛 Troubleshooting

**Issue**: Tests fail immediately  
**Fix**: 
```bash
npx playwright install --with-deps
```

**Issue**: Element not found  
**Fix**: 
- Check selectors
- Add wait conditions