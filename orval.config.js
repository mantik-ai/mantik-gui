module.exports = {
    'mantik-api-spec': {
        output: {
            workspace: 'src/common/queries/',
            target: './MantikQueries.ts',
            schemas: './models',
            client: 'react-query',
            mode: 'tags-split',
        },
        input: {
            target: './doc/api/concatenated_openapi_spec.yaml',
        },
    },
}
