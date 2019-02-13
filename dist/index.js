(function () {
    /*
    [Malta] dependencies.js
    */
    // /*
    // [Malta] ../../node_modules/@fedeghe/leonardo/dist/index.js
    // */
    // /*
    //  __    _____ _____ _____ _____ _____ ____  _____ 
    // |  |  |   __|     |   | |  _  | __  |    \|     |
    // |  |__|   __|  |  | | | |     |    -|  |  |  |  |
    // |_____|_____|_____|_|___|__|__|__|__|____/|_____|
    //                                                   V. 0.2
    // 
    // Federico Ghedina <federico.ghedina@gmail.com> 2019
    // ~8KB
    // */
    // !function(t){function r(t,r,e){var n,s,i=this.namespaces={cc:"http://creativecommons.org/ns#",dc:"http://purl.org/dc/elements/1.1/",ev:"http://www.w3.org/2001/xml-events",
    // rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},a=this;e=e||{},this.tag=o("svg"),this.tag.setAttribute("width",t),
    // this.tag.setAttribute("height",r),this.tag.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.tag.setAttribute("viewbox","0 0 "+t+" "+r),this.childs=[]
    // ;for(n in e)"ns"!==n&&"target"!==n&&this.tag.setAttribute(n,e[n]);if(this.target="target"in e?e.target:null,"ns"in e)for("*"===e.ns&&(e.ns=Object.keys(i)),n=0,s=e.ns.length;n<s;n++)!function(t){
    // t in i&&a.tag.setAttribute("xmlns:"+t,i[t])}(e.ns[n])}function e(){this.path="",this.previous=null}function n(t){return function(){var r=this.previous===t?" ":t
    // ;return this.path+=[r].concat([[].slice.call(arguments,0).join(",")]).join(" ")+" ",this.previous=t,this}}function o(t,r){return r=r||"http://www.w3.org/2000/svg",document.createElementNS(r,t)}
    // function s(t){return t*Math.PI/180}function i(t,r){this.t=t,this.tag=o(t,r),this.childs=[],this.events={},this.transforms={rotate:"",move:"",scale:""}}r.import=function(t){
    // "string"==typeof t&&(t=r.toDocument(t));var e=new r(1,1);return e.tag=t.children[0],e},r.getqs=function(){var t,r,e=document.location.search.substr(1),n=e.split("&"),o={};for(t in n)r=n[t].split("="),
    // o[r[0]]=r.length>1?decodeURIComponent(r[1]):null;return o},r.toString=function(t){var r=document.createElement("div");return r.appendChild(t),r.innerHTML},r.toDocument=function(t){
    // return(new DOMParser).parseFromString(t,"image/svg+xml")},r.prototype.attrs=function(t){var r;if("string"==typeof t)return this.tag.getAttribute(t);for(r in t)this.tag.setAttribute(r,t[r]);return this
    // },r.prototype.styles=function(t){var r;for(r in t)this.tag.style[r]=t[r];return this},r.prototype.add=function(){var t=this;return[].slice.call(arguments,0).forEach(function(r){
    // r instanceof Array?r.forEach(function(r){t.childs.push(r),t.add(r)}):(t.childs.push(r),t.tag.appendChild(r.tag))}),this},r.prototype.render=function(t,r){var e=t||this.target;return e.innerHTML="",
    // e.appendChild(this.tag),r&&r.call(this),this},r.prototype.downloadAnchor=function(){var t=new XMLSerializer,r='<?xml version="1.0" standalone="no"?>\r\n'+t.serializeToString(this.tag),e=null
    // ;r.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)||(r=r.replace(/^<svg/,'<svg xmlns="'+this.namespaces.svg+'"')),
    // r.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)||(r=r.replace(/^<svg/,'<svg xmlns:xlink="'+this.namespaces.xlink+'"')),e="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(r)
    // ;var n=document.createElement("a");return n.download="download"+ +new Date+".svg",n.href=e,n.addEventListener("click",function(){this.download="download"+ +new Date+".svg"}),n.innerHTML="download",n},
    // r.prototype.circle=function(t,r,e){var n=new i("circle");return n.attrs({cx:t,cy:r,r:e}),n},r.prototype.desc=function(t){var r=new i("desc");return r.tag.innerHTML=t,r},
    // r.prototype.ellipse=function(t,r,e,n){var o=new i("ellipse");return o.attrs({cx:t,cy:r,rx:e,ry:n}),o},r.prototype.group=function(){return new i("g")},r.prototype.image=function(t,r,e,n,o){
    // var s=new i("image");return s.attrs({x:t,y:r,width:e,height:n}),s.tag.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o),s},r.prototype.line=function(t,r,e,n){var o=new i("line")
    // ;return o.attrs({x1:t,y1:r,x2:e,y2:n}),o},r.prototype.path=function(t){var r=new i("path");return r.attrs({d:t}),r},r.prototype.polygon=function(){
    // var t=new i("polygon"),r=[].slice.call(arguments,0),e=[],n=0,o=r.length;for(null;n<o;n+=2)e.push(r[n]+","+r[n+1]);return t.attrs({points:e.join(" ")}),t},r.prototype.polyline=function(){
    // var t=new i("polyline"),r=[].slice.call(arguments,0),e=[],n=0,o=r.length;for(null;n<o;n+=2)e.push(r[n]+","+r[n+1]);return t.attrs({points:e.join(" ")}),t},r.prototype.rect=function(t,r,e,n){n=n||e
    // ;var o=new i("rect");return o.attrs({x:t,y:r,width:e,height:n}),o},r.prototype.text=function(t,r,e){var n=new i("text");return n.attrs({x:t,y:r}),n.tag.innerHTML=e,n},
    // r.prototype.textPath=function(t,r,e){var n=this,o=new i("text"),s=new i("defs"),a=n.path(r),p=new i("textPath");return a.attrs({id:t}),p.tag.innerHTML=e,
    // p.tag.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+t),o.add(s),o.add(p),s.add(a),o},r.prototype.title=function(t){var r=new i("title");return r.tag.innerHTML=t,r},
    // r.prototype.script=function(t){var r=new i("script");return r.attrs({type:"application/ecmascript"}),t&&(r.tag.innerHTML="//<![CDATA[\n"+t+"\n]]>"),r},e.prototype.M=n("M"),e.prototype.m=n("m"),
    // e.prototype.Z=n("Z"),e.prototype.L=n("L"),e.prototype.l=n("l"),e.prototype.H=n("H"),e.prototype.h=n("h"),e.prototype.V=n("V"),e.prototype.v=n("v"),e.prototype.C=n("C"),e.prototype.c=n("c"),
    // e.prototype.Q=n("Q"),e.prototype.q=n("q"),e.prototype.S=n("S"),e.prototype.s=n("s"),e.prototype.T=n("T"),e.prototype.t=n("t"),e.prototype.A=n("A"),e.prototype.a=n("a"),e.prototype.R=n("R"),
    // r.prototype.pathBuild=function(){var t=new e;return t.toString=function(){var t=this.path+"";return this.path="",t},t}(),r.prototype.slice=function(t,r,e,n,o){var s=this,i=s.slicePath(t,r,e,n,o)
    // ;return s.path(i)},r.prototype.slicePath=function(t,r,e,n,o){var i=this,a=0;if(n>o){var p=n;n=o,o=p}return a=o-n<=180?0:1,n=s(n),o=s(o),
    // i.pathBuild.M(t,r).L(t+Math.cos(n)*e,r-Math.sin(n)*e).A(e,e,0,a,0,t+Math.cos(o)*e,r-Math.sin(o)*e).L(t,r)};var a=0;r.prototype.filters=function(){function t(){return"leo_id_"+ ++a}function r(r){
    // var e,n,s=t(),a=new i("linearGradient");a.attrs({id:s,x1:"0%",y1:"0%",x2:"100%",y2:"0%"});for(e in r)n=new i("stop"),n.attrs({offset:e+"%",style:"stop-opacity:1;stop-color:"+r[e]}),a.add(n)
    // ;return o.add(a),"url(#"+s+")"}function e(r){var e,n,s=t(),a=new i("radialGradient");a.attrs({id:s});for(e in r)n=new i("stop"),n.attrs({offset:e+"%",style:"stop-opacity:1;stop-color:"+r[e]}),a.add(n)
    // ;return o.add(a),"url(#"+s+")"}var n=this,o=null;return this.defs?o=this.defs:(o=this.defs=new i("defs"),n.add(this.defs)),{lGrad:r,rGrad:e}},r.prototype.animate=function(){function t(t,r,e){
    // var n=0,o=0,s=0;setInterval(function(){o=r(o,n),s=e(s,n),n+=.1,t.move(o,s)},20)}function r(t,r,e){var n=0,o=0,s=0;setInterval(function(){o=r(o,n),s=e(s,n),n+=.1,t.move(o*Math.cos(s),o*Math.sin(s))
    // },20)}function e(t,r,e,n,o){var s=new i("animate");return s.attrs({attributeType:"XML",attributeName:t,from:r,to:e,dur:n,repeatCount:o}),s}return{pCart:t,pPolar:r,attr:e}}(),
    // i.prototype.attrs=r.prototype.attrs,i.prototype.styles=r.prototype.styles,i.prototype.add=r.prototype.add,i.prototype.on=function(t,r){
    // return t in this.events?this.events[t].push(r):this.events[t]=[r],this.tag.addEventListener(t,r),this},i.prototype.off=function(t,r){var e=this
    // ;return t in this.events&&(void 0===r?(this.events[t].forEach(function(r){e.tag.removeEventListener(t,r)}),this.events[t]=null):e.tag.removeEventListener(t,r)),this},i.prototype.clone=function(){
    // var t,r=new i(this.t),e=this.tag.attributes,n=(this.tag.children,0);for(r.transforms.rotate=this.transforms.rotate,r.transforms.move=this.transforms.move,r.transforms.scale=this.transforms.scale,n=0,
    // t=e.length;n<t;n++)r.tag.setAttribute(e[n].name,e[n].value);for(n=0,t=this.childs.length;n<t;n++)r.add(this.childs[n].clone());return r},i.prototype.trans=function(){return this.attrs({
    // transform:this.transforms.rotate+" "+this.transforms.move+" "+this.transforms.scale}),this},i.prototype.rotate=function(t,r,e){return r=r||0,e=e||0,this.transforms.rotate=" rotate("+t+" "+r+" "+e+")",
    // this.trans()},i.prototype.scale=function(t,r){return t=t||0,r=r||0,this.transforms.scale=" scale("+t+", "+r+")",this.trans()},i.prototype.mirrorO=function(){
    // return this.transforms.scale=" scale(1, -1)",this.trans()},i.prototype.mirrorV=function(){return this.transforms.scale=" scale(-1, 1)",this.trans()},i.prototype.move=function(t,r){return t=t||0,
    // r=r||0,this.transforms.move=" translate("+t+" "+r+")",this.trans()},i.prototype.clear=function(){this.tag.parentNode.removeChild(this.tag)},i.prototype.replace=function(t,r){
    // t.tag.parentNode.replaceChild(r.tag,t.tag)};var p=function(t,e,n){return t&&e?new r(t,e,n):{ERROR:"width or height not given!"}};p.import=r.import,p.getqs=r.getqs,t.Leonardo=p}(window);
    /*
    [Malta] ../../node_modules/@fedeghe/channeljs/dist/index.js
    */
    /*
    
    C H A N N E L J S
    
    Date: 3/2/2019
    Size: ~1KB
    Author: Federico Ghedina <federico.ghedina@gmail.com>
    */
    var Channeljs=function(){"use strict";var t={},i=function(t,i){return t.indexOf(i)},s=function(){this.topic2cbs={},this.lateTopics={},this.enabled=!0},e=function(t,i){var s=t.enabled
    ;return t.enabled=i,s!==t.enabled},n=s.prototype;return n.enable=function(){return e(this,!0)},n.disable=function(){return e(this,!1)},n.pub=function(t,i){var s,e=0,n=[]
    ;if(!(t in this.topic2cbs&&this.enabled))return t in this.lateTopics?this.lateTopics[t].push({args:i}):this.lateTopics[t]=[{args:i}],null
    ;for(s=this.topic2cbs[t].length;e<s;e+=1)n.push(this.topic2cbs[t][e].apply(null,i));return n},n.sub=function(t,i,s){var e,n=0,c=[];if(t in this.topic2cbs&&this.enabled||(this.topic2cbs[t]=[]),
    this.topic2cbs[t].push(i),s&&t in this.lateTopics){for(n=0,e=this.lateTopics[t].length;n<e;n++)c.push(i.apply(null,this.lateTopics[t][n].args));return c}},n.unsub=function(t,s){var e=0
    ;return t in this.topic2cbs&&(e=i(this.topic2cbs[t],s))>=0&&this.topic2cbs[t].splice(e,1)&&0===this.topic2cbs[t].length&&delete this.topic2cbs[t],t in this.lateTopics&&delete this.lateTopics[t],this},
    n.once=function(t,i,s){function e(){return n.unsub(t,e),i.apply(null,Array.prototype.slice.call(arguments,0))}var n=this;return this.sub(t,e,s)},n.reset=function(){
    var t=Array.prototype.slice.call(arguments,0),i=t.length,s=0;if(!i)return this.topic2cbs={},this.lateTopics={},this;for(null;s<i;s+=1)t[s]in this.topic2cbs&&delete this.topic2cbs[t[s]],
    t[s]in this.lateTopics&&delete this.lateTopics[t[s]];return this},{getChannels:function(i){var s,e={};if("boolean"==typeof i)for(s in t)t[s].enabled===i&&(e[s]=t[s]);else e=t;return e},
    get:function(i){return i in t||(t[i]=new s),t[i]}}}();"object"==typeof exports&&(module.exports=Channeljs);
    /*
    [Malta] ../../node_modules/balle/dist/index.js
    */
    /*
    _____ _____ __    __    _____
    | __  |  _  |  |  |  |  |   __|
    | __ -|     |  |__|  |__|   __|
    |_____|__|__|_____|_____|_____|
                                    v. 1.0.30
    federico.ghedina@gmail.com
    Build #308 on 3/2/2019 @ 16:42:36
    Size: ~2KB
    
    */
    function Balle(e){var l=this,t=!1;this.status=Balle.STATUSES.PENDING,this.value=void 0,this.cause=void 0,this.resolvers=this.resolvers||[],this.rejectors=this.rejectors||[],
    this.finalizers=this.finalizers||[],e=e||function(){};try{e(function(e){t||l.status!==Balle.STATUSES.PENDING||(t=!0,l.status=Balle.STATUSES.FULFILLED,l.value=e,Balle.roll(l.resolvers,"value",l),
    Balle.roll(l.finalizers,"value",l))},function(e){t||l.status!==Balle.STATUSES.PENDING||(t=!0,l.status=Balle.STATUSES.REJECTED,l.cause=e,Balle.roll(l.rejectors,"cause",l),
    Balle.roll(l.finalizers,"cause",l))})}catch(e){return Balle.reject(e.message)}return this}Balle.roll=function(e,l,t){e.forEach(function(e){e(t[l])},t)},Balle.prototype.resolve=function(e){
    return Balle.call(this,function(l,t){return l(e)})},Balle.prototype.reject=function(e){return Balle.call(this,function(l,t){return t(e)})},Balle.prototype.launch=function(e){return Balle.call(this,e)
    },Balle.prototype.then=function(e,l){switch(this.status){case Balle.STATUSES.REJECTED:Balle.roll(this.rejectors,"cause",this);break;case Balle.STATUSES.PENDING:this.resolvers.push(e),
    l&&this.rejectors.push(l);break;case Balle.STATUSES.FULFILLED:e(this.value)}return this},Balle.prototype.catch=function(e){switch(this.status){case Balle.STATUSES.PENDING:this.rejectors.push(e);break
    ;case Balle.STATUSES.REJECTED:return e(this.cause)}return this},Balle.prototype.finally=function(e){return this.finalizers.push(e),this},Balle.STATUSES={PENDING:"PENDING",FULFILLED:"FULFILLED",
    REJECTED:"REJECTED"},Balle._isFunc=function(e){return"function"==typeof e},Balle._isIterable=function(e){return null!=e&&Balle._isFunc(e[Symbol.iterator])},Balle.one=function(e){return new Balle(e)},
    Balle.all=function(e){if(!Balle._isIterable(e))return Balle.reject("Balle.all acceps an Iterable Promise only");var l=[],t=e.length,a=0;return new Balle(function(n,r){e.forEach(function(e,s){
    "REJECTED"==e.status&&r(e.cause),e.then(function(e){a++,l[s]=e,a==t&&n(l)}).catch(r)})})},Balle.race=function(e){return Balle._isIterable(e)?new Balle(function(l,t){e.forEach(function(e){
    e.then(l).catch(t)})}):Balle.reject("Balle.race acceps an Iterable Promise only")},Balle.chain=function(e){if(!Balle._isIterable(e))return Balle.reject("Balle.chain acceps an Iterable Promise only")
    ;var l=e.length;return new Balle(function(t,a){!function n(r,s){return r==l?t(s):e[r](s).then(function(e){n(++r,e)}).catch(function(e){a(e)})}(0)})},Balle.reject=function(e){
    return new Balle(function(l,t){return t(e)})},Balle.resolve=function(e){return new Balle(function(l,t){e instanceof Balle?e.then(l).catch(t):l(e)})},"object"==typeof exports&&(module.exports=Balle);
    /*
    [Malta] ../../node_modules/ridof/dist/index.js
    */
    /*
               d8,      d8b            ,d8888b
              `8P       88P            88P'
                       d88          d888888P
      88bd88b  88b d888888   d8888b   ?88'
      88P'  `  88Pd8P' ?88  d8P' ?88  88P
     d88      d88 88b  ,88b 88b  d88 d88
    d88'     d88' `?88P'`88b`?8888P'd88'
    
                                          v. 1.0.3
    
    Date: 3/2/2019
    Size: ~1KB
    */
    var Ridof=function(){"use strict";function t(){return{}}function e(t){if("object"!=typeof t())throw new Error("Reducer should return an object")}function r(t,e,r){var s=t.states[t.currentIndex]
    ;t.listeners.forEach(function(t){t(s,e,r)}),t.currentIndex<t.states.length-1&&(t.states=t.states.slice(0,t.currentIndex)),t.states[++t.currentIndex]=e}function s(r,s){this.reducer=r||t,
    this.state=s||this.reducer(),e(r),this.states=[this.state],this.currentIndex=0,this.listeners=[]}return s.prototype.getState=function(){return this.states[this.currentIndex]},
    s.prototype.dispatch=function(t){if(!("type"in t))throw new Error("Actions needs a type");var e,s=t.type,n=this.states[this.currentIndex],i=this.reducer(n,s,t);delete i.type
    ;for(e in t)"type"!==e&&(i[e]=t[e]);return r(this,i,s),this},s.prototype.subscribe=function(t){var e,r=this;return this.listeners.push(t),e=this.listeners.length-1,function(){
    r.listeners=r.listeners.slice(0,e).concat(r.listeners.slice(e+1))}},s.prototype.replaceReducer=function(t){e(t),this.reducer=t},s.prototype.reset=function(){var t=this.states[0];this.states=[t],
    this.currentIndex=0,this.listeners=[]},s.prototype.move=function(t){if(0===t)return this;var e=this,r=this.currentIndex+t,s=this.getState(),n=t>0?"FORWARD":"BACKWARD",i=r>-1&&r<this.states.length
    ;return this.currentIndex=i?r:this.currentIndex,i&&this.listeners.forEach(function(t){t(s,e.getState(),{type:"TIMETRAVEL_"+n})}),this},{getStore:function(t,e){return new s(t,e)},isStore:function(t){
    return t instanceof s}}}();"object"==typeof exports&&(module.exports=Ridof);
    /*
    [Malta] ../../node_modules/widgzard/dist/index.js
    */
    /*
    
         ...    .     ...         .       ..                                                          ..
      .~`"888x.!**h.-``888h.     @88>   dF                                                          dF
     dX   `8888   :X   48888>    %8P   '88bu.                       ..                   .u    .   '88bu.
    '888x  8888  X88.  '8888>     .    '*88888bu        uL        .@88i         u      .d88B :@8c  '*88888bu
    '88888 8888X:8888:   )?""`  .@88u    ^"*8888N   .ue888Nc..   ""%888>     us888u.  ="8888f8888r   ^"*8888N
     `8888>8888 '88888>.88h.   ''888E`  beWE "888L d88E`"888E`     '88%   .@88 "8888"   4888>'88"   beWE "888L
       `8" 888f  `8888>X88888.   888E   888E  888E 888E  888E    ..dILr~` 9888  9888    4888> '     888E  888E
      -~` '8%"     88" `88888X   888E   888E  888E 888E  888E   '".-%88b  9888  9888    4888>       888E  888E
      .H888n.      XHn.  `*88!   888E   888E  888F 888E  888E    @  '888k 9888  9888   .d888L .+    888E  888F
     :88888888x..x88888X.  `!    888&  .888N..888  888& .888E   8F   8888 9888  9888   ^"8888*"    .888N..888
     f  ^%888888% `*88888nx"     R888"  `"888*""   *888" 888&  '8    8888 "888*""888"     "Y"       `"888*""
          `"**"`    `"**""        ""       ""       `"   "888E '8    888F  ^Y"   ^Y'                   ""
                                                   .dWi   `88E  %k  <88F
                                                   4888~  J8%    "+:*%`
                                                    ^"===*"`
    Date: 21/1/2019
    Size: ~31KB
    */
    !function(W,_U_,_P_){"use strict";function Wnode(e,t,n,o){var r=this;this.id=NS.utils.uniqueId+"",this.conf=e,this.done=t,this.map=n,this.parent=o,this.children=[],this.data={},this.sub={},this.attrs={},this.style={},this.tag=e.tag||"div",this.conf.style=this.conf.style||{},this.conf.attrs=this.conf.attrs||{},this.conf.data=this.conf.data||{},this.doRender=!0,this.root=n.rootNode,this.abort=n.abort,this.getNode=n.getNode,this.getNodes=n.getNodes,this.lateWid=n.lateWid,this.report=function(){W.JSON&&console.log("json size : "+NS.utils.toMemFormat(JSON.stringify(r.conf).length,"B")),console.log("html size : "+NS.utils.toMemFormat(r.node.innerHTML.length,"B"))},this.events={onClick:!0,onMouseover:!0,onMouseout:!0,onMouseleave:!0,onDblclick:!0,onFocus:!0,onChange:!0,onInput:!0,onSelect:!0,onKeyup:!0,onKeydown:!0,onKeypress:!0,onSubmit:!0,onBlur:!0}}console.log("\n\n WIDGZARD v.3.0.3\n\n");var NS={},WD=W.document;+function(){function e(t,n,o){t=t.replace(/^\//,"");var r,i=t.split(/\.|\//),s=i.length;return typeof o===_U_&&(o=NS),typeof n===_U_&&(n={}),"function"==typeof n&&(n=n()),o[i[0]]||(o[i[0]]=1===s?n:{}),r=o[i[0]],s>1?e(i.slice(1).join("."),n,o[i[0]]):r}function t(e,t){e=e.replace(/^\//,"");var n=e.split(/\.|\//),o=0,r=n.length;if(t=typeof t!==_U_?t:_context_,!e)return t;for(null;o<r;o+=1){if(typeof t[n[o]]===_U_)return;t=t[n[o]]}return t}function n(e,t){var n,o="function"==typeof t?t():t;for(n in o)typeof e[n]===_U_&&(e[n]=o[n])}NS.makeNs=e,NS.checkNs=t,NS.extendNs=n,NS.debug=function(){var e=_AP_.prototype.slice.call(arguments,0);"debug"in console&&console.debug.apply(console,e)},NS.log=function(){var e=_AP_.prototype.slice.call(arguments,0);"log"in console&&console.log.apply(console,e)},NS.dbg=function(e){try{console.log(e)}catch(t){try{opera.postError(e)}catch(t){alert(e)}}},NS.makeNs("utils",{uniqueId:new function(){var e=0,t=this;this.prefix="NS_",this.toString=function(){return e+=1,t.prefix+e}},eulerWalk:function(e,t,n){n={pre:"pre",post:"post"}[n]||"post";var o=function(){},r="pre"===n?t:o,i="post"===n?t:o;!function e(t,n){for(r(t),n=t.firstChild;n;)e(n),n=n.nextSibling;i(t)}(e)},replaceDataInTxt:function(e,t){return e.replace(/\$([A-z]*)\$/g,function(e,n){var o=n.replace(/\$/g,"");return o in t?t[o]:""})},toMemFormat:function(e,t){if(!e)return e+(t||"");for(var n=["","K","M","G","T","P","E","Z","Y"],o=0;e/Math.pow(1024,o+1)>1;)o++;return""+(e/Math.pow(1024,o)).toFixed(2).replace(/\.?0+$/,"")+n[o]+(t||"")},getViewportSize:function(){var e=WD.documentElement;return typeof W.innerWidth!=_U_?{width:W.innerWidth,height:W.innerHeight}:typeof e!=_U_&&typeof e.clientWidth!=_U_&&0!=e.clientWidth?{width:e.clientWidth,height:e.clientHeight}:{width:WD.getElementsByTagName("body")[0].clientWidth,height:WD.getElementsByTagName("body")[0].clientHeight}},isMobile:function(){return(typeof W.matchMedia!=_U_||typeof W.msMatchMedia!=_U_)&&W.matchMedia("(pointer:coarse)").matches}})}(),function(){function e(t){var n=this,o=!1;this.status=e.STATUSES.PENDING,this.value=void 0,this.cause=void 0,this.resolvers=this.resolvers||[],this.rejectors=this.rejectors||[],this.finalizers=this.finalizers||[],t=t||function(){};try{t(function(t){o||n.status!==e.STATUSES.PENDING||(o=!0,n.status=e.STATUSES.FULFILLED,n.value=t,e.roll(n.resolvers,"value",n),e.roll(n.finalizers,"value",n))},function(t){o||n.status!==e.STATUSES.PENDING||(o=!0,n.status=e.STATUSES.REJECTED,n.cause=t,e.roll(n.rejectors,"cause",n),e.roll(n.finalizers,"cause",n))})}catch(t){return e.reject(t.message)}return this}e.roll=function(e,t,n){e.forEach(function(e){e(n[t])},n)},e.prototype.resolve=function(t){return e.call(this,function(e,n){return e(t)})},e.prototype.reject=function(t){return e.call(this,function(e,n){return n(t)})},e.prototype.launch=function(t){return e.call(this,t)},e.prototype.then=function(t,n){switch(this.status){case e.STATUSES.REJECTED:e.roll(this.rejectors,"cause",this);break;case e.STATUSES.PENDING:this.resolvers.push(t),n&&this.rejectors.push(n);break;case e.STATUSES.FULFILLED:t(this.value)}return this},e.prototype.catch=function(t){switch(this.status){case e.STATUSES.PENDING:this.rejectors.push(t);break;case e.STATUSES.REJECTED:return t(this.cause)}return this},e.prototype.finally=function(e){return this.finalizers.push(e),this},e.STATUSES={PENDING:"PENDING",FULFILLED:"FULFILLED",REJECTED:"REJECTED"},e._isFunc=function(e){return"function"==typeof e},e._isIterable=function(t){return null!=t&&e._isFunc(t[Symbol.iterator])},e.one=function(t){return new e(t)},e.all=function(t){if(!e._isIterable(t))return e.reject("Balle.all acceps an Iterable Promise only");var n=[],o=t.length,r=0;return new e(function(e,i){t.forEach(function(t,s){"REJECTED"==t.status&&i(t.cause),t.then(function(t){r++,n[s]=t,r==o&&e(n)}).catch(i)})})},e.race=function(t){return e._isIterable(t)?new e(function(e,n){t.forEach(function(t){t.then(e).catch(n)})}):e.reject("Balle.race acceps an Iterable Promise only")},e.chain=function(t){if(!e._isIterable(t))return e.reject("Balle.chain acceps an Iterable Promise only");var n=t.length;return new e(function(e,o){!function r(i,s){return i==n?e(s):t[i](s).then(function(e){r(++i,e)}).catch(function(e){o(e)})}(0)})},e.reject=function(t){return new e(function(e,n){return n(t)})},e.resolve=function(t){return new e(function(n,o){t instanceof e?t.then(n).catch(o):n(t)})},"object"==typeof exports&&(module.exports=e),NS.Balle=e}(),function(){var e=W.history,t=[],n=function(e,n,o){t.forEach(function(t){t(e,n,o)})};NS.makeNs("history",{push:function(t,o,r){e.pushState(o||{},r||"",t),n(t,o,r)},registerHandler:function(e){t.push(e)},replace:function(t,o,r){e.replaceState(o||{},r||"",t),n(t,o,r)},resetHandlers:function(){t=[]},state:function(){return e.state}})}(),function(){var e={events:{wwdb_bindings:{},getElementDeterminant:function(e){return e.tagName.match(/input|textarea|select/i)?"value":"innerHTML"},getElementEvent:function(e){return e.tagName.match(/input|textarea/i)?"input":"change"}},unhandlers:{}};NS.makeNs("events",{saveUnhandler:function(t,n){e.unhandlers[t]=e.unhandlers[t]||[],e.unhandlers[t].push(n)},unhandle:function(t){e.unhandlers[t]&&e.unhandlers[t].forEach(function(e){e()}),e.unhandlers=[]},on:function(){function e(e,t,n){NS.events.saveUnhandler(e,function(){NS.events.off(e,t,n)})}return"addEventListener"in W?function(t,n,o){t.addEventListener.apply(t,[n,o,!1]),e(t,n,o)}:"attachEvent"in W?function(t,n,o){t.attachEvent.apply(t,["on"+n,o]),e(t,n,o)}:function(){throw new Error("No straight way to bind an event")}}(),off:function(){return"removeEventListener"in W?function(e,t,n){e.removeEventListener(t,n)}:"detachEvent"in W?function(e,t,n){e.detachEvent.apply(e,["on"+t,n])}:function(){throw new Error("No straight way to unbind an event")}}(),kill:function(e){return e||(e=W.event,e.cancelBubble=!0,e.returnValue=!1),"stopPropagation"in e&&e.stopPropagation()&&e.preventDefault(),!1},eventTarget:function(e){e=e||W.event;var t=e.currentTarget||void 0!==e.target?e.target:e.srcElement;if(!t)return!1;for(;3===t.nodeType&&null!==t.parentNode;)t=t.parentNode;return t},ready:function(){var e,t,n=[],o=setInterval(function(){if("complete"===document.readyState)for(clearInterval(o),e=0,t=n.length;e<t;e++)n[e].call(this)},10);return function(e){"complete"===document.readyState?e.call(this):n.push(e)}}(),ww:{on:function(t,n,o,r){var i=!1,s=!1,c=e.events.getElementDeterminant(o),a=e.events.getElementEvent(o),l=o[c],u=t[n],f=function(e){i=s=!!e};o.wwdbID="_"+NS.utils.uniqueid,e.events.wwdb_bindings[o.wwdbID]=W.setInterval(function(){i||(f(!0),u!=t[n]&&(l=t[n],u=l,o[c]=l),f(!1))},25),NS.events.on(o,a,function(){s||(f(!0),this[c]!==t[n]&&(t[n]=this[c],l=this[c],u=this[c]),f(!1))}),o[c]=u},off:function(){for(var t=[].slice.call(arguments,0),n=t.length;n-- >0;)NS.events.off(t[n],"keyup"),W.clearInterval(e.events.wwdb_bindings[t[n].wwdbID])}}})}(),NS.Channel=function(){var e={},t=function(e,t){if("indexOf"in e)return e.indexOf(t);for(var n=e.length-1;n>=0&&e[n]!==t;)n--;return n},n=function(){this.topic2cbs={},this.lateTopics={},this.enabled=!0};return n.prototype={enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},pub:function(e,t){var n,o=0;if(!(e in this.topic2cbs&&this.enabled))return e in this.lateTopics?this.lateTopics[e].push({args:t}):this.lateTopics[e]=[{args:t}],!1;for(n=this.topic2cbs[e].length;o<n;o+=1)this.topic2cbs[e][o].apply(null,[e].concat(t));return!0},sub:function(e,n,o){var r,i=0;if(e instanceof Array)for(r=e.length;i<r;i+=1)this.sub(e[i],n,o);if(e in this.topic2cbs&&this.enabled||(this.topic2cbs[e]=[]),!o&&t(this.topic2cbs[e],n)>=0)return this;if(this.topic2cbs[e].push(n),e in this.lateTopics)for(i=0,r=this.lateTopics[e].length;i<r;i++)n.apply(null,[e].concat(this.lateTopics[e][i].args))},unsub:function(e,n){var o,r=0;if(e instanceof Array)for(o=e.length;r<o;r+=1)this.unsub(e[r],n);return e in this.topic2cbs&&(r=t(this.topic2cbs[e],n))>=0&&this.topic2cbs[e].splice(r,1),e in this.lateTopics&&(r=t(this.lateTopics[e],n))>=0&&this.lateTopics[e].splice(r,1),this},once:function(e,t){function n(){t.apply(null,Array.prototype.slice.call(arguments,0)),o.unsub(e,n)}var o=this;this.sub(e,n)},reset:function(){var e=Array.prototype.slice.call(arguments,0),t=e.length,n=0;if(!t)return this.topic2cbs={},this.lateTopics={},this;for(null;n<t;n+=1)e[n]in this.topic2cbs&&(this.topic2cbs[e[n]]=[]),e[n]in this.lateTopics&&(this.lateTopics[e[n]]=[]);return this}},function(t){return t in e||(e[t]=new n),e[t]}}(),function(){function e(e,t){var n,o="";for(n in e)e.hasOwnProperty(n)&&(o+=t(e,n,o));return o}function t(e,t){return n(e)||"undefined"==typeof JSON?e===t:JSON.stringify(e)===JSON.stringify(t)}function n(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function o(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function r(e,r,i,s){if(!e.match(/key|value|keyvalue/))throw new Error("Bad param for object.digFor");s=parseInt(s,10);var c=0,a={key:function(e,n,o){return NS.object.isString(e)&&o instanceof RegExp?e.match(o):t(e,o)},value:function(e,n,o){return NS.object.isString(n)&&o instanceof RegExp?n.match(o):t(n,o)},keyvalue:function(e,n,o){return(NS.object.isString(e)&&o.key instanceof RegExp?e.match(o.key):t(e,o.key))&&(NS.object.isString(n)&&o.value instanceof RegExp?n.match(o.value):t(n,o.value))}}[e],l=[],u=function(e,t,n,o,r){var i=[].concat.call(e,[t]),s=a(t,o[t],n);s&&(l.push({obj:o,value:o[t],key:i[i.length-1],parentKey:i[i.length-2],path:i.join("/"),container:i.slice(0,i.length-1).join("/"),parentContainer:i.slice(0,i.length-2).join("/"),regexp:s,level:r}),c++),f(o[t],n,i,r+1)},f=function(e,t,r,i){if(!n(e)&&!o(e)){var a,l;if(e instanceof Array)for(a=0,l=e.length;a<l&&(u(r,a,t,e,i),!s||s!==c);a++);else{if("object"!=typeof e)return;for(a in e)if(u(r,a,t,e,i),s&&s===c)break}}};return f(r,i,[],0),l}NS.makeNs("object",{fromQs:function(){var e,t,n,o=document.location.search.substr(1).split("&"),r=[];for(e=0,t=o.length;e<t;e+=1)n=o[e].split("="),!r[n[0]]&&(r[n[0]]=decodeURIComponent(n[1]));return r},clone:function(e){var t,n,o,r=NS.object;if(null===e||"object"!=typeof e)return e;if(e instanceof Date)return t=new Date,t.setTime(e.getTime()),t;if(e instanceof Array){for(t=[],n=0,o=e.length;n<o;n++)t[n]=r.clone(e[n]);return t}if(e instanceof Object){t={};for(n in e)e.hasOwnProperty(n)&&(t[n]=r.clone(e[n]));return t}throw new Error("Unable to copy obj! Its type isn't supported.")},digForKey:function(e,t,n){return r("key",e,t,n)},digForValue:function(e,t,n){return r("value",e,t,n)},digForKeyValue:function(e,t,n){return r("keyvalue",e,t,n)},extend:function(e,t,n){var o,r=NS.object.clone(e);for(o in t)!t.hasOwnProperty(o)||o in r&&!n||(r[o]=t[o]);return r},keyize:function(e,t){var n={},o=0,r=e.length;for(null;o<r;o++)t in e[o]&&!(e[o][t]in n)&&(n[e[o][t]]=e[o]);return n},isString:function(e){return"string"==typeof e||e instanceof String},jCompare:t,toQs:function(t){return e(t,function(e,t,n){return((n?"&":"?")+encodeURIComponent(t)+"="+encodeURIComponent(e[t])).replace(/\'/g,"%27")})}})}(),NS.makeNs("css",{style:function(e,t,n){var o,r="object"==typeof t&&void 0===n;if(r)for(o in t)e.style[o]=t[o];else{if(void 0===n)return e.currentStyle?e.currentStyle[t]:e.style[t];n+="",e.style[t]=n,"opacity"===t&&(e.style.filter="alpha(opacity = "+~~(100*parseFloat(n,10))+")")}}}),NS.makeNs("dom",{remove:function(e){return e.parentNode&&e.parentNode.removeChild(e)}}),function(){function e(){return W.navigator.cookieEnabled}function t(e,t,n,o,r,i){if(!NS.cookie.enabled)return!1;this.cookie_nocookiesaround=!1;var s=new Date,c=new Date(s.getTime()+n);return WD.cookie=e+"="+W.escape(t)+(n?";expires="+c.toGMTString():"")+(o?";path="+o:"")+(r?";domain="+r:"")+(i?";secure":""),!0}function n(e){var t=WD.cookie.split(";"),n="",o="",r=!1,i=0,s=t.length;if(!NS.cookie.enabled)return!1;for(null;i<s;i+=1){if(n=t[i].split("="),n[0].replace(/^\s+|\s+$/g,"")===e)return r=!0,n.length>1&&(o=W.unescape(n[1].replace(/^\s+|\s+$/g,""))),o;n=null,""}return r}function o(e,t,n){if(!NS.cookie.enabled)return!1;var o=!1;return this.get(e)&&(WD.cookie=e+"="+(t?";path="+t:"")+(n?";domain="+n:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT",o=!0),o}function r(){if(!NS.cookie.enabled)return!1;var e,t=WD.cookie.split(";"),n=0,o=t.length;for(null;n<o;n+=1)e=t[n].split("="),this.del(e[0],!1,!1);return this.cookie_nocookiesaround=!0,!0}function i(){return!!NS.cookie.enabled&&(""===WD.cookie?[]:this.cookie_nocookiesaround?[]:WD.cookie.split(";").forEach(function(e){var t=e.split("=");return{name:t[0],value:t[1]}}))}NS.makeNs("cookie",{enabled:!0,cookie_nocookiesaround:!1,initCheck:e,set:t,get:n,del:o,delall:r,getall:i})}(),NS.makeNs("i18n",function(){var e={};return NS.lang=typeof sm_lang!==_U_?sm_lang:"en",{check:function(e){return e.match(/i18n\(([^}|]*)?\|?([^}]*)\)/)},dynamicLoad:function(t,n){for(n in t)NS.lang in t[n]&&(e[n]=t[n][NS.lang])},get:function(t,n){return NS.checkNs(t,e)||n||"no Value"},load:function(t){e=t},parse:function(e){var t,n,o,r,i=NS.object.digForValue(e,/i18n\(([^}|]*)?\|?([^}]*)\)/);for(o=0,r=i.length;o<r;o++)(typeof i[o].regexp).match(/boolean/i)||(t=NS.i18n.check(i[o].regexp[0]))&&(n=NS.checkNs(i[o].container,e),n[i[o].key]=NS.i18n.get(t[1],t[2]))}}}),function(){var W=window,xdr=void 0!==W.XDomainRequest&&document.all&&!navigator.userAgent.match(/opera/i),_={getxhr:function(e){var t,n=["Msxml2.XMLHTTP","Msxml3.XMLHTTP","Microsoft.XMLHTTP"],o=n.length,r=0;if(xdr&&e.cors)t=new W.XDomainRequest;else try{t=new W.XMLHttpRequest}catch(e){for(null;r<o;r+=1)try{t=new W.ActiveXObject(n[r])}catch(e){continue}!t&&alert("No way to initialize XHR")}return t},setHeaders:function(e,t){var n={xml:"text/xml",html:"text/html",json:"application/json"}[t]||"text/html";e.setRequestHeader("Accept",n+"; charset=utf-8")},setMultipartHeader:function(e){e.setRequestHeader("Content-Type","multipart/form-data")},setCookiesHeaders:function(e){var t,n,o;for(t=NS.cookie.getall(),n=0,o=t.length;n<o;)e.setRequestHeader("Cookie",t[n].name+"="+t[n].value),n++},ajcall:function(e,t){var n,o,r=_.getxhr(t),i=t&&t.method||"POST",s=t&&t.cback,c=t&&t.opened||function(){},a=t&&t.loading||function(){},l=t&&t.error||function(){},u=t&&t.abort||function(){},f=t&&t.sync,h=t&&t.data||{},p=t&&t.type||"text/html",d=!t||void 0===t.cache||t.cache,m="xml"===p?"responseXML":"responseText",g=t&&t.timeout||1e4,y=t&&t.hasFiles,N=!1,S=!1,v=!1,b=!1;if(d||(h.C=+new Date),"GET"===i)h=NS.object.toQs(h).substr(1);else{n=new FormData;for(o in h)h.hasOwnProperty(o)&&n.append(o,h[o]);h=n}if(xdr&&t.cors)r.open(i,"GET"===i?e+(h?"?"+h:""):e),r.onerror=l,r.ontimeout=function(){},r.onprogress=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;console.log(t+"% uploaded")}},r.onload=function(){s(r.responseText)},r.timeout=3e3,_.setHeaders(r,y,p),o={xml:"text/xml",html:"text/html",json:"application/json"}[p]||"text/html",r.contentType=o,window.setTimeout(function(){r.send()},20);else{r.onreadystatechange=function(){if(b===r.readyState)return!1;if(b=r.readyState,4===parseInt(r.readyState,10)&&0===parseInt(r.status,10))return r.onerror({error:404,xhr:r,url:e}),r.abort(),!1;if("complete"===b||4===parseInt(b,10)&&200===parseInt(r.status,10))return N=!0,404===parseInt(r.status,10)?(r.onerror.call(r),!1):(s&&(S=r[m],function(){s(S)}()),v=r[m],W.setTimeout(function(){r=null},50),v);if(3===b)a(r);else if(2===b)c(r);else if(1===b)switch(y?_.setHeaders(r,"json"):_.setHeaders(r,p),i){case"POST":case"PUT":try{r.send(h||!0)}catch(e){}break;case"DELETE":case"GET":try{r.send(null)}catch(e){}break;default:alert(i),r.send(null)}return!0},r.onerror=function(){l&&l.apply(null,arguments)},r.onabort=function(){u&&u.apply(null,arguments)},r.open(i,"GET"===i?e+(h?"?"+h:""):e,f),W.setTimeout(function(){N||(N=!0,r.abort())},g);try{return"responseXML"===m?r[m].childNodes[0]:r[m]}catch(e){}}return!0}};NS.makeNs("io",{getxhr:_.getxhr,post:function(uri,cback,sync,data,cache,files,err){return _.ajcall(uri,{cback:function(r){files?(r=r.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm,""),cback(window.JSON&&window.JSON.parse?JSON.parse(r):eval("("+r+")"))):cback(r)},method:"POST",sync:sync,data:data,cache:cache,error:err,hasFiles:!!files})},get:function(e,t,n,o,r,i){return _.ajcall(e,{cback:t||function(){},method:"GET",sync:n,data:o,cache:r,error:i})},put:function(e,t,n,o,r,i){return _.ajcall(e,{cback:t,method:"PUT",sync:n,data:o,cache:r,error:i})},getJson:function(uri,cback,data,cors){return _.ajcall(uri,{type:"json",method:"GET",sync:!1,cback:function(r){r=r.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm,""),cback(W.JSON&&W.JSON.parse?JSON.parse(r):eval("("+r+")"))},data:data,cors:!!cors})},getXML:function(e,t){return _.ajcall(e,{method:"GET",sync:!1,type:"xml",cback:t||function(){}})}})}(),function(){function e(){return{}}function t(e,t,n){var o=e.states.length,r=e.states[o-1];e.listeners.forEach(function(e){e(r,t,n)}),e.states[o]=t}function n(t,n){this.reducer=t||e,this.state=n||t(),this.states=[this.state],this.listeners=[]}n.prototype.getState=function(){return this.states[this.states.length-1]},n.prototype.dispatch=function(e){if(!("type"in e))throw new Error("Actions needs a type");var n,o=e.type,r=this.states[this.states.length-1],i=this.reducer(r,o,e);for(n in e)"type"!==n&&(i[n]=e[n]);t(this,i,o)},n.prototype.subscribe=function(e){var t,n=this;return this.listeners.push(e),t=this.listeners.length-1,function(){n.listeners=n.listeners.slice(0,t).concat(n.listeners.slice(t+1))}},n.prototype.all=function(){return this.states.concat()},n.prototype.back=function(e){var n=this.states.length-1,o=n-e,r=o>-1?o:0;t(this,this.states[r])},NS.getStore=function(e,t){return new n(e,t)}}(),function(){var e=0;NS.makeNs("timer",{add:function(t){e+=t},get:function(){var t=e+0;return e=0,t}})}(),Wnode.prototype.cleanup=function(){NS.events.unhandle(this.id);var e=this.node,t=[],n=["cleanable","parent","getNode","climb","root","done","resolve","data"],o=n.length,r=0,i=0,s=0,c=null;for(NS.utils.eulerWalk(e,function(n){n!==e&&3!=n.nodeType&&t.push(n)&&s++},"post");i<s;){for(c=t[i++];r<o;)c[n[r++]]=null;!function(e){e.parentNode.removeChild(e)}(c),c=null}return function e(t){t.children.forEach(e),t=null}(this),t=[],n=null,delete this.root,!0},Wnode.prototype.setMap=function(e){this.map=e,this.root=e.rootNode,this.abort=e.abort,this.getNode=e.getNode,this.getNodes=e.getNodes,this.lateWid=e.lateWid},Wnode.prototype.render=function(){var self=this,tmp,i,j,k,__nodeIdentifier="wid",replacementTempNode,rerendering=this.node&&this.parent&&this.node.parentNode==this.parent.node;return rerendering&&(replacementTempNode=document.createElement("div"),replacementTempNode.style.display="none",this.conf.target.replaceChild(replacementTempNode,this.node)),void 0!==this.conf[__nodeIdentifier]&&this.map.add(this.conf[__nodeIdentifier],this),this.node=this.conf.ns?document.createElementNS(this.conf.ns,this.tag):document.createElement(this.tag),this.node.innerHTML=this.conf.html&&this.conf.data?NS.utils.replaceDataInTxt(this.conf.html+"",this.conf.data):this.conf.html||"",this.setData().setAttrs().setEvents().setStyle().setMethods().checkInit().checkWillRender(),"function"==typeof this.conf.content&&(this.conf.content=this.conf.content.call(this)),this.wlen=this.conf.content?this.conf.content.length:0,this.conf.cb=this.doRender&&this.conf.cb?this.conf.cb.bind(this):self.done.bind(this),this.doRender?(void 0!==this.conf.text&&(tmp=document.createTextNode(""+NS.utils.replaceDataInTxt(this.conf.text+"",this.conf.data)),this.node.appendChild(tmp)),rerendering?this.conf.target.replaceChild(this.node,replacementTempNode):this.conf.target.appendChild(this.node),this.checkEnd(),0==this.wlen?this.conf.cb("---auto---"):(this.praramsFromChildren=[],this.conf.content.forEach(function(e){e.target=self.node,self.children.push(new Wnode(e,function(){self.praramsFromChildren.push([].slice.call(arguments,0)),--self.wlen<=0&&self.conf.cb.apply(self,self.praramsFromChildren)},self.map,self).render())})),(tmp=this.node.getAttribute("wwdb"))&&(this.node.removeAttribute("wwdb"),void 0!==(i=NS.checkNs(tmp,this))&&(j=("this."+tmp).split("."),k=j.pop(),i=eval(j.join(".")),k in i&&NS.events.ww.on(i,k,this.node))),this.cleanable=!0,this):(this.conf.cb("---auto---"),this)},Wnode.prototype.checkWillRender=function(){return"willRender"in this.conf&&"function"==typeof this.conf.willRender&&(this.doRender=this.conf.willRender.call(this)),this},Wnode.prototype.subRender=function(){return Engy.render(this.sub)},Wnode.prototype.climb=function(e){e=e||1;for(var t=this;e--;)t=t.parent||t;return t},Wnode.prototype.descendant=function(){var e=this,t=Array.prototype.slice.call(arguments,0),n=0,o=e,r=t.length;if(!r)return o;for(;n<r;)o=o.children[~~t[n++]];return o},Wnode.prototype.setAttrs=function(){var e=this.node;if(void 0!==this.conf.attrs){this.attrs=this.conf.attrs;for(var t in this.attrs)"class"!==t?"style"!==t?e.setAttribute(t,this.attrs[t]):Wnode.prototype.setStyle.call(this):e.className=this.attrs[t]}return this},Wnode.prototype.setStyle=function(){var e=this.node;if(void 0!==this.conf.style){this.style=this.conf.style;for(var t in this.style)e.style[t.replace(/^float$/i,"cssFloat")]=this.style[t]}return this},Wnode.prototype.setMethods=function(){var e,t=this,n=Object.keys(this.conf);return n.forEach(function(n){(e=n.match(/^method_(\w*)$/i))&&(t[e[1]]=t.conf[e[0]].bind(t))}),this},Wnode.prototype.setData=function(){return this.conf.data&&(this.data=this.conf.data||{}),this},Wnode.prototype.checkInit=function(){return"init"in this.conf&&"function"==typeof this.conf.init&&!this.conf.init.call(this)&&this.abort(),this},Wnode.prototype.checkEnd=function(){var e=this;return"end"in this.conf&&"function"==typeof this.conf.end&&this.map.endFunctions.push(function(){e.conf.end.call(e)}),this},Wnode.prototype.setEvents=function(){var e,t=this;for(e in this.events)!function(e){var n;e in t.conf&&(n=e.match(/on(.*)/)[1].toLowerCase(),NS.events.on(t.node,n,function(n){t.conf[e].call(t,n)}))}(e);return this},Wnode.prototype.report=function(){window.JSON&&console.log("json size : "+JSON.stringify(this.conf).length),console.log("html size : "+this.root.node.innerHTML.length)},function(){function e(e,t,n){function o(){if(h)for(e.route&&"string"==typeof e.route&&NS.history.push(e.route),e.title&&"string"==typeof e.title&&(document.title=e.title),l.appendChild(a),l.cleanable=!0,r=+new Date,NS.timer.add(r-c);f.endFunctions.length;)f.endFunctions.pop()()}var r,i,c=+new Date,a=document.createDocumentFragment(),l=function(){return e.target||document.body}(),u=l.innerHTML,f={abort:function(){return h=!1,l.innerHTML=u,"onAbort"in e&&(typeof e.onAbort).match(/function/i)&&e.onAbort.call(null,e),!1},add:function(e,t){f.map[e]=t},endFunctions:[],getNode:function(e){return f.map[e]||!1},getNodes:function(){return f.map},lateWid:function(e){f.map[e]=this},map:{}},h=!0;return e.target=a,l.cleanable&&l.node.cleanup(),!0===t&&(l.innerHTML=""),i=new Wnode(e,o,f,null),l.node=i,f.rootNode=i,i.setMap(f),i.cleanable=!0,i.render(),!n||n in s||(s[n]=i),i}function t(t,n){e({target:t,content:[{html:n||""}]},!0)}function n(t){var n=document.createElement("div");return t.target=n,[n,e(t)]}function o(e){var t=document.createElement("script");document.getElementsByTagName("head")[0].appendChild(t),t.onload=function(){t.parentNode.removeChild(t)},t.src=e}function r(e){return e in s&&s[e]}function i(){return s}var s={};NS.makeNs("Widgzard",{render:e,cleanup:t,get:n,load:o,getElement:r,getElements:i})}(),function(){function _configSet(e){var t;for(t in config)t in e&&(config[t]=e[t]);return this}function _overwrite(e,t,n){for(var o=t.split(/\.|\//),r=o.length,i=0;i<r-1;)e=e[o[i++]];e[o[r-1]]=n}function _mergeComponent(e,t,n){var o,r=NS.checkNs(t,e),i=n,s={},c=t.split(/\.|\//),o=0;c.length;for(o in i)s[o]=i[o];for(o in r)!o.match(/component|params/)&&(s[o]=r[o]);_overwrite(e,t,s)}function Processor(e){this.config=e,this.endPromise=NS.Balle.one()}function _process(e){return new Processor(e).run()}function _component(e,t){e in preloadedComponents||(preloadedComponents[Processor.prototype.getFileName(e)]=t)}function _components(e){for(var t in e)_component(t,e[t])}function _clone(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=_clone(e[n]));return t}console.log("\n\n ENGY v.2.0.1\n\n");var components={},preloadedComponents={},config={fileNameSeparator:"/",fileNamePrepend:"",ext:".js",componentsUrl:"/components/"},num=0;Processor.prototype.getFileName=function(e){var t=e.split(/\/|\|/),n=e,o=t.length;return t[o-1]=config.fileNamePrepend+t[o-1],n=t.join(config.fileNameSeparator),config.componentsUrl+(config.componentsUrl.match(/\/$/)?"":"/")+n+config.ext},Processor.prototype.run=function(){var self=this,langFunc=NS.i18n.parse,elementsN=0,countPromise=NS.Balle.one(),solveTimePromise=NS.Balle.one(),start=+new Date,end,xhrTot=0,requested={},cback,computeStats=!0,stats={time:0,elements:0,requested:{},xhrTot:0};return function solve(){var component=NS.object.digForKey(self.config,"component",1),componentName,cached,preLoaded,xhrStart=0,xhrEnd=0;component.length?(component=component[0],componentName=self.getFileName(component.value),component.value in requested?requested[component.value]++:(requested[component.value]=1,elementsN++),cached=componentName in components,preLoaded=componentName in preloadedComponents,cback=function(cntORobj){xhrEnd=+new Date,xhrTot+=xhrEnd-xhrStart;var params=NS.checkNs(component.container+"/params",self.config),obj,usedParams,foundParam,foundParamValue,foundParamValueReplaced,i,l;if(preLoaded?obj=_clone(cntORobj):(cached||(components[componentName]=_clone(cntORobj)),cntORobj=cntORobj.replace(/^[^{]*/,"").replace(/;?$/,""),obj=eval("("+cntORobj+")")),params&&(usedParams=NS.object.digForValue(obj,/#PARAM{([^}|]*)?\|?([^}]*)}/),l=usedParams.length))for(i=0;i<l;i++)foundParam=NS.checkNs(usedParams[i].regexp[1],params),foundParamValue=typeof foundParam!==_U_?foundParam:usedParams[i].regexp[2]||"",(typeof foundParamValue).match(/string/i)?(foundParamValueReplaced=NS.checkNs(usedParams[i].path,obj).replace(usedParams[i].regexp[0],foundParamValue),_overwrite(obj,usedParams[i].path,foundParamValueReplaced)):_overwrite(obj,usedParams[i].path,foundParamValue);component.container?_mergeComponent(self.config,component.container,obj):self.config=obj,solve()},xhrStart=+new Date,preLoaded?cback(preloadedComponents[componentName]):cached?cback(components[componentName]):NS.io.get(componentName,cback,!0)):(end=+new Date,stats.time=end-start,stats.elements=elementsN,stats.requested=requested,stats.xhrTot=xhrTot,self.endPromise.resolve([self.config,computeStats&&stats]))}(),langFunc&&langFunc(self.config),self.endPromise},NS.makeNs("Engy",{component:_component,components:_components,configSet:_configSet,define:_component,get:function(e,t,n){return NS.Balle.one(function(t,n){return _process(e).then(t)})},load:function(e){return NS.Widgzard.load(e)},getElement:function(e){return NS.Widgzard.getElement(e)},getElements:function(){return NS.Widgzard.getElements()},process:_process,report:function(e){var t,n="------------------------------------";console.log(n),console.log("Engy used "+e.elements+" component"+(1==e.elements?"":"s")),console.log("usage: ");for(t in e.requested)console.log("> "+t+": "+e.requested[t]+" time"+(e.requested[t]>1&&"s"));console.log("Engy total time: "+e.time+"ms ("+(e.time-e.xhrTot)+" unfolding,  "+e.xhrTot+" xhr)"),console.log(n)},render:function(e,t,n){var o=+new Date;return NS.Balle.one(function(r,i){_process(e).then(function(e){e[1]&&NS.Engy.report(e[1]);var i=+new Date;console.log("Engy process tot: "+(i-o)),r(NS.Widgzard.render(e[0],t,n))})})}})}(),W.Widgzard={render:NS.Widgzard.render,cleanup:NS.Widgzard.cleanup,load:NS.Widgzard.loadStealth,get:NS.Widgzard.get,getElement:NS.Widgzard.getElement,getElements:NS.Widgzard.getElements,getStore:NS.getStore,Channel:NS.Channel,events:NS.events,cookie:NS.cookie,utils:NS.utils,i18n:NS.i18n,io:NS.io,object:NS.object,css:NS.css,dom:NS.dom,timer:NS.timer,history:NS.history},W.Engy={component:NS.Engy.component,components:NS.Engy.components,configSet:NS.Engy.configSet,define:NS.Engy.define,get:NS.Engy.get,load:NS.Engy.loadStealth,getElement:NS.Engy.getElement,getElements:NS.Engy.getElements,process:NS.Engy.process,render:NS.Engy.render,timer:NS.timer,history:NS.history}}(this,"undefined","prototype");
    /*
    [Malta] keyMediator.js
    */
    +function () {
        var channel = Channeljs.get('keyboard_event')
        document.body.addEventListener('keyup', function (e) {
            channel.pub('up', [e])
        });
        document.body.addEventListener('keydown', function (e) {
            channel.pub('down', [e])
        });
        document.body.addEventListener('keypress', function (e) {
            channel.pub('press', [e])
        });
    }();
    
    /*
    [Malta] levels.js
    */
    var Levels = (function () {
    
        function separatedRepeat(chars, min, max, num, sep) {
            var res = [],
                card = chars.length,
                i;
            min = min > 0 ? min : 1;
            max = max >= min ? max  : min;
            sep = sep || ' ';
            function picksome(n) {
                var res = '';
                while (n--) res += chars[Math.floor(Math.random() * card)]
                return res;
            }
            for (i = 0; i < num; i++) {
                res.push(picksome(min + Math.floor(Math.random() * (max - min + 1))))
            }
            return res.join(sep)
        }
    
        var tests = {
            basic: [
                [5, 5, 1],
                [2, 2, 5],
                [4, 4, 10],
                [1, 6, 10]
            ],
            row: [
                [5, 5, 1],
                [2, 2, 5],
                [4, 4, 10],
                [1, 6, 10]
            ]
        }
        function generateTests(test, set) {
            return tests[test].map(function (t) {
                return separatedRepeat.apply(null, [set].concat(t));
            });
        }
        function generateLevel(chars, test) {
            var set = chars.split('');
            return {
                set: set,
                tests: generateTests(test, set)
            };
        }
    
        var levels = {
            
            basic: [{
                name: 'homerow',
                tests: [
                    generateLevel('fj', 'basic'),
                    generateLevel('dk', 'basic'),
                    generateLevel('sl', 'basic'),
                    generateLevel('a;', 'basic'),
                    generateLevel('gh', 'basic'),
                    generateLevel('fghj', 'basic'),
                    generateLevel('dfghjk', 'basic'),
                    generateLevel('sdfghjkl', 'basic'),
                    generateLevel('asdfghjkl;', 'row')
                ]
            }, {
                name: 'uprow',
                tests: [
                    generateLevel('ru', 'basic'),
                    generateLevel('ei', 'basic'),
                    generateLevel('wo', 'basic'),
                    generateLevel('qp', 'basic'),
                    generateLevel('ty', 'basic'),
                    generateLevel('rtyu', 'basic'),
                    generateLevel('ertyui', 'basic'),
                    generateLevel('wertyuio', 'basic'),
                    generateLevel('qwertyuiop', 'row')
                ]
            }, {
                name: 'lowrow',
                tests: [
                    generateLevel('vm', 'basic'),
                    generateLevel('c,', 'basic'),
                    generateLevel('x.', 'basic'),
                    generateLevel('z/', 'basic'),
                    generateLevel('bn', 'basic'),
                    generateLevel('vbnm', 'basic'),
                    generateLevel('cvbnm,', 'basic'),
                    generateLevel('xcvbnm.,', 'basic'),
                    generateLevel('zxcvbnm./,', 'row')
                ]
            }, {
                name: 'index',
                tests: [
                    generateLevel('rtyufghjvbnm', 'basic')
                ]
            }, {
                name: 'middle',
                tests: [
                    generateLevel('edcik,', 'basic')
                ],
            }, {
                name: 'ring',
                tests: [
                    generateLevel('wsxol.', 'basic')
                ]
            }, {
                name: 'index',
                tests: [
                    generateLevel('qazp;/', 'basic')
                ]
            }],
            numbers: [{
                name: 'index',
                tests: [
                    generateLevel('47', 'basic'),
                    generateLevel('38', 'basic'),
                    generateLevel('29', 'basic'),
                    generateLevel('10', 'basic'),
                    generateLevel('56', 'basic'),
                    generateLevel('4567', 'basic'),
                    generateLevel('345678', 'basic'),
                    generateLevel('23456789', 'basic'),
                    generateLevel('1234567890', 'basic'),
                ]
            }],
    
            symbols: [{
                name: 'basic',
                tests:[
                    generateLevel('`-=', 'basic'),
                    generateLevel('[]\'\\', 'basic'),
                ]
            }, {
                name: 'advanced',
                tests: [
                    generateLevel('$&', 'basic'),
                    generateLevel('#*', 'basic'),
                    generateLevel('@(', 'basic'),
                    generateLevel('@(', 'basic'),
                    generateLevel('!)', 'basic'),
                    generateLevel('~_+', 'basic')
                ]
            }]
        };
    
        return levels;
    })()

    /*
    [Malta] ui.js
    */
    Engy.configSet({
        componentsUrl: 'cmpnt'
    })
    
    var app = Engy.render({
        data: {
            level : 0
        },
        content: [{
            attrs: {
                class: 'panel'
            },
            content: [{
                component: 'panel',
                params: {
                    name : 'Federico'
                },
    
            }, {
                component: 'typefield'
            }]
        }, {
    
        }]
    });

    var channel = Channeljs.get('keyboard_event');
    channel.sub('down', function(e) {
        console.log(e);
    });

    console.debug(Levels)
})();
