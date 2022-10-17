"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"list-button",title:"List"},a=void 0,s={unversionedId:"api-reference/mantine/components/buttons/list-button",id:"api-reference/mantine/components/buttons/list-button",title:"List",description:"` is using Mantine  component. It uses the list method from useNavigation` under the hood. It can be useful when redirecting the app to the list page route of resource.",source:"@site/docs/api-reference/mantine/components/buttons/list.md",sourceDirName:"api-reference/mantine/components/buttons",slug:"/api-reference/mantine/components/buttons/list-button",permalink:"/docs/api-reference/mantine/components/buttons/list-button",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/mantine/components/buttons/list.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1665987069,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{id:"list-button",title:"List"},sidebar:"someSidebar",previous:{title:"Import",permalink:"/docs/api-reference/mantine/components/buttons/import-button"},next:{title:"Refresh",permalink:"/docs/api-reference/mantine/components/buttons/refresh-button"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>ignoreAccessControlProvider</code>",id:"ignoreaccesscontrolprovider",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'setRefineProps({\n    Sider: () => null,\n    Layout: RefineMantine.Layout,\n    notificationProvider: RefineMantine.notificationProvider,\n    catchAll: <RefineMantine.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineMantine.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <RefineMantine.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <RefineMantine.NotificationsProvider position="top-right">\n                {children}\n            </RefineMantine.NotificationsProvider>\n        </RefineMantine.MantineProvider>\n    );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ListButton>")," is using Mantine ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the list page route of resource."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ShowButton } from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { useShow } from "@pankod/refine-core";\nimport {\n    Show,\n    Title,\n    Text,\n    MarkdownField,\n    //highlight-next-line\n    ListButton,\n} from "@pankod/refine-mantine";\n\nconst PostShow: React.FC<IResourceComponentsProps> = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        // highlight-next-line\n        <Show headerButtons={<ListButton />} isLoading={isLoading}>\n            <Title order={5}>Id</Title>\n            <Text mt="sm">{record?.id}</Text>\n\n            <Title mt="sm" order={5}>\n                Title\n            </Title>\n            <Text mt="sm">{record?.title}</Text>\n\n            <Title mt="sm" order={5}>\n                Content\n            </Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            Layout={Layout}\n            resources={[\n                {\n                    name: "posts",\n                    show: PostShow,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <ShowButton recordItemId="123">\n                                Show Item 123\n                            </ShowButton>\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The button text is defined automatically by ",(0,o.kt)("strong",{parentName:"p"},"refine")," based on ",(0,o.kt)("em",{parentName:"p"},"resource")," object name property.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"resourcenameorroutename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.kt)("p",null,"Redirection endpoint(",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/list"),") is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"<ListButton>")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as the endpoint to redirect after clicking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine, useRouterContext, useNavigation } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { Button, Code, Space, Text } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport { ListButton } from "@pankod/refine-mantine";\n\nconst MyListComponent = () => {\n    return <ListButton resourceNameOrRouteName="categories" />;\n};\n// visible-block-end\n\nconst ListPage = () => {\n    const { list } = useNavigation();\n    const params = useRouterContext().useParams();\n\n    return (\n        <div>\n            <Text italic color="dimmed" size="sm">\n                URL Parameters:\n            </Text>\n            <Code>{JSON.stringify(params)}</Code>\n            <Space h="md" />\n            <Button size="xs" variant="outline" onClick={() => list("posts")}>\n                Go back\n            </Button>\n        </div>\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: MyListComponent,\n                },\n                {\n                    name: "categories",\n                    list: ListPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,o.kt)("inlineCode",{parentName:"p"},"/categories"),"."),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { ListButton } from "@pankod/refine-mantine";\n\nconst MyListComponent = () => {\n    return <ListButton hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: MyListComponent,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"ignoreaccesscontrolprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"ignoreAccessControlProvider")),(0,o.kt)("p",null,"It is used to skip access control for the button so that it doesn't check for access control. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListButton } from "@pankod/refine-mantine";\n\nexport const MyListComponent = () => {\n    return <ListButton ignoreAccessControlProvider />;\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(c,{module:"@pankod/refine-mantine/ListButton",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);