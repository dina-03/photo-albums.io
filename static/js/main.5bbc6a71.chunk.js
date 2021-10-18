(this.webpackJsonpphoto_albums=this.webpackJsonpphoto_albums||[]).push([[0],{59:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(18),n=c.n(r),l=c(6),i=(c(36),c(37),c(59),c(2)),o=c(13),u=c(7),d=c(5),j=c(4),b={initState:"users/state initials from local storage",registration:"users/add user",login:"users/login",logout:"users/logout",editUser:"users/update user",load:"users/loading data",error:"users/error"},m=function(){var e=JSON.parse(localStorage.getItem("users"));return e||[]},O=function(e){return localStorage.setItem("users",JSON.stringify(e))},h=function(e){localStorage.setItem("currentUser",JSON.stringify(e))},x=function(){return JSON.parse(localStorage.getItem("currentUser"))},p=function(e){return function(t){t({type:b.load}),setTimeout((function(){try{var c=function(e){var t=m().find((function(t){return t.email===e.email}));return t&&t.password===e.password?t:null}(e);if(!c)throw new Error("password or email is wrong");h(c),t({type:b.login,payload:c})}catch(s){t({type:b.error,payload:{login:s.message}})}}),2e3)}},g=function(e){var t=m();return t.some((function(t){return t.email===e.email}))?null:(e=Object(i.a)(Object(i.a)({},e),{},{id:Date.now()}),t.push(e),O(t),h(e),e)},f=c(0),v=Object(l.b)((function(e){var t=e.usersReducer;return{currentUser:t.currentUser,loading:t.loading,users:t.users}}),(function(e){return{initial:function(){return e((function(e){e({type:b.load}),setTimeout((function(){try{var t={users:m(),currentUser:x()};e({type:b.initState,payload:Object(i.a)({},t)})}catch(c){console.log(c.message)}}),2e3)}))},userLogout:function(){return e({type:b.logout})}}}))((function(e){var t=e.currentUser,c=e.initial,a=e.loading,r=e.users,n=e.userLogout;Object(s.useEffect)((function(){0===r.length&&c()}),[]);var l=Object(j.g)();return Object(f.jsx)(f.Fragment,{children:a?Object(f.jsx)("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}):t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("li",{className:"text-white me-3 list-unstyled",children:"Hi, ".concat(t.fName,"!")}),Object(f.jsx)("li",{className:"text-white list-unstyled",onClick:function(){n(),localStorage.removeItem("currentUser"),l.push("/")},style:{cursor:"pointer"},children:"Logout"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("li",{className:"text-white me-3 list-unstyled",children:"Hi, gast!"}),Object(f.jsx)(d.b,{className:"nav-item",to:"/login",children:"Login"})]})})})),N=function(){return Object(f.jsx)("nav",{className:"navbar navbar-expand bg-success mb-3",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 ",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(d.c,{exact:!0,to:"/",children:"Home"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(d.c,{to:"/users",children:"Users"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(d.c,{to:"/albums",children:"Albums"})})]}),Object(f.jsx)(v,{})]})})},y=function(e){localStorage.setItem("photos",JSON.stringify(e))},w=function(e){var t=e.user,c=e.currentUser;return Object(f.jsxs)("div",{className:"card col-6 col-sm-4 col-md-3 text-center p-3 m-1",children:[t.avatar?Object(f.jsx)("img",{src:t.avatar,className:"card-img-top",alt:"..."}):Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10rem",height:"10rem",fill:"currentColor",className:"bi bi-person-fill mx-auto text-success",viewBox:"0 0 16 16",children:Object(f.jsx)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("h5",{className:"card-title",children:[t.fName," ",t.lName]}),Object(f.jsx)("p",{className:"card-text",children:t.email}),c&&c.id===t.id?Object(f.jsx)(d.b,{to:"/user/".concat(t.id),className:"btn btn-dark",children:"profile edit"}):Object(f.jsx)(d.b,{to:"/albums/user/".concat(t.id),className:"btn btn-success",children:"view albums"})]})]})},C=Object(l.b)((function(e){var t=e.usersReducer;return{users:t.users,currentUser:t.currentUser}}),null)((function(e){var t=e.history,c=e.users,s=e.currentUser;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"text-center my-5",children:c.length?"All our users":"You can be first one!"}),Object(f.jsx)("div",{className:"row",children:c.map((function(e){return Object(f.jsx)(w,{user:e,currentUser:s},e.id)}))}),!s&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("hr",{}),Object(f.jsx)("div",{className:"d-grid gap-2 col-4 mx-auto",children:Object(f.jsx)("button",{className:"btn btn-success",onClick:function(){return t.push("/registration")},children:"Registration"})})]})]})})),U=function(e){var t=e.album,c=e.userName,a=Object(s.useContext)(_).getCountPhotoByAlbumId,r=Object(j.g)();return Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("div",{className:"card text-center h-100 mb-3 px-2",children:[Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)("img",{src:t.cover,className:"card-img-top",alt:"..."})}),Object(f.jsx)("h5",{className:"card-title",children:t.title}),Object(f.jsxs)("p",{children:["album by: ",c]}),Object(f.jsxs)("p",{children:[a(t.id)," pictures"]}),Object(f.jsx)("button",{className:"btn btn-success btn-sm mb-3",onClick:function(){r.push("/album/".concat(t.id,"/").concat(c))},children:"View album"})]})})},S=function(e,t){return e.find((function(e){return e.id===t})).fName},I=Object(l.b)((function(e){return{users:e.usersReducer.users}}))((function(e){var t=e.match,c=e.users,a=Object(s.useContext)(_).albums,r=+t.params.id;return r&&(a=a.filter((function(e){return e.userId===r}))),Object(f.jsx)("div",{className:"container",children:0===c.length?Object(f.jsx)("div",{className:"spinner-border mx-auto text-center",role:"status","aria-hidden":"true"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"text-center my-5",children:r?"Albums by ".concat(S(c,r)):"All our albums"}),Object(f.jsx)("div",{className:"row row-cols-2 row-cols-md-4",children:a.map((function(e){return Object(f.jsx)(U,{album:e,userName:S(c,e.userId)},e.id)}))})]})})})),k=function(){return Object(f.jsx)("div",{className:"container-fluid",style:{backgroundImage:"url(https://cdn.pixabay.com/photo/2014/02/02/17/41/photos-256889__480.jpg)",height:"100vh",backgroundRepeat:"none",backgroundSize:"cover",paddingTop:"250px"},children:Object(f.jsx)("h1",{className:"text-center text-white w-50 mx-auto",style:{fontSize:"46px"},children:"Welcome to our albums App"})})},A=c(12),P=function(e){var t=e.message;return Object(f.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})},F=Object(l.b)((function(e){var t=e.usersReducer;return{error:t.error,currentUser:t.currentUser}}),(function(e){return{registrationUser:function(t){return e(function(e){return function(t){t({type:b.load}),setTimeout((function(){try{var c=g(e);if(!c)throw new Error("user specified email is already exist");t({type:b.registration,payload:c})}catch(s){t({type:b.error,payload:{registration:s.message}})}}),2e3)}}(t))}}}))((function(e){var t=e.registrationUser,c=e.error,a=e.currentUser,r=Object(s.useState)({fName:"",lName:"",email:"",password:"",avatar:""}),n=Object(u.a)(r,2),l=n[0],o=n[1],d=function(e){o(Object(i.a)(Object(i.a)({},l),{},Object(A.a)({},e.target.name,e.target.value)))};return Object(f.jsxs)(f.Fragment,{children:[a&&Object(f.jsx)(j.a,{to:"/users"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"w-50 mx-auto",children:[c.registration&&Object(f.jsx)(P,{message:c.registration}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.fName.trim()&&l.email.trim()&&l.password.trim()&&(t(l),o(Object(i.a)(Object(i.a)({},l),{},{email:""})))},children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"First Name"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"fName",value:l.fName,onChange:d})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Last Name"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"lName",value:l.lName,onChange:d})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Email"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"email",value:l.email,onChange:d})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Password"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"password",value:l.password,onChange:d})]}),Object(f.jsxs)("div",{className:"form-group mb-2",children:[Object(f.jsx)("label",{children:"Avatar"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"avatar",value:l.avatar,onChange:d})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("button",{type:"submit",className:"btn btn-success w-100",children:"Registration"})})]})]})})]})})),M=Object(l.b)((function(e){var t=e.usersReducer;return{currentUser:t.currentUser,error:t.error}}),(function(e){return{loginUser:function(t){return e(p(t))}}}))((function(e){var t=e.currentUser,c=e.error,a=e.loginUser,r=Object(s.useState)({email:"",password:""}),n=Object(u.a)(r,2),l=n[0],o=n[1],d=function(e){var t=e.target;o(Object(i.a)(Object(i.a)({},l),{},Object(A.a)({},t.name,t.value)))};return Object(f.jsxs)(f.Fragment,{children:[t&&Object(f.jsx)(j.a,{to:"/users"}),Object(f.jsx)("div",{className:"container my-5",children:Object(f.jsxs)("div",{className:"col-6 mx-auto my-5",children:[c.login&&Object(f.jsx)(P,{message:c.login}),Object(f.jsx)("h2",{className:"text-center",children:"Enter your data please"}),Object(f.jsx)("input",{className:"form-control my-3",type:"text",name:"email",placeholder:"Type email",onChange:d,value:l.email}),Object(f.jsx)("input",{className:"form-control my-3",type:"text",name:"password",placeholder:"Type password",value:l.password,onChange:d}),Object(f.jsx)("div",{className:"d-flex justify-content-end",children:Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){a(l),o({email:"",password:""})},children:"Login"})})]})})]})})),T=function(e){var t=e.album,c=e.setCurrentAlbum,a=Object(s.useContext)(_),r=a.addNewPhoto,n=a.getCountPhotoByAlbumId,l=Object(s.useState)({title:"",src:"",albumId:t.id}),o=Object(u.a)(l,2),d=o[0],j=o[1],b=function(e){j(Object(i.a)(Object(i.a)({},d),{},Object(A.a)({},e.target.name,e.target.value)))};return Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("div",{className:"card text-center h-100 mb-3 px-2",children:[Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)("img",{src:t.cover,className:"card-img-top",alt:"..."})}),Object(f.jsx)("h5",{className:"card-title",children:t.title}),Object(f.jsxs)("p",{children:[n(t.id)," pictures"]}),Object(f.jsx)("button",{className:"btn btn-success btn-sm mb-3",onClick:function(){c(t)},children:"View album"}),Object(f.jsx)("button",{className:"btn btn-dark btn-sm mb-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#addPhotoModal_".concat(t.id),children:"add photo"}),Object(f.jsx)("div",{className:"modal fade",id:"addPhotoModal_".concat(t.id),tabIndex:"-1","aria-hidden":"true",children:Object(f.jsx)("div",{className:"modal-dialog",children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsxs)("h5",{className:"modal-title",children:["Add photo to album ",t.title]}),Object(f.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:function(){j(Object(i.a)(Object(i.a)({},d),{},{title:"",src:""}))}})]}),Object(f.jsxs)("div",{className:"modal-body",children:[Object(f.jsx)("input",{className:"form-control my-3",type:"text",name:"title",placeholder:"Photo title",value:d.title,onChange:b}),Object(f.jsx)("input",{className:"form-control my-3",type:"text",name:"src",placeholder:"Photo src",value:d.src,onChange:b})]}),Object(f.jsx)("div",{className:"modal-footer",children:Object(f.jsx)("button",{type:"button",className:"btn btn-success","data-bs-dismiss":"modal",onClick:function(){r(d),j(Object(i.a)(Object(i.a)({},d),{},{title:"",src:""}))},children:"add photo"})})]})})})]})})},B=function(e){var t=e.photo;return Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("div",{className:"card text-center h-100",children:[Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)("img",{src:t.src,className:"card-img-top",alt:"..."})}),Object(f.jsx)("h5",{className:"card-title mb-3",children:t.title})]})})},J=function(e){var t=e.currentAlbum,c=Object(s.useContext)(_).photos.filter((function(e){return e.albumId===t.id}));return Object(f.jsxs)("div",{className:"container mt-3",children:[Object(f.jsx)("h3",{className:"text-center",children:t.title}),Object(f.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:c.map((function(e){return Object(f.jsx)(B,{photo:e},e.id)}))})]})},R=function(e){var t=e.currentUser,c=Object(s.useContext)(_),a=c.addNewAlbum,r=c.currentUserAlbums,n=Object(s.useState)({title:"",cover:"",userId:t.id}),l=Object(u.a)(n,2),o=l[0],d=l[1],j=function(e){d(Object(i.a)(Object(i.a)({},o),{},Object(A.a)({},e.target.name,e.target.value)))},b=Object(s.useState)(null),m=Object(u.a)(b,2),O=m[0],h=m[1],x=r();return Object(f.jsxs)("div",{className:"col-8 p-3 my-2",children:[Object(f.jsx)("h3",{className:"text-center",children:"My albums"}),Object(f.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4 p-2",children:x.map((function(e){return Object(f.jsx)(T,{album:e,setCurrentAlbum:h},e.id)}))}),Object(f.jsx)("button",{className:"w-100 btn btn-dark",type:"button","data-bs-toggle":"modal","data-bs-target":"#addAlbumModal",children:"add new album"}),Object(f.jsx)("div",{className:"modal fade",id:"addAlbumModal",tabIndex:"-1","aria-hidden":"true",children:Object(f.jsx)("div",{className:"modal-dialog",children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsx)("h5",{className:"modal-title",children:"Make your new photo album"}),Object(f.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:function(){d(Object(i.a)(Object(i.a)({},o),{},{title:"",cover:""}))}})]}),Object(f.jsxs)("div",{className:"modal-body",children:[Object(f.jsx)("input",{className:"form-control my-3",type:"text",name:"title",placeholder:"Type album title",value:o.title,onChange:j}),Object(f.jsx)("input",{className:"form-control my-3",type:"text",name:"cover",placeholder:"Type cover src",value:o.cover,onChange:j})]}),Object(f.jsx)("div",{className:"modal-footer",children:Object(f.jsx)("button",{type:"button",className:"btn btn-success","data-bs-dismiss":"modal",onClick:function(){a(o),d(Object(i.a)(Object(i.a)({},o),{},{title:"",cover:""}))},children:"add album"})})]})})}),O&&Object(f.jsx)(J,{currentAlbum:O})]})},E=Object(l.b)((function(e){return{currentUser:e.usersReducer.currentUser}}),(function(e){return{editUser:function(t){return e(function(e){return function(t){t({type:b.load}),setTimeout((function(){try{var c=Object(o.a)(m()),s=c.findIndex((function(t){return t.id===e.id}));c[s]=e,O(c),h(e),t({type:b.editUser,payload:{users:Object(o.a)(c),currentUser:e}})}catch(a){console.log(a.message)}}),1e3)}}(t))}}}))((function(e){var t=e.currentUser,c=e.editUser,a=Object(s.useState)(t),r=Object(u.a)(a,2),n=r[0],l=r[1],o=function(e){l(Object(i.a)(Object(i.a)({},n),{},Object(A.a)({},e.target.name,e.target.value)))};return Object(f.jsx)(f.Fragment,{children:t?Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"card col-4 text-center p-3 my-2",children:[Object(f.jsxs)("h3",{className:"card-title",children:[n.fName," ",n.lName]}),n.avatar?Object(f.jsx)("img",{src:n.avatar,className:"card-img-top",alt:"..."}):Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10rem",height:"10rem",fill:"currentColor",className:"bi bi-person-fill mx-auto text-success",viewBox:"0 0 16 16",children:Object(f.jsx)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.fName.trim()&&n.email.trim()&&n.password.trim()&&c(n)},children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"First Name"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"fName",value:n.fName,onChange:o,autoFocus:!0})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Last Name"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"lName",value:n.lName,onChange:o})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Email"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"email",value:n.email,onChange:o})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Password"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"password",value:n.password,onChange:o})]}),Object(f.jsxs)("div",{className:"form-group mb-2",children:[Object(f.jsx)("label",{children:"Avatar"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"avatar",value:n.avatar,onChange:o})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("button",{type:"submit",className:"btn btn-success w-100",children:"Save changes"})})]})})]}),Object(f.jsx)(R,{currentUser:t})]})}):Object(f.jsx)(j.a,{to:"/users"})})})),z=function(e){var t=e.photo,c=Object(s.useContext)(_).addEvalution;return Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("div",{className:"card text-center h-100",children:[Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)("img",{src:t.src,className:"card-img-top",alt:"..."})}),Object(f.jsx)("h5",{className:"card-title mb-3",children:t.title}),Object(f.jsxs)("span",{className:"mb-3 d-flex justify-content-center align-items-center",children:[t.like," ",Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",className:"bi bi-hand-thumbs-up-fill text-success me-3",viewBox:"0 0 16 16",onClick:function(){return c(t.id,"like")},children:Object(f.jsx)("path",{d:"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"})}),t.dislike," ",Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",className:"bi bi-hand-thumbs-down-fill text-success",viewBox:"0 0 16 16",onClick:function(){return c(t.id,"dislike")},children:Object(f.jsx)("path",{d:"M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"})})]})]})})},H=function(){var e=Object(s.useContext)(_),t=e.photos,c=e.getAlbumTitleById,a=Object(j.h)(),r=a.id,n=a.author,l=t.filter((function(e){return e.albumId===+r}));return Object(f.jsxs)("div",{className:"container mt-3",children:[Object(f.jsxs)("h3",{className:"text-center",children:['album "',c(r),'", by ',n]}),Object(f.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:l.map((function(e){return Object(f.jsx)(z,{photo:e},e.id)}))})]})},L=function(){return Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{exact:!0,path:"/album/:id/:author",component:H}),Object(f.jsx)(j.b,{exact:!0,path:"/user/:id",component:E}),Object(f.jsx)(j.b,{path:"/users",component:C}),Object(f.jsx)(j.b,{path:"/albums/user/:id",component:I}),Object(f.jsx)(j.b,{path:"/albums",component:I}),Object(f.jsx)(j.b,{path:"/login",component:M}),Object(f.jsx)(j.b,{path:"/registration",component:F}),Object(f.jsx)(j.b,{path:"/",component:k})]})},_=a.a.createContext();var D=function(){var e=Object(s.useState)(function(){var e;return null!==(e=JSON.parse(localStorage.getItem("albums")))&&void 0!==e?e:[]}()),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(function(){var e;return null!==(e=JSON.parse(localStorage.getItem("photos")))&&void 0!==e?e:[]}()),n=Object(u.a)(r,2),l=n[0],d=n[1];return Object(f.jsxs)(_.Provider,{value:{addNewAlbum:function(e){var t=[].concat(Object(o.a)(c),[Object(i.a)(Object(i.a)({},e),{},{id:Date.now()})]);a(t),function(e){localStorage.setItem("albums",JSON.stringify(e))}(t)},currentUserAlbums:function(){return c.filter((function(e){return e.userId===x().id}))},addNewPhoto:function(e){var t=[].concat(Object(o.a)(l),[Object(i.a)(Object(i.a)({},e),{},{id:Date.now(),like:0,dislike:0})]);d(t),y(t)},photos:l,albums:c,getAlbumTitleById:function(e){return c.find((function(t){return t.id===+e})).title},addEvalution:function(e,t){var c=Object(o.a)(l);c[l.findIndex((function(t){return t.id===e}))][t]++,d(c),y(c)},getCountPhotoByAlbumId:function(e){return l.filter((function(t){return t.albumId===e})).length}},children:[Object(f.jsx)(N,{}),Object(f.jsx)(L,{})]})},V=c(17),W=c(28),Y={users:[],currentUser:null,loading:!1,error:{registration:null,login:null}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case b.initState:return Object(i.a)(Object(i.a)({},e),{},{users:Object(o.a)(s.users),currentUser:s.currentUser,loading:!1});case b.registration:return Object(i.a)(Object(i.a)({},e),{},{users:[].concat(Object(o.a)(e.users),[s]),currentUser:s,loading:!1});case b.editUser:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,currentUser:s.currentUser,users:s.users});case b.login:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,currentUser:s});case b.logout:return Object(i.a)(Object(i.a)({},e),{},{currentUser:null});case b.load:return Object(i.a)(Object(i.a)({},e),{},{loading:!0,error:{registration:null,login:null}});case b.error:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:Object(i.a)(Object(i.a)({},e.error),s)});default:return e}},G=Object(V.b)({usersReducer:q}),K=Object(V.c)(G,Object(V.a)(W.a));n.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(l.a,{store:K,children:Object(f.jsx)(d.a,{children:Object(f.jsx)(D,{})})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5bbc6a71.chunk.js.map