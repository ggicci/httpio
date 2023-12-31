"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[749],{438:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var n=i(5893),r=i(1151);const l={sidebar_position:3},s="File Uploads",a={id:"advanced/upload-files",title:"File Uploads",description:"Introduced in v0.7.0.",source:"@site/docs/advanced/upload-files.md",sourceDirName:"advanced",slug:"/advanced/upload-files",permalink:"/httpin/advanced/upload-files",draft:!1,unlisted:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/advanced/upload-files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Error Handler",permalink:"/httpin/advanced/error-handler"},next:{title:"Patch Field",permalink:"/httpin/advanced/patch"}},d={},o=[{value:"Upload Files (Client)",id:"upload-files-client",level:2},{value:"Retrieve Files (Server)",id:"retrieve-files-server",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"file-uploads",children:"File Uploads"}),"\n",(0,n.jsx)(t.p,{children:"Introduced in v0.7.0."}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/ggicci/httpin#File",children:(0,n.jsx)(t.code,{children:"httpin.File"})})," to manipulate files, including uploading files from the client side, and retrieving files from the HTTP request."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE"}),": make sure the HTTP request is of ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/q/4526273/1592264",children:"multipart/form-data"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:"{4,5}",children:'type UpdateArticleInput struct {\n\tTitle       string         `in:"form=title"`\n\tIsPrivate   bool           `in:"form=is_private"`\n\tCover       *httpin.File   `in:"form=cover"`\n\tAttachments []*httpin.File `in:"form=attachments"`\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"upload-files-client",children:"Upload Files (Client)"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'updateArticleRequest := &UpdateArticleInput{\n    Title:     "About Me",\n    IsPrivate: false,\n    Cover:     httpin.UploadFile("/path/to/my/album/travel-selfie-no1.jpg"),\n    Attachments: []*httpin.File{\n        httpin.UploadFile("/path/to/my/videos/vlog-sunset.mp4"),\n        httpin.UploadFile("/path/to/my/videos/vlog-sea.mp4"),\n    },\n}\n\nreq, err := httpin.NewRequest("POST", "/posts/about-me", updateArticleRequest)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"retrieve-files-server",children:"Retrieve Files (Server)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"httpin.File"})," implemented the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/ggicci/httpin/core#FileHeader",children:(0,n.jsx)(t.code,{children:"httpin_core.FileHeader"})})," interface, where you can access the filename, filesize, MIME info, as well as the file content."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"func UpdateArticle(rw http.ResponseWriter, r *http.Request) {\n    input := r.Context().Value(httpin.Input).(*UpdateArticleInput)\n\n    filename := input.Cover.Filename()\n    filesize := input.Cover.Size()\n\n    // Read content.\n    fileBytes, err := input.Cover.ReadAll()\n\n    // ...\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);