(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{15:function(e,t,a){e.exports=a(41)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),m=(a(20),a(2)),o=a(14);a(21),a(22);var s=function(e){var t=e.handleClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Search Employees"),l.a.createElement("form",null,l.a.createElement("div",{className:" input-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"inputFiels",placeholder:"John Doe"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:function(e){var a=e.target.parentNode.previousElementSibling.value;t(a)}},"Search"))),l.a.createElement("small",{id:"searchHelp",className:"form-text text-muted"},"Search for employee/s by name")))},u=(a(23),l.a.createContext({users:[],searchTerm:""})),i=function(){var e=Object(n.useContext)(u),t=function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase(),l=0;return a>n?l=1:a<n&&(l=-1),l};return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-striped table-light"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Gender"),l.a.createElement("th",{scope:"col"},"Phone #"),l.a.createElement("th",{scope:"col"},"Picture"))),l.a.createElement("tbody",null,""===e.searchTerm?e.users.sort(t).map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name.first+" "+e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail,alt:""}))))})):e.users.filter((function(t,a){return e.searchTerm===t.name.first||e.searchTerm===t.name.last||e.searchTerm===t.name.first+" "+t.name.last})).sort(t).map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name.first+" "+e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail,alt:""}))))})))))},E=a(13),d=a.n(E),p=function(){return d.a.get("https://randomuser.me/api/?results=200&nat=us")};var h=function(){var e=Object(n.useState)({users:[],searchTerm:""}),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return p().then((function(e){r(Object(m.a)({},a,{users:e.data.results}))})),function(){console.log("cleaning up")}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"title"},"Employee-Tracker")),l.a.createElement(u.Provider,{value:a},l.a.createElement("div",{className:"searchDiv"},l.a.createElement(s,{handleClick:function(e){r(Object(m.a)({},a,{searchTerm:e}))}})),l.a.createElement("div",{className:"resultsDisplay"},l.a.createElement(i,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ab1c8f76.chunk.js.map