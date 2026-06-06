import { createRequire } from 'module';

createRequire(import.meta.url);

// src/components/styles/linksHeader.scss
var linksHeader_default = "#links-header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  align-items: center;\n  justify-content: flex-start;\n  padding-top: 0.5rem;\n}\n#links-header span {\n  font-weight: 600;\n}\n#links-header span a {\n  text-decoration: none;\n  color: var(--darkgray);\n  transition: color 0.2s ease;\n}\n#links-header span a:hover {\n  color: var(--secondary);\n}";
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/LinksHeader.tsx
var LinksHeader = () => {
  const Component = (_props) => {
    return /* @__PURE__ */ u2("div", { children: [
      /* @__PURE__ */ u2("div", { id: "links-header", children: [
        /* @__PURE__ */ u2("span", { children: /* @__PURE__ */ u2("a", { href: "/output/things_i_found/", children: "\u{1F336}\uFE0F Things I Found" }) }),
        /* @__PURE__ */ u2("span", { children: /* @__PURE__ */ u2("a", { href: "/output/writings/", children: "\u{1F331} Writings" }) }),
        /* @__PURE__ */ u2("span", { children: /* @__PURE__ */ u2("a", { href: "/information/lenses/", children: "\u{1F50D} Lenses" }) }),
        /* @__PURE__ */ u2("span", { children: /* @__PURE__ */ u2("a", { href: "/information/questions/", children: "\u2753 Questions" }) }),
        /* @__PURE__ */ u2("span", { children: /* @__PURE__ */ u2("a", { href: "/information/references/", children: "\u{1F5C2}\uFE0F References" }) }),
        /* @__PURE__ */ u2("span", { children: /* @__PURE__ */ u2("a", { href: "/site-meta/mistakes", children: "\u{1F4DD} Mistakes" }) })
      ] }),
      /* @__PURE__ */ u2(
        "hr",
        {
          style: {
            backgroundColor: "var(--gray)",
            borderTop: "1px var(--gray) solid",
            marginTop: "1.3rem"
          }
        }
      )
    ] });
  };
  Component.css = linksHeader_default;
  return Component;
};
var LinksHeader_default = LinksHeader;

export { LinksHeader_default as LinksHeader };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map