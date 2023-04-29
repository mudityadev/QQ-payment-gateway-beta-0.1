module.exports = ({ env }) => ({
    // ...
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                transaction: {
                    field: 'slug',
                    references: 'signature',
                },
            },
        },
    },
    // ...
});