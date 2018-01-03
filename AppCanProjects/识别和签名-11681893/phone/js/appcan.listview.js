/*! appcan v1.0.0 Beta |  from appcan.cn */appcan.define("listview",function(a,b,c){var d='<li class="ubb ub bc-border bc-text ub-ac lis" <%if(group){%>data-group="<%=group%>"<%}%> <%if(data.id){%>id="<%=data.id%>"<%}%> data-index="<%=index%>">\r\n<%if(option.hasCheckbox && option.align=="left"){%>\r\n<div class="checkbox umar-r"><input type="checkbox" class="uabs ub-con" ></div>\r\n<%}%>\r\n<%if(option.hasRadiobox && option.align=="left"){%>\r\n<div class="radiobox umar-r" name=""><input type="radio" class="uabs ub-con" name="lv_radio_<%=option.id%>"></div>\r\n<%}%>\r\n<%if(option.hasIcon && data.icon){%>\r\n<div class="<%if(option.hasSmallIcon){%>lis-icon-ss<%}else{%>lis-icon-s<%}%> ub-img" style="background-image:url(<%=data.icon%>)"></div>\r\n<%}%>\r\n<div class="lv_title ub-f1 marg-l ub ub-ver ut-m line<%=option.multiLine%>">\r\n<%=data.title%>\r\n</div>\r\n<%if(option.hasSubTitle){%>\r\n<div class="tx-r sc-text ulev-1 umar-r lv_subTitle">\r\n<%=data.subTitle%>\r\n</div>\r\n<%}%>\r\n<%if(option.hasControl && data.switchBtn){%>\r\n<div class="switch uba bc-border <%if(data.switchBtn.mini){%>switch-mini<%}%>" data-checked="<%=data.switchBtn.value%>">\r\n<div class="switch-btn sc-bg-active "></div>\r\n</div>\r\n<%}%>\r\n<%if(option.hasAngle && !(option.hasControl && data.switchBtn)){%>\r\n<div class="fa fa-angle-right ulev2 sc-text"></div>\r\n<%}%>\r\n<%if(option.hasCheckbox && option.align=="right"){%>\r\n<div class="checkbox  umar-l"><input type="checkbox" class="uabs ub-con"></div>\r\n<%}%>\r\n<%if(option.hasRadiobox && option.align=="right"){%>\r\n<div class="radiobox umar-l"><input type="radio" class="uabs ub-con" name="lv_radio_<%=option.id%>"></div>\r\n<%}%>\r\n</li>',e='<li id="lv_group_<%=data.groupId%>" class="ubb ub bc-border bc-text sc-bg-active ub-ac lis group" data-index="<%=index%>">\r\n<%=data.title%>\r\n</li>',f='<li <%if(data.id){%>id="<%=data.id%>"<%}%> class="ubb ub bc-border t-bla ub-ac lis"  data-index="<%=index%>">\r\n<%if(option.hasCheckbox && option.align=="left"){%>\r\n<div class="checkbox umar-r"><input type="checkbox" class="uabs ub-con" ></div>\r\n<%}%>\r\n<%if(option.hasRadiobox && option.align=="left"){%>\r\n<div class="radiobox umar-r" name=""><input type="radio" class="uabs ub-con" name="lv_radio_<%=option.id%>"></div>\r\n<%}%>\r\n<%if(option.hasIcon && data.icon){%>\r\n<ul class="ub ub ub-ver">\r\n<li class="">\r\n<div class="lis-icon ub-img" style="background-image:url(<%=data.icon%>)"></div>\r\n<div class="ulev-1 bc-text umar-t"><%=data.icontitle%></div>\r\n</li>\r\n</ul>\r\n<%}%>\r\n<ul class="ub-f1 ub ub-pj ub-ac">\r\n<ul class="ub-f1 ub ub-ver marg-l">\r\n<li class="bc-text ub ub-ver ut-m line<%=option.multiLine%>"><%=data.title%></li>\r\n<%if(data.describe){%><li class="ulev-1 sc-text1 uinn3"><%=data.describe%> </li><%}%>\r\n<%if(data.note){%><li class="ulev-2 sc-text1 uinn3"><%=data.note%></li><%}%>\r\n</ul>\r\n<%if(option.hasSubTitle){%>\r\n<ul class="ub ub-ver ub-ae umar-r">\r\n<%if(data.subTitle){%><li class="bc-text lv_subTitle"><%=data.subTitle%></li><%}%>\r\n<%if(data.subDescribe){%><li class="ulev-1 sc-text1 uinn3"><%=data.subDescribe%></li><%}%>\r\n<%if(data.subNote){%><li class="ulev-2 sc-text1 uinn3"><%=data.subNote%></li><%}%>\r\n</ul>\r\n<%}%>\r\n<%if(option.hasControl && data.switchBtn){%>\r\n<div class="switch uba bc-border <%if(data.switchBtn.mini){%>switch-mini<%}%>" data-checked="<%=data.switchBtn.value%>">\r\n<div class="switch-btn sc-bg-active "></div>\r\n</div>\r\n<%}%>\r\n<%if(option.hasAngle && !(option.hasControl && data.switchBtn)){%>\r\n<li class="fa fa-angle-right ulev2"></li>\r\n<%}%>\r\n<%if(option.hasCheckbox && option.align=="right"){%>\r\n<div class="checkbox  umar-l"><input type="checkbox" class="uabs ub-con"></div>\r\n<%}%>\r\n<%if(option.hasRadiobox && option.align=="right"){%>\r\n<div class="radiobox umar-l"><input type="radio" class="uabs ub-con" name="lv_radio_<%=option.id%>"></div>\r\n<%}%>\r\n</ul>\r\n</li>',g=appcan.view.template(d),h=appcan.view.template(e),i=appcan.view.template(f),j=1;function k(){return"ontouchstart"in window?void 0:!0}function l(b){appcan.extend(this,appcan.eventEmitter);var c=this;c.option=a.extend({selector:"body",type:"thinLine",hasIcon:!0,hasAngle:!0,hasSubTitle:!1,hasTouchEffect:!0,hasCheckbox:!1,hasRadiobox:!1,hasControl:!1,hasGroup:!1,align:"left",multiLine:1,touchClass:"sc-bg-active",id:j++},b,!0),c.ele=a(c.option.selector),c.option.data&&c.set(data)}l.prototype={buildListview:function(b,c){var d=a("<ul></ul>"),e=this,f="thinLine"==e.option.type?g:i;for(var h in b){var j=a(f({data:b[h],option:e.option,index:h,group:c}));j[0].lv_data=b[h],j.on("tap",function(a){e.itemClick(a)}),j.on(k()?"mousedown":"touchstart",function(a){e.touchItem(a)}),j.on("longTap",function(a){e.longTapItem(a)}),j.on("cancleTap",function(a){e.longTapItem(a)}),(e.option.hasCheckbox||e.option.hasRadiobox)&&!function(a){a.find("input").on("change",function(b){a[0].lv_data.checked=b.currentTarget.checked,e.option.hasCheckbox&&e.emit("checkbox:change",e,a,a[0].lv_data),e.option.hasRadiobox&&e.emit("radio:change",e,a,a[0].lv_data)})}(j),d.append(j)}var l=a(".switch",d);return appcan.switchBtn(l,function(a,b){var c=a.parent();c[0].lv_data.switchBtn.value=b,e.emit("switch:change",e,c,c[0].lv_data)}),d},buildGroupview:function(b){var c=this,d=a("<ul></ul>");for(var e in b){var f=a(h({data:b[e],option:c.option,index:e}));d.append(f),d.append(c.buildListview(b[e].items,e))}return d},add:function(a,b){var c=this,d=c.buildListview(a);if(b||1==b)c.ele.append(d);else{var e=c.ele.children().first();e.prepend(d)}return c},set:function(a){var b=this,c;return c=b.option.hasGroup?b.buildGroupview(a):b.buildListview(a),b.ele.html(c),b},itemClick:function(b){var c=this,d=a(b.currentTarget);if(d.removeClass(this.option.touchClass),c.option.hasCheckbox){if(a(b.target).is("input[type=checkbox]"))return;var e=d.find("input");e[0].checked=!e[0].checked}if(c.option.hasRadiobox){if(a(b.target).is("input[type=radio]"))return;var f=d.find("input");f[0].checked=!0}this.emit("click",c,d,d[0].lv_data,a(b.target))},touchItem:function(b){if(this.option.hasTouchEffect){var c=this,d=a(b.currentTarget);if(d[0].lv_data.switchBtn&&c.option.hasControl)return;d.addClass(c.option.touchClass),setTimeout(function(){d.removeClass(c.option.touchClass)},300)}},longTapItem:function(b){if(this.option.hasTouchEffect){var c=a(b.currentTarget);c.removeClass(this.option.touchClass)}},updateItem:function(b,c,d){switch(c){case"title":a(".lv_title",b).html(d);break;case"subTitle":a(".lv_subTitle",b).html(d)}}},c.exports=function(a){return new l(a)}});