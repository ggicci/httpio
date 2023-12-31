"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[538],{9091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var i=n(5893),s=n(1151),r=n(2332);const d={sidebar_position:0,slug:"/"},a="Getting Started",c={id:"getting-started",title:"Getting Started",description:"httpin is a Go package for decoding HTTP requests into Go structs and encoding Go structs into HTTP requests.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/httpin/",draft:!1,unlisted:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/"},sidebar:"docsSidebar",next:{title:"query",permalink:"/httpin/directives/query"}},h={},o=[{value:"Install",id:"install",level:2},{value:"Thanks \ud83e\udd70",id:"thanks-",level:2},{value:"Quick View",id:"quick-view",level:2},{value:"Run Demo",id:"run-demo",level:2},{value:"Comparison",id:"comparison",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["httpin is a ",(0,i.jsx)(t.strong,{children:"Go"})," package for ",(0,i.jsx)(t.strong,{children:"decoding HTTP requests into Go structs"})," and ",(0,i.jsx)(t.strong,{children:"encoding Go structs into HTTP requests"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"We support decoding"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/directives/query",children:"Query parameters"}),", e.g. ",(0,i.jsx)(t.code,{children:"?name=john&is_member=true"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/directives/header",children:"Headers"}),", e.g. ",(0,i.jsx)(t.code,{children:"Authorization: Bearer xxx"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/directives/form",children:"Form data"}),", e.g. ",(0,i.jsx)(t.code,{children:"username=john&password=******"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/directives/body",children:"JSON/XML Body"}),", e.g. ",(0,i.jsx)(t.code,{children:'POST {"name":"john"}'})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/directives/path",children:"Path variables"}),", e.g. ",(0,i.jsx)(t.code,{children:"/users/{username}"})]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/advanced/upload-files",children:"File uploads"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/advanced/patch",children:"Patch fields"}),", i.e. tell a field from missing to empty"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["and ",(0,i.jsx)(t.a,{href:"/directives/custom",children:"more"})," of an HTTP request into a struct in Go. And vice versa, we support encoding a struct into an HTTP request."]}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"go get github.com/ggicci/httpin\n"})}),"\n",(0,i.jsx)(t.h2,{id:"thanks-",children:"Thanks \ud83e\udd70"}),"\n",(0,i.jsxs)(t.p,{children:["If you thought this package helpful, please consider ",(0,i.jsx)(t.a,{href:"https://github.com/ggicci/httpin/stargazers",children:"giving it a big star \u2b50\ufe0f"}),". Thanks in advance!"]}),"\n",(0,i.jsx)(t.h2,{id:"quick-view",children:"Quick View"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Well define your data.\ntype ListUsersInput struct {\n\tPage     int  `in:"query=page"`\n\tPerPage  int  `in:"query=per_page"`\n\tIsMember bool `in:"query=is_member"`\n}\n\nfunc ListUsers(rw http.ResponseWriter, r *http.Request) {\n\t// Retrieve your data in one line of code!\n\tinput := r.Context().Value(httpin.Input).(*ListUsersInput)\n\n\t// Do sth.\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"run-demo",children:"Run Demo"}),"\n",(0,i.jsxs)(t.p,{children:["Take a look at the ",(0,i.jsx)(t.strong,{children:"integrations"})," section in the left sidebar. You may also find useful runnable demos there."]}),"\n",(0,i.jsx)(r.Z,{children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"net/http"\n\t"net/http/httptest"\n\n\t"github.com/ggicci/httpin"\n\t"github.com/go-chi/chi/v5"\n)\n\ntype ListUsersInput struct {\n\tToken    string `in:"header=Authorization"`\n\tIsMember bool   `in:"query=is_member"`\n\tAgeRange []int  `in:"query=age_range[],age_range"`\n}\n\nfunc ListUsers(rw http.ResponseWriter, r *http.Request) {\n\tinput := r.Context().Value(httpin.Input).(*ListUsersInput)\n\tfmt.Printf("input: %#v\\n", input)\n}\n\nfunc main() {\n\trouter := chi.NewRouter()\n\trouter.With(\n\t\thttpin.NewInput(ListUsersInput{}),\n\t).Get("/users", ListUsers)\n\n\tr, _ := http.NewRequest("GET", "/users?is_member=1&age_range=18&age_range=60", nil)\n\tr.Header.Set("Authorization", "my-secret-here")\n\n\trw := httptest.NewRecorder()\n\trouter.ServeHTTP(rw, r)\n}\n'})})}),"\n",(0,i.jsx)(t.h2,{id:"comparison",children:"Comparison"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Items"}),(0,i.jsx)(t.th,{children:"Before (use net/http package)"}),(0,i.jsx)(t.th,{children:"After (use ggicci/httpin package)"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Developer Time"}),(0,i.jsx)(t.td,{children:"\ud83d\ude2b Expensive (too much parsing stuff code)"}),(0,i.jsxs)(t.td,{children:["\ud83d\ude80 ",(0,i.jsx)(t.strong,{children:"Faster"})," (define the struct for receiving input data and leave the parsing job to httpin)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Code Repetition Rate"}),(0,i.jsx)(t.td,{children:"\ud83d\ude1e High"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Lower"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Code Readability"}),(0,i.jsx)(t.td,{children:"\ud83d\ude1f Poor"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Highly readable"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Maintainability"}),(0,i.jsx)(t.td,{children:"\ud83d\ude21 Poor"}),(0,i.jsxs)(t.td,{children:["\ud83d\ude0d ",(0,i.jsx)(t.strong,{children:"Highly maintainable"})]})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);