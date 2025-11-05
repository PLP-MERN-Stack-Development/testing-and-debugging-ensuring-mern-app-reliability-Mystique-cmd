// jest.config.js
module.exports = {
    projects: [
        // Backend / integration tests (Node environment)
        {
            displayName: "server",
            testEnvironment: "node",
            setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
            transform: {
                "^.+\\.[jt]sx?$": "babel-jest",
            },
            transformIgnorePatterns: ["/node_modules/"],
            testMatch: ["<rootDir>/server/**/*.test.js"],
            collectCoverage: true,
            collectCoverageFrom: [
                "server/**/*.js",
                "!**/node_modules/**",
            ],
        },

        // Frontend / React tests (jsdom environment)
        {
            displayName: "client",
            testEnvironment: "jsdom",
            setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
            transform: {
                "^.+\\.[jt]sx?$": "babel-jest",
            },
            transformIgnorePatterns: ["/node_modules/"],
            testMatch: ["<rootDir>/client/src/**/*.{test,spec}.{js,jsx}"],
            collectCoverage: true,
            collectCoverageFrom: [
                "client/src/**/*.{js,jsx}",
                "!**/node_modules/**",
            ],
        },
    ],

    // Global coverage thresholds (applied across projects)
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
};
