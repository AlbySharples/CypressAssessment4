
describe('Trade Me Internal Links Test', () => {
    it('Finds internal links containing property or services', () => {
        cy.visit('https://www.trademe.co.nz/a/');

        cy.get('a[href]').then(($links) => {
            const matchingLinks = [];

            $links.each((index, link) => {
                const url = new URL(link.href);

                const isInternal =
                    url.hostname === 'trademe.co.nz' ||
                    url.hostname.endsWith('.trademe.co.nz');

                const matchesKeyword =
                    url.href.toLowerCase().includes('property') ||
                    url.href.toLowerCase().includes('services');

                if (isInternal && matchesKeyword) {
                    matchingLinks.push(url.href);
                }
            });

            const uniqueLinks = [...new Set(matchingLinks)];

            cy.log(`Found ${uniqueLinks.length} matching links`);

            uniqueLinks.forEach((link) => {
                cy.log(link);
            });

            expect(uniqueLinks.length).to.be.greaterThan(0);
        });
    });
});
