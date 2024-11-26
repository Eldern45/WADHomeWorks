(()=>{"use strict";var t={6639:(t,s,e)=>{e(3792),e(3362),e(9085),e(9391);var r=e(5130),o=e(6768);function n(t,s,e,r,n,a){var i=(0,o.g2)("HeaderComp"),u=(0,o.g2)("router-view"),l=(0,o.g2)("FooterComp");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(i),(0,o.bF)(u),(0,o.bF)(l)],64)}var a={class:"header"};function i(t,s,e,r,n,i){var u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",a,[(0,o.Lk)("nav",null,[(0,o.bF)(u,{to:"/",class:"buttons"},{default:(0,o.k6)((function(){return s[0]||(s[0]=[(0,o.eW)(" Posts ")])})),_:1}),(0,o.bF)(u,{to:"/signup",class:"buttons"},{default:(0,o.k6)((function(){return s[1]||(s[1]=[(0,o.eW)(" Signup ")])})),_:1})])])}const u={name:"HeaderComp"};var l=e(1241);const c=(0,l.A)(u,[["render",i],["__scopeId","data-v-4463888e"]]),p=c;var d={class:"footer"};function m(t,s,e,r,n,a){return(0,o.uX)(),(0,o.CE)("footer",d,s[0]||(s[0]=[(0,o.Lk)("div",{class:"authors"},[(0,o.Lk)("p",null,"Authors:"),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"Johan Veenpere"),(0,o.Lk)("li",null,"Timofei Šinšakov"),(0,o.Lk)("li",null,"Timur Sirazitdinov")])],-1)]))}const h={name:"FooterComp"},f=(0,l.A)(h,[["render",m],["__scopeId","data-v-1ffcc594"]]),k=f,v={name:"App",components:{HeaderComp:p,FooterComp:k},mounted:function(){document.title="Homework 3"}},w=(0,l.A)(v,[["render",n]]),b=w;var g=e(1387),L={class:"main"};function E(t,s,e,r,n,a){var i=(0,o.g2)("Posts");return(0,o.uX)(),(0,o.CE)("div",L,[(0,o.bF)(i),(0,o.Lk)("button",{onClick:s[0]||(s[0]=function(s){return t.$store.dispatch("resetLikes")})}," Reset Likes ")])}e(3288);var C=e(4232);const P=e.p+"img/human-icon-symbol-design-illustration-vector.636715a5.jpg",y=e.p+"img/like-button.e924c3ce.png";var _={class:"posts"},F={class:"data"},A=["src"],X={class:"like-container"},x=["onClick"];function O(t,s,e,r,n,a){return(0,o.uX)(),(0,o.CE)("div",_,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.postList,(function(e,r){return(0,o.uX)(),(0,o.CE)("div",{key:e.id},[(0,o.Lk)("div",F,[(0,o.Lk)("span",null,[s[0]||(s[0]=(0,o.Lk)("img",{src:P,alt:"user img",class:"user-img"},null,-1)),(0,o.eW)(" "+(0,C.v_)(e.authorName),1)]),(0,o.Lk)("p",null,(0,C.v_)(new Date(e.createTime).toLocaleString()),1)]),null!=e.pictureUrl?((0,o.uX)(),(0,o.CE)("img",{key:0,src:e.pictureUrl,alt:"Post image",class:"post-img"},null,8,A)):(0,o.Q3)("",!0),(0,o.Lk)("p",null,(0,C.v_)(e.text),1),(0,o.Lk)("span",X,[(0,o.Lk)("img",{src:y,alt:"like-button",class:"like-button",onClick:function(s){return t.$store.dispatch("increaseLikes",r)}},null,8,x),(0,o.eW)(" "+(0,C.v_)(e.likes+" likes"),1)])])})),128))])}const j={name:"PostsComp",props:{},computed:{postList:function(){return this.$store.state.posts}},methods:{}},S=(0,l.A)(j,[["render",O],["__scopeId","data-v-00dc6d85"]]),I=S,T={name:"PostsView",components:{Posts:I}},W=(0,l.A)(T,[["render",E],["__scopeId","data-v-5d310243"]]),H=W;var U={class:"page-container"},V={class:"form-row"},$={class:"form-row"},z={key:0,class:"password-error"};function D(t,s,e,n,a,i){return(0,o.uX)(),(0,o.CE)("div",U,[(0,o.Lk)("form",{class:"signup-form",onSubmit:s[2]||(s[2]=(0,r.D$)((function(){return i.submitForm&&i.submitForm.apply(i,arguments)}),["prevent"]))},[(0,o.Lk)("div",V,[s[3]||(s[3]=(0,o.Lk)("label",{for:"email"},"Email:",-1)),(0,o.bo)((0,o.Lk)("input",{id:"email","onUpdate:modelValue":s[0]||(s[0]=function(t){return a.email=t}),type:"email"},null,512),[[r.Jo,a.email]])]),(0,o.Lk)("div",$,[s[4]||(s[4]=(0,o.Lk)("label",{for:"password"},"Password:",-1)),(0,o.bo)((0,o.Lk)("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=function(t){return a.password=t}),type:"password"},null,512),[[r.Jo,a.password]])]),i.passwordError?((0,o.uX)(),(0,o.CE)("div",z,[s[5]||(s[5]=(0,o.Lk)("p",null,"The password is not valid:",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.passwordErrors,(function(t,s){return(0,o.uX)(),(0,o.CE)("li",{key:s},(0,C.v_)(t),1)})),128))])])):(0,o.Q3)("",!0),s[6]||(s[6]=(0,o.Lk)("button",{type:"submit"}," Sign Up ",-1))],32)])}e(4114),e(7495),e(906);const J={name:"SignupView",data:function(){return{email:"",password:"",passwordErrors:[]}},computed:{passwordError:function(){return this.passwordErrors.length>0}},watch:{password:function(t){this.validatePassword(t)}},methods:{submitForm:function(){console.log("Form submitted with: ",{email:this.email,password:this.password})},validatePassword:function(t){this.passwordErrors=[],(t.length<8||t.length>14)&&this.passwordErrors.push("Password should be at least 8 characters and less than 15 characters."),/^[A-Z]/.test(t)||this.passwordErrors.push("Password should should start with an uppercase alphabet."),/[A-Z]/.test(t)||this.passwordErrors.push("Password should include at least one uppercase alphabet character."),/(.*[a-z]){2,}/.test(t)||this.passwordErrors.push("Password should include at least two lowercase alphabet characters."),/[0-9]/.test(t)||this.passwordErrors.push("Password should include at least one numeric value"),/_/.test(t)||this.passwordErrors.push('Password should include the character "_"')}}},K=(0,l.A)(J,[["render",D],["__scopeId","data-v-4db162b0"]]),B=K;var Q=[{path:"/",name:"Posts",component:H},{path:"/signup",name:"Signup",component:B}],Z=(0,g.aE)({history:(0,g.Bt)(),routes:Q});const M=Z;var N=e(4048),R=e(388),q=(e(6280),e(6918),e(8706),e(1629),e(6099),e(8992),e(3949),e(3500),e(782));const G=(0,q.y$)({state:{posts:[]},getters:{},mutations:{addPosts:function(t,s){console.log(s),s.forEach((function(t){return t.likes=0})),t.posts=t.posts.concat(s)},setLikes:function(t,s){t.posts.forEach((function(t){return t.likes=s}))},increaseLikes:function(t,s){t.posts[s].likes+=1}},actions:{addPosts:function(t,s){t.commit("addPosts",s)},initStore:function(t,s){console.log("initializing the store"),fetch(s).then(function(){var s=(0,R.A)((0,N.A)().mark((function s(e){return(0,N.A)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.ok){s.next=2;break}throw new Error("Bad response: "+e.statusText);case 2:return s.t0=t,s.next=5,e.json();case 5:s.t1=s.sent.posts,s.t0.commit.call(s.t0,"addPosts",s.t1);case 7:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}())["catch"]((function(t){console.error("Problem fetching data for vuex store initialization:"+t)}))},increaseLikes:function(t,s){t.commit("increaseLikes",s)},resetLikes:function(t){t.commit("setLikes",0)}},modules:{}});(0,r.Ef)(b).use(G).use(M).mount("#app"),G.dispatch("initStore","https://timur0108.github.io/WADkodutooAPI/myjson.json")}},s={};function e(r){var o=s[r];if(void 0!==o)return o.exports;var n=s[r]={exports:{}};return t[r].call(n.exports,n,n.exports,e),n.exports}e.m=t,(()=>{var t=[];e.O=(s,r,o,n)=>{if(!r){var a=1/0;for(c=0;c<t.length;c++){for(var[r,o,n]=t[c],i=!0,u=0;u<r.length;u++)(!1&n||a>=n)&&Object.keys(e.O).every((t=>e.O[t](r[u])))?r.splice(u--,1):(i=!1,n<a&&(a=n));if(i){t.splice(c--,1);var l=o();void 0!==l&&(s=l)}}return s}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[r,o,n]}})(),(()=>{e.n=t=>{var s=t&&t.__esModule?()=>t["default"]:()=>t;return e.d(s,{a:s}),s}})(),(()=>{e.d=(t,s)=>{for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})}})(),(()=>{e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s)})(),(()=>{e.p="/WADHomeWorks/"})(),(()=>{var t={524:0};e.O.j=s=>0===t[s];var s=(s,r)=>{var o,n,[a,i,u]=r,l=0;if(a.some((s=>0!==t[s]))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(u)var c=u(e)}for(s&&s(r);l<a.length;l++)n=a[l],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(c)},r=self["webpackChunkwad"]=self["webpackChunkwad"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))})();var r=e.O(void 0,[504],(()=>e(6639)));r=e.O(r)})();
//# sourceMappingURL=app.7401752f.js.map