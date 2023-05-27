const {injectAxe, checkA11y} = require('axe-playwright');


module.exports = {
    async preRender(page) {
        await injectAxe(page);
    },

    async postRender(page) {
        await checkA11y(page, '#storybook-root', {
            detailedReport: true, detailedReportOptions: {
                html: true
            }
        })

        if(process.env.ACCESSIBILITY_SNAPSHOT === "YES") {
            const accessiblityTree = await page.accessibility.snapshot();
            expect(accessiblityTree).toMatchSnapshot();
        }
    }
}