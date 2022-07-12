module.exports = {
    'mantik-api-spec': {
        output: {
            workspace: 'src/common/queries/',
            target: './MantikQueries.ts',
            schemas: './models',
            client: 'react-query',
            mode: 'tags-split',
            mock: true,
        },
        input: {
            target: './doc/api/mantik-api-spec.yaml',
        },
    },
}
