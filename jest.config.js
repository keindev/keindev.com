module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/components'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    preset: 'ts-jest',
    collectCoverage: true,
    coverageReporters: ['text-summary', 'json'],
    testRegex: '(/__tests__/.*|(\\.|/)(test))\\.(tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    // https://github.com/zeit/next.js/issues/8663#issue-490553899
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires. you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.jest.json',
        },
    },
};
