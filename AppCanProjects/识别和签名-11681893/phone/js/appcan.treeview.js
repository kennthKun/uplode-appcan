/*! appcan v1.0.0 Beta |  from appcan.cn */appcan.define("treeview",function(a,b,c){var d='<li class="treeview">\r\n        <div class="treeview-header ubb bc-border bc-text ub uinn ub-ac">\r\n        <%if (option.hasIcon) {%>\r\n        <div class="lis-icon-s ub-img" style="background-image:url(<%=icon%>)"></div>\r\n        <%}%>\r\n        <div class="ub-f1 ut-s"><%=header%></div>\r\n        <%if(option.hasAngle){%>\r\n        <div class="fa fa-angle-down ulev2 utra sc-text"></div>\r\n        <%}%>\r\n        </div>\r\n        <div class="treeview-content umh6 bc-text uhide">\r\n        <%=content%>\r\n        </div>\r\n        </li>',e=appcan.view.template(d),f=!("ontouchstart"in window),g={start:f?"mousedown":"touchstart",move:f?"mousemove":"touchmove",end:f?"mouseup":"touchend",cancel:"touchcancel"},h=function(b){appcan.extend(this,appcan.eventEmitter),this.option=a.extend({selector:"body",type:"",hasIcon:!1,hasAngle:!0,hasTouchEffect:!0,touchClass:"sc-bg-active",isCloseOther:!0,defaultOpen:-1,autoScrollTop:!1},b,!0),this.ele=a(this.option.selector),this.option.data&&this.set(this.option.data),this.open(this.option.defaultOpen)};h.prototype={constructor:h,createPlugin:function(b){if(this.plugin){var c=a.extend({selector:b},this.pluginOption,!0);return this.plugin(c)}},getContent:function(b,c){var d=b.content;if(d){var e=this,f=0;if(!c.type){if((appcan.isArray(d)||appcan.isPlainObject(d))&&!a.zepto.isZ(d)){var g=a('<div class="listview"></div>');c.option.selector=g;var h=appcan.listview(c.option);return h.set(d),h.on("click",function(a,c,d){e.emit("listviewClick",e,a,c,d,b)}),g[0].plugin=h,g}return d}var i=appcan[c.type];return i?(c.option.data=d,i(c.option)):void 0}},buildTreeview:function(b,c){var d=a("<ul></ul>"),f=this;for(var h in b){var i=e,j={};j=a.extend({},c&&c.option,!0),j=a.extend(j,b[h].option,!0);var k=b[h].type||c&&c.type;c={option:j,type:k};var l=f.getContent(b[h],c),m=a(i({header:b[h].header,icon:b[h].icon,content:"",option:f.option})),n=m.find(".treeview-header");n[0].tv_data=b[h],c.type?m[0].plugin=l:l?m.find(".treeview-content").html(l):(m.find(".treeview-header .fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right"),m.find(".treeview-content").remove()),n.on("tap",function(a){f.itemClick(a)}),n.on(g.start,function(a){f.touchItem(a)}),n.on("longTap",function(a){f.longTapItem(a)}),n.on("swipe",function(a){f.longTapItem(a)}),m.on("tap",function(a){f.treeItemClick(a)}),d.append(m)}return d},set:function(a,b){var c=this,d=c.buildTreeview(a,b);return c.ele.html(d),c},add:function(a,b,c){var d=this,e=d.buildTreeview(a,c);if(b||1==b)d.ele.append(e);else{var f=d.ele.children().first();f.prepend(e)}return d},treeItemClick:function(b){var c=a(b.currentTarget),d=c.find(".treeview-header");this.emit("click",self,c,d[0].tv_data,a(b.target))},itemClick:function(b){var c=a(b.currentTarget),d=c[0].tv_data;d.content&&this.showItem(c)},showItem:function(b){var c=b,d=c.parent(),e=d.find(".treeview-content");if(c.length){var f=c[0].tv_data;f.content&&d.siblings().find(".treeview-header").removeClass(this.option.touchClass)}if(this.option.isCloseOther&&(d.siblings().find(".treeview-content").addClass("uhide"),d.siblings().find(".fa-angle-down").removeClass("fa-rotate-180")),e.hasClass("uhide")?(e.removeClass("uhide"),c.addClass(this.option.touchClass),d.find(".fa-angle-down").addClass("fa-rotate-180")):(e.addClass("uhide"),c.removeClass(this.option.touchClass),d.find(".fa-angle-down").removeClass("fa-rotate-180")),this.option.autoScrollTop){var g=c.offset(),h=g&&g.top||0;a(window).scrollTop(h)}},touchItem:function(b){var c=this,d=a(b.currentTarget);if(this.option.hasTouchEffect){var e=d[0].tv_data;d.addClass(c.option.touchClass),e.content||setTimeout(function(){d.removeClass(c.option.touchClass)},300)}},longTapItem:function(b){if(this.option.hasTouchEffect){var c=a(b.currentTarget),d=c.parent(),e=d.find(".treeview-content");e.hasClass("uhide")&&c.removeClass(this.option.touchClass)}},open:function(a){a=parseInt(a,10),isNaN(a)||0>a||this.showItem(this.ele.find(".treeview").eq(a).find(".treeview-header"))},hideItem:function(b){var c=b,d=c.parent(),e=d.find(".treeview-content");if(c.length){var f=c[0].tv_data;f.content&&d.siblings().find(".treeview-header").removeClass(this.option.touchClass)}if(e.hasClass("uhide")||(e.addClass("uhide"),c.removeClass(this.option.touchClass),d.find(".fa-angle-down").removeClass("fa-rotate-180")),this.option.autoScrollTop){var g=c.offset(),h=g&&g.top||0;a(window).scrollTop(h)}},hide:function(a){a=parseInt(a,10),isNaN(a)||0>a||this.hideItem(this.ele.find(".treeview").eq(a).find(".treeview-header"))},hideAll:function(){for(var a=0,b=this.ele.find(".treeview").length;b>a;a++)this.hide(a)}},c.exports=function(a){return new h(a)}});