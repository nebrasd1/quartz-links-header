import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/linksHeader.scss";

const LinksHeader: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div>
        <div id="links-header">
          <span>
            <a href="/output/things_i_found/">🌶️ Things I Found</a>
          </span>
          <span>
            <a href="/output/writings/">🌱 Writings</a>
          </span>
          <span>
            <a href="/information/lenses/">🔍 Lenses</a>
          </span>
          <span>
            <a href="/information/questions/">❓ Questions</a>
          </span>
          <span>
            <a href="/information/references/">🗂️ References</a>
          </span>
          <span>
            <a href="/site-meta/mistakes">📝 Mistakes</a>
          </span>
        </div>
        <hr
          style={{
            backgroundColor: "var(--gray)",
            borderTop: "1px var(--gray) solid",
            marginTop: "1.3rem",
          }}
        />
      </div>
    );
  };

  Component.css = style;
  return Component;
};

export default LinksHeader;
