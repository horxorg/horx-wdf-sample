!function(e){function n(n){var r=null;if(null!=a&&(r=a[n]),null==r){var o=t.getMainWindow(),l=o.msg;null!=l&&(a=l,r=l[n])}return null==r&&e.ajax({type:"GET",url:e.root+"/api/public/msg",async:!1,success:function(t){var o=e.common.onAjaxSuccess(t);o.success&&(a=t.data,null!=a&&(r=a[n]))}}),arguments.length<=1?r:(arguments[0]=r,t.format.apply(null,arguments))}function r(){function n(n){var r={url:n[0]};return n.length>=2&&(e.isFunction(n[1])?r.success=n[1]:r.data=n[1]),n.length>=3&&(r.success=n[2]),r}var r=e.ajax;e.ajax=function(n){null!=e.wdfPlugin&&null!=e.wdfPlugin.beforeAjaxRequest&&e.wdfPlugin.beforeAjaxRequest(n),r(n)};var t=e.get;e.get=function(){if(null!=e.wdfPlugin&&null!=e.wdfPlugin.beforeAjaxRequest){if(null==arguments||0==arguments.length)return;var r=n();e.wdfPlugin.beforeAjaxRequest(r)}t.apply(null,arguments)};var a=e.post;e.post=function(){if(null!=e.wdfPlugin&&null!=e.wdfPlugin.beforeAjaxRequest){if(null==arguments||0==arguments.length)return;var r=n();e.wdfPlugin.beforeAjaxRequest(r)}a.apply(null,arguments)}}e.root=e("meta[name='contextPath']").attr("content");var t={format:function(n){if(null==n||""==n)return"";var r=e.makeArray(arguments).slice(1);if(0==r.length)return n;for(var t=0;t<r.length;t++)n=n.replace(new RegExp("\\{"+t+"\\}","g"),r[t]);return n},convertByList:function(e,n,r,t,a){function o(n){for(var o=0;o<e.length;o++){var l=e[o];if(n==l[t])return l[a]}return r}if(null==e)return r;if(null==n)return n;null==t&&(t="id"),null==a&&(a="name"),n+="";var l="";if(n.indexOf(",")>=0)for(var i=n.split(","),u=0;u<i.length;u++){var c=o(i[u]);null!=c&&""!=c&&(u>0&&""!=l&&(l+=","),l+=c)}else l=o(n);return l},searchList:function(e,n,r){if(null==e||null==n)return null;null==r&&(r="id");for(var t=0;t<e.length;t++){var a=e[t];if(n==a[r])return a}return null},escapeHTML:function(e,n){return null==e||""==e?"":(e=String(e).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/ /g,"&nbsp;").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),n&&(e=e.replace(/\n/g,"<br/>")),e)},unescapeHTML:function(e,n){return null==e||""==e?"":(e=String(e).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&nbsp;/g," ").replace(/&amp;/g,"&"),n&&(e=e.replace(/<br\/>/g,"\r\n").replace(/<br>/g,"\r\n").replace(/<BR\/>/g,"\r\n").replace(/<BR>/g,"\r\n")),e)},getMainWindow:function(){for(var e=window;"main"!=e.tag&&e.parent!=e;)e=e.parent;return e},getSuccessCode:function(){return null!=e.wdfPlugin&&null!=e.wdfPlugin.getSuccessCode?e.wdfPlugin.getSuccessCode():"ok"},onAjaxSuccess:function(n){return null!=e.wdfPlugin&&null!=e.wdfPlugin.onAjaxSuccess?e.wdfPlugin.onAjaxSuccess(n):null==n?{success:!1,msg:e.msg("common.oper.fail")}:n.code!=e.common.getSuccessCode()?{success:!1,msg:e.common.escapeHTML(n.msg,!0)}:{success:!0}},listPage:function(n){function r(){var n=u.createPage;if(n){var r=e(window),t={type:2,title:e.msg("common.create"),content:n,maxmin:!0,area:[r.width()-100+"px",r.height()-80+"px"]};u.showSaveBtn&&(t.btn=[e.msg("common.save"),e.msg("common.cancel")],t.yes=function(e,n){var r=n.find("iframe").contents().find("#edit-form-submit");r.trigger("click")}),layui.layer.open(t)}}function t(){var n=u.modifyPage;if(n){var r=i.checkStatus("grid");if(null==r.data||1!=r.data.length)return void layer.msg(e.msg("common.oper.needOneRow"));null!=n&&n.indexOf("{0}")>=0&&(n=e.common.format(n,r.data[0][u.idField]));var t=e(window),a={type:2,title:e.msg("common.modify"),content:n,maxmin:!0,area:[t.width()-100+"px",t.height()-80+"px"]};u.showSaveBtn&&(a.btn=[e.msg("common.save"),e.msg("common.cancel")],a.yes=function(e,n){var r=n.find("iframe").contents().find("#edit-form-submit");r.trigger("click")}),layui.layer.open(a)}}function a(){var n=u.removeApi;if(n){var r=i.checkStatus("grid").data;return null==r||0==r.length?void layer.msg(e.msg("common.oper.needRow")):void layer.confirm(e.msg("common.removePrompt"),{title:e.msg("common.confirmCaption"),icon:3,btn:[e.msg("common.confirm"),e.msg("common.cancel")]},function(t){layer.close(t);for(var a=layer.load(),o=[],l=0;l<r.length;l++)o.push(r[l].id);e.ajax({type:u.removeMethod,url:n,data:{id:o},success:function(n){var r=e.common.onAjaxSuccess(n);return r.success?void i.reload("grid"):void layer.msg(r.msg)},error:function(){layer.msg(e.msg("common.oper.fail"))},complete:function(){layer.close(a)}})})}}function o(n){var r=u.detailPage;if(r){if(null==n){var t=i.checkStatus("grid");if(null==t.data||1!=t.data.length)return void layer.msg(e.msg("common.oper.needOneRow"));n=t.data[0]}null!=r&&r.indexOf("{0}")>=0&&(r=e.common.format(r,n[u.idField]));var a=e(window),o={type:2,title:e.msg("common.detail"),content:r,maxmin:!0,area:[a.width()-100+"px",a.height()-80+"px"]};layui.layer.open(o)}}var l=layui.form;l.render();var i=layui.table,u={idField:"id",showSaveBtn:!0,createPage:null,modifyPage:null,removeApi:null,removeMethod:"DELETE",gridConf:{elem:"#grid",method:"POST",height:"full",page:!0,limits:[10,20,30,50,100,200],toolbar:"#toolbar",defaultToolbar:["filter"],autoSort:!1,even:!0,checkOnClickRow:!0,request:{pageName:"currPage",limitName:"pageSize"},response:{statusCode:e.common.getSuccessCode(),countName:"total"},done:function(){e("#btnQuery").removeClass("layui-btn-disabled").attr("disabled",!1)},onToolbarClick:null}};e.extend(!0,u,n);var c=u.gridConf,d=c.where,m=c.initSort;null!=m&&(null==d&&(d={},c.where=d),d.sortField=m.field,d.sortOrder=m.type),i.on("sort(grid)",function(e){d.sortField=e.field,d.sortOrder=e.type,m=e,s.reload({initSort:m,where:d})}),l.on("submit(formQuery)",function(n){e("#btnQuery").addClass("layui-btn-disabled").attr("disabled",!0),null!=d.sortField&&(n.field.sortField=d.sortField),null!=d.sortOrder&&(n.field.sortOrder=d.sortOrder);var r=u.beforeReload;return null!=r&&r(n.field),d=n.field,s.reload({where:d,initSort:m,page:{curr:1}}),!1}),i.on("toolbar(grid)",function(e){switch(e.event){case"create":r();break;case"modify":t();break;case"remove":a();break;case"detail":o();break;default:null!=u.onToolbarClick&&u.onToolbarClick(e)}}),i.on("tool(grid)",function(e){switch(e.event){case"detail":o(e.data);break;default:null!=u.onGridEvent&&u.onGridEvent(e)}});var s=i.render(u.gridConf);return{grid:s}},treePage:function(n){function r(){var n={};return e.extend(!0,n,m),n.where=s,c.render(n)}function t(){var n=d.createPage;if(n){var r=u.checkStatus("grid"),t="";if(null==r.data||1!=r.data.length){if(d.parentIdRequired)return void layer.msg(e.msg("common.oper.needOneRow"))}else t=r.data[0][d.idField],g=t;null!=n&&n.indexOf("{0}")>=0&&(n=e.common.format(n,t));var a=e(window),o={type:2,title:e.msg("common.create"),content:n,maxmin:!0,area:[a.width()-100+"px",a.height()-80+"px"]};d.showSaveBtn&&(o.btn=[e.msg("common.save"),e.msg("common.cancel")],o.yes=function(e,n){var r=n.find("iframe").contents().find("#edit-form-submit");r.trigger("click")}),layui.layer.open(o)}}function a(){var n=d.modifyPage;if(n){var r=u.checkStatus("grid");if(null==r.data||1!=r.data.length)return void layer.msg(e.msg("common.oper.needOneRow"));f=r.data[0][d.idField],null!=n&&n.indexOf("{0}")>=0&&(n=e.common.format(n,f));var t=e(window),a={type:2,title:e.msg("common.modify"),content:n,maxmin:!0,area:[t.width()-100+"px",t.height()-80+"px"]};d.showSaveBtn&&(a.btn=[e.msg("common.save"),e.msg("common.cancel")],a.yes=function(e,n){var r=n.find("iframe").contents().find("#edit-form-submit");r.trigger("click")}),layui.layer.open(a)}}function o(){var n=d.removeApi;if(n){var r=u.checkStatus("grid").data;return null==r||0==r.length?void layer.msg(e.msg("common.oper.needRow")):void layer.confirm(e.msg("common.removePrompt"),{title:e.msg("common.confirmCaption"),icon:3,btn:[e.msg("common.confirm"),e.msg("common.cancel")]},function(t){layer.close(t);for(var a=layer.load(),o=[],l=0;l<r.length;l++)o.push(r[l].id);e.ajax({type:d.removeMethod,url:n,data:{id:o},success:function(n){var r=e.common.onAjaxSuccess(n);return r.success?void u.reload("grid"):void layer.msg(r.msg)},error:function(){layer.msg(e.msg("common.oper.fail"))},complete:function(){layer.close(a)}})})}}function l(n){var r=d.detailPage;if(r){if(null==n){var t=u.checkStatus("grid");if(null==t.data||1!=t.data.length)return void layer.msg(e.msg("common.oper.needOneRow"));n=t.data[0]}null!=r&&r.indexOf("{0}")>=0&&(r=e.common.format(r,n[d.idField]));var a=e(window),o={type:2,title:e.msg("common.detail"),content:r,maxmin:!0,area:[a.width()-100+"px",a.height()-80+"px"]};layui.layer.open(o)}}var i=layui.form;i.render();var u=layui.table,c=layui.treetable,d={idField:"id",parentIdRequired:!1,showSaveBtn:!0,createPage:null,modifyPage:null,removeApi:null,removeMethod:"DELETE",treeGridConf:{treeColIndex:1,treeSpid:-1,treeIdName:"id",treePidName:"parentId",treeDefaultClose:!0,treeLinkage:!1,treeDataType:"tree",elem:"#grid",method:"POST",height:"full",page:!1,toolbar:"#toolbar",defaultToolbar:["filter"],checkOnClickRow:!0,response:{statusCode:e.common.getSuccessCode()},done:function(){e("#btnQuery").removeClass("layui-btn-disabled").attr("disabled",!1),null!=f?(c.openNode(e("#grid"),f,!0),f=null):null!=g&&(c.openNode(e("#grid"),g),g=null)},onToolbarClick:null}};e.extend(!0,d,n);var m=d.treeGridConf,s=m.where,f=null,g=null;return r(),i.on("submit(formQuery)",function(n){e("#btnQuery").addClass("layui-btn-disabled").attr("disabled",!0);var t=d.beforeReload;return null!=t&&t(n.field),s=n.field,r(),!1}),u.on("toolbar(grid)",function(e){switch(e.event){case"create":t();break;case"modify":a();break;case"remove":o();break;case"detail":l();break;default:null!=d.onToolbarClick&&d.onToolbarClick(e)}}),u.on("tool(grid)",function(e){switch(e.event){case"detail":l(e.data);break;default:null!=d.onGridEvent&&d.onGridEvent(e)}}),{renderTreeTable:r}},editPage:function(n){var r={idField:"id",showParentLayer:!0};e.extend(!0,r,n);var t=layui.form;t.render(),null!=r.verify&&t.verify(r.verify);var a=null,o=r.onLoad,l=r.loadApi,i=!1;if(null!=l)if(a=e("#"+r.idField).val(),""!=a){var l=r.loadApi;null!=l&&l.indexOf("{0}")>=0&&(l=e.common.format(l,a)),e.ajax({type:"GET",url:l,success:function(n){var r=e.common.onAjaxSuccess(n);return r.success?(t.val("edit-form",n.data),void(null!=o&&o(n.data))):void layer.msg(r.msg)},error:function(){null!=o&&o(),layer.msg(e.msg("common.load.fail"))}})}else null!=o&&o();else{var u=r.data;null!=u&&(a=u[r.idField],i=!0),null!=o&&o(u)}var c=null,d=null;a?(c=r.modifyApi,null!=c&&c.indexOf("{0}")>=0&&(c=e.common.format(c,a)),d=null==r.modifyMethod?"PUT":r.modifyMethod):(c=r.createApi,d=null==r.createMethod?"POST":r.createMethod),t.on("submit(edit-form-submit)",function(n){var t=n.field;e("#form").form().appendData(t),i&&(t[r.idField]=a);var o=r.beforeSubmit;if(null!=o){var l=o(t);if(0==l)return}var u=null,m=null,s=null;r.showParentLayer&&(u=parent.layer,m=u.getFrameIndex(window.name),s=u.getFrameIndex(window.name));var f=null;e.ajax({type:d,url:c,data:t,success:function(n){if(f=e.common.onAjaxSuccess(n),!f.success)return void layer.msg(f.msg);var t=r.onSaveSuccess;null==t?parent.layui.table.reload("grid"):t(n.data),r.showParentLayer?(u.close(m),u.msg(e.msg("common.oper.ok"))):layer.msg(e.msg("common.oper.ok"))},error:function(n,r,t){layer.msg(e.msg("common.oper.fail"))},complete:function(){null!=f&&f.success&&r.showParentLayer&&u.close(s)}})})},tabPage:function(n){function r(n){null==u[n]&&(d.tabAdd(l.tabField,{title:l.tabConf[n].title,content:'<iframe id="'+n+'" class="layui-col-xs12" src="" frameborder="0"></iframe>',id:n}),u[n]=e("#"+n),c.push(n))}function t(n){var r=u[n].attr("src");if(""==r){var r=null;i||(r=l.tabConf[n].urlForNullId),r||(r=l.tabConf[n].url),r&&i&&r.indexOf("{0}")>=0&&(r=e.common.format(r,i)),u[n].attr("src",r),currTab=n,u[n].height(e(window).height()-e(".layui-tab-title").height()-13)}}function a(e){currTab=e,d.tabChange(l.tabField,currTab),t(currTab)}function o(e){i=e}var l={dataId:null,tabField:"tab",tabConf:null};e.extend(!0,l,n);var i=l.dataId,u={},c=[];currTab=null;var d=layui.element;return e(window).resize(function(){u[currTab].height(e(window).height()-e(".layui-tab-title").height()-13)}),d.on("tab("+l.tabField+")",function(e){t(c[e.index])}),{createTab:r,changeTab:a,setDataId:o}}},a=null;e.msg=n,e.common=t,r();var o=function(n){var r=this;r.target=e(n)};o.prototype.val=function(e){alert($this.html())},o.prototype.appendData=function(n){var r=this.target,t=r.find("input[type='checkbox']");t.each(function(){var r=e(this),t=r.attr("name");if(null!=t&&""!=t){var a=r.attr("switch-value");if(null!=a&&a.indexOf("|")>0){var o=a.split("|");n[t]=r.is(":checked")?o[0]:o[1]}}})},e.fn.form=function(){var n=e(this);if(0!=n.length){e(this).length>1&&(n=e(n[0]));var r=n[0].formObj;if(null==r){var t=new o(n);r={val:function(e){t.val(e)},appendData:function(e){t.appendData(e)}},n[0].formObj=r}return r}}}(jQuery);!function(e){var l=function(l,t){var i=this;i.target=l,i.parent=l.parent();var n={multi:!1,value:null,load:null,data:null,idProp:"id",textProp:"name",search:!0,searchProps:null,itemFilter:null,onChange:null};e.extend(!0,n,t),i.conf=n,i.init()};l.prototype={init:function(){var l,t=this,i=t.conf,n=t.target;if(n.parent().hasClass("layui-select-title"))l=n.parent().parent();else{var a='<div class="dropdown-container layui-unselect layui-form-select"><div class="layui-select-title"><i class="layui-edge"></i></div><dl class="dropdown-canvas layui-anim layui-anim-upbit">'+(i.search?"<div class='dropdown-search-div'><input type='text' class='dropdown-search-input'><i class=\"layui-icon layui-icon-search dropdown-search-icon\"></i></div>":"")+"<div class='dropdown-div "+(i.search?"dropdown-div-search":"dropdown-div-nosearch")+"'></div><div class='layui-laydate-footer' style='height:20px'><div class='laydate-footer-btns'>"+(i.multi?"<span class='dropdown-btns-all'>全选</span>":"")+"<span class='dropdown-btns-clear'>清空</span><span class='dropdown-btns-close'>关闭</span></div></div></dl></div>";l=e(a),t.parent.append(l),n.remove(),l.find(".layui-edge").before(n)}if(t.dropdownEle=l,t.dlEle=l.children("dl"),t.listEle=t.dlEle.children(".dropdown-div"),n.prop("readonly","readonly"),n.bind("click",function(){t.toggle()}),l.find(".dropdown-btns-clear").on("click",function(){t.setValue(null,!0)}),l.find(".dropdown-btns-close").on("click",function(){t.close()}),i.multi&&l.find(".dropdown-btns-all").on("click",function(){t.selectAll()}),i.search?(t.searchInput=l.find(".dropdown-search-input"),t.searchInput.on("keyup",function(l){var i=l.which||l.keyCode;if(38==i||40==i?t.upDown(40==i):27==i?t.close():t.filter(e(this).val()),13==i){var n=t.listEle.children(".dropdown-item-hot");n.is(":visible")?n.trigger("click"):n.removeClass("dropdown-item-hot")}}),l.find(".dropdown-search-icon").on("click",function(){t.filter(t.searchInput.val())})):t.target.on("keyup",function(e){var l=e.which||e.keyCode;if(38==l||40==l)t.upDown(40==l);else if(27==l)t.close();else if(13==l){var i=t.listEle.children(".dropdown-item-hot");i.is(":visible")?i.trigger("click"):i.removeClass("dropdown-item-hot")}}),e(document).on("click",function(n){var a=e(n.target).parents(".dropdown-container");return a.length>0&&a[0]==l[0]?(i.search&&t.searchInput.length>0&&t.searchInput[0].focus(),!1):void(l.hasClass("layui-form-selected")&&l.removeClass("layui-form-selected layui-form-selectup"))}),null==i.data&&null!=i.load){var s={type:"GET"};e.extend(!0,s,i.load),s.success=function(e){var l=null;null!=s.dataReader?l=s.dataReader(e):null!=e&&(l=e.data),t.conf.data=l,t.initList(),null!=i.value&&t.setValue(i.value,!1)},e.ajax(s)}else t.initList(),null!=i.value&&t.setValue(i.value,!1)},initList:function(){var l=this,t=l.conf,i=t.data,n=l.listEle;if(n.empty(),null==i)return null;for(var a=0;a<i.length;a++){var s=i[a],o=s[t.idProp],r=e.common.escapeHTML(s[t.textProp]),d="<dd data-id='"+o+"'>";t.multi&&(d+='<div class="layui-unselect layui-form-checkbox" lay-skin="primary" style=\'margin-bottom: 13px\'><i class="layui-icon layui-icon-ok"></i></div>'),d+=r+"</dd>",n.append(e(d))}t.multi?n.children("dd").on("click",function(){var t=e(this).children(".layui-form-checkbox");t.toggleClass("layui-form-checked"),l.setChecked(!0)}):n.children("dd").on("click",function(){l.setSelected(e(this),!0),l.close()})},toggle:function(){var l=this.dropdownEle;if(l.hasClass("layui-form-selected"))l.removeClass("layui-form-selected layui-form-selectup");else{var t=e(window),i=l.offset().top+l.outerHeight()+5-t.scrollTop(),n=this.dlEle.outerHeight(),a="layui-form-selected";i+n>t.height()&&i-l.outerHeight()>=n&&(a+=" layui-form-selectup"),l.addClass(a)}},close:function(){this.dropdownEle.removeClass("layui-form-selected layui-form-selectup")},filter:function(l){function t(e,l){return null!=e&&(e+="",e=e.toUpperCase(),e.indexOf(l)>=0)}if(this.keyword!=l){var i=this.listEle;i.children(".dropdown-item-hot").removeClass("dropdown-item-hot"),this.keyword=l;var n=i.children();if(null==l)return void n.show();if(l=l.trim(),""==l)return void n.show();for(var a=0;a<n.length;a++){var s=e(n[a]),o=this.conf.data[a],r=!1;if(null!=this.conf.itemFilter)r=this.conf.itemFilter(o);else{var d=l.toUpperCase(),c=this.conf.searchProps;if(null==c||0==c.length)r=t(o[this.conf.idProp],d),r||(r=t(o[this.conf.textProp],d));else if(!r&&null!=c)for(var u=0;u<c.length&&!(r=t(o[c[u]],d));u++);}r?s.show():s.hide()}}},upDown:function(l){function t(l){l.scrollIntoView(!1),e(l).addClass("dropdown-item-hot")}var i=this.listEle,n=i.children(":visible");if(0!=n.length){var a=i.children(".dropdown-item-hot");if(0==a.length)t(l?n[0]:n[n.length-1]);else if(a.is(":visible")){if(n.length>1){a.removeClass("dropdown-item-hot");for(var s=-1,o=0;o<n.length;o++)if(n[o]==a[0]){s=o;break}t(l?s<n.length-1?n[s+1]:n[0]:s>0?n[s-1]:n[n.length-1])}}else a.removeClass("dropdown-item-hot"),t(l?n[0]:n[n.length-1])}},setSelected:function(e,l){if(!(null==e&&null==this.selectedObj||null!=e&&null!=this.selectedObj&&this.selectedObj[0]==e[0])){null!=this.selectedObj&&this.selectedObj.removeClass("layui-this");var t=null;if(null!=e){t=e.attr("data-id");var i=this.getDataById(t);null!=i&&(this.target.val(i[this.conf.textProp]),e.addClass("layui-this"))}else this.target.val("");if(this.value=t,this.selectedObj=e,l){var n=this.conf.onChange;null!=n&&n(t)}}},setChecked:function(l){for(var t=this.listEle,i=t.find(".layui-form-checked"),n="",a=[],s=0;s<i.length;s++){var o=e(i[s]).parents("dd"),r=o.attr("data-id");a.push(r);var d=this.getDataById(r);null!=d&&(n.length>0&&(n+=","),n+=d[this.conf.textProp])}var c=this.value;if(this.value=a,this.target.val(n),l&&(0!=a.length||null!=c&&0!=c.length)){var u=this.conf.onChange;null!=u&&u(a)}},selectAll:function(){var e=this.listEle;e.find(".layui-form-checkbox").addClass("layui-form-checked"),this.setChecked(!0)},setValue:function(e,l){if(this.conf.multi){var t=this.listEle;if(t.find(".layui-form-checked").removeClass("layui-form-checked"),null!=e)if("[object Array]"===Object.prototype.toString.call(e))for(var i=0;i<e.length;i++)t.children("dd[data-id='"+e[i]+"']").children(".layui-form-checkbox").addClass("layui-form-checked");else t.children("dd[data-id='"+e+"']").children(".layui-form-checkbox").addClass("layui-form-checked");this.setChecked(l)}else{var n=this.getDataById(e);if(null==n)return void this.setSelected(null,l);var a=this.listEle.children("dd[data-id='"+e+"']");this.setSelected(a,l)}},getValue:function(){return this.value},getDataById:function(e){if(null==e)return null;var l=this.conf,t=l.data;if(null==t)return null;for(var i=0;i<t.length;i++){var n=t[i];if(n[l.idProp]==e)return n}return null},setData:function(e,l){this.keyword=null,this.value=null,this.selectedObj=null,this.target.val(""),this.conf.data=e,this.initList(),null!=l&&this.setValue(l,!1)}},e.fn.listSelect=function(t){var i=e(this);if(0!=i.length){e(this).length>1&&(i=e(i[0]));var n=i[0].listSelectObj;if(null==n){var a=new l(i,t);n={getValue:function(){return a.getValue()},setValue:function(e){a.setValue(e,!1)},setData:function(e,l){a.setData(e,l)}},i[0].listSelectObj=n}return n}}}(jQuery);!function(e){var t=function(t,l){var n=this;n.target=t,n.parent=t.parent();var i={multi:!1,value:null,load:null,width:null,treeConf:{showCheckbox:!1,click:function(e){return!1},iconClick:function(){return!1}},convertItem:null,onChange:null};e.extend(!0,i,l),i.multi&&(i.treeConf.showCheckbox=!0),n.conf=i,n.init()};t.prototype={init:function(){var t,l=this,n=l.target;if(n.parent().hasClass("layui-select-title"))t=n.parent().parent();else{var i='<div class="dropdown-container layui-unselect layui-form-select"><div class="layui-select-title"><i class="layui-edge"></i></div><dl class="layui-anim layui-anim-upbit"><div class=\'dropdown-div dropdown-div-nosearch\'></div>'+"<div class='layui-laydate-footer' style='height:20px'><div class='laydate-footer-btns'><span class='dropdown-btns-clear'>清空</span><span class='dropdown-btns-close'>关闭</span></div></div></dl></div>";t=e(i),l.parent.append(t),n.remove(),t.find(".layui-edge").before(n)}l.dropdownEle=t,l.dlEle=t.children("dl"),l.conf.width&&l.dlEle.width(l.conf.width),n.prop("readonly","readonly"),n.bind("click",function(){l.toggle()}),t.find(".dropdown-btns-clear").on("click",function(){l.setValue(null,!0)}),t.find(".dropdown-btns-close").on("click",function(){l.close()});var a=e(document);a.on("keyup",function(e){var t=e.which||e.keyCode;27==t&&l.close()}),a.on("click",function(l){var n=e(l.target).parents(".dropdown-container");return!(n.length>0&&n[0]==t[0])&&void(t.hasClass("layui-form-selected")&&t.removeClass("layui-form-selected layui-form-selectup"))});var r=l.conf.treeConf;if(r.elem=t.find(".dropdown-div")[0],l.conf.multi?r.oncheck=function(e){l.setChecked(null==l.notCheckCallback||!l.notCheckCallback),l.notCheckCallback=null}:r.click=function(e){return l.setSelected(e,!0),l.close(),!1},null==r.data&&null!=l.conf.load){var o={type:"GET"};e.extend(!0,o,l.conf.load),o.success=function(e){var t=null;null!=o.dataReader?t=o.dataReader(e):null!=e&&(t=l.convertData(e.data)),r.data=t,l.initTree(r),null!=l.conf.value&&l.setValue(l.conf.value,!1)},e.ajax(o)}else l.initTree(r),null!=l.conf.value&&l.setValue(l.conf.value,!1)},convertData:function(t){if(null==t)return null;for(var l=this.conf.convertItem,n=0;n<t.length;n++){var i=t[n];null!=l?i=l(i):(null==i.title&&(i.title=i.name),i.title=e.common.escapeHTML(i.title)),null!=i.children&&(i.children=this.convertData(i.children))}return t},initTree:function(e){this.dropdownEle.find(".dropdown-div").empty();var t=layui.tree;this.treeObj=t.render(e)},toggle:function(){var t=this.dropdownEle;if(t.hasClass("layui-form-selected"))t.removeClass("layui-form-selected layui-form-selectup");else{var l=e(window),n=t.offset().top+t.outerHeight()+5-l.scrollTop(),i=this.dlEle.outerHeight(),a="layui-form-selected";n+i>l.height()&&n>=i&&(a+=" layui-form-selectup"),t.addClass(a)}},close:function(){this.dropdownEle.removeClass("layui-form-selected layui-form-selectup")},setSelected:function(e,t){if(!(null==e&&null==this.selectedObj||null!=e&&null!=this.selectedObj&&this.selectedObj.data.id==e.data.id)){null!=this.selectedObj&&this.selectedObj.elem.find(".layui-tree-txt:first").removeClass("dropdown-this");this.value;if(null!=e?(this.target.val(e.data.title),e.elem.find(".layui-tree-txt:first").addClass("dropdown-this"),this.value=e.data.id):(this.target.val(""),this.value=null),this.selectedObj=e,t){var l=this.conf.onChange;null!=l&&l(this.value)}}},setChecked:function(e){function t(e){if(0!=e.length)for(var n=0;n<e.length;n++){var a=e[n];a.unchecked||(i.length>0&&(i+=","),i+=a.title,l.push(a.id));var r=a.children;null!=r&&r.length>0&&t(r)}}var l=[],n=this.treeObj.getChecked(),i="";t(n),this.target.val(i);var a=this.value;if(this.value=l,e&&(0!=l.length||null!=a&&0!=a.length)){var r=this.conf.onChange;null!=r&&r(l)}},setValue:function(t,l){if(this.conf.multi)null==t?this.dropdownEle.find(".layui-form-checked").removeClass("layui-form-checked"):(this.notCheckCallback=!0,this.treeObj.setChecked(t)),this.setChecked(l);else{var n=this.getDataById(t);if(null==n)return void this.setSelected(null,l);var i=this.dropdownEle.find(".layui-tree-set[data-id="+t+"]");this.setSelected({data:n,elem:i},l);for(var a=i.parents(".layui-tree-set"),r=0;r<a.length;r++){var o=e(a[r]);o.find(".layui-tree-iconClick:first").trigger("click")}}},getValue:function(){return this.value},getDataById:function(e){function t(e,l){for(var n=0;n<e.length;n++){var i=e[n];if(i.id==l)return i;var a=i.children;if(null!=a&&a.length>0){var r=t(a,l);if(null!=r)return r}}return null}if(null==e)return null;var l=this.conf.treeConf.data;return null==l?null:t(l,e)},setData:function(e,t){this.treeObj=null,this.value=null,this.selectedObj=null,this.target.val("");var l=this.conf.treeConf;l.data=e,this.initTree(l),null!=t&&this.setValue(t,!1)}},e.fn.treeSelect=function(l){var n=e(this);if(0!=n.length){e(this).length>1&&(n=e(n[0]));var i=n[0].treeSelectObj;if(null==i){var a=new t(n,l);i={getValue:function(){return a.getValue()},setValue:function(e){a.setValue(e,!1)},setData:function(e,t){a.setData(e,t)}},n[0].treeSelectObj=i}return i}}}(jQuery);layui.define(["layer","table"],function(e){var t=layui.jquery,i=layui.layer,a=layui.table,r={render:function(e){r.checkParam(e)&&(e.data?r.init(e,e.data):t.ajax({type:e.method,url:e.url,data:e.where,success:function(a){var n=t.common.onAjaxSuccess(a);return n.success?void r.init(e,a.data):void i.msg(n.msg)},error:function(){i.msg(t.msg("common.load.fail"))}}))},init:function(e,n){function l(t){if(!t.id){if(!e.treeIdName)return void i.msg("参数treeIdName不能为空",{icon:5});t.id=t[e.treeIdName]}if(!t.pid){if(!e.treePidName)return void i.msg("参数treePidName不能为空",{icon:5});t.pid=t[e.treePidName]}}function o(e,t){if(null!=e&&0!=e.length)for(var i=0;i<e.length;i++){var a=e[i];l(a),d.push(a);var r=a.children;null!=r&&r.length>0&&(a.isParent=!0),o(r,t+1)}}var d=[],s=e.done,c=n;if("tree"==e.treeDataType)c.length>0&&o(c,1);else{for(var u=0;u<c.length;u++){var f=c[u];l(f)}var p=function(e,t){for(var i=0;i<t.length;i++)if(t[i].pid==e){var a=d.length;a>0&&d[a-1].id==e&&(d[a-1].isParent=!0),d.push(t[i]),p(t[i].id,t)}};p(e.treeSpid,c)}e.url=void 0,e.data=d,e.page=!1,e.limit=1e6;var y=e.cols[0][e.treeColIndex].templet;return e.cols[0][e.treeColIndex].templet=function(t){for(var i=null==y?t[e.cols[0][e.treeColIndex].field]:y(t),a=t.id,n=t.pid,l=t.isParent,o=r.getEmptyNum(n,d),s="",c=0;c<o;c++)s+='<span class="treeTable-empty"></span>';s+=l?'<i class="layui-icon layui-icon-triangle-d"></i> <i class="layui-icon layui-icon-layer"></i>':'<i class="layui-icon layui-icon-file"></i>',s+="&nbsp;&nbsp;";var u=l?"dir":"file",f='<span class="treeTable-icon open" lay-tid="'+a+'" lay-tpid="'+n+'" lay-ttype="'+u+'">';return f+s+i+"</span>"},e.done=function(i,a,n){t(e.elem).next().addClass("treeTable"),t(".treeTable .layui-table-page").css("display","none"),t(e.elem).next().attr("treeLinkage",e.treeLinkage),e.treeDefaultClose&&r.foldAll(e.elem),s&&s(i,a,n)},a.render(e)},getEmptyNum:function(e,t){var i=0;if(!e)return i;for(var a,n=0;n<t.length;n++)if(e==t[n].id){i+=1,a=t[n].pid;break}return i+r.getEmptyNum(a,t)},toggleRows:function(e,i){var a=e.attr("lay-ttype");if("file"!=a){var r=e.attr("lay-tid"),n=e.hasClass("open");n?e.removeClass("open"):e.addClass("open"),e.closest("tbody").find("tr").each(function(){var e=t(this).find(".treeTable-icon"),a=e.attr("lay-tpid"),l=e.attr("lay-ttype"),o=e.hasClass("open");r==a&&(n?(t(this).hide(),"dir"==l&&o==n&&e.trigger("click")):(t(this).show(),i&&"dir"==l&&o==n&&e.trigger("click")))})}},checkParam:function(e){return e.treeSpid||0==e.treeSpid?!(!e.treeColIndex&&0!=e.treeColIndex)||(i.msg("参数treeColIndex不能为空",{icon:5}),!1):(i.msg("参数treeSpid不能为空",{icon:5}),!1)},expandAll:function(e){t(e).next(".treeTable").find(".layui-table-body tbody tr").each(function(){var e=t(this).find(".treeTable-icon"),i=e.attr("lay-ttype"),a=e.hasClass("open");"dir"!=i||a||e.trigger("click")})},foldAll:function(e){t(e).next(".treeTable").find(".layui-table-body tbody tr").each(function(){var e=t(this).find(".treeTable-icon"),i=e.attr("lay-ttype"),a=e.hasClass("open");"dir"==i&&a&&e.trigger("click")})},openNode:function(e,t,i){function a(e){var t=r.find(".treeTable-icon[lay-tid='"+e+"']");if(t.length>0){n.push(t);var i=t.attr("lay-tpid");a(i)}}var r=e.next(".treeTable"),n=[];a(t);var l=i?1:0;if(n.length>l)for(var o=n.length-1;o>=l;o--)n[o].trigger("click")}};t("body").on("click",".treeTable .treeTable-icon",function(){var e=t(this).parents(".treeTable").attr("treeLinkage");"true"==e?r.toggleRows(t(this),!0):r.toggleRows(t(this),!1)}),e("treetable",r)});