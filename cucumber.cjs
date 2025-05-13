// cucumber.cjs
const cucumber = require('@cucumber/cucumber');

module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        require: [
            'src/world/customWorld.ts',
            'src/hooks/hooks.ts',
            'src/steps/**/*.ts'
        ],
        format: [
            'html:reports/cucumber-report.html',
            'progress-bar'
        ],
        paths: ['features/**/*.feature'],
        parallel: 1,
        timeout: 10000
    },
};