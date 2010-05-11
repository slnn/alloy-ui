AUI.add("aui-io-plugin",function(T){var P=T.Lang,Q=P.isBoolean,R=P.isString,U=function(A){return(A instanceof T.Node);},V=T.WidgetStdMod,D="Node",N="Widget",e="",E="failure",H="failureMessage",X="host",I="icon",J="io",F="IOPlugin",W="loading",G="loadingMask",d="node",a="parseContent",M="queue",C="rendered",O="section",c="showLoading",Z="success",S="type",B="where",Y=T.ClassNameManager.getClassName,K=Y(I,W);var b=T.Component.create({NAME:F,NS:J,ATTRS:{node:{value:null,getter:function(g){var A=this;if(!g){var f=A.get(X);var L=A.get(S);if(L==D){g=f;}else{if(L==N){var h=A.get(O);if(!f.getStdModNode(h)){f.setStdModContent(h,e);}g=f.getStdModNode(h);}}}return T.one(g);},validator:U},failureMessage:{value:"Failed to retrieve content",validator:R},loadingMask:{value:{}},parseContent:{value:true,validator:Q},showLoading:{value:true,validator:Q},section:{value:V.BODY,validator:function(A){return(!A||A==V.BODY||A==V.HEADER||A==V.FOOTER);}},type:{readOnly:true,valueFn:function(){var A=this;var L=D;if(A.get(X) instanceof T.Widget){L=N;}return L;},validator:R},where:{value:V.REPLACE,validator:function(A){return(!A||A==V.AFTER||A==V.BEFORE||A==V.REPLACE);}}},EXTENDS:T.IORequest,prototype:{bindUI:function(){var A=this;A.on("activeChange",A._onActiveChange);A.on(Z,A._successHandler);A.on(E,A._failureHandler);if((A.get(S)==N)&&A.get(c)){var L=A.get(X);L.after("heightChange",A._syncLoadingMaskUI,A);L.after("widthChange",A._syncLoadingMaskUI,A);}},_autoStart:function(){var A=this;A.bindUI();b.superclass._autoStart.apply(this,arguments);},_bindParseContent:function(){var A=this;var L=A.get(d);if(L&&!L.ParseContent&&A.get(a)){L.plug(T.Plugin.ParseContent);}},hideLoading:function(){var A=this;var L=A.get(d);if(L.loadingmask){L.loadingmask.hide();}},setContent:function(L){var A=this;A._bindParseContent();if(A.overlayMaskBoundingBox){A.overlayMaskBoundingBox.remove();}A._getContentSetterByType().apply(A,[L]);},showLoading:function(){var A=this;var L=A.get(d);if(L.loadingmask){if(A.overlayMaskBoundingBox){L.append(A.overlayMaskBoundingBox);}}else{L.plug(T.LoadingMask,A.get(G));A.overlayMaskBoundingBox=L.loadingmask.overlayMask.get("boundingBox");}L.loadingmask.show();},start:function(){var A=this;var L=A.get(X);if(!L.get(C)){L.after("render",function(){A._setLoadingUI(true);});}b.superclass.start.apply(A,arguments);},_getContentSetterByType:function(){var A=this;var L={Node:function(h){var f=this;var g=f.get(d);g.setContent.apply(g,[h]);},Widget:function(h){var f=this;var g=f.get(X);g.setStdModContent.apply(g,[f.get(O),h,f.get(B)]);}};return L[this.get(S)];},_setLoadingUI:function(L){var A=this;if(A.get(c)){if(L){A.showLoading();}else{A.hideLoading();}}},_syncLoadingMaskUI:function(){var A=this;A.get(d).loadingmask.refreshMask();},_successHandler:function(L,g,f){var A=this;A.setContent(f.responseText);},_failureHandler:function(L,g,f){var A=this;A.setContent(A.get(H));},_onActiveChange:function(f){var A=this;var L=A.get(X);var g=A.get(S)==N;if(!g||(g&&L&&L.get(C))){A._setLoadingUI(f.newVal);}}}});T.namespace("Plugin").IO=b;},"@VERSION@",{requires:["aui-overlay-base","aui-parse-content","aui-io-request","aui-loading-mask"]});