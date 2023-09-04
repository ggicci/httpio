"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[322],{8605:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},l="Error Handler",d={unversionedId:"advanced/error-handler",id:"advanced/error-handler",title:"Error Handler",description:"Introduced in v0.6.0.",source:"@site/docs/advanced/error-handler.md",sourceDirName:"advanced",slug:"/advanced/error-handler",permalink:"/httpin/advanced/error-handler",draft:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/advanced/error-handler.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Concepts",permalink:"/httpin/advanced/concepts"},next:{title:"Upload Files",permalink:"/httpin/advanced/upload-files"}},i={},s=[{value:"Use WithErrorHandler option to specify a custom handler",id:"use-witherrorhandler-option-to-specify-a-custom-handler",level:2},{value:"Globally replace the default error handler",id:"globally-replace-the-default-error-handler",level:2}],p={toc:s},c="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handler"},"Error Handler"),(0,a.kt)("p",null,"Introduced in v0.6.0."),(0,a.kt)("p",null,"While using ",(0,a.kt)("inlineCode",{parentName:"p"},"httpin.NewInput")," to create an HTTP middleware handler, an error handler will be used to handle cases of decoding failures. You can sepcify a custom error handler for ",(0,a.kt)("strong",{parentName:"p"},"httpin")," to use. Which should adhere to the following signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func CustomErrorHandler(rw http.ResponseWriter, r *http.Request, err error) {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"use-witherrorhandler-option-to-specify-a-custom-handler"},"Use WithErrorHandler option to specify a custom handler"),(0,a.kt)("p",null,"Create an HTTP middleware handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"{5}","{5}":!0},'router := chi.NewRouter()\n\nfunc init() {\n    router.With(\n        httpin.NewInput(ListThingsInput{}, WithErrorHandler(CustomErrorHandler)),\n    ).Get("/things/:id", ListThings)\n}\n')),(0,a.kt)("p",null,"Create an engine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"{1}","{1}":!0},"engine, err := httpin.New(Thing{}, WithErrorHandler(CustomErrorHandler))\ninput, err := engine.Decode(req)\n")),(0,a.kt)("h2",{id:"globally-replace-the-default-error-handler"},"Globally replace the default error handler"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"httpin.NewInput"),", you will find that it's annoying to add an option to each call in order to use a custom error handler."),(0,a.kt)("p",null,"So, ",(0,a.kt)("inlineCode",{parentName:"p"},"httpin.ReplaceDefaultErrorHandler")," was introduced to replace the default error handler globally."))}u.isMDXComponent=!0}}]);