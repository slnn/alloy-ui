AUI.add("aui-loading-mask",function(O){var H=O.Lang,V="boundingBox",M="contentBox",R="hide",U="host",C="messageEl",I="loadingmask",N="position",G="show",K="static",T="strings",L="target",F="toggle",J=O.ClassNameManager.getClassName,Q=J(I),W=J(I,"masked"),B=J(I,"masked","relative"),D=J(I,"message"),P=J(I,"message","content"),S='<div class="'+D+'"><div class="'+P+'">{0}</div></div>';var E=O.Component.create({NAME:I,NS:I,ATTRS:{messageEl:{valueFn:function(Y){var X=this;var A=X.get(T);return O.Node.create(O.substitute(S,[A.loading]));}},strings:{value:{loading:"Loading&hellip;"}},target:{setter:function(){var A=this;var X=A.get(U);if(X instanceof O.Widget){X=X.get(M);}return X;},value:null}},EXTENDS:O.Plugin.Base,prototype:{initializer:function(X){var A=this;A.IGNORED_ATTRS=O.merge({host:true},E.ATTRS);A.renderUI();A.bindUI();A._createDynamicAttrs(X);},renderUI:function(){var X=this;var A=X.get(T);X._renderOverlayMask();X.overlayMask.get(V).append(X.get(C));},bindUI:function(){var A=this;A._bindOverlayMaskUI();},_bindOverlayMaskUI:function(){var A=this;A.overlayMask.after("visibleChange",A._afterVisibleChange,A);},centerMessage:function(){var A=this;A.get(C).center(A.overlayMask.get(V));},refreshMask:function(){var A=this;A.overlayMask.refreshMask();A.centerMessage();},_afterVisibleChange:function(X){var A=this;var Y=A.get(L);var Z=(Y.getStyle(N)==K);Y.toggleClass(W,(X.newVal));Y.toggleClass(B,(X.newVal&&Z));if(X.newVal){A.refreshMask();}},_renderOverlayMask:function(){var A=this;var X=A.get(L);A.overlayMask=new O.OverlayMask({target:X,cssClass:Q}).render(X);},_createDynamicAttrs:function(X){var A=this;O.each(X,function(a,Z){var Y=A.IGNORED_ATTRS[Z];if(!Y){A.addAttr(Z,{setter:function(b){this.overlayMask.set(Z,b);return b;},value:a});}});}}});O.each([R,G,F],function(A){E.prototype[A]=function(){this.overlayMask[A]();};});O.LoadingMask=E;},"@VERSION@",{requires:["aui-overlay-mask","plugin","substitute"],skinnable:true});