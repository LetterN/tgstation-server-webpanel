(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{316:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(40),i=n(129),c=n(72),s=n(630),l=n(90),u=n(17),f=n(652),m=n(3),p=n(10),d=n(14),h=n(68),v=n(55);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){b(o,r,a,i,c,"next",e)}function c(e){b(o,r,a,i,c,"throw",e)}i(void 0)}))}}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var a=O(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(u.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(S,e);var t,n,r,u,y,b=x(S);function S(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,S),(t=b.call(this,e)).state={loading:!0,errors:[]},t.submit=t.submit.bind(P(t)),t}return t=S,(n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"componentDidMount",value:(y=E((function*(){var e=yield p.a.getServerInfo();if(e.code!==m.a.OK)this.setState({loading:!1}),this.addError(e.error);else{var t,n=e.payload;this.setState({loading:!1,serverInformation:n,prefix:null!==(t=n.validInstancePaths)&&void 0!==t&&t.length?n.validInstancePaths[0]:void 0})}})),function(){return y.apply(this,arguments)})},{key:"render",value:function(){var e,t=this;if(this.state.loading)return a.a.createElement(v.a,{text:"view.instance.create.loading"});var n=null===(e=this.state.serverInformation)||void 0===e?void 0:e.validInstancePaths;return a.a.createElement("div",{className:"text-center"},this.state.errors.map((function(e,n){if(e)return a.a.createElement(h.a,{key:n,error:e,onClose:function(){return t.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"view.instance.create.title"})),a.a.createElement(c.a,{onSubmit:this.submit},a.a.createElement(i.a,{className:"mx-auto",lg:5,md:8},a.a.createElement(c.a.Group,{controlId:"name"},a.a.createElement(c.a.Label,null,a.a.createElement("h5",null,a.a.createElement(l.a,{id:"view.instance.create.name"}))),a.a.createElement(c.a.Control,{type:"text",onChange:function(e){var n=e.target.value;t.setState({instanceName:n})},value:this.state.instanceName,required:!0})),a.a.createElement(c.a.Group,{controlId:"path"},a.a.createElement(c.a.Label,null,a.a.createElement("h5",null,a.a.createElement(l.a,{id:"view.instance.create.path"}))),a.a.createElement(s.a,{className:"mb-1"},null!=n?a.a.createElement(s.a.Prepend,{className:"flex-grow-1 flex-grow-md-0"},a.a.createElement(s.a.Text,null,a.a.createElement("span",null,a.a.createElement(l.a,{id:"view.instance.create.path.prefix"}))),a.a.createElement(c.a.Control,{className:"rounded-0 flex-grow-1 flex-grow-md-0 flex-shrink-0 flex-shrink-md-1 w-auto",as:"select",custom:!0,required:!0,onChange:function(e){t.setState({prefix:e.target.value})}},n.map((function(e){return a.a.createElement("option",{key:e,value:e,selected:t.state.prefix==e},e,"/")})))):null,a.a.createElement(c.a.Control,{type:"text",className:"flex-grow-1 w-100 w-md-auto",required:!0,onChange:function(e){var n=e.target.value;t.setState({instancePath:n})},value:this.state.instancePath}))),a.a.createElement(o.a,{type:"submit",variant:"success"},a.a.createElement(l.a,{id:"view.instance.create.submit"})))))}},{key:"submit",value:(u=E((function*(){if(this.state.instancePath){var e=(this.state.prefix?this.state.prefix+"/":"")+this.state.instancePath;this.setState({loading:!0});var t=yield f.a.createInstance({name:this.state.instanceName,path:e,id:0});if(t.code===m.a.ERROR)return this.setState({loading:!1}),void this.addError(t.error);d.c.instanceid=t.payload.id.toString(),this.props.history.push(d.b.instancelist.link||d.b.instancelist.route)}})),function(){return u.apply(this,arguments)})}])&&w(t.prototype,n),r&&w(t,r),S}(a.a.Component))}}]);
//# sourceMappingURL=17.61786bdf77af305abc4c.js.map