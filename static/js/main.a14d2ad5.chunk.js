(this["webpackJsonplata2021-front"]=this["webpackJsonplata2021-front"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var a,s=o(2),n=o.n(s),r=o(9),i=o.n(r),c=(o(14),o(4)),u=o(5),l=o(3),h=o(7),d=o(6),p=(o(15),o(1)),g=o.n(p),m=(o(16),function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var a;return Object(c.a)(this,o),(a=e.call(this,t)).options={color:"rgb(255,255,255)",iconAnchor:new p.Point(0,0),tooltipAnchor:new p.Point(0,0),iconSize:new p.Point(32,48),opacity:1,popupAnchor:new p.Point(0,0),shadowAngle:45,shadowBlur:1,shadowColor:"rgb(0,0,10)",shadowEnable:!1,shadowLength:.75,shadowOpacity:.5,shadowTranslate:new p.Point(0,0),weight:2,className:"svgicon",iconUrl:void 0,svgLink:void 0,interactable:!1},t=p.Util.setOptions(Object(l.a)(a),t),a.options.html=a._createSVG(),a}return Object(u.a)(o,[{key:"_createSVG",value:function(){var t=this,e=document.createElement("object");return e.setAttribute("data",this.options.svgLink),e.addEventListener("load",(function(o){e.style.setProperty("pointer-events","none"),t.options.interactable&&(e.getSVGDocument().querySelector("svg").style.cursor="pointer"),e.getSVGDocument().querySelector("svg").setAttribute("width",t.options.iconSize.x.toString()+"px"),e.getSVGDocument().querySelector("svg").setAttribute("height",t.options.iconSize.y.toString()+"px"),t.setColor(t.options.color)})),e}},{key:"setColor",value:function(t){this.options.color=t;var e=this.options.html.getSVGDocument();if(e){for(var o=e.getElementsByTagNameNS("http://www.w3.org/2000/svg","path"),a=0,s=Object.values(o);a<s.length;a++){var n=s[a];n.hasAttribute("iconColorIgnore")||(n.style.setProperty("fill",t),n.style.setProperty("opacity",this.options.opacity.toString()))}for(var r=e.getElementsByTagNameNS("http://www.w3.org/2000/svg","rect"),i=0,c=Object.values(r);i<c.length;i++){var u=c[i];u.hasAttribute("iconColorIgnore")||(u.style.setProperty("fill",t),u.style.setProperty("opacity",this.options.opacity.toString()))}}}}]),o}(p.DivIcon)),v=o.p+"static/media/marker.5ef2d77e.svg",y=o(0);!function(t){t[t.NONE=0]="NONE",t[t.ROUTE=1]="ROUTE",t[t.TRIP=2]="TRIP",t[t.STOP=3]="STOP"}(a||(a={}));var b=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var s;return Object(c.a)(this,o),(s=e.call(this,t)).map=null,s.lineMap=new Map,s.routes=new Map,s.names=new Map,s.types=new Map,s.bus=new p.LayerGroup,s.tram=new p.LayerGroup,s.trolleybus=new p.LayerGroup,s.markerGroup=new p.LayerGroup,s.state={date:new Date("2021-01-01"),hour:(new Date).getHours(),autoHour:!1,currMenu:a.NONE,currSelect:""},setInterval(s.updateThing.bind(Object(l.a)(s)),500),s}return Object(u.a)(o,[{key:"componentDidMount",value:function(){null==this.map&&(this.map=g.a.map("map",{center:[56.95,24.11],maxBounds:[[57.21,23.2],[56.75,24.66]],zoom:13})),g.a.tileLayer("https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}",{attribution:'<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:14,maxZoom:18,subdomains:"abcd",accessToken:"iKbn4srGwDR8o2IxGUP8skNZ8T7AVxUrCiBvpwxYzLLRtSGXGhlY9W20wBr182yM"}).addTo(this.map),this.markerGroup.addTo(this.map),this.cacheRoutes(),this.bus.addTo(this.map),document.getElementById("busCheck").checked=!0}},{key:"cacheRoutes",value:function(){var t=this;fetch("https://busify.herokuapp.com/api/data/routes?simpleShape=true",{mode:"cors",method:"GET"}).then((function(t){return t.json()})).then((function(e){e.forEach((function(e){t.routes.set(e.routeId,e.shape),t.names.set(e.routeId,[e.shortName,e.longName]),t.types.set(e.routeId,e.type)}))})).then((function(){t.setUpRoutes()}))}},{key:"setUpRoutes",value:function(){var t=this,e=this.state.hour,o=this.state.date.getDate(),a=this.state.date.getMonth();fetch("https://busify.herokuapp.com/api/activity/routes?month=".concat(this.state.date.getMonth()+1,"&day=").concat(this.state.date.getDate(),"&hour=").concat(this.state.hour,"&simpleShape=true"),{mode:"cors",method:"GET"}).then((function(t){return t.json()})).then((function(s){e===t.state.hour&&o===t.state.date.getDate()&&a===t.state.date.getMonth()&&(t.bus.clearLayers(),t.tram.clearLayers(),t.trolleybus.clearLayers(),s.forEach((function(e){var o=e.id,a=e.relativeActivity;if(void 0!==t.names.get(o)){var s=t.names.get(o)[1],n=t.names.get(o)[0],r=t.types.get(o),i=t.routes.get(o);void 0!==i&&t.showRoute(i,a,"("+n+") "+s+"<br/>"+e.passengers+" passengers",o,r)}})))}))}},{key:"generateStopRoute",value:function(t,e){var o=this;""===this.state.currSelect?fetch("https://busify.herokuapp.com/api/activity/stops?month=".concat(this.state.date.getMonth()+1,"&day=").concat(this.state.date.getDate(),"&hour=").concat(this.state.hour,"&client=true&route=").concat(t),{mode:"cors",method:"GET"}).then((function(t){return t.json()})).then((function(e){return o.markerGroup.clearLayers(),e.forEach((function(e){o.setState({date:o.state.date,hour:o.state.hour,autoHour:o.state.autoHour,currMenu:o.state.currMenu,currSelect:t});new p.Marker(e.coord,{icon:new m({svgLink:v,iconAnchor:[16,16],iconSize:new g.a.Point(32,32),color:o.getColour(e.relativeActivity)})}).addTo(o.markerGroup)})),"swag"})).then((function(t){})):this.clearer()}},{key:"paintSegments",value:function(t){var e=this;t.forEach((function(t,o){g.a.polyline(o,{color:e.getColour(t),weight:10,opacity:.5}).addTo(e.map)}))}},{key:"getColour",value:function(t){var e=Math.log(100*t+1)/Math.log(100);return"rgb("+255*e+","+255*(1-e)+",0)"}},{key:"changeLight",value:function(t,e){var o=t.split(",");if(3!==o.length)throw new Error("Invalid Colour");o[0]=o[0].substring(4),o[2]=o[2].replace(")","");var a=o.map((function(t){return parseInt(t)}));return e>=0?"rgb(".concat(a[0]*e,",").concat(a[1]*e,",").concat(a[2]*e,")"):"rgb(".concat(a[0]/-e,",").concat(a[1]/-e,",").concat(a[2]/-e,")")}},{key:"onRouteHoverOn",value:function(t){var e=this;this.lineMap.forEach((function(o,a){a!==t?o.setStyle({color:e.changeLight(e.lineMap.get(a).options.color,-2),opacity:.1}):o.setStyle({color:e.changeLight(e.lineMap.get(a).options.color,2),opacity:1})}))}},{key:"forceDarken",value:function(t){var e=this;this.lineMap.forEach((function(o,a){a!==t&&o.setStyle({color:e.changeLight(e.lineMap.get(a).options.color,-2),opacity:.1})}))}},{key:"onRouteHoverOff",value:function(t){var e=this;this.lineMap.forEach((function(o,a){a!==t?o.setStyle({color:e.changeLight(e.lineMap.get(a).options.color,2),opacity:.5}):o.setStyle({color:e.changeLight(e.lineMap.get(a).options.color,-2),opacity:.5})}))}},{key:"forceUndarken",value:function(t){var e=this;this.lineMap.forEach((function(o,a){a!==t&&o.setStyle({color:e.changeLight(e.lineMap.get(a).options.color,2),opacity:.5})}))}},{key:"showRoute",value:function(t,e,o,a,s){var n=this,r=g.a.polyline(t,{color:this.getColour(e),weight:10,opacity:.5}).bindTooltip(o,{sticky:!0});switch(r.addEventListener("mouseover",(function(){n.onRouteHoverOn(a)})).addEventListener("mouseout",(function(){n.onRouteHoverOff(a)})).addEventListener("click",(function(){n.generateStopRoute(a,n.lineMap.get(a))})),this.lineMap.set(a,r),s){case 0:this.bus.addLayer(r);break;case 1:this.trolleybus.addLayer(r);break;case 2:this.tram.addLayer(r)}}},{key:"updateThing",value:function(){if(this.state.autoHour){this.state.hour+1>23?this.state.date.getDate()+1>31?this.state.date.setDate(1):this.state.date.setDate(this.state.date.getDate()+1):this.state.date;this.setState({date:this.state.date,hour:this.state.hour+1>23?0:this.state.hour+1,autoHour:this.state.autoHour,currMenu:this.state.currMenu,currSelect:this.state.currSelect}),this.setUpRoutes()}}},{key:"openMenu",value:function(t){var e,o,s,n,r,i,c,u,l,h,d,p;switch(this.state.currMenu){case a.ROUTE:null===(e=document.getElementById("routeList"))||void 0===e||e.classList.remove("listOpen"),null===(o=document.getElementById("routeList"))||void 0===o||o.classList.add("listClose");break;case a.TRIP:null===(s=document.getElementById("tripList"))||void 0===s||s.classList.remove("listOpen"),null===(n=document.getElementById("tripList"))||void 0===n||n.classList.add("listClose");break;case a.STOP:null===(r=document.getElementById("stopList"))||void 0===r||r.classList.remove("listOpen"),null===(i=document.getElementById("stopList"))||void 0===i||i.classList.add("listClose")}if(t!==this.state.currMenu){switch(t){case a.ROUTE:null===(c=document.getElementById("routeList"))||void 0===c||c.classList.remove("listClose"),null===(u=document.getElementById("routeList"))||void 0===u||u.classList.add("listOpen");break;case a.TRIP:null===(l=document.getElementById("tripList"))||void 0===l||l.classList.remove("listClose"),null===(h=document.getElementById("tripList"))||void 0===h||h.classList.add("listOpen");break;case a.STOP:null===(d=document.getElementById("stopList"))||void 0===d||d.classList.remove("listClose"),null===(p=document.getElementById("stopList"))||void 0===p||p.classList.add("listOpen")}this.setState({date:this.state.date,hour:this.state.hour,autoHour:this.state.autoHour,currMenu:t,currSelect:this.state.currSelect})}else this.setState({date:this.state.date,hour:this.state.hour,autoHour:this.state.autoHour,currMenu:a.NONE,currSelect:this.state.currSelect})}},{key:"clearer",value:function(){this.setState({date:this.state.date,hour:this.state.hour,autoHour:this.state.autoHour,currMenu:this.state.currMenu,currSelect:""}),this.markerGroup.clearLayers()}},{key:"render",value:function(){var t=this;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("div",{id:"map"}),Object(y.jsxs)("div",{id:"GUI",children:[Object(y.jsx)("input",{type:"date",id:"selectDate",min:"2021-01-01",max:"2021-01-31",value:this.state.date.toISOString().split("T")[0],onChange:function(e){t.setState({date:new Date(e.target.value),hour:t.state.hour,autoHour:t.state.autoHour,currMenu:t.state.currMenu,currSelect:t.state.currSelect}),t.setUpRoutes()}}),Object(y.jsxs)("h1",{id:"time",children:[this.state.hour,":00"]}),Object(y.jsxs)("div",{className:"autoHourDiv",children:[Object(y.jsx)("input",{type:"checkbox",id:"autoHour",value:this.state.autoHour,onChange:function(e){t.setState({date:t.state.date,hour:t.state.hour,autoHour:e.target.checked,currMenu:t.state.currMenu,currSelect:t.state.currSelect})}}),Object(y.jsx)("label",{htmlFor:"autoHour"})]}),Object(y.jsx)("input",{type:"range",id:"selectHour",min:0,max:23,value:this.state.hour,onChange:function(e){t.setState({date:t.state.date,hour:e.target.valueAsNumber,autoHour:t.state.autoHour,currMenu:t.state.currMenu,currSelect:t.state.currSelect}),t.setUpRoutes()}}),Object(y.jsxs)("div",{id:"transportTypes",children:["Bus ",Object(y.jsx)("input",{type:"checkbox",onChange:function(e){e.target.checked?t.bus.addTo(t.map):t.bus.removeFrom(t.map),t.clearer()},id:"busCheck"}),Object(y.jsx)("br",{}),"Tram ",Object(y.jsx)("input",{type:"checkbox",onChange:function(e){e.target.checked?t.tram.addTo(t.map):t.tram.removeFrom(t.map),t.clearer()}}),Object(y.jsx)("br",{}),"Trolleybus ",Object(y.jsx)("input",{type:"checkbox",onChange:function(e){e.target.checked?t.trolleybus.addTo(t.map):t.trolleybus.removeFrom(t.map),t.clearer()}}),Object(y.jsx)("br",{})]}),Object(y.jsxs)("div",{id:"routeList",className:"listClose",children:[Object(y.jsx)("input",{id:"routeDrawer",value:"R\nO\nU\nT\nE\nS",type:"button",hidden:!0,onClick:function(){t.openMenu(a.ROUTE)}}),Object(y.jsx)("div",{id:"actualRouteList"})]}),Object(y.jsxs)("div",{id:"tripList",className:"listClose",children:[Object(y.jsx)("input",{id:"tripDrawer",value:"T\nR\nI\nP\nS",type:"button",hidden:!0,onClick:function(){t.openMenu(a.TRIP)}}),Object(y.jsx)("div",{id:"actualTripList"})]}),Object(y.jsxs)("div",{id:"stopList",className:"listClose",children:[Object(y.jsx)("input",{id:"stopDrawer",value:"S\nT\nO\nP\nS",type:"button",hidden:!0,onClick:function(){t.openMenu(a.STOP)}}),Object(y.jsx)("div",{id:"actualStopList"})]})]})]})}}]),o}(n.a.Component),f=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(e){var o=e.getCLS,a=e.getFID,s=e.getFCP,n=e.getLCP,r=e.getTTFB;o(t),a(t),s(t),n(t),r(t)}))};i.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(b,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.a14d2ad5.chunk.js.map