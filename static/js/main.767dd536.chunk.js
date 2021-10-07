(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{156:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(80),c=a.n(i),s=(a(156),a(6)),o=a(186),u=a(205),l=a(73),j=a(214),d=a(42),b=a(193),f=a(202),x=a(203),O=a(20),m=a(211),h=a(210),g=a(4),p=a(188),k=a(5);var v=function(e){var t,a=e.name,n=e.image,r=e.maker,i=e.onClick;return Object(k.jsxs)(o.a,(t={flexGrow:0,flexShrink:0,flexBasis:"150px",backgroundColor:"red.400",flexDirection:"row",alignItems:"center",padding:"10px",borderRadius:"15px"},Object(g.a)(t,"backgroundColor","lightgray"),Object(g.a)(t,"onClick",i),Object(g.a)(t,"cursor","pointer"),Object(g.a)(t,"children",[Object(k.jsx)(h.a,{src:n,height:"100",borderRadius:"15px"}),Object(k.jsxs)(o.a,{marginLeft:"10px",flexDirection:"column",children:[Object(k.jsx)(p.a,{fontSize:"1.8em",fontWeight:"bold",lineHeight:"1",children:a}),Object(k.jsx)(p.a,{fontSize:"1.2em",fontStyle:"italic",children:r})]})]),t))},w=function(){return Array.from(Array(1+Math.floor(10*Math.random())).keys()).map((function(e){return Object(k.jsx)(m.a,{borderRadius:"15px",height:"150px"},e)}))};var C=function(e){var t=e.fursuitsData,a=e.fursuitsDataLoading,n=e.onFursuitSelected,r=e.imagesData,i=e.imagesDataLoading,c=e.onImageSelected,s=e.showMode;if("images"===s&&i||"search"===s&&a)return Object(k.jsx)(o.a,{flexDirection:"column",overflow:"auto",gridGap:"10px",children:Object(k.jsx)(w,{})});switch(s){case"search":return Object(k.jsx)(o.a,{flexDirection:"column",overflow:"auto",gridGap:"10px",children:t&&t.fursuits&&t.fursuits.map((function(e){return Object(k.jsx)(v,{onClick:function(){return n(e.slug)},name:e.name,image:e.avatar,maker:null!=e.makers[0]?e.makers[0].name:""},e.id)}))});case"images":return Object(k.jsx)(o.a,{flexDirection:"column",overflow:"auto",gridGap:"10px",children:r&&r.fursuitMedia&&r.fursuitMedia.map((function(e){return Object(k.jsx)(h.a,{src:e.thumbnail,onClick:function(){return c(e.id)},cursor:"pointer"},e.id)}))})}},S=a(212),D=a(206),I=a(191),M=a(204),y=a(192),$=a(215);var F,G,B,L=function(e){var t=e.onSearch,a=e.onCancel,r=e.showMode,i=e.selectedFursuit,c=Object(n.useState)(""),u=Object(s.a)(c,2),l=u[0],j=u[1],d=Object(n.useCallback)((function(e){"Enter"===e.key&&t(l)}),[l,t]),b=Object(n.useCallback)((function(e){return j(e.target.value)}),[]),f=Object(n.useCallback)((function(){return t(l)}),[l,t]),x=Object(n.useCallback)((function(){return a()}),[a]);return Object(k.jsxs)(o.a,{flexShrink:0,flexDirection:"column",alignItems:"stretch",justifyContent:"center",children:["search"===r&&Object(k.jsxs)(S.a,{children:[Object(k.jsx)(D.a,{placeholder:"Search fursuit...",value:l,onChange:b,onKeyDown:d}),Object(k.jsx)(I.a,{width:"4rem",children:Object(k.jsx)(M.a,{h:"1.75rem",size:"sm",onClick:f,children:Object(k.jsx)($.a,{color:"gray.300"})})})]}),"images"===r&&i&&i.fursuit&&Object(k.jsxs)(o.a,{flexGrow:0,flexShrink:0,flexDirection:"row",alignItems:"center",borderRadius:"15px",children:[Object(k.jsx)(h.a,{src:i.fursuit.avatar,height:"50",borderRadius:"15px"}),Object(k.jsxs)(o.a,{marginLeft:"10px",flexDirection:"column",flexGrow:1,children:[Object(k.jsx)(p.a,{fontWeight:"bold",children:i.fursuit.name}),Object(k.jsx)(p.a,{fontStyle:"italic",children:null!=i.fursuit.makers[0]?i.fursuit.makers[0].name:""})]}),Object(k.jsx)(y.a,{onClick:x})]})]})},N=Object(f.a)(F||(F=Object(l.a)(["query FursuitsTest($name: String, $maker: ID, $limit: Int!, $offset: Int!) {\n    fursuits(name: $name, maker: $maker, limit: $limit, offset: $offset) {\n      id\n      slug\n      name\n      makers {\n        name\n      }\n      avatar\n    }\n  }"]))),z=Object(f.a)(G||(G=Object(l.a)(["query SelectedFursuit($id: ID!, $isModerator: Boolean) {\n    fursuit(id: $id, isModerator: $isModerator) {\n      id\n      name\n      makers {\n        name\n      }\n      avatar\n    }\n  }"]))),R=Object(f.a)(B||(B=Object(l.a)(["query FursuitMedia($fursuitId: ID!, $limit: Int!, $offset: Int!) {\n    fursuitMedia(fursuitId: $fursuitId, limit: $limit, offset: $offset) {\n      id\n      thumbnail\n    }\n  }"])));var T,q=function(e){var t=e.isNavbarOpen,a=e.setNavbarOpen,r=e.viewMode,i=Object(n.useState)(""),c=Object(s.a)(i,2),u=c[0],l=c[1],f=Object(n.useState)("search"),m=Object(s.a)(f,2),h=m[0],g=m[1],p=Object(O.g)().idfursuit,v=Object(O.f)(),w=Object(x.a)(N,{variables:{name:u,limit:12,maker:"",offset:0},skip:!u}),S=w.loading,D=(w.error,w.data),I=Object(x.a)(z,{variables:{id:p},skip:!p}).data,M=Object(x.a)(R,{variables:{fursuitId:p,limit:24,offset:0},skip:!p}),y=M.loading,$=(M.error,M.data),F=Object(n.useCallback)((function(e){e&&v.push("/"+e)}),[]),G=Object(n.useCallback)((function(e){e&&(v.push("/"+p+"/"+e),"mobile"===r&&a())}),[p,r,a]),B=Object(n.useCallback)((function(){g("search")}),[]);return Object(n.useEffect)((function(){p&&g("images")}),[p]),"mobile"===r?Object(k.jsxs)(j.a,{isOpen:t,placement:"left",onClose:function(){return a()},size:"full",children:[Object(k.jsx)(d.f,{}),Object(k.jsxs)(j.b,{children:[Object(k.jsx)(d.c,{}),Object(k.jsx)(d.e,{borderBottomWidth:"1px",children:"Scritch.es viewer"}),Object(k.jsxs)(d.b,{paddingTop:"20px",children:[Object(k.jsx)(L,{showMode:h,onSearch:l,selectedFursuit:I,onCancel:B}),Object(k.jsx)(b.a,{marginTop:"20px",marginBottom:"20px"}),Object(k.jsx)(C,{showMode:h,fursuitsData:D,fursuitsDataLoading:S,imagesData:$,imagesDataLoading:y,onFursuitSelected:F,onImageSelected:G})]})]})]}):Object(k.jsxs)(o.a,{flexGrow:0,flexShrink:0,flexBasis:"500px",flexDirection:"column",padding:"20px",boxShadow:"0px 0px 15px 5px #000000",zIndex:"1",children:[Object(k.jsx)(L,{showMode:h,onSearch:l,selectedFursuit:I,onCancel:B}),Object(k.jsx)(b.a,{marginTop:"20px",marginBottom:"20px"}),Object(k.jsx)(C,{showMode:h,fursuitsData:D,fursuitsDataLoading:S,imagesData:$,imagesDataLoading:y,onFursuitSelected:F,onImageSelected:G})]})},A=a(213),E=Object(f.a)(T||(T=Object(l.a)(["query Medium($id: ID!, $tagging: Boolean) {\n    medium(id: $id, tagging: $tagging) {\n      id\n      picture\n      createdAt\n    }\n  }"]))),P=function(e){var t=e.viewMode,a=e.setNavbarOpen,r=e.children,i=Object(n.useCallback)((function(){return a()}),[a]);return Object(k.jsxs)(o.a,{flexGrow:1,backgroundColor:"gray.600",flexDirection:"column",alignItems:"stretch",children:["mobile"===t&&Object(k.jsx)(o.a,{flexShrink:0,flexBasis:"100px",alignItems:"center",justifyContent:"flex-start",padding:"20px",children:Object(k.jsx)(M.a,{size:"lg",onClick:i,children:Object(k.jsx)($.a,{color:"gray.500"})})}),r]})};var W=function(e){var t=e.setNavbarOpen,a=e.viewMode,n=Object(O.g)().idimage,r=Object(x.a)(E,{variables:{id:n},skip:!n}),i=r.loading,c=(r.error,r.data);return i?Object(k.jsx)(P,{viewMode:a,setNavbarOpen:t,children:Object(k.jsx)(o.a,{flexGrow:1,backgroundColor:"gray.600",alignItems:"center",justifyContent:"center",children:Object(k.jsx)(A.a,{size:"xl",color:"whitesmoke"})})}):c&&c.medium?Object(k.jsx)(P,{viewMode:a,setNavbarOpen:t,children:Object(k.jsx)(o.a,{flexGrow:1,backgroundImage:"url('"+c.medium.picture+"')",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"gray.600"})}):Object(k.jsx)(P,{viewMode:a,setNavbarOpen:t,children:Object(k.jsx)(o.a,{flexGrow:1,backgroundColor:"gray.600",alignItems:"center",justifyContent:"center",children:Object(k.jsx)(p.a,{color:"whitesmoke",fontSize:"5xl",children:"Scritch.es viewer !"})})})};var J=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useCallback)((function(){return r(!a)}),[a]),c=Object(u.a)({base:"mobile",xl:"pc"});return Object(k.jsxs)(o.a,{height:"100vh",flexDirection:"row",alignItems:"stretch",children:[Object(k.jsx)(q,{isNavbarOpen:a,setNavbarOpen:i,viewMode:c}),Object(k.jsx)(W,{setNavbarOpen:i,viewMode:c})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,217)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))},K=a(200),Q=a(201),U=a(198),V=a(86),X=a(207),Y=new K.a({uri:"https://scritch.es/graphql",cache:new Q.a});c.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(U.a,{client:Y,children:Object(k.jsx)(X.a,{children:Object(k.jsx)(V.a,{children:Object(k.jsx)(O.c,{children:Object(k.jsx)(O.a,{path:"/:idfursuit?/:idimage?",children:Object(k.jsx)(J,{})})})})})})}),document.getElementById("root")),H()}},[[169,1,2]]]);
//# sourceMappingURL=main.767dd536.chunk.js.map