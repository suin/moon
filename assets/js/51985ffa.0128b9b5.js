(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76353],{96177:(e,t,s)=>{"use strict";s.d(t,{F:()=>i});var r=s(27378),n=s(41763);const a={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){const[s,c]=(0,r.useState)(),i=(0,r.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,r.useEffect)((()=>{i()}),[i]),function(e,t,s){void 0===s&&(s=a);const c=(0,n.zX)(t),i=(0,n.Ql)(s);(0,r.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,i),()=>t.disconnect()}),[e,c,i])}(s,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function i(){const[e,t]=(0,r.useState)(!1),[s,n]=(0,r.useState)(!1),a=(0,r.useRef)(null),i=(0,r.useCallback)((()=>{const s=a.current.querySelector("code");e?s.removeAttribute("style"):(s.style.whiteSpace="pre-wrap",s.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),o=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,s=e>t||a.current.querySelector("code").hasAttribute("style");n(s)}),[a]);return c(a,o),(0,r.useEffect)((()=>{o()}),[e,o]),(0,r.useEffect)((()=>(window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("resize",o)})),[o]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:s,toggle:i}}},6499:(e,t,s)=>{"use strict";s.d(t,{p:()=>a});var r=s(55421),n=s(20624);function a(){const{prism:e}=(0,n.L)(),{colorMode:t}=(0,r.I)(),s=e.theme,a=e.darkTheme||s;return"dark"===t?a:s}},60782:(e,t,s)=>{"use strict";s.d(t,{X:()=>a});var r=s(27378),n=s(24246);function a(e){const{mdxAdmonitionTitle:t,rest:s}=function(e){const t=r.Children.toArray(e),s=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==s)),c=s?.props.children;return{mdxAdmonitionTitle:c,rest:a.length>0?(0,n.jsx)(n.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:s}}},90433:(e,t,s)=>{"use strict";s.d(t,{QC:()=>p,Vo:()=>h,bc:()=>d,nZ:()=>f,nt:()=>m});var r=s(6324),n=s.n(r);const a=/title=(?<quote>["'])(?<title>.*?)\1/,c=/\{(?<range>[\d,-]+)\}/,i={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},o={...i,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},l=Object.keys(i);function u(e,t){const s=e.map((e=>{const{start:s,end:r}=o[e];return`(?:${s}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${s})\\s*$`)}function d(e){return e?.match(a)?.groups.title??""}function m(e){return Boolean(e?.includes("showLineNumbers"))}function h(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function f(e,t){let s=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:i}=t;if(i&&c.test(i)){const e=i.match(c).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=n()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:s}}if(void 0===r)return{lineClassNames:{},code:s};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return u(["tex"],t);case"lua":case"haskell":case"sql":return u(["lua"],t);case"wasm":return u(["wasm"],t);case"vb":case"vba":case"visual-basic":return u(["vb","rem"],t);case"vbnet":return u(["vbnet","rem"],t);case"batch":return u(["rem"],t);case"basic":return u(["rem","f90"],t);case"fsharp":return u(["js","ml"],t);case"ocaml":case"sml":return u(["ml"],t);case"fortran":return u(["f90"],t);case"cobol":return u(["cobol"],t);default:return u(l,t)}}(r,a),d=s.split("\n"),m=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),h=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:s}=e;return[s,t]}))),f=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:s}=e;return[s.start,t]}))),p=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:s}=e;return[s.end,t]})));for(let n=0;n<d.length;){const e=d[n].match(o);if(!e){n+=1;continue}const t=e.slice(1).find((e=>void 0!==e));h[t]?m[h[t]].range+=`${n},`:f[t]?m[f[t]].start=n:p[t]&&(m[p[t]].range+=`${m[p[t]].start}-${n-1},`),d.splice(n,1)}s=d.join("\n");const b={};return Object.entries(m).forEach((e=>{let[t,{range:s}]=e;n()(s).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:s}}function p(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},s={};return Object.entries(e.plain).forEach((e=>{let[r,n]=e;const a=t[r];a&&"string"==typeof n&&(s[a]=n)})),s}},51739:(e,t,s)=>{"use strict";const r=s(27378),n=s(36641),a=s(84801),c=s(12700),i=s(1999),o=s(64137),l=s(66498),u=s(66715),d=s(24246),m=e=>e&&e.__esModule?e:{default:e},h=m(n),f=m(i);function p(e,t,s){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&s&&s.name!==t.version){const t="current"===s.name?"next":s.name;return e.endsWith("/api")?`${e}/${t}`:e.replace("/api/",`/api/${t}/`)}return e}e.exports=function(e){let{options:t,packages:s,history:n}=e;const i=c.useDocsVersion(),m=a.useDocsPreferredVersion(i.pluginId).preferredVersion;return r.useEffect((()=>{1===s.length?n.replace(p(s[0].entryPoints[0].reflection.permalink,i,m)):m&&n.replace(p(n.location.pathname,i,m))}),[s,n,i,m]),d.jsx("div",{className:"row",children:d.jsxs("div",{className:"col apiItemCol",children:[t.banner&&d.jsx("div",{className:"alert alert--info margin-bottom--md",role:"alert",children:d.jsx("div",{dangerouslySetInnerHTML:{__html:t.banner}})}),d.jsx(u.VersionBanner,{}),d.jsx("div",{className:"apiItemContainer",children:d.jsxs("article",{children:[d.jsxs("div",{className:"markdown",children:[d.jsx("header",{children:d.jsx(f.default,{as:"h1",children:"API"})}),d.jsxs("section",{className:"tsd-panel",children:[d.jsx("h3",{className:"tsd-panel-header",children:"Packages"}),d.jsx("div",{className:"tsd-panel-content",children:d.jsx("ul",{className:"tsd-index-list",children:s.map((e=>d.jsx("li",{className:"tsd-truncate",children:d.jsxs(h.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink,children:[d.jsxs("span",{className:"tsd-signature-symbol",children:["v",e.packageVersion]})," ",d.jsx("span",{children:o.removeScopes(e.packageName,t.scopes)})]})},e.packageName)))})})]})]}),d.jsx(l.Footer,{})]})})]})})}},66498:(e,t,s)=>{"use strict";const r=s(24246);t.Footer=function(){return r.jsxs("footer",{className:"tsd-footer",children:["Powered by"," ",r.jsx("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api",children:"docusaurus-plugin-typedoc-api"})," ","and ",r.jsx("a",{href:"https://typedoc.org/",children:"TypeDoc"})]})}},66715:(e,t,s)=>{"use strict";const r=s(27378),n=s(36641),a=s(62935),c=s(84801),i=s(12700),o=s(24246),l=(e=>e&&e.__esModule?e:{default:e})(n);t.VersionBanner=function(){const e=i.useDocsVersion(),t=e.banner,s=e.docs,n=e.pluginId,u=e.version,d=a.useDocVersionSuggestions(n).latestVersionSuggestion,m=c.useDocsPreferredVersion(n).savePreferredVersionName,h=r.useCallback((()=>{m(d.name)}),[d.name,m]);if(!t||!d)return null;const f=s[d.label];return o.jsx("div",{className:`${c.ThemeClassNames.docs.docVersionBanner} alert alert--warning margin-bottom--md`,role:"alert",children:o.jsxs("div",{children:["unreleased"===t&&o.jsx(o.Fragment,{children:"This is documentation for an unreleased version."}),"unmaintained"===t&&o.jsxs(o.Fragment,{children:["This is documentation for version ",o.jsx("b",{children:u}),"."]})," ","For the latest API, see version"," ",o.jsx("b",{children:o.jsx(l.default,{to:f.id,onClick:h,children:f.title})}),"."]})})}},64137:(e,t)=>{"use strict";t.removeScopes=function(e,t){return 0===t.length?e:t.reduce(((e,t)=>e.replace(new RegExp(`^(${t}-|@${t}/)`),"")),e)}},6324:(e,t)=>{function s(e){let t,s=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))s.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,n,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==n&&".."!==n&&"\u2025"!==n||(a+=e);for(let t=r;t!==a;t+=e)s.push(t)}}return s}t.default=s,e.exports=s}}]);