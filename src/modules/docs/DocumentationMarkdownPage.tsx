import { fileTreeNode } from '../../pages/docs'

type DocsProps = { docFileTree: fileTreeNode[] }

export const DocumentationMarkdownPage = (props: DocsProps) => {
    return <>{JSON.stringify(props.docFileTree)}</>
}
