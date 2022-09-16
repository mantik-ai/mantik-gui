import { fileTreeNode } from '../../pages/docs/[...subroute]'
import { MarkdownWrapper } from './MarkdownWrapper'
type DocsProps = {
    docFileTree: fileTreeNode[]
    routepath: string | string[] | undefined
}

const getMarkdownContent = (props: DocsProps): string => {
    if (!props.routepath) {
        return ''
    }
    if (props.routepath.length === 1) {
        const filetreeNode = props.docFileTree.find((node) => {
            return node.filename == props.routepath?.[0]
        })
        return filetreeNode?.markdown ?? ''
    }
    if (props.routepath.length === 2) {
        const filetreeDirNode = props.docFileTree.find((node) => {
            return node.dirname == props.routepath?.[0]
        })

        const file = filetreeDirNode?.dir.find((node) => {
            return node.filename == props.routepath?.[1]
        })

        return file?.markdown ?? ''
    }
    return ''
}
export const DocumentationMarkdownPage = (props: DocsProps) => {
    return (
        <MarkdownWrapper markdown={getMarkdownContent(props)}></MarkdownWrapper>
    )
}
