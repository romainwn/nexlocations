(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,n){e.exports=n(378)},378:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(18),i=n.n(o),c=n(27),l=n(24),s=n(25),u=n(28),m=n(26),p=n(29),d=n(166),h=n(380),g=n(381),f=n(382),E=n(384),v=n(34),b=n(64),O=n.n(b),w=n(383),j=n(140),y=n.n(j),N=n(60),I=n.n(N),T=n(141),k=n.n(T),L=n(21),x=n.n(L),C=n(142),_=n.n(C),S=n(379),R=function(e){var t=e.to,n=e.children;return r.a.createElement(S.a,{to:t,style:{color:"inherit",textDecoration:"none "}},n)},M=Object(v.withStyles)({root:{flexGrow:1},grow:{flexGrow:1,marginRight:20},groupRight:{display:"flex",alignItems:"center"}})(function(e){var t=e.user,n=e.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(y.a,{position:"static",color:"primary"},r.a.createElement(k.a,null,r.a.createElement(R,{to:"/"},r.a.createElement(x.a,{className:n.grow,variant:"h6",color:"inherit"},"NexLocations")),r.a.createElement("div",{className:n.groupRight},t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:n.grow,variant:"overline",color:"inherit"},t.name),r.a.createElement(I.a,{color:"inherit",onClick:function(e){return function(e){e.preventDefault(),(0,(void 0).props.logout)()}(e)}},r.a.createElement(_.a,null)))))))}),G="LOG_IN",A="LOG_OUT",P="GET_CONSULTANTS",F="GET_USER",U="START_LOGGIN",D="END_LOGGIN",J="ERROR_LOGIN",z=n(35),B=n.n(z),W=(Object({NODE_ENV:"production",PUBLIC_URL:"/nexlocations",REACT_APP_MAPBOX_TOKEN:"pk.eyJ1Ijoicm9tYWlud24iLCJhIjoiY2pubXNnNGQxMTIyYTN3cGtxbG80eTJ3bSJ9.wpMpc7aoApjPxUBb9VTNKA"}).NEXSTAFF_URL,G),V=A,X=F,Y=U,K=D,Q=J,q=Object({NODE_ENV:"production",PUBLIC_URL:"/nexlocations",REACT_APP_MAPBOX_TOKEN:"pk.eyJ1Ijoicm9tYWlud24iLCJhIjoiY2pubXNnNGQxMTIyYTN3cGtxbG80eTJ3bSJ9.wpMpc7aoApjPxUBb9VTNKA"}).NEXSTAFF_URL||"http://localhost:3004",H=function(e){return{type:X,payload:e}},$=function(){return{type:W}},Z=function(){return{type:Q}},ee=function(){return{type:Y}},te=function(){return{type:K}},ne=function(e,t){var n=e.username,a=e.password,r={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},data:"username="+n+"&password="+encodeURIComponent(a),url:"".concat(q,"/km/login")},o={method:"get",url:"".concat(q,"/km/services/user")};return function(e){return e(ee()),B()(r).then(function(e){return console.log(e)}).catch(function(){e(Z())}).then(function(){return B()(o)}).then(function(n){var a=n.data;sessionStorage.setItem("userRole",a.nexstaffRole),sessionStorage.setItem("userDepartmentName",a.departmentName),sessionStorage.setItem("userDepartmentId",a.departmentId),e(H(n.data)),e($()),t()}).finally(function(){e(te())})}},ae=function(){return{type:V}},re=Object(w.a)(Object(c.b)(function(e){return{user:e.user}},function(e){return{logout:function(){return e(ae())}}})(M)),oe=n(19),ie=n(68),ce={cursor:"pointer",fill:"#d00",stroke:"none"},le=function(e){var t=e.size,n=void 0===t?20:t,a=e.onClick;return r.a.createElement("svg",{height:n,viewBox:"0 0 24 24",style:Object(oe.a)({},ce,{transform:"translate(".concat(-n/2,"px,").concat(-n,"px)")}),onClick:a},r.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))},se=n(86),ue=n.n(se),me=n(89),pe=n.n(me),de=n(5),he=n.n(de),ge=he()(function(e){return{consultant:{color:e.palette.secondary.dark}}})(function(e){var t=e.info,n=t.clientName,a=t.projectList,o=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{variant:"overline"},n),a&&function(e){return e.map(function(e){return r.a.createElement(ue.a,null,r.a.createElement(pe.a,null,r.a.createElement(x.a,{variant:"subtitle2",color:"primary.dark"},e.name)),e.collaboratorList&&e.collaboratorList.map(function(e){return r.a.createElement(pe.a,{key:e.id},r.a.createElement(x.a,{variant:"body2",classes:o.consultant},e.name))}))})}(a))}),fe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e)))._resize=function(){n.setState({viewport:Object(oe.a)({},n.state.viewport,{width:n.props.width||window.innerWidth-15,height:n.props.height||window.innerHeight-100})})},n._renderCityMarker=function(e,t){return r.a.createElement(ie.a,{key:"marker-".concat(t),longitude:parseFloat(e.longitude),latitude:parseFloat(e.latitude)},r.a.createElement(le,{size:20,onClick:function(){return n.setState({popupInfo:e})}}))},n.state={viewport:{width:300,height:200,latitude:48.866667,longitude:2.333333,zoom:10},popupInfo:null,projects:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;B.a.get("km/services/assignments/complete").then(function(t){e.setState(function(){return{projects:t.data}})})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this._resize),this._resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._resize)}},{key:"_renderPopup",value:function(){var e=this,t=this.state.popupInfo;return t&&r.a.createElement(ie.b,{tipSize:5,anchor:"top",longitude:t.longitude,latitude:t.latitude,onClose:function(){return e.setState({popupInfo:null})}},r.a.createElement(ge,{info:t}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.viewport,a=t.projects;return r.a.createElement("div",null,r.a.createElement(ie.c,Object.assign({},n,{onViewportChange:function(t){return e.setState({viewport:t})},mapboxApiAccessToken:"pk.eyJ1Ijoicm9tYWlud24iLCJhIjoiY2pubXNnNGQxMTIyYTN3cGtxbG80eTJ3bSJ9.wpMpc7aoApjPxUBb9VTNKA"}),a.map(this._renderCityMarker),this._renderPopup()))}}]),t}(a.Component),Ee=function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(fe,null))},ve=function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement("h1",null,"NOT FOUND"))},be=n(48),Oe=n(162),we=n.n(Oe),je=n(65),ye=n.n(je),Ne=n(90),Ie=n.n(Ne),Te=n(163),ke=n.n(Te),Le=n(58),xe=n.n(Le),Ce=n(161),_e=n.n(Ce),Se=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){return function(t){n.setState(Object(be.a)({},e,t.target.value))}},n.state={username:"",redirectToRefferer:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"_handleButtonClick",value:function(e){var t=this;e.preventDefault();var n=this.props.login,a=this.state;n({username:a.username,password:a.password},function(){t.setState(function(){return{redirectToRefferer:!0}})})}},{key:"render",value:function(){var e=this,t=(this.props.location.state||{from:{pathname:"/"}}).from,n=this.state.redirectToRefferer,a=this.props,o=a.classes,i=a.loading,c=a.error;return n?r.a.createElement(g.a,{to:t}):r.a.createElement("div",{className:o.main},r.a.createElement(O.a,null),r.a.createElement(xe.a,{className:o.paper},r.a.createElement(we.a,{className:o.avatar},r.a.createElement(ke.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Connexion"),r.a.createElement("form",{className:o.form,noValidate:!0,autoComplete:"off",onSubmit:function(t){return e._handleButtonClick(t)}},r.a.createElement(ye.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(Ie.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0,value:this.state.username,onChange:this.handleChange("username"),label:"Nom utilisateur",variant:"outlined"})),r.a.createElement(ye.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(Ie.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handleChange("password"),label:"Mot de passe",variant:"outlined"})),r.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit},"Se connecter")),i&&r.a.createElement(_e.a,{size:50,singleColor:"#63a39e",className:o.spinner}),c&&r.a.createElement(x.a,{variant:"overline",color:"error",className:o.errorMessage},"Et si on essayait avec les bons identifiants ?")))}}]),t}(a.Component),Re=he()(function(e){return{main:Object(be.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},spinner:{marginTop:3*e.spacing.unit},errorMessage:{textAlign:"center"}}})(Se),Me=ne,Ge=Object(w.a)(Object(c.b)(function(e){return{loading:e.user.loading,error:e.user.error}},function(e){return{login:function(t,n){var a=t.username,r=t.password;e(Me({username:a,password:r},n))}}})(Re)),Ae=function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(Ge,null))},Pe=Object(w.a)(function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement("h1",null," This is the home page"),r.a.createElement(R,{to:"/map"},"Map"),r.a.createElement(R,{to:"/search"},"Search"))}),Fe=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement("h1",null,"Search Page "))}}]),t}(a.Component),Ue=Object(v.createMuiTheme)({palette:{primary:{light:"#82b5b1",main:"#63a39e",dark:"#45726e",contrastText:"#FFFFFF"},secondary:{light:"#df6354",main:"#d73c2a",dark:"#962a1d"}},typography:{useNextVariants:!0}}),De=function(e){var t=e.component,n=e.isLoggedIn,a=Object(d.a)(e,["component","isLoggedIn"]);return r.a.createElement(h.a,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Je=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="NexLocations"}},{key:"render",value:function(){var e=this.props.isLoggedIn;return r.a.createElement(v.MuiThemeProvider,{theme:Ue},r.a.createElement(O.a,null),r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{path:"/login",exact:!0,component:Ae}),r.a.createElement(De,{isLoggedIn:e,path:"/",exact:!0,component:Pe}),r.a.createElement(De,{isLoggedIn:e,path:"/search",component:Fe}),r.a.createElement(De,{isLoggedIn:e,path:"/map",component:Ee}),r.a.createElement(h.a,{status:404,path:"*",component:ve}))))}}]),t}(a.Component),ze=Object(c.b)(function(e){return{isLoggedIn:e.user.isLoggedIn}})(Je);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(30),We=n(165),Ve=G,Xe=A,Ye=F,Ke=U,Qe=D,qe=J,He={isLoggedIn:!1,error:!1},$e=P,Ze=Object(Be.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ke:return Object(oe.a)({},e,{loading:!0,error:!1});case Qe:return Object(oe.a)({},e,{loading:!1});case qe:return Object(oe.a)({},e,{error:!0});case Ve:return Object(oe.a)({},e,{isLoggedIn:!0});case Xe:return{isLoggedIn:!1};case Ye:var n=t.payload,a=n.name,r=n.departmentId,o=n.departmentName,i=n.nexstaffRole;return Object(oe.a)({},e,{name:a,nexstaffRole:i,departmentId:r,departmentName:o});default:return e}},consultants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e:return Object(oe.a)({},e,{list:t.payload});default:return e}}}),et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Be.d;i.a.render(r.a.createElement(c.a,{store:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],Object(Be.e)(Ze,et(Object(Be.a)(We.a)))}()},r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,2,1]]]);
//# sourceMappingURL=main.307d3412.chunk.js.map