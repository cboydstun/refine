"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"useDrawerForm",title:"useDrawerForm"},l=void 0,i={unversionedId:"api-reference/mantine/hooks/form/useDrawerForm",id:"api-reference/mantine/hooks/form/useDrawerForm",title:"useDrawerForm",description:"useModalForm hook also allows you to manage a form inside a drawer component, such as a modal component. It provides some useful methods to handle the form drawer.",source:"@site/docs/api-reference/mantine/hooks/form/useDrawerForm.md",sourceDirName:"api-reference/mantine/hooks/form",slug:"/api-reference/mantine/hooks/form/useDrawerForm",permalink:"/docs/api-reference/mantine/hooks/form/useDrawerForm",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/mantine/hooks/form/useDrawerForm.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1664544490,formattedLastUpdatedAt:"Sep 30, 2022",frontMatter:{id:"useDrawerForm",title:"useDrawerForm"},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/mantine/components/buttons/show-button"},next:{title:"useForm",permalink:"/docs/api-reference/mantine/hooks/form/useForm"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Create Drawer",id:"create-drawer",level:3},{value:"Edit Drawer",id:"edit-drawer",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook also allows you to manage a form inside a drawer component, such as a modal component. It provides some useful methods to handle the form drawer."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook based on ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/hooks/form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," hook provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine"),".")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm")," is used in both."),(0,a.kt)("h3",{id:"create-drawer"},"Create Drawer"),(0,a.kt)("p",null,"First, we'll create a list page for posts. We'll use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))," hook to manage the table and the ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook as a ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," to manage the form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import React from "react";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport {\n    List,\n    ScrollArea,\n    Table,\n    Pagination,\n    // highlight-next-line\n    useModalForm as useDrawerForm,\n} from "@pankod/refine-mantine";\n\n// highlight-next-line\nimport { CreatePostDrawer } from "../../components";\nimport { IPost } from "../../interfaces";\n\nexport const PostList: React.FC = () => {\n    // highlight-start\n    const createDrawerForm = useDrawerForm({\n        refineCoreProps: { action: "create" },\n        initialValues: {\n            title: "",\n            status: "",\n            category: {\n                id: "",\n            },\n            content: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n            status: (value) =>\n                value.length <= 0 ? "Status is required" : null,\n            category: {\n                id: (value) =>\n                    value.length <= 0 ? "Category is required" : null,\n            },\n            content: (value) =>\n                value.length < 10 ? "Too short content" : null,\n        },\n    });\n    const {\n        modal: { show: showCreateDrawer },\n    } = createDrawerForm;\n    // highlight-end\n\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <>\n            // highlight-next-line\n            <CreatePostDrawer {...createDrawerForm} />\n            <ScrollArea>\n                // highlight-next-line\n                <List createButtonProps={{ onClick: () => showCreateDrawer() }}>\n                    <Table highlightOnHover>\n                        <thead>\n                            {getHeaderGroups().map((headerGroup) => (\n                                <tr key={headerGroup.id}>\n                                    {headerGroup.headers.map((header) => {\n                                        return (\n                                            <th key={header.id}>\n                                                {!header.isPlaceholder && (\n                                                    <div>\n                                                        {flexRender(\n                                                            header.column\n                                                                .columnDef\n                                                                .header,\n                                                            header.getContext(),\n                                                        )}\n                                                    </div>\n                                                )}\n                                            </th>\n                                        );\n                                    })}\n                                </tr>\n                            ))}\n                        </thead>\n                        <tbody>\n                            {getRowModel().rows.map((row) => {\n                                return (\n                                    <tr key={row.id}>\n                                        {row.getVisibleCells().map((cell) => {\n                                            return (\n                                                <td key={cell.id}>\n                                                    {flexRender(\n                                                        cell.column.columnDef\n                                                            .cell,\n                                                        cell.getContext(),\n                                                    )}\n                                                </td>\n                                            );\n                                        })}\n                                    </tr>\n                                );\n                            })}\n                        </tbody>\n                    </Table>\n                    <br />\n                    <Pagination\n                        position="right"\n                        total={pageCount}\n                        page={current}\n                        onChange={setCurrent}\n                    />\n                </List>\n            </ScrollArea>\n        </>\n    );\n};\n\nexport interface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n')),(0,a.kt)("p",null,"Now, let's see how the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreatePostDrawer")," component is implemented."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/createPostDrawer.tsx"',title:'"src/components/createPostDrawer.tsx"'},'import { BaseRecord, HttpError } from "@pankod/refine-core";\nimport {\n    UseModalFormReturnType as UseDrawerFormReturnType,\n    Drawer,\n    TextInput,\n    RichTextEditor,\n    Select,\n    useSelect,\n    SaveButton,\n    Box,\n    Text,\n} from "@pankod/refine-mantine";\n\ninterface FormValues {\n    title: string;\n    content: string;\n    status: string;\n    category: { id: string };\n}\n\nexport const CreatePostDrawer: React.FC<\n    UseDrawerFormReturnType<BaseRecord, HttpError, FormValues>\n> = ({\n    getInputProps,\n    errors,\n    modal: { visible, close, title },\n    saveButtonProps,\n}) => {\n    const { selectProps } = useSelect({\n        resource: "categories",\n    });\n\n    return (\n        <Drawer\n            opened={visible}\n            onClose={close}\n            title={title}\n            padding="xl"\n            size="xl"\n            position="right"\n        >\n            <TextInput\n                mt={8}\n                label="Title"\n                placeholder="Title"\n                {...getInputProps("title")}\n            />\n            <Select\n                mt={8}\n                label="Status"\n                placeholder="Pick one"\n                {...getInputProps("status")}\n                data={[\n                    { label: "Published", value: "published" },\n                    { label: "Draft", value: "draft" },\n                    { label: "Rejected", value: "rejected" },\n                ]}\n            />\n            <Select\n                mt={8}\n                label="Category"\n                placeholder="Pick one"\n                {...getInputProps("category.id")}\n                {...selectProps}\n            />\n            <Text mt={8} weight={500} size="sm" color="#212529">\n                Content\n            </Text>\n            <RichTextEditor\n                sx={{ minHeight: 300 }}\n                {...getInputProps("content")}\n            />\n            {errors.content && (\n                <Text mt={2} weight={500} size="xs" color="red">\n                    {errors.content}\n                </Text>\n            )}\n            <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n                <SaveButton {...saveButtonProps} />\n            </Box>\n        </Drawer>\n    );\n};\n')),(0,a.kt)("h3",{id:"edit-drawer"},"Edit Drawer"),(0,a.kt)("p",null,"Now, let's add the edit drawer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PostList")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import React from "react";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport {\n    List,\n    ScrollArea,\n    Table,\n    Pagination,\n    // highlight-next-line\n    EditButton,\n    useModalForm as useDrawerForm,\n} from "@pankod/refine-mantine";\n\n// highlight-next-line\nimport { CreatePostDrawer, EditPostDrawer } from "../../components";\nimport { IPost } from "../../interfaces";\n\nexport const PostList: React.FC = () => {\n    const createDrawerForm = useDrawerForm({\n        refineCoreProps: { action: "create" },\n        initialValues: {\n            title: "",\n            status: "",\n            category: {\n                id: "",\n            },\n            content: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n            status: (value) =>\n                value.length <= 0 ? "Status is required" : null,\n            category: {\n                id: (value) =>\n                    value.length <= 0 ? "Category is required" : null,\n            },\n            content: (value) =>\n                value.length < 10 ? "Too short content" : null,\n        },\n    });\n    const {\n        modal: { show: showCreateDrawer },\n    } = createDrawerForm;\n\n    // highlight-start\n    const editDrawerForm = useDrawerForm({\n        refineCoreProps: { action: "edit" },\n        initialValues: {\n            title: "",\n            status: "",\n            category: {\n                id: "",\n            },\n            content: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n            status: (value) =>\n                value.length <= 0 ? "Status is required" : null,\n            category: {\n                id: (value) =>\n                    value.length <= 0 ? "Category is required" : null,\n            },\n            content: (value) =>\n                value.length < 10 ? "Too short content" : null,\n        },\n    });\n    const {\n        modal: { show: showEditDrawer },\n    } = editDrawerForm;\n    // highlight-end\n\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n            },\n            // highlight-start\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        <EditButton\n                            hideText\n                            size="xs"\n                            onClick={() => showEditDrawer(getValue() as number)}\n                        />\n                    );\n                },\n            },\n            // highlight-end\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <>\n            <CreatePostDrawer {...createDrawerForm} />\n            // highlight-next-line\n            <EditPostDrawer {...editDrawerForm} />\n            <ScrollArea>\n                <List createButtonProps={{ onClick: () => showCreateDrawer() }}>\n                    <Table highlightOnHover>\n                        <thead>\n                            {getHeaderGroups().map((headerGroup) => (\n                                <tr key={headerGroup.id}>\n                                    {headerGroup.headers.map((header) => {\n                                        return (\n                                            <th key={header.id}>\n                                                {!header.isPlaceholder && (\n                                                    <div>\n                                                        {flexRender(\n                                                            header.column\n                                                                .columnDef\n                                                                .header,\n                                                            header.getContext(),\n                                                        )}\n                                                    </div>\n                                                )}\n                                            </th>\n                                        );\n                                    })}\n                                </tr>\n                            ))}\n                        </thead>\n                        <tbody>\n                            {getRowModel().rows.map((row) => {\n                                return (\n                                    <tr key={row.id}>\n                                        {row.getVisibleCells().map((cell) => {\n                                            return (\n                                                <td key={cell.id}>\n                                                    {flexRender(\n                                                        cell.column.columnDef\n                                                            .cell,\n                                                        cell.getContext(),\n                                                    )}\n                                                </td>\n                                            );\n                                        })}\n                                    </tr>\n                                );\n                            })}\n                        </tbody>\n                    </Table>\n                    <br />\n                    <Pagination\n                        position="right"\n                        total={pageCount}\n                        page={current}\n                        onChange={setCurrent}\n                    />\n                </List>\n            </ScrollArea>\n        </>\n    );\n};\n')),(0,a.kt)("p",null,"Finally, let's see how the ",(0,a.kt)("inlineCode",{parentName:"p"},"EditPostDrawer")," component is implemented."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/editPostDrawer.tsx"',title:'"src/components/editPostDrawer.tsx"'},'import { BaseRecord, HttpError } from "@pankod/refine-core";\nimport {\n    UseModalFormReturnType as UseDrawerFormReturnType,\n    Drawer,\n    TextInput,\n    RichTextEditor,\n    Select,\n    useSelect,\n    SaveButton,\n    Box,\n    Text,\n} from "@pankod/refine-mantine";\n\ninterface FormValues {\n    title: string;\n    content: string;\n    status: string;\n    category: { id: string };\n}\n\nexport const EditPostDrawer: React.FC<\n    UseDrawerFormReturnType<BaseRecord, HttpError, FormValues>\n> = ({\n    getInputProps,\n    errors,\n    modal: { visible, close, title },\n    refineCore: { queryResult },\n    saveButtonProps,\n}) => {\n    const { selectProps } = useSelect({\n        resource: "categories",\n        defaultValue: queryResult?.data?.data.category.id,\n    });\n\n    return (\n        <Drawer\n            opened={visible}\n            onClose={close}\n            title={title}\n            padding="xl"\n            size="xl"\n            position="right"\n        >\n            <TextInput\n                mt={8}\n                label="Title"\n                placeholder="Title"\n                {...getInputProps("title")}\n            />\n            <Select\n                mt={8}\n                label="Status"\n                placeholder="Pick one"\n                {...getInputProps("status")}\n                data={[\n                    { label: "Published", value: "published" },\n                    { label: "Draft", value: "draft" },\n                    { label: "Rejected", value: "rejected" },\n                ]}\n            />\n            <Select\n                mt={8}\n                label="Category"\n                placeholder="Pick one"\n                {...getInputProps("category.id")}\n                {...selectProps}\n            />\n            <Text mt={8} weight={500} size="sm" color="#212529">\n                Content\n            </Text>\n            <RichTextEditor {...getInputProps("content")} />\n            {errors.content && (\n                <Text mt={2} weight={500} size="xs" color="red">\n                    {errors.content}\n                </Text>\n            )}\n            <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n                <SaveButton {...saveButtonProps} />\n            </Box>\n        </Drawer>\n    );\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"modalProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration object for the modal or drawer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#modalpropstype"},(0,a.kt)("inlineCode",{parentName:"a"},"ModalPropsType")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCoreProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration object for the core of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormProps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"useForm")," properties"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"modalpropstype"},"ModalPropsType"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"defaultVisible"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial visibility state of the modal or drawer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoSubmitClose"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the form should be submitted when the modal or drawer is closed"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoResetForm"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the form should be reset when the form is submitted"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")))))),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"modal"),(0,a.kt)("td",{parentName:"tr",align:null},"Relevant states and methods to control the modal or drawer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#modalreturnvalues"},(0,a.kt)("inlineCode",{parentName:"a"},"ModalReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,a.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#return-values"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"useForm")," return values"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"modalreturnvalues"},"ModalReturnValues"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"visible"),(0,a.kt)("td",{parentName:"tr",align:null},"State of modal of drawer visibility"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the visible state to true"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(id?: BaseKey) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"close"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the visible state to false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"submit"),(0,a.kt)("td",{parentName:"tr",align:null},"Submits the form"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(values: TVariables) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"Modal or drawer title based on resource and action value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean, onClick: (e: React.FormEvent<HTMLFormElement>) => void; }")))))),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/form/mantine/useDrawerForm?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"mantine-use-drawer-form-example"}))}u.isMDXComponent=!0}}]);