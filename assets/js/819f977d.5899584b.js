"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1622],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7378),r=n(8944);const l="tabItem_wHwb";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(5773),r=n(7378),l=n(8944),o=n(6457),i=n(784),s=n(9947),p=n(3457);const c="tabList_J5MA",u="tabItem_l0OV";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,x]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&k.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==w&&(C(t),x(a),null!=h&&N(h,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:j,onClick:O},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7915:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7378),r=n(3469),l=n(9619);function o(e){let{text:t}=e;return a.createElement(l.Z,{text:t,icon:r.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7378),r=n(1884),l=n(5773),o=n(9928),i=n(3469),s=n(1792);const p={discord:o.omb,github:o.zhw,moon:i.Gp0,"new-project":i.g6h,"new-task":i.EQ8,project:i.pL1,"project-config":i.dhu,"project-config-global":i.YdP,"project-graph":i.Bkj,"run-task":i.sl_,task:i.diR,"task-config":i.o$R,token:i.BwA,toolchain:i.AlB,"toolchain-config":i.eDR,twitter:o.mdU,workspace:i.emM,"workspace-config":i.cRF};function c(e){let{name:t,...n}=e;return a.createElement(s.Z,(0,l.Z)({},n,{icon:p[t]}))}function u(e){let{links:t}=e;return a.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((e=>a.createElement(r.default,{key:e.url,href:e.url,className:"focus:outline-none"},a.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},a.createElement("div",{className:"flex-shrink-0"},a.createElement(c,{size:"lg",name:e.icon})),a.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label))))))}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),r=n(8944),l=n(1792);const o={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:s}=e;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?o[s]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(l.Z,{icon:n,className:"mr-1"}),i)}},4102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(5773),r=(n(7378),n(5318)),l=(n(3337),n(9798),n(7915)),o=n(9634);const i={title:"Run a task"},s=void 0,p={unversionedId:"run-task",id:"run-task",title:"Run a task",description:"Even though we've created a task, it's not useful unless we run it, which is done",source:"@site/docs/run-task.mdx",sourceDirName:".",slug:"/run-task",permalink:"/docs/run-task",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/run-task.mdx",tags:[],version:"current",frontMatter:{title:"Run a task"},sidebar:"docs",previous:{title:"Create a task",permalink:"/docs/create-task"},next:{title:"Migrate to moon",permalink:"/docs/migrate-to-moon"}},c={},u=[{value:"Running dependents",id:"running-dependents",level:2},{value:"Running based on affected files only",id:"running-based-on-affected-files-only",level:2},{value:"Using upstream changes",id:"using-upstream-changes",level:3},{value:"Filtering based on change status",id:"filtering-based-on-change-status",level:3},{value:"Passing arguments to the underlying command",id:"passing-arguments-to-the-underlying-command",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{text:"2 min",mdxType:"HeaderLabel"}),(0,r.kt)("p",null,"Even though we've ",(0,r.kt)("a",{parentName:"p",href:"./create-task"},"created a task"),", it's not useful unless we ",(0,r.kt)("em",{parentName:"p"},"run it"),", which is done\nwith the ",(0,r.kt)("a",{parentName:"p",href:"./commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"moon run <target>"))," command. This command requires a single argument, a\n",(0,r.kt)("a",{parentName:"p",href:"./concepts/target"},"primary target"),", which is the pairing of a project name and task name. In the\nexample below, our project is ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),", the task is ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),", and the target is ",(0,r.kt)("inlineCode",{parentName:"p"},"app:build"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:build\n")),(0,r.kt)("p",null,"When this command is ran, it will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate a directed acyclic graph, known as the dependency graph."),(0,r.kt)("li",{parentName:"ul"},"Insert ",(0,r.kt)("a",{parentName:"li",href:"./config/project#deps"},(0,r.kt)("inlineCode",{parentName:"a"},"deps"))," as targets into the graph."),(0,r.kt)("li",{parentName:"ul"},"Insert the primary target into the graph."),(0,r.kt)("li",{parentName:"ul"},"Run all tasks in the graph in parallel and in topological order (the dependency chain)."),(0,r.kt)("li",{parentName:"ul"},"For each task, calculate ",(0,r.kt)("a",{parentName:"li",href:"./concepts/cache"},"hashes")," and either:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On cache hit, exit early and return the last run."),(0,r.kt)("li",{parentName:"ul"},"On cache miss, run the task and generate a new cache.")))),(0,r.kt)("h2",{id:"running-dependents"},"Running dependents"),(0,r.kt)("p",null,"moon will ",(0,r.kt)("em",{parentName:"p"},"always")," run upstream dependencies (",(0,r.kt)("a",{parentName:"p",href:"./config/project#deps"},(0,r.kt)("inlineCode",{parentName:"a"},"deps")),") before running the\nprimary target, as their outputs may be required for the primary target to function correctly."),(0,r.kt)("p",null,"However, if you're working on a project that is shared and consumed by other projects, you may want\nto verify that downstream dependents have not been indirectly broken by any changes. This can be\nachieved by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dependents")," option, which will run dependent targets (of the same task\nname) ",(0,r.kt)("em",{parentName:"p"},"after")," the primary target."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:build --dependents\n")),(0,r.kt)("h2",{id:"running-based-on-affected-files-only"},"Running based on affected files only"),(0,r.kt)("p",null,"By default ",(0,r.kt)("a",{parentName:"p",href:"./commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"moon run"))," will ",(0,r.kt)("em",{parentName:"p"},"always")," run the target, regardless if files have\nactually changed. However, this is typically fine because of our\n",(0,r.kt)("a",{parentName:"p",href:"./concepts/cache"},"smart hashing & cache layer"),". With that being said, if you'd like to ",(0,r.kt)("em",{parentName:"p"},"only")," run a\ntarget if files have changed, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--affected")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:build --affected\n")),(0,r.kt)("p",null,"Under the hood, we extract locally touched (created, modified, staged, etc) files from your\nconfigured ",(0,r.kt)("a",{parentName:"p",href:"./config/workspace#vcs"},"VCS"),", and exit early if no files intersect with the task's\n",(0,r.kt)("a",{parentName:"p",href:"./config/project#inputs"},"inputs"),"."),(0,r.kt)("h3",{id:"using-upstream-changes"},"Using upstream changes"),(0,r.kt)("p",null,"If you'd like to determine affected files based on upstream changes instead of local changes, pass\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"--upstream")," flag. This will extract touched files by comparing the current ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," against the\n",(0,r.kt)("a",{parentName:"p",href:"./config/workspace#defaultbranch"},(0,r.kt)("inlineCode",{parentName:"a"},"vcs.defaultBranch")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:build --affected --upstream\n")),(0,r.kt)("h3",{id:"filtering-based-on-change-status"},"Filtering based on change status"),(0,r.kt)("p",null,"We can take this a step further by filtering down affected files based on a change status, using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--status")," option. This option accepts the following values: ",(0,r.kt)("inlineCode",{parentName:"p"},"added"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deleted"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"modified"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"staged"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unstaged"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"untracked"),". If not provided, the option defaults to all."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:build --affected --status deleted\n")),(0,r.kt)("p",null,"Multiple status can be provided by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--status")," option multiple times."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:build --affected --status deleted --status modified\n")),(0,r.kt)("h2",{id:"passing-arguments-to-the-underlying-command"},"Passing arguments to the underlying command"),(0,r.kt)("p",null,"If you'd like to pass arbitrary arguments to the underlying task command, in addition to the already\ndefined ",(0,r.kt)("a",{parentName:"p",href:"./config/project#args"},(0,r.kt)("inlineCode",{parentName:"a"},"args")),", you can pass them after ",(0,r.kt)("inlineCode",{parentName:"p"},"--"),". These arguments are ",(0,r.kt)("em",{parentName:"p"},"appended\nas-is"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:build -- --force\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," delimiter and any arguments ",(0,r.kt)("em",{parentName:"p"},"must")," be defined last on the command line.")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)(o.Z,{links:[{icon:"moon",label:"Migrate to moon",url:"./migrate-to-moon"},{icon:"task",label:"Learn about tasks",url:"./concepts/task"}],mdxType:"NextSteps"}))}m.isMDXComponent=!0}}]);