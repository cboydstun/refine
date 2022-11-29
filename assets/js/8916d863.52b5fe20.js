"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},77058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"How to use JavaScript Ternary Operator?",description:"In this post, we expound on with examples of what the JavaScript ternary operator is, how it works.",slug:"javascript-ternary-operator",authors:"abdullah_numan",tags:["javascript","javascript-ternary"],image:"/img/blog/2022-11-15-js-ternary/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/javascript-ternary-operator",source:"@site/blog/2022-11-15-js-ternary.md",title:"How to use JavaScript Ternary Operator?",description:"In this post, we expound on with examples of what the JavaScript ternary operator is, how it works.",date:"2022-11-15T00:00:00.000Z",formattedDate:"November 15, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"javascript-ternary",permalink:"/blog/tags/javascript-ternary"}],readingTime:4.105,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to use JavaScript Ternary Operator?",description:"In this post, we expound on with examples of what the JavaScript ternary operator is, how it works.",slug:"javascript-ternary-operator",authors:"abdullah_numan",tags:["javascript","javascript-ternary"],image:"/img/blog/2022-11-15-js-ternary/social.png",hide_table_of_contents:!1},prevItem:{title:"React Props Explained with Examples",permalink:"/blog/react-props"},nextItem:{title:"What is Turborepo and Why Should You Care?",permalink:"/blog/how-to-use-turborepo"},relatedPosts:[{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api",formattedDate:"August 19, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:6.8,date:"2022-08-19T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"},{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice",formattedDate:"October 17, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.215,date:"2022-10-17T00:00:00.000Z"}],authorPosts:[{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.985,date:"2022-10-10T00:00:00.000Z"},{title:"Error Handling With try, catch and finally Blocks in JavaScript",permalink:"/blog/javascript-try-catch-finally",formattedDate:"November 22, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.43,date:"2022-11-22T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.26,date:"2022-09-16T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is JavaScript Ternary Operator?",id:"what-is-javascript-ternary-operator",level:2},{value:"How to Use the JS Ternary Operator?",id:"how-to-use-the-js-ternary-operator",level:2},{value:"When to Use the Ternary Operator",id:"when-to-use-the-ternary-operator",level:2},{value:"Chained Ternary Operator",id:"chained-ternary-operator",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This post is about the Ternary Operator in JavaScript. In this post, we'll discuss what the ternary operator is, how it is used, when to use it and discuss how it compares to other constructs such as ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else if/else")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-javascript-ternary-operator"},"What is JavaScript Ternary Operator?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-use-the-js-ternary-operator"},"How to Use the JS Ternary Operator?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#when-to-use-the-ternary-operator"},"When to Use the Ternary Operator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#chained-ternary-operator"},"Chained Ternary Operator"))),(0,r.kt)("h2",{id:"what-is-javascript-ternary-operator"},"What is JavaScript Ternary Operator?"),(0,r.kt)("p",null,"The ternary operator in JavaScript is an operator denoted by the question mark, ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", that evaluates a conditional expression passed before it and executes a block of code based on the decision of the conditional expression. It accepts the possible blocks to be executed as two other operands that come after the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," operator - the third separated from the second by a colon, ",(0,r.kt)("inlineCode",{parentName:"p"},":")," . Its syntax looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"conditionalExpression ? exprIfTruthy : valueIfFalsy;\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"conditionalExperssion")," evaluates to a truthy value ",(0,r.kt)("inlineCode",{parentName:"p"},"exprIfTruthy")," is executed. If it evaluates to a falsy value, ",(0,r.kt)("inlineCode",{parentName:"p"},"exprIfFalsy")," is executed."),(0,r.kt)("h2",{id:"how-to-use-the-js-ternary-operator"},"How to Use the JS Ternary Operator?"),(0,r.kt)("p",null,"We can use the ternary operator when we need to decide on a return value of a variable from two or more options based on a condition we pass as the first operand. The below code shows how:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Example\n\nconst student = 'Abd';\nconst welcomeStudent = student ? `Welcome, ${student}!` : \"Welcome, Guest!\";\n\nconsole.log(welcomeStudent); // Welcome, Abd!\n")),(0,r.kt)("p",null,"In the above snippet, ",(0,r.kt)("inlineCode",{parentName:"p"},"student ?")," evaluates the expression before the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," mark as a Boolean condition, asking if ",(0,r.kt)("inlineCode",{parentName:"p"},"student")," is truthy. For this reason, the ternary operator, ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", is also called the ",(0,r.kt)("strong",{parentName:"p"},"conditional operator"),"."),(0,r.kt)("p",null,"The value from this conditional expression is used to decide the value of the stored variable, ",(0,r.kt)("inlineCode",{parentName:"p"},"welcomeStudent"),". If the conditional operand evaluates to a truthy value the second operand, i.e. the value before the colon, ",(0,r.kt)("inlineCode",{parentName:"p"},":"),", is returned to ",(0,r.kt)("inlineCode",{parentName:"p"},"welcomeStudent"),". If it evaluates to falsy, the third operand, in other words the one after the ",(0,r.kt)("inlineCode",{parentName:"p"},":")," is returned."),(0,r.kt)("p",null,"In JavaScript, falsy values include ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0n")," ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),". All other values are considered truthy."),(0,r.kt)("hr",null),(0,r.kt)(u,{title:"Building a side project?",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"when-to-use-the-ternary-operator"},"When to Use the Ternary Operator"),(0,r.kt)("p",null,"The most common use case of the ternary operator is when there are only two possible outcomes, i.e, as a shorthand alternative of the ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else")," construct. The use of the ternary operator makes the code more readable and usually takes less number of lines."),(0,r.kt)("p",null,"As in the example above, it can be used to return the value of a variable directly."),(0,r.kt)("p",null,"It can also be used when we need to return a value from a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// With if/else\nconst welcomeStudent = student => {\n  if (student) {\n    return `Welcome, ${student.name}!`;\n  } else {\n    return \"Welcome, Guest!\";\n  };\n};\n\nconsole.log(welcomeStudent({ name: 'Abd' })); // Welcome, Abd!\nconsole.log(welcomeStudent()); // Welcome, Guest!\n\n\n// With ternary operator\nconst welcomeStudent = student => student ? `Welcome, ${student.name}!` : \"Welcome, Guest!\";\n\nconsole.log(welcomeStudent({ name: 'Abd' })); // Welcome, Abd!\nconsole.log(welcomeStudent()); // Welcome, Guest!\n")),(0,r.kt)("p",null,"As we can see, the ternary operator simplifies the code to a one-liner. It made the code more readable and the logic easy to follow."),(0,r.kt)("h2",{id:"chained-ternary-operator"},"Chained Ternary Operator"),(0,r.kt)("p",null,"We can chain ternary operators to emulate a ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else if/else")," construct or a ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// With if/else if/else\nconst grade = mark => {\n  if (mark > 100) {\n    return;\n  } else if (mark > 80) {\n    return 'A';\n  } else if (mark > 70) {\n    return 'B';\n  } else if (mark > 60) {\n    return 'C';\n  } else if (mark > 50) {\n    return 'D';\n  } else {\n    return 'F';\n  };\n};\n\nconsole.log(grade(100)); // A\nconsole.log(grade(1000)); // undefined\nconsole.log(grade(10)); // F\n\n// With chained ternary operators\nconst grade = mark => mark > 100 ? undefined\n                      : mark > 80 ? 'A'\n                      : mark > 70 ? 'B'\n                      : mark > 60 ? 'C'\n                      : mark > 50 ? 'D'\n                      : 'F';\n\nconsole.log(grade(100)); // A\nconsole.log(grade(1000)); // undefined\nconsole.log(grade(10)); // F\n")),(0,r.kt)("p",null,"Here, we chained the conditional operator into the third operand of the ternary operator at each level."),(0,r.kt)("p",null,"Many developers do not prefer nested ternary operators like this because multiple conditional checks hurt readability, instead of improving it. As opposed to chaining ternary operators, using plain ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else if/else")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statements are recommended when there are multiple forks in a control flow."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this article, we explored the use of the ternary operator in JavaScript. We saw two common cases that improve code readability, one involving a variable and the other a function expression that return a value based on the evaluation of one conditional expression inside a function."),(0,r.kt)("p",null,"Ternary operators can be chained to emulate ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else if/else")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," constructs, but the recommended way is to stick to the later constructs because chaining multiple ternary operators are counter-productive in terms of readability."))}m.isMDXComponent=!0}}]);