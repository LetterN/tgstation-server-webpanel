(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{652:function(e,n,r){"use strict";var a=r(7),t=r(3),o=r(10);function c(e,n,r,a,t,o,c){try{var i=e[o](c),s=i.value}catch(e){return void r(e)}i.done?n(s):Promise.resolve(s).then(a,t)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(a,t){var o=e.apply(n,r);function i(e){c(o,a,t,i,s,"next",e)}function s(e){c(o,a,t,i,s,"throw",e)}i(void 0)}))}}function s(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.a=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,c,u,l,d,w;return n=e,(r=[{key:"listInstances",value:(w=i((function*(){var e;yield o.a.wait4Init();try{e=yield o.a.apiClient.InstanceController_List({pageSize:100,page:1})}catch(e){return new t.b({code:t.a.ERROR,error:e})}switch(e.status){case 200:var n=e.data.content.sort((function(e,n){return e.id-n.id}));return new t.b({code:t.a.OK,payload:n});default:return new t.b({code:t.a.ERROR,error:new a.c(a.b.UNHANDLED_RESPONSE,{axiosResponse:e},e)})}})),function(){return w.apply(this,arguments)})},{key:"editInstance",value:(d=i((function*(e){var n;yield o.a.wait4Init();try{n=yield o.a.apiClient.InstanceController_Update(null,e)}catch(e){return new t.b({code:t.a.ERROR,error:e})}switch(n.status){case 200:case 202:var r=n.data;return new t.b({code:t.a.OK,payload:r});case 410:return new t.b({code:t.a.ERROR,error:new a.c(a.b.INSTANCE_NO_DB_ENTITY,{errorMessage:n.data})});default:return new t.b({code:t.a.ERROR,error:new a.c(a.b.UNHANDLED_RESPONSE,{axiosResponse:n},n)})}})),function(e){return d.apply(this,arguments)})},{key:"createInstance",value:(l=i((function*(e){var n;yield o.a.wait4Init();try{n=yield o.a.apiClient.InstanceController_Create(null,e)}catch(e){return new t.b({code:t.a.ERROR,error:e})}switch(n.status){case 200:case 201:var r=n.data;return new t.b({code:t.a.OK,payload:r});case 409:return new t.b({code:t.a.ERROR,error:new a.c(a.b.HTTP_DATA_INEGRITY,{errorMessage:n.data})});default:return new t.b({code:t.a.ERROR,error:new a.c(a.b.UNHANDLED_RESPONSE,{axiosResponse:n},n)})}})),function(e){return l.apply(this,arguments)})},{key:"getInstance",value:(u=i((function*(e){var n;yield o.a.wait4Init();try{n=yield o.a.apiClient.InstanceController_GetId({id:e})}catch(e){return new t.b({code:t.a.ERROR,error:e})}switch(n.status){case 200:return new t.b({code:t.a.OK,payload:n.data});case 410:return new t.b({code:t.a.ERROR,error:new a.c(a.b.INSTANCE_NO_DB_ENTITY,{errorMessage:n.data})});default:return new t.b({code:t.a.ERROR,error:new a.c(a.b.UNHANDLED_RESPONSE,{axiosResponse:n},n)})}})),function(e){return u.apply(this,arguments)})}])&&s(n.prototype,r),c&&s(n,c),e}())}}]);
//# sourceMappingURL=2.417d721ac3de033b24f5.js.map