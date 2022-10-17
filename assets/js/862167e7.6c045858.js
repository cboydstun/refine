"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32081],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={id:"edit-button",title:"Edit"},a=void 0,s={unversionedId:"api-reference/mantine/components/buttons/edit-button",id:"api-reference/mantine/components/buttons/edit-button",title:"Edit",description:"` uses Mantine  component. It uses the edit method from useNavigation` under the hood. It can be useful when redirecting the app to the edit page with the record id route of resource.",source:"@site/docs/api-reference/mantine/components/buttons/edit.md",sourceDirName:"api-reference/mantine/components/buttons",slug:"/api-reference/mantine/components/buttons/edit-button",permalink:"/docs/api-reference/mantine/components/buttons/edit-button",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/mantine/components/buttons/edit.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1665987069,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{id:"edit-button",title:"Edit"},sidebar:"someSidebar",previous:{title:"Delete",permalink:"/docs/api-reference/mantine/components/buttons/delete-button"},next:{title:"Export",permalink:"/docs/api-reference/mantine/components/buttons/export-button"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>ignoreAccessControlProvider</code>",id:"ignoreaccesscontrolprovider",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const u={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'setRefineProps({\n    Sider: () => null,\n    Layout: RefineMantine.Layout,\n    notificationProvider: RefineMantine.notificationProvider,\n    catchAll: <RefineMantine.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineMantine.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <RefineMantine.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <RefineMantine.NotificationsProvider position="top-right">\n                {children}\n            </RefineMantine.NotificationsProvider>\n        </RefineMantine.MantineProvider>\n    );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses Mantine ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the edit page with the record id route of resource."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine, useNavigation, useRouterContext } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { Button, Code, Space, Text } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport { List, Table, Pagination, EditButton } from "@pankod/refine-mantine";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        // highlight-start\n                        <EditButton\n                            size="xs"\n                            recordItemId={getValue() as number}\n                        />\n                        // highlight-end\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <List>\n            <Table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </Table>\n            <br />\n            <Pagination\n                position="right"\n                total={pageCount}\n                page={current}\n                onChange={setCurrent}\n            />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nconst EditPage = () => {\n    const { list } = useNavigation();\n    const params = useRouterContext().useParams();\n\n    return (\n        <div>\n            <Text italic color="dimmed" size="sm">\n                URL Parameters:\n            </Text>\n            <Code>{JSON.stringify(params)}</Code>\n            <Space h="md" />\n            <Button size="xs" variant="outline" onClick={() => list("posts")}>\n                Go back\n            </Button>\n        </div>\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"recorditemid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine, useRouterContext, useNavigation } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { Button, Code, Space, Text } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport { EditButton } from "@pankod/refine-mantine";\n\nconst MyEditComponent = () => {\n    return <EditButton recordItemId="123" />;\n};\n// visible-block-end\n\nconst EditPage = () => {\n    const { list } = useNavigation();\n    const params = useRouterContext().useParams();\n\n    return (\n        <div>\n            <Text italic color="dimmed" size="sm">\n                URL Parameters:\n            </Text>\n            <Code>{JSON.stringify(params)}</Code>\n            <Space h="md" />\n            <Button size="xs" variant="outline" onClick={() => list("posts")}>\n                Go back\n            </Button>\n        </div>\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: MyEditComponent,\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"resourcenameorroutename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.kt)("p",null,"Redirection endpoint(",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/edit"),") is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as an endpoint to redirect after clicking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine, useRouterContext, useNavigation } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { Button, Code, Space, Text } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport { EditButton } from "@pankod/refine-mantine";\n\nconst MyEditComponent = () => {\n    return <EditButton resourceNameOrRouteName="categories" recordItemId="2" />;\n};\n// visible-block-end\n\nconst EditPage = () => {\n    const { list } = useNavigation();\n    const params = useRouterContext().useParams();\n\n    return (\n        <div>\n            <Text italic color="dimmed" size="sm">\n                URL Parameters:\n            </Text>\n            <Code>{JSON.stringify(params)}</Code>\n            <Space h="md" />\n            <Button size="xs" variant="outline" onClick={() => list("posts")}>\n                Go back\n            </Button>\n        </div>\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: MyEditComponent,\n                },\n                {\n                    name: "categories",\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,o.kt)("inlineCode",{parentName:"p"},"/categories/edit/2"),"."),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine, useRouterContext, useNavigation } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { Button, Code, Space, Text } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport { EditButton } from "@pankod/refine-mantine";\n\nconst MyEditComponent = () => {\n    return <EditButton recordItemId="123" hideText />;\n};\n// visible-block-end\n\nconst EditPage = () => {\n    const { list } = useNavigation();\n    const params = useRouterContext().useParams();\n\n    return (\n        <div>\n            <Text italic color="dimmed" size="sm">\n                URL Parameters:\n            </Text>\n            <Code>{JSON.stringify(params)}</Code>\n            <Space h="md" />\n            <Button size="xs" variant="outline" onClick={() => list("posts")}>\n                Go back\n            </Button>\n        </div>\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: MyEditComponent,\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"ignoreaccesscontrolprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"ignoreAccessControlProvider")),(0,o.kt)("p",null,"It is used to skip access control for the button so that it doesn't check for access control. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@pankod/refine-mantine";\n\nexport const MyListComponent = () => {\n    return <EditButton ignoreAccessControlProvider />;\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(l,{module:"@pankod/refine-mantine/EditButton",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);