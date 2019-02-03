/*
_____                     ______
__  /_____  _________________  /___________________
_  __/_  / / /__  __ \  _ \_  __ \  _ \_  ___/  __ \
/ /_ _  /_/ /__  /_/ /  __/  / / /  __/  /   / /_/ /
\__/ _\__, / _  .___/\___//_/ /_/\___//_/    \____/
     /____/  /_/

Federico Ghedina - 2019
~44KB
*/
!function(){function Balle(t){var e=this,n=!1;this.status=Balle.STATUSES.PENDING,this.value=void 0,this.cause=void 0,this.resolvers=this.resolvers||[],this.rejectors=this.rejectors||[],
this.finalizers=this.finalizers||[],t=t||function(){};try{t(function(t){n||e.status!==Balle.STATUSES.PENDING||(n=!0,e.status=Balle.STATUSES.FULFILLED,e.value=t,Balle.roll(e.resolvers,"value",e),
Balle.roll(e.finalizers,"value",e))},function(t){n||e.status!==Balle.STATUSES.PENDING||(n=!0,e.status=Balle.STATUSES.REJECTED,e.cause=t,Balle.roll(e.rejectors,"cause",e),
Balle.roll(e.finalizers,"cause",e))})}catch(t){return Balle.reject(t.message)}return this}!function(t){function e(t,e,n){var o,i,s=this.namespaces={cc:"http://creativecommons.org/ns#",
dc:"http://purl.org/dc/elements/1.1/",ev:"http://www.w3.org/2001/xml-events",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"
},a=this;n=n||{},this.tag=r("svg"),this.tag.setAttribute("width",t),this.tag.setAttribute("height",e),this.tag.setAttribute("xmlns","http://www.w3.org/2000/svg"),
this.tag.setAttribute("viewbox","0 0 "+t+" "+e),this.childs=[];for(o in n)"ns"!==o&&"target"!==o&&this.tag.setAttribute(o,n[o]);if(this.target="target"in n?n.target:null,
"ns"in n)for("*"===n.ns&&(n.ns=Object.keys(s)),o=0,i=n.ns.length;o<i;o++)!function(t){t in s&&a.tag.setAttribute("xmlns:"+t,s[t])}(n.ns[o])}function n(){this.path="",this.previous=null}function o(t){
return function(){var e=this.previous===t?" ":t;return this.path+=[e].concat([[].slice.call(arguments,0).join(",")]).join(" ")+" ",this.previous=t,this}}function r(t,e){
return e=e||"http://www.w3.org/2000/svg",document.createElementNS(e,t)}function i(t){return t*Math.PI/180}function s(t,e){this.t=t,this.tag=r(t,e),this.childs=[],this.events={},this.transforms={
rotate:"",move:"",scale:""}}e.import=function(t){"string"==typeof t&&(t=e.toDocument(t));var n=new e(1,1);return n.tag=t.children[0],n},e.getqs=function(){
var t,e,n=document.location.search.substr(1),o=n.split("&"),r={};for(t in o)e=o[t].split("="),r[e[0]]=e.length>1?decodeURIComponent(e[1]):null;return r},e.toString=function(t){
var e=document.createElement("div");return e.appendChild(t),e.innerHTML},e.toDocument=function(t){return(new DOMParser).parseFromString(t,"image/svg+xml")},e.prototype.attrs=function(t){var e
;if("string"==typeof t)return this.tag.getAttribute(t);for(e in t)this.tag.setAttribute(e,t[e]);return this},e.prototype.styles=function(t){var e;for(e in t)this.tag.style[e]=t[e];return this},
e.prototype.add=function(){var t=this;return[].slice.call(arguments,0).forEach(function(e){e instanceof Array?e.forEach(function(e){t.childs.push(e),t.add(e)}):(t.childs.push(e),
t.tag.appendChild(e.tag))}),this},e.prototype.render=function(t,e){var n=t||this.target;return n.innerHTML="",n.appendChild(this.tag),e&&e.call(this),this},e.prototype.downloadAnchor=function(){
var t=new XMLSerializer,e='<?xml version="1.0" standalone="no"?>\r\n'+t.serializeToString(this.tag),n=null
;e.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)||(e=e.replace(/^<svg/,'<svg xmlns="'+this.namespaces.svg+'"')),
e.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)||(e=e.replace(/^<svg/,'<svg xmlns:xlink="'+this.namespaces.xlink+'"')),n="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e)
;var o=document.createElement("a");return o.download="download"+ +new Date+".svg",o.href=n,o.addEventListener("click",function(){this.download="download"+ +new Date+".svg"}),o.innerHTML="download",o},
e.prototype.circle=function(t,e,n){var o=new s("circle");return o.attrs({cx:t,cy:e,r:n}),o},e.prototype.desc=function(t){var e=new s("desc");return e.tag.innerHTML=t,e},
e.prototype.ellipse=function(t,e,n,o){var r=new s("ellipse");return r.attrs({cx:t,cy:e,rx:n,ry:o}),r},e.prototype.group=function(){return new s("g")},e.prototype.image=function(t,e,n,o,r){
var i=new s("image");return i.attrs({x:t,y:e,width:n,height:o}),i.tag.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r),i},e.prototype.line=function(t,e,n,o){var r=new s("line")
;return r.attrs({x1:t,y1:e,x2:n,y2:o}),r},e.prototype.path=function(t){var e=new s("path");return e.attrs({d:t}),e},e.prototype.polygon=function(){
var t=new s("polygon"),e=[].slice.call(arguments,0),n=[],o=0,r=e.length;for(null;o<r;o+=2)n.push(e[o]+","+e[o+1]);return t.attrs({points:n.join(" ")}),t},e.prototype.polyline=function(){
var t=new s("polyline"),e=[].slice.call(arguments,0),n=[],o=0,r=e.length;for(null;o<r;o+=2)n.push(e[o]+","+e[o+1]);return t.attrs({points:n.join(" ")}),t},e.prototype.rect=function(t,e,n,o){o=o||n
;var r=new s("rect");return r.attrs({x:t,y:e,width:n,height:o}),r},e.prototype.text=function(t,e,n){var o=new s("text");return o.attrs({x:t,y:e}),o.tag.innerHTML=n,o},
e.prototype.textPath=function(t,e,n){var o=this,r=new s("text"),i=new s("defs"),a=o.path(e),c=new s("textPath");return a.attrs({id:t}),c.tag.innerHTML=n,
c.tag.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+t),r.add(i),r.add(c),i.add(a),r},e.prototype.title=function(t){var e=new s("title");return e.tag.innerHTML=t,e},
e.prototype.script=function(t){var e=new s("script");return e.attrs({type:"application/ecmascript"}),t&&(e.tag.innerHTML="//<![CDATA[\n"+t+"\n]]>"),e},n.prototype.M=o("M"),n.prototype.m=o("m"),
n.prototype.Z=o("Z"),n.prototype.L=o("L"),n.prototype.l=o("l"),n.prototype.H=o("H"),n.prototype.h=o("h"),n.prototype.V=o("V"),n.prototype.v=o("v"),n.prototype.C=o("C"),n.prototype.c=o("c"),
n.prototype.Q=o("Q"),n.prototype.q=o("q"),n.prototype.S=o("S"),n.prototype.s=o("s"),n.prototype.T=o("T"),n.prototype.t=o("t"),n.prototype.A=o("A"),n.prototype.a=o("a"),n.prototype.R=o("R"),
e.prototype.pathBuild=function(){var t=new n;return t.toString=function(){var t=this.path+"";return this.path="",t},t}(),e.prototype.slice=function(t,e,n,o,r){var i=this,s=i.slicePath(t,e,n,o,r)
;return i.path(s)},e.prototype.slicePath=function(t,e,n,o,r){var s=this,a=0;if(o>r){var c=o;o=r,r=c}return a=r-o<=180?0:1,o=i(o),r=i(r),
s.pathBuild.M(t,e).L(t+Math.cos(o)*n,e-Math.sin(o)*n).A(n,n,0,a,0,t+Math.cos(r)*n,e-Math.sin(r)*n).L(t,e)};var a=0;e.prototype.filters=function(){function t(){return"leo_id_"+ ++a}function e(e){
var n,o,i=t(),a=new s("linearGradient");a.attrs({id:i,x1:"0%",y1:"0%",x2:"100%",y2:"0%"});for(n in e)o=new s("stop"),o.attrs({offset:n+"%",style:"stop-opacity:1;stop-color:"+e[n]}),a.add(o)
;return r.add(a),"url(#"+i+")"}function n(e){var n,o,i=t(),a=new s("radialGradient");a.attrs({id:i});for(n in e)o=new s("stop"),o.attrs({offset:n+"%",style:"stop-opacity:1;stop-color:"+e[n]}),a.add(o)
;return r.add(a),"url(#"+i+")"}var o=this,r=null;return this.defs?r=this.defs:(r=this.defs=new s("defs"),o.add(this.defs)),{lGrad:e,rGrad:n}},e.prototype.animate=function(){function t(t,e,n){
var o=0,r=0,i=0;setInterval(function(){r=e(r,o),i=n(i,o),o+=.1,t.move(r,i)},20)}function e(t,e,n){var o=0,r=0,i=0;setInterval(function(){r=e(r,o),i=n(i,o),o+=.1,t.move(r*Math.cos(i),r*Math.sin(i))
},20)}function n(t,e,n,o,r){var i=new s("animate");return i.attrs({attributeType:"XML",attributeName:t,from:e,to:n,dur:o,repeatCount:r}),i}return{pCart:t,pPolar:e,attr:n}}(),
s.prototype.attrs=e.prototype.attrs,s.prototype.styles=e.prototype.styles,s.prototype.add=e.prototype.add,s.prototype.on=function(t,e){
return t in this.events?this.events[t].push(e):this.events[t]=[e],this.tag.addEventListener(t,e),this},s.prototype.off=function(t,e){var n=this
;return t in this.events&&(void 0===e?(this.events[t].forEach(function(e){n.tag.removeEventListener(t,e)}),this.events[t]=null):n.tag.removeEventListener(t,e)),this},s.prototype.clone=function(){
var t,e=new s(this.t),n=this.tag.attributes,o=(this.tag.children,0);for(e.transforms.rotate=this.transforms.rotate,e.transforms.move=this.transforms.move,e.transforms.scale=this.transforms.scale,o=0,
t=n.length;o<t;o++)e.tag.setAttribute(n[o].name,n[o].value);for(o=0,t=this.childs.length;o<t;o++)e.add(this.childs[o].clone());return e},s.prototype.trans=function(){return this.attrs({
transform:this.transforms.rotate+" "+this.transforms.move+" "+this.transforms.scale}),this},s.prototype.rotate=function(t,e,n){return e=e||0,n=n||0,this.transforms.rotate=" rotate("+t+" "+e+" "+n+")",
this.trans()},s.prototype.scale=function(t,e){return t=t||0,e=e||0,this.transforms.scale=" scale("+t+", "+e+")",this.trans()},s.prototype.mirrorO=function(){
return this.transforms.scale=" scale(1, -1)",this.trans()},s.prototype.mirrorV=function(){return this.transforms.scale=" scale(-1, 1)",this.trans()},s.prototype.move=function(t,e){return t=t||0,
e=e||0,this.transforms.move=" translate("+t+" "+e+")",this.trans()},s.prototype.clear=function(){this.tag.parentNode.removeChild(this.tag)},s.prototype.replace=function(t,e){
t.tag.parentNode.replaceChild(e.tag,t.tag)};var c=function(t,n,o){return t&&n?new e(t,n,o):{ERROR:"width or height not given!"}};c.import=e.import,c.getqs=e.getqs,t.Leonardo=c}(window)
;var Channeljs=function(){"use strict";var t={},e=function(t,e){return t.indexOf(e)},n=function(){this.topic2cbs={},this.lateTopics={},this.enabled=!0},o=function(t,e){var n=t.enabled
;return t.enabled=e,n!==t.enabled},r=n.prototype;return r.enable=function(){return o(this,!0)},r.disable=function(){return o(this,!1)},r.pub=function(t,e){var n,o=0,r=[]
;if(!(t in this.topic2cbs&&this.enabled))return t in this.lateTopics?this.lateTopics[t].push({args:e}):this.lateTopics[t]=[{args:e}],null
;for(n=this.topic2cbs[t].length;o<n;o+=1)r.push(this.topic2cbs[t][o].apply(null,e));return r},r.sub=function(t,e,n){var o,r=0,i=[];if(t in this.topic2cbs&&this.enabled||(this.topic2cbs[t]=[]),
this.topic2cbs[t].push(e),n&&t in this.lateTopics){for(r=0,o=this.lateTopics[t].length;r<o;r++)i.push(e.apply(null,this.lateTopics[t][r].args));return i}},r.unsub=function(t,n){var o=0
;return t in this.topic2cbs&&(o=e(this.topic2cbs[t],n))>=0&&this.topic2cbs[t].splice(o,1)&&0===this.topic2cbs[t].length&&delete this.topic2cbs[t],t in this.lateTopics&&delete this.lateTopics[t],this},
r.once=function(t,e,n){function o(){return r.unsub(t,o),e.apply(null,Array.prototype.slice.call(arguments,0))}var r=this;return this.sub(t,o,n)},r.reset=function(){
var t=Array.prototype.slice.call(arguments,0),e=t.length,n=0;if(!e)return this.topic2cbs={},this.lateTopics={},this;for(null;n<e;n+=1)t[n]in this.topic2cbs&&delete this.topic2cbs[t[n]],
t[n]in this.lateTopics&&delete this.lateTopics[t[n]];return this},{getChannels:function(e){var n,o={};if("boolean"==typeof e)for(n in t)t[n].enabled===e&&(o[n]=t[n]);else o=t;return o},
get:function(e){return e in t||(t[e]=new n),t[e]}}}();"object"==typeof exports&&(module.exports=Channeljs),Balle.roll=function(t,e,n){t.forEach(function(t){t(n[e])},n)},
Balle.prototype.resolve=function(t){return Balle.call(this,function(e,n){return e(t)})},Balle.prototype.reject=function(t){return Balle.call(this,function(e,n){return n(t)})},
Balle.prototype.launch=function(t){return Balle.call(this,t)},Balle.prototype.then=function(t,e){switch(this.status){case Balle.STATUSES.REJECTED:Balle.roll(this.rejectors,"cause",this);break
;case Balle.STATUSES.PENDING:this.resolvers.push(t),e&&this.rejectors.push(e);break;case Balle.STATUSES.FULFILLED:t(this.value)}return this},Balle.prototype.catch=function(t){switch(this.status){
case Balle.STATUSES.PENDING:this.rejectors.push(t);break;case Balle.STATUSES.REJECTED:return t(this.cause)}return this},Balle.prototype.finally=function(t){return this.finalizers.push(t),this},
Balle.STATUSES={PENDING:"PENDING",FULFILLED:"FULFILLED",REJECTED:"REJECTED"},Balle._isFunc=function(t){return"function"==typeof t},Balle._isIterable=function(t){
return null!=t&&Balle._isFunc(t[Symbol.iterator])},Balle.one=function(t){return new Balle(t)},Balle.all=function(t){
if(!Balle._isIterable(t))return Balle.reject("Balle.all acceps an Iterable Promise only");var e=[],n=t.length,o=0;return new Balle(function(r,i){t.forEach(function(t,s){
"REJECTED"==t.status&&i(t.cause),t.then(function(t){o++,e[s]=t,o==n&&r(e)}).catch(i)})})},Balle.race=function(t){return Balle._isIterable(t)?new Balle(function(e,n){t.forEach(function(t){
t.then(e).catch(n)})}):Balle.reject("Balle.race acceps an Iterable Promise only")},Balle.chain=function(t){if(!Balle._isIterable(t))return Balle.reject("Balle.chain acceps an Iterable Promise only")
;var e=t.length;return new Balle(function(n,o){!function r(i,s){return i==e?n(s):t[i](s).then(function(t){r(++i,t)}).catch(function(t){o(t)})}(0)})},Balle.reject=function(t){
return new Balle(function(e,n){return n(t)})},Balle.resolve=function(t){return new Balle(function(e,n){t instanceof Balle?t.then(e).catch(n):e(t)})},"object"==typeof exports&&(module.exports=Balle)
;var Ridof=function(){"use strict";function t(){return{}}function e(t){if("object"!=typeof t())throw new Error("Reducer should return an object")}function n(t,e,n){var o=t.states[t.currentIndex]
;t.listeners.forEach(function(t){t(o,e,n)}),t.currentIndex<t.states.length-1&&(t.states=t.states.slice(0,t.currentIndex)),t.states[++t.currentIndex]=e}function o(n,o){this.reducer=n||t,
this.state=o||this.reducer(),e(n),this.states=[this.state],this.currentIndex=0,this.listeners=[]}return o.prototype.getState=function(){return this.states[this.currentIndex]},
o.prototype.dispatch=function(t){if(!("type"in t))throw new Error("Actions needs a type");var e,o=t.type,r=this.states[this.currentIndex],i=this.reducer(r,o,t);delete i.type
;for(e in t)"type"!==e&&(i[e]=t[e]);return n(this,i,o),this},o.prototype.subscribe=function(t){var e,n=this;return this.listeners.push(t),e=this.listeners.length-1,function(){
n.listeners=n.listeners.slice(0,e).concat(n.listeners.slice(e+1))}},o.prototype.replaceReducer=function(t){e(t),this.reducer=t},o.prototype.reset=function(){var t=this.states[0];this.states=[t],
this.currentIndex=0,this.listeners=[]},o.prototype.move=function(t){if(0===t)return this;var e=this,n=this.currentIndex+t,o=this.getState(),r=t>0?"FORWARD":"BACKWARD",i=n>-1&&n<this.states.length
;return this.currentIndex=i?n:this.currentIndex,i&&this.listeners.forEach(function(t){t(o,e.getState(),{type:"TIMETRAVEL_"+r})}),this},{getStore:function(t,e){return new o(t,e)},isStore:function(t){
return t instanceof o}}}();"object"==typeof exports&&(module.exports=Ridof),function(W,_U_,_P_){"use strict";function Wnode(t,e,n,o){var r=this;this.id=NS.utils.uniqueId+"",this.conf=t,this.done=e,
this.map=n,this.parent=o,this.children=[],this.data={},this.sub={},this.attrs={},this.style={},this.tag=t.tag||"div",this.conf.style=this.conf.style||{},this.conf.attrs=this.conf.attrs||{},
this.conf.data=this.conf.data||{},this.doRender=!0,this.root=n.rootNode,this.abort=n.abort,this.getNode=n.getNode,this.getNodes=n.getNodes,this.lateWid=n.lateWid,this.report=function(){
W.JSON&&console.log("json size : "+NS.utils.toMemFormat(JSON.stringify(r.conf).length,"B")),console.log("html size : "+NS.utils.toMemFormat(r.node.innerHTML.length,"B"))},this.events={onClick:!0,
onMouseover:!0,onMouseout:!0,onMouseleave:!0,onDblclick:!0,onFocus:!0,onChange:!0,onInput:!0,onSelect:!0,onKeyup:!0,onKeydown:!0,onKeypress:!0,onSubmit:!0,onBlur:!0}}
console.log("\n\n WIDGZARD v.3.0.3\n\n");var NS={},WD=W.document;+function(){function t(e,n,o){e=e.replace(/^\//,"");var r,i=e.split(/\.|\//),s=i.length;return typeof o===_U_&&(o=NS),
typeof n===_U_&&(n={}),"function"==typeof n&&(n=n()),o[i[0]]||(o[i[0]]=1===s?n:{}),r=o[i[0]],s>1?t(i.slice(1).join("."),n,o[i[0]]):r}function e(t,e){t=t.replace(/^\//,"")
;var n=t.split(/\.|\//),o=0,r=n.length;if(e=typeof e!==_U_?e:_context_,!t)return e;for(null;o<r;o+=1){if(typeof e[n[o]]===_U_)return;e=e[n[o]]}return e}function n(t,e){
var n,o="function"==typeof e?e():e;for(n in o)typeof t[n]===_U_&&(t[n]=o[n])}NS.makeNs=t,NS.checkNs=e,NS.extendNs=n,NS.debug=function(){var t=_AP_.prototype.slice.call(arguments,0)
;"debug"in console&&console.debug.apply(console,t)},NS.log=function(){var t=_AP_.prototype.slice.call(arguments,0);"log"in console&&console.log.apply(console,t)},NS.dbg=function(t){try{console.log(t)
}catch(e){try{opera.postError(t)}catch(e){alert(t)}}},NS.makeNs("utils",{uniqueId:new function(){var t=0,e=this;this.prefix="NS_",this.toString=function(){return t+=1,e.prefix+t}},
eulerWalk:function(t,e,n){n={pre:"pre",post:"post"}[n]||"post";var o=function(){},r="pre"===n?e:o,i="post"===n?e:o;!function t(e,n){for(r(e),n=e.firstChild;n;)t(n),n=n.nextSibling;i(e)}(t)},
replaceDataInTxt:function(t,e){return t.replace(/\$([A-z]*)\$/g,function(t,n){var o=n.replace(/\$/g,"");return o in e?e[o]:""})},toMemFormat:function(t,e){if(!t)return t+(e||"")
;for(var n=["","K","M","G","T","P","E","Z","Y"],o=0;t/Math.pow(1024,o+1)>1;)o++;return""+(t/Math.pow(1024,o)).toFixed(2).replace(/\.?0+$/,"")+n[o]+(e||"")},getViewportSize:function(){
var t=WD.documentElement;return typeof W.innerWidth!=_U_?{width:W.innerWidth,height:W.innerHeight}:typeof t!=_U_&&typeof t.clientWidth!=_U_&&0!=t.clientWidth?{width:t.clientWidth,height:t.clientHeight
}:{width:WD.getElementsByTagName("body")[0].clientWidth,height:WD.getElementsByTagName("body")[0].clientHeight}},isMobile:function(){
return(typeof W.matchMedia!=_U_||typeof W.msMatchMedia!=_U_)&&W.matchMedia("(pointer:coarse)").matches}})}(),function(){function t(e){var n=this,o=!1;this.status=t.STATUSES.PENDING,this.value=void 0,
this.cause=void 0,this.resolvers=this.resolvers||[],this.rejectors=this.rejectors||[],this.finalizers=this.finalizers||[],e=e||function(){};try{e(function(e){o||n.status!==t.STATUSES.PENDING||(o=!0,
n.status=t.STATUSES.FULFILLED,n.value=e,t.roll(n.resolvers,"value",n),t.roll(n.finalizers,"value",n))},function(e){o||n.status!==t.STATUSES.PENDING||(o=!0,n.status=t.STATUSES.REJECTED,n.cause=e,
t.roll(n.rejectors,"cause",n),t.roll(n.finalizers,"cause",n))})}catch(e){return t.reject(e.message)}return this}t.roll=function(t,e,n){t.forEach(function(t){t(n[e])},n)},
t.prototype.resolve=function(e){return t.call(this,function(t,n){return t(e)})},t.prototype.reject=function(e){return t.call(this,function(t,n){return n(e)})},t.prototype.launch=function(e){
return t.call(this,e)},t.prototype.then=function(e,n){switch(this.status){case t.STATUSES.REJECTED:t.roll(this.rejectors,"cause",this);break;case t.STATUSES.PENDING:this.resolvers.push(e),
n&&this.rejectors.push(n);break;case t.STATUSES.FULFILLED:e(this.value)}return this},t.prototype.catch=function(e){switch(this.status){case t.STATUSES.PENDING:this.rejectors.push(e);break
;case t.STATUSES.REJECTED:return e(this.cause)}return this},t.prototype.finally=function(t){return this.finalizers.push(t),this},t.STATUSES={PENDING:"PENDING",FULFILLED:"FULFILLED",REJECTED:"REJECTED"
},t._isFunc=function(t){return"function"==typeof t},t._isIterable=function(e){return null!=e&&t._isFunc(e[Symbol.iterator])},t.one=function(e){return new t(e)},t.all=function(e){
if(!t._isIterable(e))return t.reject("Balle.all acceps an Iterable Promise only");var n=[],o=e.length,r=0;return new t(function(t,i){e.forEach(function(e,s){"REJECTED"==e.status&&i(e.cause),
e.then(function(e){r++,n[s]=e,r==o&&t(n)}).catch(i)})})},t.race=function(e){return t._isIterable(e)?new t(function(t,n){e.forEach(function(e){e.then(t).catch(n)})
}):t.reject("Balle.race acceps an Iterable Promise only")},t.chain=function(e){if(!t._isIterable(e))return t.reject("Balle.chain acceps an Iterable Promise only");var n=e.length
;return new t(function(t,o){!function r(i,s){return i==n?t(s):e[i](s).then(function(t){r(++i,t)}).catch(function(t){o(t)})}(0)})},t.reject=function(e){return new t(function(t,n){return n(e)})},
t.resolve=function(e){return new t(function(n,o){e instanceof t?e.then(n).catch(o):n(e)})},"object"==typeof exports&&(module.exports=t),NS.Balle=t}(),function(){var t=W.history,e=[],n=function(t,n,o){
e.forEach(function(e){e(t,n,o)})};NS.makeNs("history",{push:function(e,o,r){t.pushState(o||{},r||"",e),n(e,o,r)},registerHandler:function(t){e.push(t)},replace:function(e,o,r){
t.replaceState(o||{},r||"",e),n(e,o,r)},resetHandlers:function(){e=[]},state:function(){return t.state}})}(),function(){var t={events:{wwdb_bindings:{},getElementDeterminant:function(t){
return t.tagName.match(/input|textarea|select/i)?"value":"innerHTML"},getElementEvent:function(t){return t.tagName.match(/input|textarea/i)?"input":"change"}},unhandlers:{}};NS.makeNs("events",{
saveUnhandler:function(e,n){t.unhandlers[e]=t.unhandlers[e]||[],t.unhandlers[e].push(n)},unhandle:function(e){t.unhandlers[e]&&t.unhandlers[e].forEach(function(t){t()}),t.unhandlers=[]},on:function(){
function t(t,e,n){NS.events.saveUnhandler(t,function(){NS.events.off(t,e,n)})}return"addEventListener"in W?function(e,n,o){e.addEventListener.apply(e,[n,o,!1]),t(e,n,o)
}:"attachEvent"in W?function(e,n,o){e.attachEvent.apply(e,["on"+n,o]),t(e,n,o)}:function(){throw new Error("No straight way to bind an event")}}(),off:function(){
return"removeEventListener"in W?function(t,e,n){t.removeEventListener(e,n)}:"detachEvent"in W?function(t,e,n){t.detachEvent.apply(t,["on"+e,n])}:function(){
throw new Error("No straight way to unbind an event")}}(),kill:function(t){return t||(t=W.event,t.cancelBubble=!0,t.returnValue=!1),"stopPropagation"in t&&t.stopPropagation()&&t.preventDefault(),!1},
eventTarget:function(t){t=t||W.event;var e=t.currentTarget||void 0!==t.target?t.target:t.srcElement;if(!e)return!1;for(;3===e.nodeType&&null!==e.parentNode;)e=e.parentNode;return e},ready:function(){
var t,e,n=[],o=setInterval(function(){if("complete"===document.readyState)for(clearInterval(o),t=0,e=n.length;t<e;t++)n[t].call(this)},10);return function(t){
"complete"===document.readyState?t.call(this):n.push(t)}}(),ww:{on:function(e,n,o,r){var i=!1,s=!1,a=t.events.getElementDeterminant(o),c=t.events.getElementEvent(o),l=o[a],u=e[n],h=function(t){i=s=!!t
};o.wwdbID="_"+NS.utils.uniqueid,t.events.wwdb_bindings[o.wwdbID]=W.setInterval(function(){i||(h(!0),u!=e[n]&&(l=e[n],u=l,o[a]=l),h(!1))},25),NS.events.on(o,c,function(){s||(h(!0),
this[a]!==e[n]&&(e[n]=this[a],l=this[a],u=this[a]),h(!1))}),o[a]=u},off:function(){for(var e=[].slice.call(arguments,0),n=e.length;n-- >0;)NS.events.off(e[n],"keyup"),
W.clearInterval(t.events.wwdb_bindings[e[n].wwdbID])}}})}(),NS.Channel=function(){var t={},e=function(t,e){if("indexOf"in t)return t.indexOf(e);for(var n=t.length-1;n>=0&&t[n]!==e;)n--;return n
},n=function(){this.topic2cbs={},this.lateTopics={},this.enabled=!0};return n.prototype={enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},pub:function(t,e){var n,o=0
;if(!(t in this.topic2cbs&&this.enabled))return t in this.lateTopics?this.lateTopics[t].push({args:e}):this.lateTopics[t]=[{args:e}],!1
;for(n=this.topic2cbs[t].length;o<n;o+=1)this.topic2cbs[t][o].apply(null,[t].concat(e));return!0},sub:function(t,n,o){var r,i=0;if(t instanceof Array)for(r=t.length;i<r;i+=1)this.sub(t[i],n,o)
;if(t in this.topic2cbs&&this.enabled||(this.topic2cbs[t]=[]),!o&&e(this.topic2cbs[t],n)>=0)return this;if(this.topic2cbs[t].push(n),t in this.lateTopics)for(i=0,
r=this.lateTopics[t].length;i<r;i++)n.apply(null,[t].concat(this.lateTopics[t][i].args))},unsub:function(t,n){var o,r=0;if(t instanceof Array)for(o=t.length;r<o;r+=1)this.unsub(t[r],n)
;return t in this.topic2cbs&&(r=e(this.topic2cbs[t],n))>=0&&this.topic2cbs[t].splice(r,1),t in this.lateTopics&&(r=e(this.lateTopics[t],n))>=0&&this.lateTopics[t].splice(r,1),this},once:function(t,e){
function n(){e.apply(null,Array.prototype.slice.call(arguments,0)),o.unsub(t,n)}var o=this;this.sub(t,n)},reset:function(){var t=Array.prototype.slice.call(arguments,0),e=t.length,n=0
;if(!e)return this.topic2cbs={},this.lateTopics={},this;for(null;n<e;n+=1)t[n]in this.topic2cbs&&(this.topic2cbs[t[n]]=[]),t[n]in this.lateTopics&&(this.lateTopics[t[n]]=[]);return this}},function(e){
return e in t||(t[e]=new n),t[e]}}(),function(){function t(t,e){var n,o="";for(n in t)t.hasOwnProperty(n)&&(o+=e(t,n,o));return o}function e(t,e){
return n(t)||"undefined"==typeof JSON?t===e:JSON.stringify(t)===JSON.stringify(e)}function n(t){
return"object"==typeof Node?t instanceof Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName}function o(t){
return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function r(t,r,i,s){
if(!t.match(/key|value|keyvalue/))throw new Error("Bad param for object.digFor");s=parseInt(s,10);var a=0,c={key:function(t,n,o){return NS.object.isString(t)&&o instanceof RegExp?t.match(o):e(t,o)},
value:function(t,n,o){return NS.object.isString(n)&&o instanceof RegExp?n.match(o):e(n,o)},keyvalue:function(t,n,o){
return(NS.object.isString(t)&&o.key instanceof RegExp?t.match(o.key):e(t,o.key))&&(NS.object.isString(n)&&o.value instanceof RegExp?n.match(o.value):e(n,o.value))}}[t],l=[],u=function(t,e,n,o,r){
var i=[].concat.call(t,[e]),s=c(e,o[e],n);s&&(l.push({obj:o,value:o[e],key:i[i.length-1],parentKey:i[i.length-2],path:i.join("/"),container:i.slice(0,i.length-1).join("/"),
parentContainer:i.slice(0,i.length-2).join("/"),regexp:s,level:r}),a++),h(o[e],n,i,r+1)},h=function(t,e,r,i){if(!n(t)&&!o(t)){var c,l;if(t instanceof Array)for(c=0,l=t.length;c<l&&(u(r,c,e,t,i),
!s||s!==a);c++);else{if("object"!=typeof t)return;for(c in t)if(u(r,c,e,t,i),s&&s===a)break}}};return h(r,i,[],0),l}NS.makeNs("object",{fromQs:function(){
var t,e,n,o=document.location.search.substr(1).split("&"),r=[];for(t=0,e=o.length;t<e;t+=1)n=o[t].split("="),!r[n[0]]&&(r[n[0]]=decodeURIComponent(n[1]));return r},clone:function(t){
var e,n,o,r=NS.object;if(null===t||"object"!=typeof t)return t;if(t instanceof Date)return e=new Date,e.setTime(t.getTime()),e;if(t instanceof Array){for(e=[],n=0,o=t.length;n<o;n++)e[n]=r.clone(t[n])
;return e}if(t instanceof Object){e={};for(n in t)t.hasOwnProperty(n)&&(e[n]=r.clone(t[n]));return e}throw new Error("Unable to copy obj! Its type isn't supported.")},digForKey:function(t,e,n){
return r("key",t,e,n)},digForValue:function(t,e,n){return r("value",t,e,n)},digForKeyValue:function(t,e,n){return r("keyvalue",t,e,n)},extend:function(t,e,n){var o,r=NS.object.clone(t)
;for(o in e)!e.hasOwnProperty(o)||o in r&&!n||(r[o]=e[o]);return r},keyize:function(t,e){var n={},o=0,r=t.length;for(null;o<r;o++)e in t[o]&&!(t[o][e]in n)&&(n[t[o][e]]=t[o]);return n},
isString:function(t){return"string"==typeof t||t instanceof String},jCompare:e,toQs:function(e){return t(e,function(t,e,n){
return((n?"&":"?")+encodeURIComponent(e)+"="+encodeURIComponent(t[e])).replace(/\'/g,"%27")})}})}(),NS.makeNs("css",{style:function(t,e,n){var o
;if("object"==typeof e&&void 0===n)for(o in e)t.style[o]=e[o];else{if(void 0===n)return t.currentStyle?t.currentStyle[e]:t.style[e];n+="",t.style[e]=n,
"opacity"===e&&(t.style.filter="alpha(opacity = "+~~(100*parseFloat(n,10))+")")}}}),NS.makeNs("dom",{remove:function(t){return t.parentNode&&t.parentNode.removeChild(t)}}),function(){function t(){
return W.navigator.cookieEnabled}function e(t,e,n,o,r,i){if(!NS.cookie.enabled)return!1;this.cookie_nocookiesaround=!1;var s=new Date,a=new Date(s.getTime()+n)
;return WD.cookie=t+"="+W.escape(e)+(n?";expires="+a.toGMTString():"")+(o?";path="+o:"")+(r?";domain="+r:"")+(i?";secure":""),!0}function n(t){var e=WD.cookie.split(";"),n="",o="",r=!1,i=0,s=e.length
;if(!NS.cookie.enabled)return!1;for(null;i<s;i+=1){if(n=e[i].split("="),n[0].replace(/^\s+|\s+$/g,"")===t)return r=!0,n.length>1&&(o=W.unescape(n[1].replace(/^\s+|\s+$/g,""))),o;n=null}return r}
function o(t,e,n){if(!NS.cookie.enabled)return!1;var o=!1;return this.get(t)&&(WD.cookie=t+"="+(e?";path="+e:"")+(n?";domain="+n:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT",o=!0),o}function r(){
if(!NS.cookie.enabled)return!1;var t,e=WD.cookie.split(";"),n=0,o=e.length;for(null;n<o;n+=1)t=e[n].split("="),this.del(t[0],!1,!1);return this.cookie_nocookiesaround=!0,!0}function i(){
return!!NS.cookie.enabled&&(""===WD.cookie?[]:this.cookie_nocookiesaround?[]:WD.cookie.split(";").forEach(function(t){var e=t.split("=");return{name:e[0],value:e[1]}}))}NS.makeNs("cookie",{enabled:!0,
cookie_nocookiesaround:!1,initCheck:t,set:e,get:n,del:o,delall:r,getall:i})}(),NS.makeNs("i18n",function(){var t={};return NS.lang=typeof sm_lang!==_U_?sm_lang:"en",{check:function(t){
return t.match(/i18n\(([^}|]*)?\|?([^}]*)\)/)},dynamicLoad:function(e,n){for(n in e)NS.lang in e[n]&&(t[n]=e[n][NS.lang])},get:function(e,n){return NS.checkNs(e,t)||n||"no Value"},load:function(e){t=e
},parse:function(t){var e,n,o,r,i=NS.object.digForValue(t,/i18n\(([^}|]*)?\|?([^}]*)\)/);for(o=0,
r=i.length;o<r;o++)(typeof i[o].regexp).match(/boolean/i)||(e=NS.i18n.check(i[o].regexp[0]))&&(n=NS.checkNs(i[o].container,t),n[i[o].key]=NS.i18n.get(e[1],e[2]))}}}),function(){
var W=window,xdr=void 0!==W.XDomainRequest&&document.all&&!navigator.userAgent.match(/opera/i),_={getxhr:function(t){var e,n=["Msxml2.XMLHTTP","Msxml3.XMLHTTP","Microsoft.XMLHTTP"],o=n.length,r=0
;if(xdr&&t.cors)e=new W.XDomainRequest;else try{e=new W.XMLHttpRequest}catch(t){for(null;r<o;r+=1)try{e=new W.ActiveXObject(n[r])}catch(t){continue}!e&&alert("No way to initialize XHR")}return e},
setHeaders:function(t,e){var n={xml:"text/xml",html:"text/html",json:"application/json"}[e]||"text/html";t.setRequestHeader("Accept",n+"; charset=utf-8")},setMultipartHeader:function(t){
t.setRequestHeader("Content-Type","multipart/form-data")},setCookiesHeaders:function(t){var e,n,o;for(e=NS.cookie.getall(),n=0,o=e.length;n<o;)t.setRequestHeader("Cookie",e[n].name+"="+e[n].value),n++
},ajcall:function(t,e){
var n,o,r=_.getxhr(e),i=e&&e.method||"POST",s=e&&e.cback,a=e&&e.opened||function(){},c=e&&e.loading||function(){},l=e&&e.error||function(){},u=e&&e.abort||function(){},h=e&&e.sync,p=e&&e.data||{},f=e&&e.type||"text/html",d=!e||void 0===e.cache||e.cache,m="xml"===f?"responseXML":"responseText",g=e&&e.timeout||1e4,y=e&&e.hasFiles,v=!1,S=!1,b=!1,N=!1
;if(d||(p.C=+new Date),"GET"===i)p=NS.object.toQs(p).substr(1);else{n=new FormData;for(o in p)p.hasOwnProperty(o)&&n.append(o,p[o]);p=n}if(xdr&&e.cors)r.open(i,"GET"===i?t+(p?"?"+p:""):t),r.onerror=l,
r.ontimeout=function(){},r.onprogress=function(t){if(t.lengthComputable){var e=t.loaded/t.total*100;console.log(e+"% uploaded")}},r.onload=function(){s(r.responseText)},r.timeout=3e3,
_.setHeaders(r,y,f),o={xml:"text/xml",html:"text/html",json:"application/json"}[f]||"text/html",r.contentType=o,window.setTimeout(function(){r.send()},20);else{r.onreadystatechange=function(){
if(N===r.readyState)return!1;if(N=r.readyState,4===parseInt(r.readyState,10)&&0===parseInt(r.status,10))return r.onerror({error:404,xhr:r,url:t}),r.abort(),!1
;if("complete"===N||4===parseInt(N,10)&&200===parseInt(r.status,10))return v=!0,404===parseInt(r.status,10)?(r.onerror.call(r),!1):(s&&(S=r[m],function(){s(S)}()),b=r[m],W.setTimeout(function(){r=null
},50),b);if(3===N)c(r);else if(2===N)a(r);else if(1===N)switch(y?_.setHeaders(r,"json"):_.setHeaders(r,f),i){case"POST":case"PUT":try{r.send(p||!0)}catch(t){}break;case"DELETE":case"GET":try{
r.send(null)}catch(t){}break;default:alert(i),r.send(null)}return!0},r.onerror=function(){l&&l.apply(null,arguments)},r.onabort=function(){u&&u.apply(null,arguments)},
r.open(i,"GET"===i?t+(p?"?"+p:""):t,h),W.setTimeout(function(){v||(v=!0,r.abort())},g);try{return"responseXML"===m?r[m].childNodes[0]:r[m]}catch(t){}}return!0}};NS.makeNs("io",{getxhr:_.getxhr,
post:function(uri,cback,sync,data,cache,files,err){return _.ajcall(uri,{cback:function(r){files?(r=r.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm,""),
cback(window.JSON&&window.JSON.parse?JSON.parse(r):eval("("+r+")"))):cback(r)},method:"POST",sync:sync,data:data,cache:cache,error:err,hasFiles:!!files})},get:function(t,e,n,o,r,i){return _.ajcall(t,{
cback:e||function(){},method:"GET",sync:n,data:o,cache:r,error:i})},put:function(t,e,n,o,r,i){return _.ajcall(t,{cback:e,method:"PUT",sync:n,data:o,cache:r,error:i})},
getJson:function(uri,cback,data,cors){return _.ajcall(uri,{type:"json",method:"GET",sync:!1,cback:function(r){r=r.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm,""),
cback(W.JSON&&W.JSON.parse?JSON.parse(r):eval("("+r+")"))},data:data,cors:!!cors})},getXML:function(t,e){return _.ajcall(t,{method:"GET",sync:!1,type:"xml",cback:e||function(){}})}})}(),function(){
function t(){return{}}function e(t,e,n){var o=t.states.length,r=t.states[o-1];t.listeners.forEach(function(t){t(r,e,n)}),t.states[o]=e}function n(e,n){this.reducer=e||t,this.state=n||e(),
this.states=[this.state],this.listeners=[]}n.prototype.getState=function(){return this.states[this.states.length-1]},n.prototype.dispatch=function(t){
if(!("type"in t))throw new Error("Actions needs a type");var n,o=t.type,r=this.states[this.states.length-1],i=this.reducer(r,o,t);for(n in t)"type"!==n&&(i[n]=t[n]);e(this,i,o)},
n.prototype.subscribe=function(t){var e,n=this;return this.listeners.push(t),e=this.listeners.length-1,function(){n.listeners=n.listeners.slice(0,e).concat(n.listeners.slice(e+1))}},
n.prototype.all=function(){return this.states.concat()},n.prototype.back=function(t){var n=this.states.length-1,o=n-t,r=o>-1?o:0;e(this,this.states[r])},NS.getStore=function(t,e){return new n(t,e)}
}(),function(){var t=0;NS.makeNs("timer",{add:function(e){t+=e},get:function(){var e=t+0;return t=0,e}})}(),Wnode.prototype.cleanup=function(){NS.events.unhandle(this.id)
;var t=this.node,e=[],n=["cleanable","parent","getNode","climb","root","done","resolve","data"],o=n.length,r=0,i=0,s=0,a=null;for(NS.utils.eulerWalk(t,function(n){n!==t&&3!=n.nodeType&&e.push(n)&&s++
},"post");i<s;){for(a=e[i++];r<o;)a[n[r++]]=null;!function(t){t.parentNode.removeChild(t)}(a),a=null}return function t(e){e.children.forEach(t),e=null}(this),e=[],n=null,delete this.root,!0},
Wnode.prototype.setMap=function(t){this.map=t,this.root=t.rootNode,this.abort=t.abort,this.getNode=t.getNode,this.getNodes=t.getNodes,this.lateWid=t.lateWid},Wnode.prototype.render=function(){
var self=this,tmp,i,j,k,__nodeIdentifier="wid",replacementTempNode,rerendering=this.node&&this.parent&&this.node.parentNode==this.parent.node
;return rerendering&&(replacementTempNode=document.createElement("div"),replacementTempNode.style.display="none",this.conf.target.replaceChild(replacementTempNode,this.node)),
void 0!==this.conf[__nodeIdentifier]&&this.map.add(this.conf[__nodeIdentifier],this),this.node=this.conf.ns?document.createElementNS(this.conf.ns,this.tag):document.createElement(this.tag),
this.node.innerHTML=this.conf.html&&this.conf.data?NS.utils.replaceDataInTxt(this.conf.html+"",this.conf.data):this.conf.html||"",
this.setData().setAttrs().setEvents().setStyle().setMethods().checkInit().checkWillRender(),"function"==typeof this.conf.content&&(this.conf.content=this.conf.content.call(this)),
this.wlen=this.conf.content?this.conf.content.length:0,this.conf.cb=this.doRender&&this.conf.cb?this.conf.cb.bind(this):self.done.bind(this),
this.doRender?(void 0!==this.conf.text&&(tmp=document.createTextNode(""+NS.utils.replaceDataInTxt(this.conf.text+"",this.conf.data)),this.node.appendChild(tmp)),
rerendering?this.conf.target.replaceChild(this.node,replacementTempNode):this.conf.target.appendChild(this.node),this.checkEnd(),0==this.wlen?this.conf.cb("---auto---"):(this.praramsFromChildren=[],
this.conf.content.forEach(function(t){t.target=self.node,self.children.push(new Wnode(t,function(){self.praramsFromChildren.push([].slice.call(arguments,0)),
--self.wlen<=0&&self.conf.cb.apply(self,self.praramsFromChildren)},self.map,self).render())})),(tmp=this.node.getAttribute("wwdb"))&&(this.node.removeAttribute("wwdb"),
void 0!==(i=NS.checkNs(tmp,this))&&(j=("this."+tmp).split("."),k=j.pop(),i=eval(j.join(".")),k in i&&NS.events.ww.on(i,k,this.node))),this.cleanable=!0,this):(this.conf.cb("---auto---"),this)},
Wnode.prototype.checkWillRender=function(){return"willRender"in this.conf&&"function"==typeof this.conf.willRender&&(this.doRender=this.conf.willRender.call(this)),this},
Wnode.prototype.subRender=function(){return Engy.render(this.sub)},Wnode.prototype.climb=function(t){t=t||1;for(var e=this;t--;)e=e.parent||e;return e},Wnode.prototype.descendant=function(){
var t=this,e=Array.prototype.slice.call(arguments,0),n=0,o=t,r=e.length;if(!r)return o;for(;n<r;)o=o.children[~~e[n++]];return o},Wnode.prototype.setAttrs=function(){var t=this.node
;if(void 0!==this.conf.attrs){this.attrs=this.conf.attrs;for(var e in this.attrs)"class"!==e?"style"!==e?t.setAttribute(e,this.attrs[e]):Wnode.prototype.setStyle.call(this):t.className=this.attrs[e]}
return this},Wnode.prototype.setStyle=function(){var t=this.node;if(void 0!==this.conf.style){this.style=this.conf.style;for(var e in this.style)t.style[e.replace(/^float$/i,"cssFloat")]=this.style[e]
}return this},Wnode.prototype.setMethods=function(){var t,e=this;return Object.keys(this.conf).forEach(function(n){(t=n.match(/^method_(\w*)$/i))&&(e[t[1]]=e.conf[t[0]].bind(e))}),this},
Wnode.prototype.setData=function(){return this.conf.data&&(this.data=this.conf.data||{}),this},Wnode.prototype.checkInit=function(){
return"init"in this.conf&&"function"==typeof this.conf.init&&!this.conf.init.call(this)&&this.abort(),this},Wnode.prototype.checkEnd=function(){var t=this
;return"end"in this.conf&&"function"==typeof this.conf.end&&this.map.endFunctions.push(function(){t.conf.end.call(t)}),this},Wnode.prototype.setEvents=function(){var t,e=this
;for(t in this.events)!function(t){var n;t in e.conf&&(n=t.match(/on(.*)/)[1].toLowerCase(),NS.events.on(e.node,n,function(n){e.conf[t].call(e,n)}))}(t);return this},Wnode.prototype.report=function(){
window.JSON&&console.log("json size : "+JSON.stringify(this.conf).length),console.log("html size : "+this.root.node.innerHTML.length)},function(){function t(t,e,n){function o(){
if(p)for(t.route&&"string"==typeof t.route&&NS.history.push(t.route),t.title&&"string"==typeof t.title&&(document.title=t.title),l.appendChild(c),l.cleanable=!0,r=+new Date,
NS.timer.add(r-a);h.endFunctions.length;)h.endFunctions.pop()()}var r,i,a=+new Date,c=document.createDocumentFragment(),l=function(){return t.target||document.body}(),u=l.innerHTML,h={
abort:function(){return p=!1,l.innerHTML=u,"onAbort"in t&&(typeof t.onAbort).match(/function/i)&&t.onAbort.call(null,t),!1},add:function(t,e){h.map[t]=e},endFunctions:[],getNode:function(t){
return h.map[t]||!1},getNodes:function(){return h.map},lateWid:function(t){h.map[t]=this},map:{}},p=!0;return t.target=c,l.cleanable&&l.node.cleanup(),!0===e&&(l.innerHTML=""),i=new Wnode(t,o,h,null),
l.node=i,h.rootNode=i,i.setMap(h),i.cleanable=!0,i.render(),!n||n in s||(s[n]=i),i}function e(e,n){t({target:e,content:[{html:n||""}]},!0)}function n(e){var n=document.createElement("div")
;return e.target=n,[n,t(e)]}function o(t){var e=document.createElement("script");document.getElementsByTagName("head")[0].appendChild(e),e.onload=function(){e.parentNode.removeChild(e)},e.src=t}
function r(t){return t in s&&s[t]}function i(){return s}var s={};NS.makeNs("Widgzard",{render:t,cleanup:e,get:n,load:o,getElement:r,getElements:i})}(),function(){function _configSet(t){var e
;for(e in config)e in t&&(config[e]=t[e]);return this}function _overwrite(t,e,n){for(var o=e.split(/\.|\//),r=o.length,i=0;i<r-1;)t=t[o[i++]];t[o[r-1]]=n}function _mergeComponent(t,e,n){
var o,r=NS.checkNs(e,t),i=n,s={},a=e.split(/\.|\//),o=0;a.length;for(o in i)s[o]=i[o];for(o in r)!o.match(/component|params/)&&(s[o]=r[o]);_overwrite(t,e,s)}function Processor(t){this.config=t,
this.endPromise=NS.Balle.one()}function _process(t){return new Processor(t).run()}function _component(t,e){t in preloadedComponents||(preloadedComponents[Processor.prototype.getFileName(t)]=e)}
function _components(t){for(var e in t)_component(e,t[e])}function _clone(t){if(null==t||"object"!=typeof t)return t;var e=t.constructor();for(var n in t)t.hasOwnProperty(n)&&(e[n]=_clone(t[n]))
;return e}console.log("\n\n ENGY v.2.0.1\n\n");var components={},preloadedComponents={},config={fileNameSeparator:"/",fileNamePrepend:"",ext:".js",componentsUrl:"/components/"},num=0
;Processor.prototype.getFileName=function(t){var e=t.split(/\/|\|/),n=t,o=e.length;return e[o-1]=config.fileNamePrepend+e[o-1],n=e.join(config.fileNameSeparator),
config.componentsUrl+(config.componentsUrl.match(/\/$/)?"":"/")+n+config.ext},Processor.prototype.run=function(){
var self=this,langFunc=NS.i18n.parse,elementsN=0,countPromise=NS.Balle.one(),solveTimePromise=NS.Balle.one(),start=+new Date,end,xhrTot=0,requested={},cback,computeStats=!0,stats={time:0,elements:0,
requested:{},xhrTot:0};return function solve(){var component=NS.object.digForKey(self.config,"component",1),componentName,cached,preLoaded,xhrStart=0,xhrEnd=0;component.length?(component=component[0],
componentName=self.getFileName(component.value),component.value in requested?requested[component.value]++:(requested[component.value]=1,elementsN++),cached=componentName in components,
preLoaded=componentName in preloadedComponents,cback=function(cntORobj){xhrEnd=+new Date,xhrTot+=xhrEnd-xhrStart
;var params=NS.checkNs(component.container+"/params",self.config),obj,usedParams,foundParam,foundParamValue,foundParamValueReplaced,i,l
;if(preLoaded?obj=_clone(cntORobj):(cached||(components[componentName]=_clone(cntORobj)),cntORobj=cntORobj.replace(/^[^{]*/,"").replace(/;?$/,""),obj=eval("("+cntORobj+")")),
params&&(usedParams=NS.object.digForValue(obj,/#PARAM{([^}|]*)?\|?([^}]*)}/),l=usedParams.length))for(i=0;i<l;i++)foundParam=NS.checkNs(usedParams[i].regexp[1],params),
foundParamValue=typeof foundParam!==_U_?foundParam:usedParams[i].regexp[2]||"",
(typeof foundParamValue).match(/string/i)?(foundParamValueReplaced=NS.checkNs(usedParams[i].path,obj).replace(usedParams[i].regexp[0],foundParamValue),
_overwrite(obj,usedParams[i].path,foundParamValueReplaced)):_overwrite(obj,usedParams[i].path,foundParamValue);component.container?_mergeComponent(self.config,component.container,obj):self.config=obj,
solve()},xhrStart=+new Date,preLoaded?cback(preloadedComponents[componentName]):cached?cback(components[componentName]):NS.io.get(componentName,cback,!0)):(end=+new Date,stats.time=end-start,
stats.elements=elementsN,stats.requested=requested,stats.xhrTot=xhrTot,self.endPromise.resolve([self.config,computeStats&&stats]))}(),langFunc&&langFunc(self.config),self.endPromise},
NS.makeNs("Engy",{component:_component,components:_components,configSet:_configSet,define:_component,get:function(t,e,n){return NS.Balle.one(function(e,n){return _process(t).then(e)})},
load:function(t){return NS.Widgzard.load(t)},getElement:function(t){return NS.Widgzard.getElement(t)},getElements:function(){return NS.Widgzard.getElements()},process:_process,report:function(t){
var e,n="------------------------------------";console.log(n),console.log("Engy used "+t.elements+" component"+(1==t.elements?"":"s")),console.log("usage: ")
;for(e in t.requested)console.log("> "+e+": "+t.requested[e]+" time"+(t.requested[e]>1&&"s"));console.log("Engy total time: "+t.time+"ms ("+(t.time-t.xhrTot)+" unfolding,  "+t.xhrTot+" xhr)"),
console.log(n)},render:function(t,e,n){var o=+new Date;return NS.Balle.one(function(r,i){_process(t).then(function(t){t[1]&&NS.Engy.report(t[1]);var i=+new Date
;console.log("Engy process tot: "+(i-o)),r(NS.Widgzard.render(t[0],e,n))})})}})}(),W.Widgzard={render:NS.Widgzard.render,cleanup:NS.Widgzard.cleanup,load:NS.Widgzard.loadStealth,get:NS.Widgzard.get,
getElement:NS.Widgzard.getElement,getElements:NS.Widgzard.getElements,getStore:NS.getStore,Channel:NS.Channel,events:NS.events,cookie:NS.cookie,utils:NS.utils,i18n:NS.i18n,io:NS.io,object:NS.object,
css:NS.css,dom:NS.dom,timer:NS.timer,history:NS.history},W.Engy={component:NS.Engy.component,components:NS.Engy.components,configSet:NS.Engy.configSet,define:NS.Engy.define,get:NS.Engy.get,
load:NS.Engy.loadStealth,getElement:NS.Engy.getElement,getElements:NS.Engy.getElements,process:NS.Engy.process,render:NS.Engy.render,timer:NS.timer,history:NS.history}}(this,"undefined","prototype"),
function(){document.body.addEventListener("keyup",function(t){console.log("up"),console.log(t)}),document.body.addEventListener("keydown",function(t){console.log("down"),console.log(t)}),
document.body.addEventListener("keypress",function(t){console.log("press"),console.log(t)})}()}();