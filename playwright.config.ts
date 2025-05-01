import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './src/tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000
    },
    fullyParallel: false,  // Disable parallel execution
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: 1,  // Use only 1 worker to run tests sequentially
    reporter: 'html',
    use: {
        actionTimeout: 0,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        headless: false,
        viewport: { width: 1280, height: 720 }
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ],
};

export default config;