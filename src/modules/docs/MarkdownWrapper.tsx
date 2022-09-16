import Markdown from 'markdown-to-jsx'

type MarkdownWrapperProps = { markdown: string }

export const MarkdownWrapper = (props: MarkdownWrapperProps) => {
    return <Markdown options={{}}>{props.markdown}</Markdown>
}
