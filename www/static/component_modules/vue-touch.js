define("vue-touch",function(e,t,n){function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}var r={},h="function"==typeof e?e("hammer"):window.Hammer,a=["tap","pan","pinch","press","rotate","swipe"],s={};r.install=function(e){e.directive("touch",{isFn:!0,acceptStatement:!0,bind:function(){this.el.hammer||(this.el.hammer=new h.Manager(this.el));var e,t,n=this.mc=this.el.hammer,r=this.arg;if(s[r]){var c=s[r];e=c.type,t=new(h[i(e)])(c),t.recognizeWith(n.recognizers),n.add(t)}else{for(var o=0;o<a.length;o++)if(0===r.indexOf(a[o])){e=a[o];break}if(!e)return void console.warn("Invalid v-touch event: "+r);t=n.get(e),t||(t=new(h[i(e)]),t.recognizeWith(n.recognizers),n.add(t))}},update:function(e){var t=this.mc,n=this.vm,i=this.arg;this.handler&&t.off(i,this.handler),this.handler=function(t){t.targetVM=n,e.call(n,t)},t.on(i,this.handler)},unbind:function(){this.mc.off(this.arg,this.handler),Object.keys(this.mc.handlers).length||(this.mc.destroy(),this.el.hammer=null)}})},r.registerCustomEvent=function(e,t){t.event=e,s[e]=t},n.exports=r});