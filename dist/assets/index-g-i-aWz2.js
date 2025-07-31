(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))f(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const b of d.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function g(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function f(c){if(c.ep)return;c.ep=!0;const d=g(c);fetch(c.href,d)}})();var N={exports:{}},n={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W;function J(){if(W)return n;W=1;var x=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),b=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,I={};function w(e,t,r){this.props=e,this.context=t,this.refs=I,this.updater=r||P}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=w.prototype;function T(e,t,r){this.props=e,this.context=t,this.refs=I,this.updater=r||P}var k=T.prototype=new O;k.constructor=T,H(k,w.prototype),k.isPureReactComponent=!0;var M=Array.isArray,a={H:null,A:null,T:null,S:null,V:null},L=Object.prototype.hasOwnProperty;function A(e,t,r,s,i,l){return r=l.ref,{$$typeof:x,type:e,key:t,ref:r!==void 0?r:null,props:l}}function U(e,t){return A(e.type,t,void 0,void 0,void 0,e.props)}function C(e){return typeof e=="object"&&e!==null&&e.$$typeof===x}function B(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var q=/\/+/g;function j(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B(""+e.key):t.toString(36)}function D(){}function Q(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(D,D):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function E(e,t,r,s,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"bigint":case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case x:case p:o=!0;break;case S:return o=e._init,E(o(e._payload),t,r,s,i)}}if(o)return i=i(e),o=s===""?"."+j(e,0):s,M(i)?(r="",o!=null&&(r=o.replace(q,"$&/")+"/"),E(i,t,r,"",function(K){return K})):i!=null&&(C(i)&&(i=U(i,r+(i.key==null||e&&e.key===i.key?"":(""+i.key).replace(q,"$&/")+"/")+o)),t.push(i)),1;o=0;var h=s===""?".":s+":";if(M(e))for(var u=0;u<e.length;u++)s=e[u],l=h+j(s,u),o+=E(s,t,r,l,i);else if(u=z(e),typeof u=="function")for(e=u.call(e),u=0;!(s=e.next()).done;)s=s.value,l=h+j(s,u++),o+=E(s,t,r,l,i);else if(l==="object"){if(typeof e.then=="function")return E(Q(e),t,r,s,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return o}function R(e,t,r){if(e==null)return e;var s=[],i=0;return E(e,s,"","",function(l){return t.call(r,l,i++)}),s}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function G(){}return n.Children={map:R,forEach:function(e,t,r){R(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(t){return t})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=w,n.Fragment=g,n.Profiler=c,n.PureComponent=T,n.StrictMode=f,n.Suspense=m,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.__COMPILER_RUNTIME={__proto__:null,c:function(e){return a.H.useMemoCache(e)}},n.cache=function(e){return function(){return e.apply(null,arguments)}},n.cloneElement=function(e,t,r){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var s=H({},e.props),i=e.key,l=void 0;if(t!=null)for(o in t.ref!==void 0&&(l=void 0),t.key!==void 0&&(i=""+t.key),t)!L.call(t,o)||o==="key"||o==="__self"||o==="__source"||o==="ref"&&t.ref===void 0||(s[o]=t[o]);var o=arguments.length-2;if(o===1)s.children=r;else if(1<o){for(var h=Array(o),u=0;u<o;u++)h[u]=arguments[u+2];s.children=h}return A(e.type,i,void 0,void 0,l,s)},n.createContext=function(e){return e={$$typeof:b,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:d,_context:e},e},n.createElement=function(e,t,r){var s,i={},l=null;if(t!=null)for(s in t.key!==void 0&&(l=""+t.key),t)L.call(t,s)&&s!=="key"&&s!=="__self"&&s!=="__source"&&(i[s]=t[s]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var h=Array(o),u=0;u<o;u++)h[u]=arguments[u+2];i.children=h}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)i[s]===void 0&&(i[s]=o[s]);return A(e,l,void 0,void 0,null,i)},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:y,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:S,_payload:{_status:-1,_result:e},_init:F}},n.memo=function(e,t){return{$$typeof:v,type:e,compare:t===void 0?null:t}},n.startTransition=function(e){var t=a.T,r={};a.T=r;try{var s=e(),i=a.S;i!==null&&i(r,s),typeof s=="object"&&s!==null&&typeof s.then=="function"&&s.then(G,$)}catch(l){$(l)}finally{a.T=t}},n.unstable_useCacheRefresh=function(){return a.H.useCacheRefresh()},n.use=function(e){return a.H.use(e)},n.useActionState=function(e,t,r){return a.H.useActionState(e,t,r)},n.useCallback=function(e,t){return a.H.useCallback(e,t)},n.useContext=function(e){return a.H.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e,t){return a.H.useDeferredValue(e,t)},n.useEffect=function(e,t,r){var s=a.H;if(typeof r=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return s.useEffect(e,t)},n.useId=function(){return a.H.useId()},n.useImperativeHandle=function(e,t,r){return a.H.useImperativeHandle(e,t,r)},n.useInsertionEffect=function(e,t){return a.H.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return a.H.useLayoutEffect(e,t)},n.useMemo=function(e,t){return a.H.useMemo(e,t)},n.useOptimistic=function(e,t){return a.H.useOptimistic(e,t)},n.useReducer=function(e,t,r){return a.H.useReducer(e,t,r)},n.useRef=function(e){return a.H.useRef(e)},n.useState=function(e){return a.H.useState(e)},n.useSyncExternalStore=function(e,t,r){return a.H.useSyncExternalStore(e,t,r)},n.useTransition=function(){return a.H.useTransition()},n.version="19.1.0",n}var Y;function X(){return Y||(Y=1,N.exports=J()),N.exports}X();function Z(){const x=[{question:"What is a hackathon?",answer:"A hackathon is a collaborative event where teams of developers, designers, and entrepreneurs come together to build innovative projects in a limited time frame. It's a great opportunity to learn new skills, meet like-minded people, and bring your creative ideas to life!"},{question:"Who can participate?",answer:"Our hackathon is open to students of all skill levels from high school to graduate school. Whether you're a complete beginner or an experienced developer, there's a place for you! We welcome participants from all backgrounds and disciplines."},{question:"Do I need a team?",answer:"Not at all! You can participate solo, come with a pre-formed team, or find teammates once you arrive. We'll help match you with others who share similar interests or complementary skills."},{question:"What should I bring?",answer:"Bring your laptop, charger, any hardware you want to work with, and a learner's attitude! We'll provide the coffee, [meals, snacks, drinks, and swag] ??."},{question:"Is there a cost to participate?",answer:"The participation fee is $50. We cover [meals, snacks, swag, and all event activities]??. Please contact us if you'd like to participate, but cost is an issue."},{question:"What kind of projects can I build?",answer:"Anything you can imagine! Projects can be web apps, mobile apps, hardware hacks, games, AI/ML projects, or even music and poetry. We'll have several tracks and sponsor challenges with specific themes, but creativity is encouraged."},{question:"What if I'm a beginner?",answer:"Perfect! Hackathons are great learning experiences. We'll have mentors available throughout the event, beginner-friendly workshops, and plenty of resources to help you get started."},{question:"What are the prizes?",answer:"[We have prizes for overall winners, track-specific categories, sponsor challenges, and special recognition awards. Prizes include cash awards, tech gadgets, internship opportunities, and exclusive swag. But remember, the real prize is the experience and connections you'll make!]??"}],p=document.createElement("div");p.className="max-w-4xl mx-auto p-6";const g=document.createElement("div");g.className="text-center mb-8",g.innerHTML=`
    <h2 class="text-4xl font-bold text-white hover:text-blue-300 mb-4">
      FAQ
    </h2>
  `;const f=document.createElement("div");f.className="grid grid-cols-2 md:grid-cols-2 gap-10",x.forEach((d,b)=>{const y=document.createElement("div");y.className="max-w-md mx-autorounded-lg overflow-hidden transition-shadow duration-200 m-2";const m=document.createElement("button");m.className="w-full px-4 py-3 text-left transition-colors duration-200 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",m.innerHTML=`
      <h3 class="text-lg font-normal text-white hover:text-blue-300 pr-4">
        ${d.question}
      </h3>
      <div class="flex-shrink-0">
        <svg class="w-5 h-5 text-white hover:text-blue-300 chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    `;const v=document.createElement("div");v.className="px-6 pb-5 bg-gray-50 border-t border-gray-100 hidden",v.innerHTML=`
      <div class="pt-4">
        <p class="text-gray-700 leading-relaxed pl-6 text-left">
          ${d.answer}
        </p>
      </div>
    `,m.addEventListener("click",()=>{const S=v.classList.contains("hidden"),_=m.querySelector(".chevron");S?(v.classList.remove("hidden"),_.style.transform="rotate(180deg)"):(v.classList.add("hidden"),_.style.transform="rotate(0deg)")}),y.appendChild(m),y.appendChild(v),f.appendChild(y)});const c=document.createElement("div");return c.className="mt-8 text-center",c.innerHTML=`
    <p class="text-white hover:text-blue-300 mb-4">
      Still have questions? Contact us at hello@[INSERTNAME]hackathon.com
    </p>
    <br><br>
   
  `,p.appendChild(g),p.appendChild(f),p.appendChild(c),p}document.querySelector("#app").innerHTML=`
  <!-- Background Image -->
  <div class="hero-bg-container">
    <img class="bg-image" src="./landing_canva_2.png" alt="Landing Image">
  </div>
  <!-- Hero Section -->
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
    <!-- Navigation -->
    <nav class="flex justify-between items-center p-6 relative z-10">
      <div class="text-white text-5xl font-bold;">[INSERT NAME] Hackathon 2025</div>
      <div class="space-x-6">
        <a href="#about" class="text-white hover:text-blue-300">About&nbsp;&nbsp;&nbsp;</a>
        <a href="#schedule" class="text-white hover:text-blue-300">Schedule&nbsp&nbsp;&nbsp;</a>
        <a href="#faq" class="text-white hover:text-blue-300">FAQ&nbsp;&nbsp;&nbsp;</a>
        <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold">
          Register Now
        </button>
      </div>
    </nav>

    
  <br><br><br>
  <!-- Hero Content -->
    <div class="flex items-center justify-left min-h-[80vh] text-center px-4 relative z-10 ">
      <div style="margin-left: 400px;">
        <div class="spacer-div-margin"></div>
        <div class="flex space-x-4">
          <button class="button-landing hover:bg-blue-900 text-white px-10 py-6 rounded-full text-lg border-2px;">
            <p style="font-weight: bold; margin-top: -3px; margin-bottom: -3px;">Register Now!</p>
          </button>
          <div class="horizontal-spacer"></div>
          <button href="#about" class="button-landing hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg">
            <p style="font-weight: normal; margin-top: -3px; margin-bottom: -3px">Learn More</p>
          </button>
        </div>
        <br>
      </div>
    </div>
  </div>

  <!-- Color Info Block -->
  <div id="about"class="hero-bg-container; height: 80%;">
    <img class="bg-image" src="./color_take_3.png" alt="Color Info Block">
  </div>

  
  <!-- About Section -->
  <div class="spacer-div-margin"></div>
  <br><br><br><br><br><br><br><br><br><br><br><br>
  <div class="bg-gray-900 py-20">
    <div class="max-w-4xl mx-auto px-4 text-left smaller-text-container">
      <h2 class="text-4xl font-bold text-white mb-8">About</h2>
      <br>
      <p1 class="text-2xl text-gray-300 mb-12 text-left">
        Join us this summer for our <span style="color: #5270ff;">first-ever</span> week-long innovation challenge.
        Over seven days, you and your team will build a functional prototype with real-world applications.
        <br><br>
        This isn't your typical weekend hackathon. Our extended format allows for deeper research and development. 
        Work daily with experienced industry mentors who will guide you from concept to working demo.
        <br><br>
        Whether you're a seasoned programmer or just starting out, 
        this is your chance to build industry connections, learn from experts, and bring your ideas to life.
      </p>
    </div>
    <br><br>
    <div class="max-w-4xl mx-auto px-4 text-left smaller-text-container">
      <h1 class="text-4xl font-bold text-white mb-8">Event Highlights</h1>
      <br>
      <p2 class="text-2xl text-gray-300 mb-12 text-left">
        <span style="color:#595da8; margin-right: 10px;"> ~ %</span>
          <span style="color:rgb(114, 115, 123);">7 days</span> of intensive development (Mon-Sun, 9AM-9PM)<br>
        <span style="color:#595da8; margin-right: 10px;"> ~ %</span>
          <span style="color: #5270ff;">Daily mentorship</span> from industry experts<br>
        <span style="color:#595da8; margin-left: 10px; margin-right: 10px;">>></span>
          <span style="color:rgb(141, 158, 244);">3 challenge tracks</span> with real problem statements<br>
        <span style="color:#595da8; margin-left: 10px; margin-right: 10px;">>></span>
          <span style="color:rgb(90, 205, 247);">Free access</span> to premium APIs, hardware, and cloud credits<br>
        <span style="color:#595da8; margin-left: 23px; margin-right: 10px;">$ </span>
          <span style="color:rgb(69, 72, 91);">Live demos</span> to investors and potential employers<br>
      </p2>
    </div>
  </div>

  <!-- Schedule -->
  <br><br><br>
  <div class="separator">
    <div class="diagonal-12"></div>
  </div>
  <br><br><br>

  <!-- Schedule -->
  <div id="schedule" class="bg-gray-800 py-20">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-12">Event Timeline</h1>
      
      <div class="space-y-4">
        <!-- Registration Deadline -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">August 9th - Last day to register!</h3>
          </div>
        </div>
        
        <!-- Saturday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Saturday, August 9th - Day 1</h3>
          </div>
          <p class="text-gray-400 mb-2">Hackathon begins</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Sunday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Sunday, August 10th - Day 2</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 2 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Monday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Monday, August 11th - Day 3</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 3 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Tuesday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Tuesday, August 12th - Day 4</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 4 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Wednesday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Wednesday, August 13th - Day 5</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 5 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Thursday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Thursday, August 14th - Day 6</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 6 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Friday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Friday, August 15th - Day 7</h3>
          </div>
          <p class="text-gray-400 mb-2">Final day of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Demo Day -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Saturday, August 16th - Demo Day</h3>
          </div>
          <p class="text-gray-400 mb-2">Judge and demo day</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="spacer-div-margin"></div>

  <!-- Project Tracks -->
  <div id="areas" class="bg-gray-900 py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-12 font-size: 3em">Project Tracks</h1>
      <br><br>
      <div class="grid grid-cols-3 gap-8">
        <div class="bg-gray-800 p-8 rounded-lg">
          <img src="./ai_brain_2.png" alt="Brain AI" class="w-1/2 h-1/2"> 
          <h3 class="text-2xl font-bold text-white mb-4">AI</h3>
          <p class="text-gray-300 mb-4">Artificial intelligence, machine learning, <br> & large language models</p>
          <br>
          <div class="text-sm text-blue-400">
            <strong>Coaches:</strong> ??
          </div>
        </div>

        <div class="bg-gray-800 p-8 rounded-lg">
          <img src="./robotics_2.png" alt="Graphing Robot" class="w-1/3 h-1/2"> 
          <h3 class="text-2xl font-bold text-white mb-4">Robotics</h3>
          <p class="text-gray-300 mb-4">Robotics, hardware, IoT <br>(some equipment available)</p>
          <br>
          <div class="text-sm text-blue-400">
            <strong>Coaches:</strong> ??
          </div>
        </div>
        
        <div class="bg-gray-800 p-8 rounded-lg">
          <img src="./architecture_2.png" alt="Web Abstract" class="w-1/2 h-1/2"> 
          <h3 class="text-2xl font-bold text-white mb-4">Other</h3>
          <p class="text-gray-300 mb-4">Biology, chemistry, music, art, etc.
            <br>Interdisciplinary applications of your choice!</p>
          <br>
          <div class="text-sm text-green-400">
            <strong>Coaches:</strong> ??
          </div>
        </div>

        
      </div>
      <br><br>
      <div class="text-center mt-8">
        <p class="text-gray-400">Specific project tracks and coaches may be added based on participant interest.
        <br> You are welcome to propose a project track!</p>
      </div>
    </div>
  </div>
  <br><br>

  <!-- Organizers Section -->
  <div class="bg-gray-900 py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-12">Speakers & Organizers (mentors?)</h1>
      <br><br><br><br>
      <div class="grid grid-cols-4 gap-5 items-center justify-items-center">
        <div class="max-w-6xl mx-auto px-4 ">
          <img src="./dave_3.png" alt="Person 1" class="headshot"> 
          <br><br>
          <p1>Dave Wang</p1>
          <p>Senior Software Engineer, Cisco</p>
        </div>
        <div class="max-w-6xl mx-auto px-4">
          <img src="./person1.png" alt="Person 2" class="headshot"> 
          <br><br>
          <p1>Person Name</p1>
          <p>Person Title + Company</p>
          <p> Maybe special interests? </p>
        </div>
        <p>More coming soon! [NAME, HEADSHOT, DESCRIPTION]</p>
      </div>
    </div>
  </div>

  <div class="spacer-div-margin"></div>
  <!-- Sponsors Section -->
  <div class="bg-gray-900 py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-white text-center mb-12">Partners & Sponsors</h2>
      
      <div class="grid grid-cols-4 gap-5 items-center justify-items-center">
        <img src="./beshton_software_logo.png" alt="Beshton Software Logo" class="logo-beshton logo-black"> 
        <img src="./panbotica.png" alt="Panbotica Logo" class="logo-panbotica logo-black">
        <p>More coming soon! [ALUMNI GROUPS ETC]</p>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-black py-20">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h1 class="text-4xl font-bold text-white mb-6">Ready to Join Our Innovation Challenge?</h2>
      <p class="text-xl text-gray-400 mb-8">Connect with great mentors. Transform your ideas into reality. Shape what's next. <br>Secure your spot for $50.</p>
      <div class="mt-6 text-gray-500">
        Registration closes August 9th.
      </div>
      <br>
      <button class="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-12 py-4 rounded-full text-xl font-bold">
        Enroll Now
      </button>
      
    </div>
  </div>
  <br><br>

  <!-- FAQ -->
  <div id="faq"></div>

  <!-- Footer -->
  <footer class="bg-gray-900 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-4 gap-8">
        <div>
          <h3 class="text-white font-bold mb-4 font-size:1.5em;">[Insert Name] Hackathon 2025</h3>
          <p class="text-gray-400">Empowering youth through technology and innovation</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Quick Links</h4>
          <div class="space-y-2">
            <a href="#about" class="text-gray-400 hover:text-white block">About</a>
            <a href="#participants" class="text-gray-400 hover:text-white block">Participants</a>
            <a href="#areas" class="text-gray-400 hover:text-white block">Project Areas</a>
            <a href="#schedule" class="text-gray-400 hover:text-white block">Schedule</a>
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Contact</h4>
          <div class="space-y-2 text-gray-400">
            <div>hello@[INSERT NAME]hackathon.com</div>
            <div>Registration form coming soon!</div>
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Format</h4>
          <div class="space-y-2">
            <div class="text-gray-400">Mountain View + Remote</div>
            <div class="text-gray-400">Hybrid Experience</div>
          </div>
        </div>
      </div>
      <br>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <br>
        © 2025 [Insert Name] Hackathon. All rights reserved.
      </div>
    </div>
  </footer>
  
`;const V=Z();document.querySelector("#faq").appendChild(V);
