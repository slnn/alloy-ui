AUI.add("aui-rating",function(T){var P=T.Lang,k=P.isBoolean,AE=P.isNumber,Q=P.isString,b=function(A){return(A instanceof T.NodeList);},O=function(A){return(A instanceof T.Node);},V="",AA="boundingBox",m="canReset",G="clearfix",f="contentBox",j="defaultSelected",U="destroy",i="disabled",c=".",q="element",J="elements",o="",s="helper",X="hover",d="id",y="innerHTML",N="input",u="inputName",AC="label",E="labelElement",l="name",t="nodeName",S="off",Y="on",W="rating",C="selectedIndex",H="showTitle",e="size",n="title",x="value",B="itemClick",AF="itemSelect",D="itemOut",r="itemOver",M=T.ClassNameManager.getClassName,h=M(s,G),AD=M(W,AC,q),F=M(W,q),p=M(W,q,X),I=M(W,q,S),a=M(W,q,Y);var R=T.Component.create({NAME:"rating",ATTRS:{disabled:{value:false,validator:k},canReset:{value:true,validator:k},defaultSelected:{value:0,writeOnce:true,validator:AE},elements:{writeOnce:true,readOnly:true,validator:b},hiddenInput:{validator:O},labelElement:{validator:O},inputName:{value:V,validator:Q},label:{value:V,validator:Q},render:{value:true},selectedIndex:{value:-1,validator:AE},showTitle:{value:true,validator:k},size:{value:5,validator:function(A){return AE(A)&&(A>0);}},title:null,value:null},prototype:{initializer:function(){var A=this;A.inputElementsData={};A.after("labelChange",this._afterSetLabel);},renderUI:function(){var A=this;A._parseInputElements();A._renderElements();},bindUI:function(){var A=this;A._createEvents();A.on("click",A._handleClickEvent);A.on("mouseover",A._handleMouseOverEvent);A.on("mouseout",A._handleMouseOutEvent);},syncUI:function(){var A=this;A._syncElements();A._syncLabelUI();},destructor:function(){var A=this;var L=A.get(AA);L.detachAll();L.remove();},clearSelection:function(){var A=this;A.get(J).each(function(L){L.removeClass(a);L.removeClass(p);});},select:function(AH){var AM=this;var AI=AM.get(C);var AK=AM.get(m);if(AK&&(AI==AH)){AH=-1;}AM.set(C,AH);var L=AM.get(C);var AG=AM._getInputData(L);var AJ=(n in AG)?AG.title:V;var AL=(x in AG)?AG.value:L;AM.fillTo(L);AM.set(n,AJ);AM.set(x,AL);var A=AM.get("hiddenInput");A.setAttribute(n,AJ);A.setAttribute(x,AL);},fillTo:function(L,AG){var A=this;A.clearSelection();if(L>=0){A.get(J).some(function(AI,AH){AI.addClass(AG||a);return(AH==Math.floor(L));});}},indexOf:function(L){var A=this;return A.get(J).indexOf(L);},_canFireCustomEvent:function(L){var A=this;var AG=L.domEvent.target;return !A.get(i)&&AG.hasClass(F);},_createEvents:function(){var A=this;var L=function(AG,AH){A.publish(AG,{defaultFn:AH,queuable:false,emitFacade:true,bubbles:true});};L(B,this._defRatingItemClickFn);L(AF,this._defRatingItemSelectFn);L(r,this._defRatingItemOverFn);L(D,this._defRatingItemOutFn);},_defRatingItemClickFn:function(AG){var A=this;var L=AG.domEvent;A.fire(AF,{delegateEvent:AG,domEvent:L,ratingItem:L.target});},_defRatingItemSelectFn:function(L){var A=this;var AG=L.domEvent.target;A.select(A.indexOf(AG));},_defRatingItemOutFn:function(L){var A=this;A.fillTo(A.get(C));},_defRatingItemOverFn:function(AG){var A=this;var L=A.indexOf(AG.domEvent.target);A.fillTo(L,p);},_parseInputElements:function(){var A=this;var AH=A.get(AA);var L=AH.all(N);var AI=L.size();var AG=A.get(u);var AJ=T.Node.create('<input type="hidden" />');if(AI>0){AG=AG||L.item(0).getAttribute(l);A.set(e,AI);var AK=AH.all("label");L.each(function(AO,AN){var AP=AO.get(d);var AM=o;if(AP){var AL=AK.filter('[for="'+AP+'"]');if(AL.size()){AM=AL.item(0).html();}}A.inputElementsData[AN]={content:AM,value:AO.getAttribute(x)||AN,title:AO.getAttribute(n)};});AK.remove();L.remove();}if(AG){AJ.setAttribute(l,AG);AH.appendChild(AJ);}A.set("hiddenInput",AJ);},_renderElements:function(){var AN=this;var AK=AN.get(f);var L=AN.get(i);var A=null;if(L){A=T.Node.create("<span></span>");}else{A=T.Node.create('<a href="javascript:;"></a>');}var AL=T.Node.create("<div></div>");AK.addClass(h);A.addClass(F);AL.addClass(AD);AK.append(AL);for(var AI=0,AO=this.get(e);AI<AO;AI++){var AH=AN._getInputData(AI);var AG=A.cloneNode();var AJ=AH.content;var AM=AH.title||AN.get(n)||AJ;if(AJ||AM){AG.html(AJ||AM);}if(AM&&AN.get(H)){AG.setAttribute(n,AM);}AK.appendChild(AG);}AN.set(E,AL);AN.set(J,AK.all(c+F));},_syncElements:function(){var L=this;var A=L.get(j)-1;L.set(C,A);L.select();},_syncLabelUI:function(){var A=this;var L=A.get(AC);A.get(E).html(L);},_getInputData:function(L){var A=this;return A.inputElementsData[L]||{};},_handleClickEvent:function(L){var A=this;var AG=L.domEvent.target;if(A._canFireCustomEvent(L)){A.fire(B,{delegateEvent:L,domEvent:L.domEvent});}},_handleMouseOutEvent:function(L){var A=this;if(A._canFireCustomEvent(L)){A.fire(D,{delegateEvent:L,domEvent:L.domEvent});}},_handleMouseOverEvent:function(L){var A=this;if(A._canFireCustomEvent(L)){A.fire(r,{delegateEvent:L,domEvent:L.domEvent});}},_afterSetLabel:function(A){this._syncLabelUI();}}});var g="down",z="thumb",AB="ThumbRating",Z="up",w=M(W,z,g),v=M(W,z,Z);var K=T.Component.create({NAME:AB,ATTRS:{size:{value:2,readOnly:true}},EXTENDS:R,prototype:{renderUI:function(){var A=this;K.superclass.renderUI.apply(this,arguments);var L=A.get(J);L.addClass(I);L.item(0).addClass(v);L.item(1).addClass(w);},fillTo:function(A,L){this.clearSelection();if(A>=0){this.get(J).item(A).addClass(L||a);}},_syncElements:function(){}}});T.Rating=R;T.StarRating=R;T.ThumbRating=K;},"@VERSION@",{requires:["aui-base"],skinnable:true});