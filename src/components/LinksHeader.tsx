import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import style from "./styles/linksHeader.scss"

const LinksHeader: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div>
        <div id="links-header">
          <span><a href="/Output/Things-I-Found/">🌶️ Things I Found</a></span>
          <span><a href="/Output/Writings/">🌱 Writings</a></span>
          <span><a href="/Information/Lenses/">🔍 Lenses</a></span>
          <span><a href="/Information/Questions/">❓ Questions</a></span>
          <span><a href="/Information/References/">🗂️ References</a></span>
          <span><a href="/Meta/Mistakes/">📝 Mistakes</a></span>
        </div>
        <hr style={{
          backgroundColor: "var(--gray)",
          borderTop: "1px var(--gray) solid",
          marginTop: "1.3rem",
        }} />
      </div>
    )
  }

  Component.css = style
  return Component
}

export default LinksHeader
