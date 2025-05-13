# Playwright + Cucumber Test Framework

This project is an end-to-end testing framework using Playwright and Cucumber for automated testing.

## Prerequisites

- Node.js version 22.x.x
- Yarn (must be installed in the system)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
yarn install
```

## Project Structure

```
project-root/
├── features/          # Cucumber feature files
├── src/
│   ├── steps/        # Step definitions
│   ├── config/       # Browser configuration
│   ├── hooks/        # Cucumber hooks
│   └── world/        # Custom World
├── screenshots/      # Screenshots on failure
├── videos/          # Test recordings
└── reports/         # Test reports
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:
```
BASE_URL=https://your-application-url.com
```

### Browser Configuration

The framework is configured to run tests in non-headless mode with the following default settings:
- Viewport: 1280x720
- Video recording enabled
- Screenshots on test failure
- Animations disabled for better performance

## Running Tests

To run all tests:
```bash
yarn test
```

To run only tagged tests:
```bash
yarn test:only
```

## Reports

After test execution, reports will be available in the following directories:
- HTML report: `reports/cucumber-report.html`
- Allure report: `allure-report/`

## Features

- Cucumber BDD framework
- Playwright for browser automation
- TypeScript support
- Screenshot capture on test failure
- Video recording of test execution
- HTML and Allure reporting
- Environment variable configuration
- Custom World implementation
- Hooks for test setup and teardown

## Test Structure

The framework follows the BDD (Behavior Driven Development) approach using Cucumber:
- Feature files describe test scenarios in Gherkin syntax
- Step definitions implement the test logic
- Hooks handle test setup and teardown
- Custom World provides shared context between steps

