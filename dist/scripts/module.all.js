+function(t,e,s,i){"use strict";function n(t){return this.each(function(){var s=e(this),i=s.data("n.collapse");!i&&/destroy|hide/.test(t)||(i||s.data("n.collapse",i=new o(this,t)),"string"==typeof t&&i[t]())})}var o=function(t,e){this.init(t,e)};o.VERSION="1.0.0",o.SELECTORS={toggleSelector:"[data-toggle='collapse']",scopeSelector:".ncollapse-box",collapseSelector:".ncollapse",collapsePath:"> * >"},o.TRANSITION_DURATION=300,o.DEFAULTS={},o.fn=o.prototype,o.fn.init=function(t,s){var i=this;this.$el=e(t),this.options=e.extend({},o.DEFAULTS,o.SELECTORS,s,i.$el.data()),this.$scope=this.getScope(),this.$target=this.getTarget(),this.transitioning=null,this.options.toggle&&this.toggle()},o.fn.toggle=function(){this[this.$target.hasClass("in")?"hide":"show"]()},o.fn.dimension=function(){var t=this.$el.hasClass("width");return t?"width":"height"},o.fn.show=function(){if(!this.transitioning&&!this.$target.hasClass("in")){var t=(this.getCollapseActive(),e.Event("show.n.collapse"));if(this.$target.trigger(t),!t.isDefaultPrevented()){var s=this.dimension();this.$target.removeClass("ncollapse").addClass("ncollapsing")[s](0).attr("aria-expanded",!0),this.$el.addClass("ncollapse--open").attr("aria-expanded",!0),this.transitioning=1;var i=function(){this.$target.removeClass("ncollapsing").addClass("ncollapse in")[s](""),this.transitioning=0,this.$el.trigger("shown.n.collapse")};if(!e.support.transition)return i.call(this);var n=e.camelCase(["scroll",s].join("-"));this.$target.one("bsTransitionEnd",e.proxy(i,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[s](this.$target[0][n])}}},o.fn.hide=function(){if(!this.transitioning&&this.$target.hasClass("in")){var t=e.Event("hide.n.collapse");if(this.$el.trigger(t),!t.isDefaultPrevented()){var s=this.dimension();this.$target[s](this.$target[s]())[0].offsetHeight,this.$target.addClass("ncollapsing").removeClass("ncollapse in").attr("aria-expanded",!1),this.$el.removeClass("ncollapse--open").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$target.removeClass("ncollapsing").addClass("ncollapse").trigger("hidden.n.collapse")};return e.support.transition?void this.$target[s](0).one("bsTransitionEnd",e.proxy(i,this)).emulateTransitionEnd(o.TRANSITION_DURATION):i.call(this)}}},o.fn.getScope=function(){return this.$el.parents(this.options.scopeSelector)},o.fn.getTarget=function(){function t(i,n){var o=s.options.collapseSelector,a=e(i.siblings(o)[0],n);return a.size()?a:a.hasClass(s.options.scopeSelector)?"":void t(i.parent())}var s=this;return t(s.$el,s.$scope)},o.fn.getTrigger=function(t){function s(t,n){var o=i.options.collapseSelector,a=e(t.siblings(o)[0],n);return a.size()?a:a.hasClass(i.options.scopeSelector)?"":void s(t.parent())}var i=this;return s(t,i.$scope)},o.fn.getCollapseActive=function(t){e(this.options.collapsePath+this.options.toggleSelector,this.$scope).filter(".ncollapse--open").click()};var a=e.fn.collapse;e.fn.collapse=n,e.fn.collapse.Constructor=o,e.fn.collapse.noConflict=function(){return e.fn.collapse=a,this};var l={toggle:function(t){e(this).is("a")&&t.preventDefault(),n.call(e(this),"toggle")}};e(s).on("click.n.collapse",o.SELECTORS.toggleSelector,l.toggle)}(window,jQuery,document);

+function(t,o,e,n){"use strict";function i(t){return this.each(function(){var e=o(this),n=e.data("n.modal");!n&&/destroy|hide/.test(t)||(n||e.data("n.modal",n=new s(this,t)),"string"==typeof t&&n[t]())})}var s=function(t,o){this.init("modal",t,o)};s.VERSION="1.1.0",s.SELECTORS={toggleSelector:"[data-toggle='modal']",modalSelector:".nmodal",closeSelector:".nmodal-close",bodySelector:".nmodal-box-body",modalBoxSelector:".nmodal-box",maskSelector:"#overlay"},s.TRANSITION_DURATION=150,s.BACKDROP_TRANSITION_DURATION=100,s.DEFAULTS={},s.fn=s.prototype,s.fn.init=function(t,e,n){var i=this;this.$el=o(e),this.options=o.extend({},s.DEFAULTS,s.SELECTORS,n,i.$el.data()),this.type=t||this.options.type,this.$target=o(this.options.target).data("n.modal",this),this.$box=o(this.options.modalBoxSelector,this.$target),this.$close=o(this.options.closeSelector,this.$target),this.$body=o(this.options.bodySelector,this.$target),this.$mask=o(this.options.maskSelector),this.$box.click(function(t){return t.preventDefault(),t.stopPropagation(),!1}),this.$close.click(function(){i.close()}),this.$target.on("click",function(t){return t.preventDefault(),t.stopPropagation(),i.close(),!1}),this.options.remote&&this.$body.load(this.options.remote,o.proxy(function(){this.$el.trigger("loaded.n.modal")},this))},s.fn.toggle=function(){this.$target.hasClass("open")?this.close():this.open()},s.fn.open=function(){this.$target.addClass("open"),this.$mask.addClass("open"),this.$el.trigger(o.Event("open.n.modal"))},s.fn.close=function(){this.$target.removeClass("open"),this.$mask.removeClass("open"),this.$el.trigger(o.Event("close.n.modal"))},s.fn.update=function(){},s.fn.getUID=function(t){do t+=~~(1e6*Math.random());while(e.getElementById(t));return t};var a=o.fn.Modal;o.fn.Modal=i,o.fn.Modal.Constructor=s,o.fn.Modal.noConflict=function(){return o.fn.Modal=a,this};var l={toggle:function(t){o(this).is("a")&&t.preventDefault(),i.call(o(this),"toggle")}};o(e).on("click.n.modal",s.SELECTORS.toggleSelector,l.toggle)}(window,jQuery,document);
!function(t,e,o,i){function s(t){return this.each(function(){var o=e(this),i=o.data("ng.popup");options="object"==typeof t?e.extend({},t,o.data()):o.data(),!i&&/destroy|hide/.test(t)||(i||o.data("ng.popup",i=new n(this,options)),"string"==typeof t&&i[t]())})}var n=function(t,e){this.init("popup",t,e)};n.VERSION="1.2.4",n.SELECTORS={toggleSelector:".open-popup",popupSelector:".centerPopup",sourceSelector:".centerPopup-source",closeSelector:".centerPopup-close,.centerPopup-trigger-close",arrowSelector:".centerPopup-arrow",arrowTopLeftSelector:".docked-top-left",arrowTopRightSelector:".docked-top-right",arrowBottomLeftSelector:".docked-bottom-left",arrowBottomRightSelector:".docked-bottom-right",maskSelector:"#overlay"},n.TRANSITION_DURATION=150,n.BACKDROP_TRANSITION_DURATION=100,n.DEFAULTS={trigger:"click",placement:"center",width:"",height:"",mask:"overshow",isarrow:!1,arrowspacing:14,type:"centerPopup",domain:"ng.popup",effect:!1,initializeback:"",showback:"",hideback:"",spacing:5,template:"<div class='centerPopup'><div class='centerPopup-body'><a href='javascript:;' class='fa fa-close centerPopup-close'></a>$$content$$</div></div>"},n.fn=n.prototype,n.fn.init=function(t,o,i){this.options=e.extend({},n.DEFAULTS,n.SELECTORS,i),this.type=t||this.options.type,this.$element=e(o),this.$source=this.getSource(),this.globalState={scroll:!0,resize:!0},this.trigger(t,this.options.toggleSelector),this.backInit()},n.fn.trigger=function(t,o){for(var i=this.options.trigger.split(/\s/gi),s=i.length;s--;){var n=i[s];"manual"==n||"hover"==n||this.$element.on(n+"."+this.options.domain,e.proxy(this.toggle,this))}},n.fn.toggle=function(){this.$element.hasClass("is-open")?this.hide():this.show()},n.fn.getSource=function(){var t="",o=this.$element.attr("id");return this.source||(t=e(o?"#"+o+"_Content":"#"+this.options.sourceId),this.$source=t,this.source=t.html()),this.$source},n.fn.backInit=function(){this.options.initializeback&&this.options.initializeback instanceof Function&&this.options.initializeback.call(this),this.$element.triggerHandler(jQuery.Event("initialized."+this.options.domain),this),this.$source.triggerHandler(jQuery.Event("initialized."+this.options.domain),this)},n.fn.backHidden=function(){this.options.hideback&&this.options.hideback instanceof Function&&this.options.hideback.call(this),this.$element.triggerHandler(jQuery.Event("hidden."+this.options.domain),this),this.$source.triggerHandler(jQuery.Event("hidden."+this.options.domain),this)},n.fn.backShown=function(){this.options.showback&&this.options.showback instanceof Function&&this.options.showback.call(this),this.$element.triggerHandler(jQuery.Event("shown."+this.options.domain),this),this.$source.triggerHandler(jQuery.Event("shown."+this.options.domain),this)},n.fn.addTemplate=function(t,o){e("body").append(this.$template=e(this.getTemplate(o)).data("ng.popup",this).attr("id",t))},n.fn.getTemplate=function(t){return this.setTemplate(t)},n.fn.setTemplate=function(t){var e=this.options.template,o="";for(var i in t){var s=this.checkKey(i,e);s.has&&(o=e.replace(s.regx,t[i]))}return o},n.fn.checkKey=function(t,e){var o=new RegExp("\\$\\$"+t+"\\$\\$","ig");return{regx:o,has:o.test(e)}},n.fn.getContent=function(){return this.getSource().html()},n.fn.getContext=function(t){t=e(t);var o=t.offset()||{},i={width:t.outerWidth()||0,height:t.outerHeight()||0},s={scrollTop:t.scrollTop(),scrollLeft:t.scrollLeft()};return e.extend({},i,o,s)},n.fn.setPosition=function(){function o(t,e,o,i){var s,n,r=o.left+e.width,a=o.left+o.width,h=o.top+o.height+e.height-t.scrollTop||0,c=o.top-e.height-t.scrollTop||0,p=o.left;return p=t.width<=r?t.width<=a?a-e.width:t.width-e.width-(i||0):o.left,t.height<h?(n="top",s=o.top-e.height-(i||0),(c<0||t.height<c)&&(s=o.top+o.height+(i||0),n="bottom")):(n="bottom",s=o.top+o.height+(i||0)),{top:s,left:p,direct:n}}var i,s,n,r=this,a=this.$element,h=e("#"+a.data("target-id")),c="",p=placement=this.options.placement,l=this.getContext(e("body")),d=this.getContext(e(t)),g=this.getContext(a),f=e(".centerPopup-normal-content",this.$target).removeAttr("style"),u={};switch(this.options.width&&f.width(this.options.width-80),this.options.height&&f.height(this.options.height),c=this.getContext(h),/^\d+/.test(placement)&&(p="fixed"),p){case"center":s=(d.height-c.height)/2,n=(l.width-c.width)/2||0,s<=0?(h.addClass("is-top"),s=this.options.spacing+l.scrollTop||0,this.globalState.scroll=!1):(h.removeClass("is-top"),this.globalState.scroll=!0);break;case"follow":var o=o(d,c,g,this.options.spacing);h.hasClass("is-follow")||h.addClass("is-follow"),s=o.top,n=o.left,this.options.isarrow=!0,i=o.direct,this.$element.on("shown."+this.options.domain,function(){r.setArrow.call(r)});break;case"fixed":s=placement+this.options.spacing+l.scrollTop||0,n=(l.width-c.width)/2||0,h.addClass("is-top"),this.globalState.scroll=!1}u={top:s,left:n},h.attr("direction",i).css(u)},n.fn.setArrow=function(){if(this.options.isarrow){var t,o=this,i=e(this.options.arrowSelector,this.$target),s=this.$target.attr("direction"),n=this.getContext(i),r=this.getContext(o.$target),a=this.getContext(o.$element),h={top:{min:a.top,max:a.top+a.height},left:{min:a.left+(o.options.arrowspacing||0),max:a.left+a.width-(o.options.arrowspacing||0)}},c={topleft:o.ClassToString(o.options.arrowBottomLeftSelector),topright:o.ClassToString(o.options.arrowBottomRightSelector),bottomleft:o.ClassToString(o.options.arrowTopLeftSelector),bottomright:o.ClassToString(o.options.arrowTopRightSelector)},p={};/top|bottom/gi.test(s)?(t="left",p.left=h.left.min-r.left,n.left>h.left.max&&(t="right")):(t="top",p.top=h.top.min-r.top),i.removeAttr("class").addClass(o.ClassToString(o.options.arrowSelector)).addClass(c[s+t]||""),p.left||p.top?i.css(p):i.removeAttr("style")}},n.fn.ClassToString=function(t){return t.replace(/^\./gi,"")},n.fn.setEffect=function(t,e){var o=this.options.effect,i=this.getContext(t);if(o)switch(o){case"expansion":return{start:function(){t.width(0).height(0),e.before&&e.before(),t.animate({width:i.width,height:i.height},n.TRANSITION_DURATION,function(){e&&e.back&&e.back(),t.css({width:"auto",height:"auto"})})},end:function(){t.animate({width:0,height:0},n.BACKDROP_TRANSITION_DURATION,function(){t.width("auto").height("auto"),e&&e.back&&e.back()})}}}},n.fn.getMask=function(){return this.$mask=e(this.options.maskSelector)},n.fn.getTarget=function(){var t=this.$element.addClass("is-open").data("target-id");return $source=this.getSource(),$source.attr("data-target-id")?(t=$source.attr("data-target-id"),this.$target=e("#"+t).data("ng.popup",this)):t||(t=this.getUID(this.options.type),this.addTemplate(t,{content:this.getContent()})),$source.attr("data-target-id")||$source.attr("data-target-id",t),this.$element.attr("data-target-id")||this.$element.attr("data-target-id",t),this.$target=e("#"+t),this.$target},n.fn.enter=function(){this.show()},n.fn.leave=function(){this.hide()},n.fn.hide=function(){var t=this;e("#"+this.$element.removeClass("is-open").data("target-id"));this.backHidden(),this.getMask().removeAttr("class").hide(),this.options.effect?this.setEffect(this.$target,{back:function(){t.$target.hide()}}).end():this.$target.hide()},n.fn.show=function(){var t=this;return this.$target=this.getTarget(),this.$target.addClass("is-current").siblings(this.options.popupSelector).removeClass("is-current"),this.setPosition(),this.setMask(),this.options.effect?this.setEffect(this.$target,{before:function(){t.$target.show()},back:function(){t.backShown()}}).start():(this.$target.show(),t.backShown()),!1},n.fn.setMask=function(){var t=this,e=this.getMask().show();switch(this.options.mask){case"overshow":e.removeClass("is-overnone").addClass("is-overshow");break;case"overnone":e.removeClass("is-overshow").addClass("is-overnone");break;case"none":e.hide()}e.one("click",function(){e.hide(),t.hide()})},n.fn.update=function(){this.setPosition(),this.setArrow()},n.fn.getUID=function(t){do t+=~~(1e6*Math.random());while(o.getElementById(t));return t},n.fn.loadScript=function(t){t&&!e("script[src='"+t+"']").size()&&e("head").append("<script src="+t+"></script>")};var r=e.fn.popup;e.fn.popup=s,e.fn.popup.Constructor=n,e.fn.popup.noConflict=function(){return e.fn.popup=r,this};var a={toggle:function(){var t=e(this);t.data("ng.popup")||s.call(e(this),"toggle")},hide:function(t){e(this).closest(n.SELECTORS.popupSelector).data(n.DEFAULTS.domain).hide()},scrollUpdate:function(){e(this);e(n.SELECTORS.popupSelector+":visible").each(function(){var t=e(this).data(n.DEFAULTS.domain);t.globalState.scroll&&t.update()})},resizeUpdate:function(){e(this);e(n.SELECTORS.popupSelector+":visible").each(function(){var t=e(this).data(n.DEFAULTS.domain);t.globalState.resize&&t.update()})},hover:function(){e(this).addClass("is-current").siblings(n.SELECTORS.popupSelector).removeClass("is-current")}};e(o).on("click.ng.popup",n.SELECTORS.toggleSelector,a.toggle).on("click.ng.popup",n.SELECTORS.closeSelector,a.hide).on("mouseenter.ng.popup",n.SELECTORS.popupSelector+":visible",a.hover),e(t).resize(a.resizeUpdate).scroll(a.scrollUpdate)}(window,jQuery,document);
function nstate(t){t.nStateId||($(document).on("click.n.state",".nstate",function(t){return $(this).toggleClass("nstate--active"),!1}),t.nStateId=1)}nstate(window);
!function(t,e,n,a){function i(t){return this.each(function(){var n=e(this),a=n.parents(o.SELECTORS.tabBoxSelector),i=a.data("n.tab"),s="object"==typeof t?t:{};i?i.update(this):a.data("n.tab",i=new o(this,s)),"string"==typeof t&&i[t]()})}var o=function(t,e){this.init("tab",t,e)};o.VERSION="1.1.0",o.SELECTORS={tabSelector:".ntab",tabBoxSelector:".ntab-box",tabPaneSelector:".ntab-pane",activeSelectorStr:"active"},o.DEFAULTS={type:"tab",domain:"ng.tab"},o.fn=o.prototype,o.fn.init=function(t,n,a){this.$el=e(n),this.$box=this.$el.parents(o.SELECTORS.tabBoxSelector),this.options=e.extend({},o.DEFAULTS,o.SELECTORS,a,this.$box.data()),this.type=t||this.options.type},o.fn.update=function(t){this.$el=e(t)},o.fn.show=function(){var t=this.options.activeSelectorStr,n=this.getTarget(),a=this.$el.index();this.$el.hasClass(t)||(this.$el.addClass(t).siblings(this.options.tabSelector).removeClass(t),e(this.options.tabPaneSelector+":eq("+a+")",n).addClass(t).siblings(this.options.tabPaneSelector).removeClass(t),this.$el.trigger("show.n.tab",this.$el))},o.fn.getTarget=function(){return e(this.options.target)};var s=e.fn.tab;e.fn.tab=i,e.fn.tab.Constructor=o,e.fn.tab.noConflict=function(){return e.fn.tab=s,this};var r=function(t){t.preventDefault(),i.call(e(this),"show")};e(n).on("click.n.tab",o.SELECTORS.tabSelector,r)}(window,jQuery,document);
+function(n){"use strict";function t(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==n.style[i])return{end:t[i]};return!1}n.fn.emulateTransitionEnd=function(t){var i=!1,r=this;n(this).one("bsTransitionEnd",function(){i=!0});var e=function(){i||n(r).trigger(n.support.transition.end)};return setTimeout(e,t),this},n(function(){n.support.transition=t(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery);
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var c,l,u,f,s,h,g,m;if(!n&&this.length>0){c=e(this[0]);var d=c.data(e.mask.dataName);return d?d():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),l=e.mask.definitions,u=[],f=g=n.length,s=null,e.each(n.split(""),function(e,t){"?"==t?(g--,f=e):l[t]?(u.push(new RegExp(l[t])),null===s&&(s=u.length-1),f>e&&(h=u.length-1)):u.push(null)}),this.trigger("unmask").each(function(){function c(){if(o.completed){for(var e=s;h>=e;e++)if(u[e]&&C[e]===d(e))return;o.completed.call(w)}}function d(e){return o.placeholder.charAt(e<o.placeholder.length?e:0)}function p(e){for(;++e<g&&!u[e];);return e}function v(e){for(;--e>=0&&!u[e];);return e}function b(e,t){var n,a;if(!(0>e)){for(n=e,a=p(t);g>n;n++)if(u[n]){if(!(g>a&&u[n].test(C[a])))break;C[n]=C[a],C[a]=d(a),a=p(a)}A(),w.caret(Math.max(s,e))}}function k(e){var t,n,a,i;for(t=e,n=d(e);g>t;t++)if(u[t]){if(a=p(t),i=C[t],C[t]=n,!(g>a&&u[a].test(i)))break;n=i}}function y(){var e=w.val(),t=w.caret();if(m&&m.length&&m.length>e.length){for(T(!0);t.begin>0&&!u[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<s&&!u[t.begin];)t.begin++;w.caret(t.begin,t.begin)}else{for(T(!0);t.begin<g&&!u[t.begin];)t.begin++;w.caret(t.begin,t.begin)}c()}function x(){T(),w.val()!=E&&w.change()}function j(e){if(!w.prop("readonly")){var t,n,i,r=e.which||e.keyCode;m=w.val(),8===r||46===r||a&&127===r?(t=w.caret(),n=t.begin,i=t.end,i-n===0&&(n=46!==r?v(n):i=p(n-1),i=46===r?p(i):i),S(n,i),b(n,i-1),e.preventDefault()):13===r?x.call(this,e):27===r&&(w.val(E),w.caret(0,T()),e.preventDefault())}}function R(t){if(!w.prop("readonly")){var n,a,i,o=t.which||t.keyCode,l=w.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>o)&&o&&13!==o){if(l.end-l.begin!==0&&(S(l.begin,l.end),b(l.begin,l.end-1)),n=p(l.begin-1),g>n&&(a=String.fromCharCode(o),u[n].test(a))){if(k(n),C[n]=a,A(),i=p(n),r){var f=function(){e.proxy(e.fn.caret,w,i)()};setTimeout(f,0)}else w.caret(i);l.begin<=h&&c()}t.preventDefault()}}}function S(e,t){var n;for(n=e;t>n&&g>n;n++)u[n]&&(C[n]=d(n))}function A(){w.val(C.join(""))}function T(e){var t,n,a,i=w.val(),r=-1;for(t=0,a=0;g>t;t++)if(u[t]){for(C[t]=d(t);a++<i.length;)if(n=i.charAt(a-1),u[t].test(n)){C[t]=n,r=t;break}if(a>i.length){S(t+1,g);break}}else C[t]===i.charAt(a)&&a++,f>t&&(r=t);return e?A():f>r+1?o.autoclear||C.join("")===D?(w.val()&&w.val(""),S(0,g)):A():(A(),w.val(w.val().substring(0,r+1))),f?t:s}var w=e(this),C=e.map(n.split(""),function(e,t){return"?"!=e?l[e]?d(t):e:void 0}),D=C.join(""),E=w.val();w.data(e.mask.dataName,function(){return e.map(C,function(e,t){return u[t]&&e!=d(t)?e:null}).join("")}),w.one("unmask",function(){w.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!w.prop("readonly")){clearTimeout(t);var e;E=w.val(),e=T(),t=setTimeout(function(){w.get(0)===document.activeElement&&(A(),e==n.replace("?","").length?w.caret(0,e):w.caret(e))},10)}}).on("blur.mask",x).on("keydown.mask",j).on("keypress.mask",R).on("input.mask paste.mask",function(){w.prop("readonly")||setTimeout(function(){var e=T(!0);w.caret(e),c()},0)}),i&&r&&w.off("input.mask").on("input.mask",y),T()})}})});
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var c,l,u,f,s,h,g,m;if(!n&&this.length>0){c=e(this[0]);var d=c.data(e.mask.dataName);return d?d():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),l=e.mask.definitions,u=[],f=g=n.length,s=null,e.each(n.split(""),function(e,t){"?"==t?(g--,f=e):l[t]?(u.push(new RegExp(l[t])),null===s&&(s=u.length-1),f>e&&(h=u.length-1)):u.push(null)}),this.trigger("unmask").each(function(){function c(){if(o.completed){for(var e=s;h>=e;e++)if(u[e]&&C[e]===d(e))return;o.completed.call(w)}}function d(e){return o.placeholder.charAt(e<o.placeholder.length?e:0)}function p(e){for(;++e<g&&!u[e];);return e}function v(e){for(;--e>=0&&!u[e];);return e}function b(e,t){var n,a;if(!(0>e)){for(n=e,a=p(t);g>n;n++)if(u[n]){if(!(g>a&&u[n].test(C[a])))break;C[n]=C[a],C[a]=d(a),a=p(a)}A(),w.caret(Math.max(s,e))}}function k(e){var t,n,a,i;for(t=e,n=d(e);g>t;t++)if(u[t]){if(a=p(t),i=C[t],C[t]=n,!(g>a&&u[a].test(i)))break;n=i}}function y(){var e=w.val(),t=w.caret();if(m&&m.length&&m.length>e.length){for(T(!0);t.begin>0&&!u[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<s&&!u[t.begin];)t.begin++;w.caret(t.begin,t.begin)}else{for(T(!0);t.begin<g&&!u[t.begin];)t.begin++;w.caret(t.begin,t.begin)}c()}function x(){T(),w.val()!=E&&w.change()}function j(e){if(!w.prop("readonly")){var t,n,i,r=e.which||e.keyCode;m=w.val(),8===r||46===r||a&&127===r?(t=w.caret(),n=t.begin,i=t.end,i-n===0&&(n=46!==r?v(n):i=p(n-1),i=46===r?p(i):i),S(n,i),b(n,i-1),e.preventDefault()):13===r?x.call(this,e):27===r&&(w.val(E),w.caret(0,T()),e.preventDefault())}}function R(t){if(!w.prop("readonly")){var n,a,i,o=t.which||t.keyCode,l=w.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>o)&&o&&13!==o){if(l.end-l.begin!==0&&(S(l.begin,l.end),b(l.begin,l.end-1)),n=p(l.begin-1),g>n&&(a=String.fromCharCode(o),u[n].test(a))){if(k(n),C[n]=a,A(),i=p(n),r){var f=function(){e.proxy(e.fn.caret,w,i)()};setTimeout(f,0)}else w.caret(i);l.begin<=h&&c()}t.preventDefault()}}}function S(e,t){var n;for(n=e;t>n&&g>n;n++)u[n]&&(C[n]=d(n))}function A(){w.val(C.join(""))}function T(e){var t,n,a,i=w.val(),r=-1;for(t=0,a=0;g>t;t++)if(u[t]){for(C[t]=d(t);a++<i.length;)if(n=i.charAt(a-1),u[t].test(n)){C[t]=n,r=t;break}if(a>i.length){S(t+1,g);break}}else C[t]===i.charAt(a)&&a++,f>t&&(r=t);return e?A():f>r+1?o.autoclear||C.join("")===D?(w.val()&&w.val(""),S(0,g)):A():(A(),w.val(w.val().substring(0,r+1))),f?t:s}var w=e(this),C=e.map(n.split(""),function(e,t){return"?"!=e?l[e]?d(t):e:void 0}),D=C.join(""),E=w.val();w.data(e.mask.dataName,function(){return e.map(C,function(e,t){return u[t]&&e!=d(t)?e:null}).join("")}),w.one("unmask",function(){w.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!w.prop("readonly")){clearTimeout(t);var e;E=w.val(),e=T(),t=setTimeout(function(){w.get(0)===document.activeElement&&(A(),e==n.replace("?","").length?w.caret(0,e):w.caret(e))},10)}}).on("blur.mask",x).on("keydown.mask",j).on("keypress.mask",R).on("input.mask paste.mask",function(){w.prop("readonly")||setTimeout(function(){var e=T(!0);w.caret(e),c()},0)}),i&&r&&w.off("input.mask").on("input.mask",y),T()})}})});