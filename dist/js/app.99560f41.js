(function(t){function e(e){for(var n,a,i=e[0],d=e[1],l=e[2],s=0,f=[];s<i.length;s++)a=i[s],r[a]&&f.push(r[a][0]),r[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,i=1;i<o.length;i++){var d=o[i];0!==r[d]&&(n=!1)}n&&(c.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},c=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=d;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"14cb":function(t,e,o){},3611:function(t,e,o){"use strict";var n=o("f703"),r=o.n(n);r.a},"53b6":function(t,e,o){"use strict";var n=o("8a1a"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},c=[],a=o("75fc"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("Todolist")])])}],l={name:"Header"},u=l,s=(o("3611"),o("2877")),f=Object(s["a"])(u,i,d,!1,null,"4794dd4a",null),p=f.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)}),0)},h=[],v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),o("p",[t._v(t._s(t.todo.title))]),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])},b=[],_={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},y=_,g=(o("53b6"),Object(s["a"])(y,v,b,!1,null,"039c4350",null)),T=g.exports,j={name:"Todos",components:{TodoItem:T},props:["todos"]},x=j,O=Object(s["a"])(x,m,h,!1,null,"ef644efc",null),w=O.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"submit"}})])])},k=[],P={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,complete:!1};this.$emit("add-todo",e),this.title=""}}},C=P,E=(o("6696"),Object(s["a"])(C,$,k,!1,null,"983d8cb6",null)),S=E.exports,A=o("bc3a"),M=o.n(A),H={name:"app",components:{Header:p,Todos:w,AddTodo:S},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){var e=this;M.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(o){return e.todos=e.todos.filter(function(e){return e.id!==t})}).catch(function(t){return console.log(t)})},addTodo:function(t){var e=this,o=t.title,n=t.completed;M.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then(function(t){return e.todos=[].concat(Object(a["a"])(e.todos),[t.data])}).catch(function(t){return console.log(t)})}},created:function(){var t=this;M.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(function(e){return t.todos=e.data}).castch(function(t){return console.log(t)})}},I=H,J=(o("034f"),Object(s["a"])(I,r,c,!1,null,null,null)),D=J.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(D)}}).$mount("#app")},"64a9":function(t,e,o){},6696:function(t,e,o){"use strict";var n=o("14cb"),r=o.n(n);r.a},"8a1a":function(t,e,o){},f703:function(t,e,o){}});
//# sourceMappingURL=app.99560f41.js.map