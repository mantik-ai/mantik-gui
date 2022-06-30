import {
    generateSchemaTypes,
    generateReactQueryComponents,
} from '@openapi-codegen/typescript'
import { defineConfig } from '@openapi-codegen/cli'
export default defineConfig({
    api: {
        from: {
            relativePath: './doc/api/mantik-api-spec.yaml',
            source: 'file',
        },
        outputDir: 'src/common/api-hooks/',
        to: async (context) => {
            const filenamePrefix = 'Mantik'
            const { schemasFiles } = await generateSchemaTypes(context, {
                filenamePrefix,
            })
            await generateReactQueryComponents(context, {
                filenamePrefix,
                schemasFiles,
            })
        },
    },
})
