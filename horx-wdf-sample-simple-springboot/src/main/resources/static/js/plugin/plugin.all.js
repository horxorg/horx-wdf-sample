!function(e){function n(n){var t=null;if(null!=r&&(t=r[n]),null==t){var l=a.getMainWindow(),o=l.msg;null!=o&&(r=o,t=o[n])}return null==t&&e.ajax({type:"GET",url:e.root+"/public/api/msg",async:!1,success:function(a){var l=e.common.onAjaxSuccess(a);l.success&&(r=a.data,null!=r&&(t=r[n]))}}),arguments.length<=1?t:(arguments[0]=t,a.format.apply(null,arguments))}function t(){function n(n){var t={url:n[0]};return n.length>=2&&(e.isFunction(n[1])?t.success=n[1]:t.data=n[1]),n.length>=3&&(t.success=n[2]),t}var t=e.ajax;e.ajax=function(n){null!=e.wdfPlugin&&null!=e.wdfPlugin.beforeAjaxRequest&&e.wdfPlugin.beforeAjaxRequest(n),t(n)};var a=e.get;e.get=function(){if(null!=e.wdfPlugin&&null!=e.wdfPlugin.beforeAjaxRequest){if(null==arguments||0==arguments.length)return;var t=n();e.wdfPlugin.beforeAjaxRequest(t)}a.apply(null,arguments)};var r=e.post;e.post=function(){if(null!=e.wdfPlugin&&null!=e.wdfPlugin.beforeAjaxRequest){if(null==arguments||0==arguments.length)return;var t=n();e.wdfPlugin.beforeAjaxRequest(t)}r.apply(null,arguments)}}e.root=e("meta[name='contextPath']").attr("content");var a={format:function(n){if(null==n||""==n)return"";var t=e.makeArray(arguments).slice(1);if(0==t.length)return n;for(var a=0;a<t.length;a++)n=n.replace(new RegExp("\\{"+a+"\\}","g"),t[a]);return n},convertByList:function(e,n,t,a,r){function l(n){for(var l=0;l<e.length;l++){var o=e[l];if(n==o[a])return o[r]}return t}if(null==e)return t;if(null==n)return t;null==a&&(a="id"),null==r&&(r="name"),n+="";var o="";if(n.indexOf(",")>=0)for(var i=n.split(","),u=0;u<i.length;u++){var c=l(i[u].trim());c&&(u>0&&""!=o&&(o+=","),o+=c)}else o=l(n);return o},searchList:function(e,n,t){if(null==e||null==n)return null;null==t&&(t="id");for(var a=0;a<e.length;a++){var r=e[a];if(n==r[t])return r}return null},convertByTree:function(e,n,t,a,r,l){function o(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(n==r[a])return r;var i=r[l];if(i&&(r=o(i,n),null!=r))return r}return null}if(null==e)return t;if(null==n)return t;null==a&&(a="id"),null==r&&(r="name"),null==l&&(l="children"),n+="";var i="";if(n.indexOf(",")>=0)for(var u=n.split(","),c=0;c<u.length;c++){var d=o(e,u[c].trim()),m=d?d[r]:null;m&&(c>0&&""!=i&&(i+=","),i+=m)}else{var d=o(e,n);i=d?d[r]:null,i||(i=t)}return i},escapeHTML:function(e,n){return null==e||""==e?"":(e=String(e).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/ /g,"&nbsp;").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),n&&(e=e.replace(/\n/g,"<br/>")),e)},unescapeHTML:function(e,n){return null==e||""==e?"":(e=String(e).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&nbsp;/g," ").replace(/&amp;/g,"&"),n&&(e=e.replace(/<br\/>/g,"\r\n").replace(/<br>/g,"\r\n").replace(/<BR\/>/g,"\r\n").replace(/<BR>/g,"\r\n")),e)},formEnterToClick:function(e,n){e.find("input[type='text'],input[type='password']").bind("keydown",function(e){13==e.keyCode&&n.trigger("click")})},getMainWindow:function(){for(var e=window;"main"!=e.tag&&e.parent!=e;)e=e.parent;return e},getConfigValue:function(n){if(null!=e.wdfPlugin&&null!=e.wdfPlugin.config){var t=e.wdfPlugin.config[n];if(null!=t)return t}var a={statusKey:"success",successValue:!0,totalKey:"total",currPageName:"currPage",pageSizeName:"pageSize",sortFieldName:"sortField",sortOrderName:"sortOrder"};return a[n]},onAjaxSuccess:function(n){return null!=e.wdfPlugin&&null!=e.wdfPlugin.onAjaxSuccess?e.wdfPlugin.onAjaxSuccess(n):null==n?{success:!1,msg:e.msg("common.oper.fail")}:n},listPage:function(n){function t(){var n=f.createPage;if(n){var t=e(window),a={type:2,title:o("create"),content:n,maxmin:!0,area:[t.width()-100+"px",t.height()-80+"px"]};f.showSaveBtn&&(a.btn=[e.msg("common.save"),e.msg("common.cancel")],a.yes=function(e,n){var t=n.find("iframe").contents().find("#edit-form-submit");t.trigger("click")}),m=layui.layer.open(a),d="create"}}function a(){var n=f.modifyPage;if(n){var t=c.checkStatus("grid");if(null==t.data||1!=t.data.length)return void layer.msg(e.msg("common.oper.needOneRow"));null!=n&&n.indexOf("{0}")>=0&&(n=e.common.format(n,t.data[0][f.idField]));var a=e(window),r={type:2,title:o("modify",t.data[0]),content:n,maxmin:!0,area:[a.width()-100+"px",a.height()-80+"px"]};f.showSaveBtn&&(r.btn=[e.msg("common.save"),e.msg("common.cancel")],r.yes=function(e,n){var t=n.find("iframe").contents().find("#edit-form-submit");t.trigger("click")}),m=layui.layer.open(r),d="modify"}}function r(){var n=f.removeApi;if(n){var t=c.checkStatus("grid").data;return null==t||0==t.length?void layer.msg(e.msg("common.oper.needRow")):void layer.confirm(e.msg("common.removePrompt"),{title:e.msg("common.confirmCaption"),icon:3,btn:[e.msg("common.confirm"),e.msg("common.cancel")]},function(a){layer.close(a);var r=layer.load(),l=!0;null!=n&&n.indexOf("{0}")>=0&&(l=!1);for(var o=l?[]:"",i=0;i<t.length;i++)l?o.push(t[i].id):(i>0&&(o+=","),o+=t[i].id);l||(n=e.common.format(n,o));var u={type:f.removeMethod,url:n,success:function(n){var t=e.common.onAjaxSuccess(n);return t.success?void c.reload("grid"):void layer.msg(t.msg)},error:function(){layer.msg(e.msg("common.oper.fail"))},complete:function(){layer.close(r)}};l&&(u.data={id:o}),e.ajax(u)})}}function l(n){var t=f.detailPage;if(t){if(null==n){var a=c.checkStatus("grid");if(null==a.data||1!=a.data.length)return void layer.msg(e.msg("common.oper.needOneRow"));n=a.data[0]}null!=t&&t.indexOf("{0}")>=0&&(t=e.common.format(t,n[f.idField]));var r=e(window),l={type:2,title:o("detail",n),content:t,maxmin:!0,area:[r.width()-100+"px",r.height()-80+"px"]};m=layui.layer.open(l),d="modify"}}function o(e,n){var t=y[e];return f.dialogTitleField&&n&&n[f.dialogTitleField]&&(t+="【"+n[f.dialogTitleField]+"】"),t}function i(e){f.dialogTitleField&&e&&e[f.dialogTitleField]&&layer.title(o(d,e),m)}var u=layui.form;u.render();var c=layui.table,d=null,m=null,f={idField:"id",showSaveBtn:!0,dialogTitleField:null,createPage:null,modifyPage:null,removeApi:null,removeMethod:"DELETE",gridConf:{elem:"#grid",method:"POST",height:"full",page:!0,limits:[10,20,30,50,100,200],toolbar:"#toolbar",defaultToolbar:["filter"],autoSort:!1,even:!0,checkOnClickRow:!0,request:{pageName:e.common.getConfigValue("currPageName"),limitName:e.common.getConfigValue("pageSizeName")},response:{statusName:e.common.getConfigValue("statusKey"),statusCode:e.common.getConfigValue("successValue"),countName:e.common.getConfigValue("totalKey")},done:function(){e("#btnQuery").removeClass("layui-btn-disabled").attr("disabled",!1)},onToolbarClick:null}};e.extend(!0,f,n);var s=f.gridConf,g=s.where,v=s.initSort;null!=v&&(null==g&&(g={},s.where=g),g[e.common.getConfigValue("sortFieldName")]=v.field,g[e.common.getConfigValue("sortOrderName")]=v.type);var p=c.render(f.gridConf);c.on("sort(grid)",function(n){g[e.common.getConfigValue("sortFieldName")]=n.field,g[e.common.getConfigValue("sortOrderName")]=n.type,v=n,p.reload({initSort:v,where:g})}),u.on("submit(formQuery)",function(n){e("#btnQuery").addClass("layui-btn-disabled").attr("disabled",!0),null!=g[e.common.getConfigValue("sortFieldName")]&&(n.field[e.common.getConfigValue("sortFieldName")]=g[e.common.getConfigValue("sortFieldName")]),null!=g[e.common.getConfigValue("sortOrderName")]&&(n.field[e.common.getConfigValue("sortOrderName")]=g[e.common.getConfigValue("sortOrderName")]);var t=f.beforeReload;return null!=t&&t(n.field),g=n.field,p.reload({where:g,initSort:v,page:{curr:1}}),!1}),c.on("toolbar(grid)",function(e){switch(e.event){case"create":t();break;case"modify":a();break;case"remove":r();break;case"detail":l();break;default:null!=f.onToolbarClick&&f.onToolbarClick(e)}}),c.on("tool(grid)",function(e){switch(e.event){case"detail":l(e.data);break;default:null!=f.onGridEvent&&f.onGridEvent(e)}});var y={create:e.msg("common.create"),modify:e.msg("common.modify"),detail:e.msg("common.detail")};return window.resetDialogTitle=i,{table:p,resetDialogTitle:i}},treePage:function(n){function t(){var n={};e.extend(!0,n,v),n.where=p;var a=m.render(n);return d.on("sort(grid)",function(e){v.initSort=e,t()}),a}function a(){var n=g.createPage;if(n){var t=d.checkStatus("grid"),a="";if(null==t.data||1!=t.data.length){if(g.parentIdRequired)return void layer.msg(e.msg("common.oper.needOneRow"))}else a=t.data[0][g.idField],h=a;null!=n&&n.indexOf("{0}")>=0&&(n=e.common.format(n,a));var r=e(window),l={type:2,title:i("create"),content:n,maxmin:!0,area:[r.width()-100+"px",r.height()-80+"px"]};g.showSaveBtn&&(l.btn=[e.msg("common.save"),e.msg("common.cancel")],l.yes=function(e,n){var t=n.find("iframe").contents().find("#edit-form-submit");t.trigger("click")}),s=layui.layer.open(l),f="create"}}function r(){var n=g.modifyPage;if(n){var t=d.checkStatus("grid");if(null==t.data||1!=t.data.length)return void layer.msg(e.msg("common.oper.needOneRow"));y=t.data[0][g.idField],null!=n&&n.indexOf("{0}")>=0&&(n=e.common.format(n,y));var a=e(window),r={type:2,title:i("modify",t.data[0]),content:n,maxmin:!0,area:[a.width()-100+"px",a.height()-80+"px"]};g.showSaveBtn&&(r.btn=[e.msg("common.save"),e.msg("common.cancel")],r.yes=function(e,n){var t=n.find("iframe").contents().find("#edit-form-submit");t.trigger("click")}),s=layui.layer.open(r),f="modify"}}function l(){var n=g.removeApi;if(n){var a=d.checkStatus("grid").data;return null==a||0==a.length?void layer.msg(e.msg("common.oper.needRow")):void layer.confirm(e.msg("common.removePrompt"),{title:e.msg("common.confirmCaption"),icon:3,btn:[e.msg("common.confirm"),e.msg("common.cancel")]},function(r){layer.close(r);var l=layer.load(),o=!0;null!=n&&n.indexOf("{0}")>=0&&(o=!1);for(var i=o?[]:"",u=0;u<a.length;u++)o?i.push(a[u].id):(u>0&&(i+=","),i+=a[u].id);o||(n=e.common.format(n,i));var c={type:g.removeMethod,url:n,success:function(n){var a=e.common.onAjaxSuccess(n);return a.success?void t():void layer.msg(a.msg)},error:function(){layer.msg(e.msg("common.oper.fail"))},complete:function(){layer.close(l)}};o&&(c.data={id:i}),e.ajax(c)})}}function o(n){var t=g.detailPage;if(t){if(null==n){var a=d.checkStatus("grid");if(null==a.data||1!=a.data.length)return void layer.msg(e.msg("common.oper.needOneRow"));n=a.data[0]}null!=t&&t.indexOf("{0}")>=0&&(t=e.common.format(t,n[g.idField]));var r=e(window),l={type:2,title:i("detail",n),content:t,maxmin:!0,area:[r.width()-100+"px",r.height()-80+"px"]};s=layui.layer.open(l),f="modify"}}function i(e,n){var t=b[e];return g.dialogTitleField&&n&&n[g.dialogTitleField]&&(t+="【"+n[g.dialogTitleField]+"】"),t}function u(e){g.dialogTitleField&&e&&e[g.dialogTitleField]&&layer.title(i(f,e),s)}var c=layui.form;c.render();var d=layui.table,m=layui.treetable,f=null,s=null,g={idField:"id",dialogTitleField:null,parentIdRequired:!1,showSaveBtn:!0,createPage:null,modifyPage:null,removeApi:null,removeMethod:"DELETE",treeGridConf:{treeColIndex:1,treeSpid:-1,treeIdName:"id",treePidName:"parentId",treeDefaultClose:!0,treeLinkage:!1,treeDataType:"tree",elem:"#grid",method:"POST",height:"full",page:!1,toolbar:"#toolbar",defaultToolbar:["filter"],checkOnClickRow:!0,response:{statusName:e.common.getConfigValue("statusKey"),statusCode:e.common.getConfigValue("successValue")},done:function(){e("#btnQuery").removeClass("layui-btn-disabled").attr("disabled",!1),null!=y?(m.openNode(e("#grid"),y,!0),y=null):null!=h&&(m.openNode(e("#grid"),h),h=null)},onToolbarClick:null}};e.extend(!0,g,n);var v=g.treeGridConf,p=v.where,y=null,h=null;t(),c.on("submit(formQuery)",function(n){e("#btnQuery").addClass("layui-btn-disabled").attr("disabled",!0);var a=g.beforeReload;return null!=a&&a(n.field),p=n.field,t(),!1}),d.on("toolbar(grid)",function(e){switch(e.event){case"create":a();break;case"modify":r();break;case"remove":l();break;case"detail":o();break;default:null!=g.onToolbarClick&&g.onToolbarClick(e)}}),d.on("tool(grid)",function(e){switch(e.event){case"detail":o(e.data);break;default:null!=g.onGridEvent&&g.onGridEvent(e)}});var b={create:e.msg("common.create"),modify:e.msg("common.modify"),detail:e.msg("common.detail")};return window.resetDialogTitle=u,{renderTreeTable:t,resetDialogTitle:u}},editPage:function(n){var t={idField:"id",showParentLayer:!0};e.extend(!0,t,n);var a=layui.form;a.render(),null!=t.verify&&a.verify(t.verify);var r=null,l=t.onLoad,o=t.loadApi,i=!1;if(null!=o)if(r=e("#"+t.idField).val(),""!=r){var o=t.loadApi;null!=o&&o.indexOf("{0}")>=0&&(o=e.common.format(o,r)),e.ajax({type:"GET",url:o,success:function(n){var t=e.common.onAjaxSuccess(n);return t.success?(a.val("edit-form",n.data),void(null!=l&&l(n.data))):void layer.msg(t.msg)},error:function(){null!=l&&l(),layer.msg(e.msg("common.load.fail"))}})}else null!=l&&l();else{var u=t.data;null!=u&&(r=u[t.idField],i=!0),null!=l&&l(u)}var c=null,d=null;r?(c=t.modifyApi,null!=c&&c.indexOf("{0}")>=0&&(c=e.common.format(c,r)),d=null==t.modifyMethod?"PUT":t.modifyMethod):(c=t.createApi,d=null==t.createMethod?"POST":t.createMethod),a.on("submit(edit-form-submit)",function(n){var a=n.field;e("#form").form().appendData(a),i&&(a[t.idField]=r);var l=t.beforeSubmit;if(null!=l){var o=l(a);if(0==o)return}var u=null,m=null,f=null;t.showParentLayer?(u=parent.layer,m=u.getFrameIndex(window.name),f=u.load()):f=layer.load();var s=null;e.ajax({type:d,url:c,data:a,success:function(n){if(s=e.common.onAjaxSuccess(n),!s.success)return void layer.msg(s.msg);var r=t.onSaveSuccess;null==r?parent.layui.table.reload("grid"):r(n.data,a),t.showParentLayer?(u.close(m),u.msg(e.msg("common.oper.ok"))):layer.msg(e.msg("common.oper.ok"))},error:function(n,t,a){layer.msg(e.msg("common.oper.fail"))},complete:function(){t.showParentLayer?u.close(f):layer.close(f)}})})},tabPage:function(n){function t(n){null==d[n]&&(f.tabAdd(u.tabField,{title:u.tabConf[n].title,content:'<iframe id="'+n+'" class="layui-col-xs12" src="" frameborder="0"></iframe>',id:n}),d[n]=e("#"+n),m.push(n))}function a(n){if(null==d[n])return void alert(n);var t=d[n].attr("src");if(""==t){var t=null;c||(t=u.tabConf[n].urlForNullId),t||(t=u.tabConf[n].url),t&&c&&t.indexOf("{0}")>=0&&(t=e.common.format(t,c)),d[n].attr("src",t),currTab=n,d[n].height(e(window).height()-e(".layui-tab-title").height()-13)}}function r(e){currTab=e,f.tabChange(u.tabField,currTab),a(currTab)}function l(e){return null!=d[e]}function o(e){f.tabDelete(u.tabField,e),delete d[e]}function i(e){c=e}var u={dataId:null,tabField:"tab",tabConf:null};e.extend(!0,u,n);var c=u.dataId,d={},m=[];currTab=null;var f=layui.element;return e(window).resize(function(){d[currTab].height(e(window).height()-e(".layui-tab-title").height()-13)}),f.on("tab("+u.tabField+")",function(e){a(m[e.index])}),{createTab:t,changeTab:r,hasTab:l,removeTab:o,setDataId:i}}},r=null;e.msg=n,e.common=a,t();var l=function(n){var t=this;t.target=e(n)};l.prototype.val=function(e){alert($this.html())},l.prototype.appendData=function(n){var t=this.target,a=t.find("input[type='checkbox']");a.each(function(){var t=e(this),a=t.attr("name");if(null!=a&&""!=a){var r=t.attr("switch-value");if(null!=r&&r.indexOf("|")>0){var l=r.split("|");n[a]=t.is(":checked")?l[0]:l[1]}}})},e.fn.form=function(){var n=e(this);if(0!=n.length){e(this).length>1&&(n=e(n[0]));var t=n[0].formObj;if(null==t){var a=new l(n);t={val:function(e){a.val(e)},appendData:function(e){a.appendData(e)}},n[0].formObj=t}return t}}}(jQuery);!function(e){var l=function(l,t){var i=this;i.target=l,i.parent=l.parent();var n={multi:!1,value:null,load:null,data:null,idProp:"id",textProp:"name",search:!0,searchProps:null,itemFilter:null,onChange:null};e.extend(!0,n,t),i.conf=n,i.init()};l.prototype={init:function(){var l,t=this,i=t.conf,n=t.target;if(n.parent().hasClass("layui-select-title"))l=n.parent().parent();else{var a='<div class="dropdown-container layui-unselect layui-form-select"><div class="layui-select-title"><i class="layui-edge"></i></div><dl class="dropdown-canvas layui-anim layui-anim-upbit">'+(i.search?"<div class='dropdown-search-div'><input type='text' class='dropdown-search-input'><i class=\"layui-icon layui-icon-search dropdown-search-icon\"></i></div>":"")+"<div class='dropdown-div "+(i.search?"dropdown-div-search":"dropdown-div-nosearch")+"'></div><div class='layui-laydate-footer' style='height:20px'><div class='laydate-footer-btns'>"+(i.multi?"<span class='dropdown-btns-all'>全选</span>":"")+"<span class='dropdown-btns-clear'>清空</span><span class='dropdown-btns-close'>关闭</span></div></div></dl></div>";l=e(a),t.parent.append(l),n.remove(),l.find(".layui-edge").before(n)}if(t.dropdownEle=l,t.dlEle=l.children("dl"),t.listEle=t.dlEle.children(".dropdown-div"),n.prop("readonly","readonly"),n.bind("click",function(){t.toggle()}),l.find(".dropdown-btns-clear").on("click",function(){t.setValue(null,!0)}),l.find(".dropdown-btns-close").on("click",function(){t.close()}),i.multi&&l.find(".dropdown-btns-all").on("click",function(){t.selectAll()}),i.search?(t.searchInput=l.find(".dropdown-search-input"),t.searchInput.on("keyup",function(l){var i=l.which||l.keyCode;if(38==i||40==i?t.upDown(40==i):27==i?t.close():t.filter(e(this).val()),13==i){var n=t.listEle.children(".dropdown-item-hot");n.is(":visible")?n.trigger("click"):n.removeClass("dropdown-item-hot")}}),l.find(".dropdown-search-icon").on("click",function(){t.filter(t.searchInput.val())})):t.target.on("keyup",function(e){var l=e.which||e.keyCode;if(38==l||40==l)t.upDown(40==l);else if(27==l)t.close();else if(13==l){var i=t.listEle.children(".dropdown-item-hot");i.is(":visible")?i.trigger("click"):i.removeClass("dropdown-item-hot")}}),e(document).on("click",function(n){var a=e(n.target).parents(".dropdown-container");return a.length>0&&a[0]==l[0]?(i.search&&t.searchInput.length>0&&t.searchInput[0].focus(),!1):void(l.hasClass("layui-form-selected")&&l.removeClass("layui-form-selected layui-form-selectup"))}),null==i.data&&null!=i.load){var s={type:"GET"};e.extend(!0,s,i.load),s.success=function(e){var l=null;null!=s.dataReader?l=s.dataReader(e):null!=e&&(l=e.data),t.conf.data=l,t.initList(),null!=i.value&&t.setValue(i.value,!1)},e.ajax(s)}else t.initList(),null!=i.value&&t.setValue(i.value,!1)},initList:function(){var l=this,t=l.conf,i=t.data,n=l.listEle;if(n.empty(),null==i)return null;for(var a=0;a<i.length;a++){var s=i[a],o=s[t.idProp],r=e.common.escapeHTML(s[t.textProp]),d="<dd data-id='"+o+"'>";t.multi&&(d+='<div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon layui-icon-ok"></i></div>'),d+=r+"</dd>",n.append(e(d))}t.multi?n.children("dd").on("click",function(){var t=e(this).children(".layui-form-checkbox");t.toggleClass("layui-form-checked"),l.setChecked(!0)}):n.children("dd").on("click",function(){l.setSelected(e(this),!0),l.close()})},toggle:function(){if(!this.target.hasClass("layui-disabled")){var l=this.dropdownEle;if(l.hasClass("layui-form-selected"))l.removeClass("layui-form-selected layui-form-selectup");else{var t=e(window),i=l.offset().top+l.outerHeight()+5-t.scrollTop(),n=this.dlEle.outerHeight(),a="layui-form-selected";i+n>t.height()&&i-l.outerHeight()>=n&&(a+=" layui-form-selectup"),l.addClass(a)}}},close:function(){this.dropdownEle.removeClass("layui-form-selected layui-form-selectup")},filter:function(l){function t(e,l){return null!=e&&(e+="",e=e.toUpperCase(),e.indexOf(l)>=0)}if(this.keyword!=l){var i=this.listEle;i.children(".dropdown-item-hot").removeClass("dropdown-item-hot"),this.keyword=l;var n=i.children();if(null==l)return void n.show();if(l=l.trim(),""==l)return void n.show();for(var a=0;a<n.length;a++){var s=e(n[a]),o=this.conf.data[a],r=!1;if(null!=this.conf.itemFilter)r=this.conf.itemFilter(o);else{var d=l.toUpperCase(),c=this.conf.searchProps;if(null==c||0==c.length)r=t(o[this.conf.idProp],d),r||(r=t(o[this.conf.textProp],d));else if(!r&&null!=c)for(var u=0;u<c.length&&!(r=t(o[c[u]],d));u++);}r?s.show():s.hide()}}},upDown:function(l){function t(l){l.scrollIntoView(!1),e(l).addClass("dropdown-item-hot")}var i=this.listEle,n=i.children(":visible");if(0!=n.length){var a=i.children(".dropdown-item-hot");if(0==a.length)t(l?n[0]:n[n.length-1]);else if(a.is(":visible")){if(n.length>1){a.removeClass("dropdown-item-hot");for(var s=-1,o=0;o<n.length;o++)if(n[o]==a[0]){s=o;break}t(l?s<n.length-1?n[s+1]:n[0]:s>0?n[s-1]:n[n.length-1])}}else a.removeClass("dropdown-item-hot"),t(l?n[0]:n[n.length-1])}},setSelected:function(e,l){if(!(null==e&&null==this.selectedObj||null!=e&&null!=this.selectedObj&&this.selectedObj[0]==e[0])){null!=this.selectedObj&&this.selectedObj.removeClass("layui-this");var t=null,i=null;if(null!=e?(t=e.attr("data-id"),i=this.getDataById(t),null!=i&&(this.target.val(i[this.conf.textProp]),e.addClass("layui-this"))):this.target.val(""),this.value=t,this.selectedObj=e,l){var n=this.conf.onChange;null!=n&&n(t,i)}}},setChecked:function(l){for(var t=this.listEle,i=t.find(".layui-form-checked"),n="",a=[],s=[],o=0;o<i.length;o++){var r=e(i[o]).parents("dd"),d=r.attr("data-id");a.push(d);var c=this.getDataById(d);null!=c&&(n.length>0&&(n+=","),n+=c[this.conf.textProp]),s.push(c)}var u=this.value;if(this.value=a,this.target.val(n),l&&(0!=a.length||null!=u&&0!=u.length)){var h=this.conf.onChange;null!=h&&h(a,s)}},selectAll:function(){var e=this.listEle;e.find(".layui-form-checkbox").addClass("layui-form-checked"),this.setChecked(!0)},setValue:function(e,l){if(this.conf.multi){var t=this.listEle;if(t.find(".layui-form-checked").removeClass("layui-form-checked"),null!=e)if("[object Array]"===Object.prototype.toString.call(e))for(var i=0;i<e.length;i++)t.children("dd[data-id='"+e[i]+"']").children(".layui-form-checkbox").addClass("layui-form-checked");else t.children("dd[data-id='"+e+"']").children(".layui-form-checkbox").addClass("layui-form-checked");this.setChecked(l)}else{var n=this.getDataById(e);if(null==n)return void this.setSelected(null,l);var a=this.listEle.children("dd[data-id='"+e+"']");this.setSelected(a,l)}},getValue:function(){return this.value},getDataById:function(e){if(null==e)return null;var l=this.conf,t=l.data;if(null==t)return null;for(var i=0;i<t.length;i++){var n=t[i];if(n[l.idProp]==e)return n}return null},setData:function(e,l){this.keyword=null,this.value=null,this.selectedObj=null,this.target.val(""),this.conf.data=e,this.initList(),null!=l&&this.setValue(l,!1)}},e.fn.listSelect=function(t){var i=e(this);if(0!=i.length){e(this).length>1&&(i=e(i[0]));var n=i[0].listSelectObj;if(null==n){var a=new l(i,t);n={getValue:function(){return a.getValue()},setValue:function(e){a.setValue(e,!1)},setData:function(e,l){a.setData(e,l)}},i[0].listSelectObj=n}return n}}}(jQuery);!function(e){var t=function(t,l){var n=this;n.target=t,n.parent=t.parent();var i={multi:!1,value:null,load:null,width:null,idProp:"id",textProp:"name",treeConf:{showCheckbox:!1,click:function(e){return!1},iconClick:function(){return!1}},convertItem:null,onChange:null};e.extend(!0,i,l),i.multi&&(i.treeConf.showCheckbox=!0),n.conf=i,n.init()};t.prototype={init:function(){var t,l=this,n=l.target;if(n.parent().hasClass("layui-select-title"))t=n.parent().parent();else{var i='<div class="dropdown-container layui-unselect layui-form-select"><div class="layui-select-title"><i class="layui-edge"></i></div><dl class="layui-anim layui-anim-upbit"><div class=\'dropdown-div dropdown-div-nosearch\'></div>'+"<div class='layui-laydate-footer' style='height:20px'><div class='laydate-footer-btns'><span class='dropdown-btns-clear'>清空</span><span class='dropdown-btns-close'>关闭</span></div></div></dl></div>";t=e(i),l.parent.append(t),n.remove(),t.find(".layui-edge").before(n)}l.dropdownEle=t,l.dlEle=t.children("dl"),l.conf.width&&l.dlEle.width(l.conf.width),n.prop("readonly","readonly"),n.bind("click",function(){l.toggle()}),t.find(".dropdown-btns-clear").on("click",function(){l.setValue(null,!0)}),t.find(".dropdown-btns-close").on("click",function(){l.close()});var a=e(document);a.on("keyup",function(e){var t=e.which||e.keyCode;27==t&&l.close()}),a.on("click",function(l){var n=e(l.target).parents(".dropdown-container");return!(n.length>0&&n[0]==t[0])&&void(t.hasClass("layui-form-selected")&&t.removeClass("layui-form-selected layui-form-selectup"))});var r=l.conf.treeConf;if(r.elem=t.find(".dropdown-div")[0],l.conf.multi?r.oncheck=function(e){l.setChecked(null==l.notCheckCallback||!l.notCheckCallback),l.notCheckCallback=null}:r.click=function(e){return l.setSelected(e,!0),l.close(),!1},null==r.data&&null!=l.conf.load){var o={type:"GET"};e.extend(!0,o,l.conf.load),o.success=function(e){var t=null;null!=o.dataReader?t=o.dataReader(e):null!=e&&(t=l.convertData(e.data)),r.data=t,l.initTree(r),null!=l.conf.value&&l.setValue(l.conf.value,!1)},e.ajax(o)}else r.data=l.convertData(l.conf.data),l.initTree(r),null!=l.conf.value&&l.setValue(l.conf.value,!1)},convertData:function(t){if(null==t)return null;for(var l=this.conf,n=l.convertItem,i=0;i<t.length;i++){var a=t[i];null!=n?a=n(a):(null==a.title&&"title"!=l.textProp&&(a.title=a[l.textProp]),a.title=e.common.escapeHTML(a.title),"id"!=l.idProp&&(a.id=a[l.idProp])),null!=a.children&&(a.children=this.convertData(a.children))}return t},initTree:function(e){this.dropdownEle.find(".dropdown-div").empty();var t=layui.tree;this.treeObj=t.render(e)},toggle:function(){if(!this.target.hasClass("layui-disabled")){var t=this.dropdownEle;if(t.hasClass("layui-form-selected"))t.removeClass("layui-form-selected layui-form-selectup");else{var l=e(window),n=t.offset().top+t.outerHeight()+5-l.scrollTop(),i=this.dlEle.outerHeight(),a="layui-form-selected";n+i>l.height()&&n>=i&&(a+=" layui-form-selectup"),t.addClass(a)}}},close:function(){this.dropdownEle.removeClass("layui-form-selected layui-form-selectup")},setSelected:function(e,t){if(!(null==e&&null==this.selectedObj||null!=e&&null!=this.selectedObj&&this.selectedObj.data.id==e.data.id)){null!=this.selectedObj&&this.selectedObj.elem.find(".layui-tree-txt:first").removeClass("dropdown-this");this.value;if(null!=e?(this.target.val(e.data.title),e.elem.find(".layui-tree-txt:first").addClass("dropdown-this"),this.value=e.data.id):(this.target.val(""),this.value=null),this.selectedObj=e,t){var l=this.conf.onChange;null!=l&&l(this.value)}}},setChecked:function(e){function t(e){if(0!=e.length)for(var n=0;n<e.length;n++){var a=e[n];a.unchecked||(i.length>0&&(i+=","),i+=a.title,l.push(a.id));var r=a.children;null!=r&&r.length>0&&t(r)}}var l=[],n=this.treeObj.getChecked(),i="";t(n),this.target.val(i);var a=this.value;if(this.value=l,e&&(0!=l.length||null!=a&&0!=a.length)){var r=this.conf.onChange;null!=r&&r(l)}},setValue:function(t,l){if(this.conf.multi)null==t?this.dropdownEle.find(".layui-form-checked").removeClass("layui-form-checked"):(this.notCheckCallback=!0,this.treeObj.setChecked(t)),this.setChecked(l);else{var n=this.getDataById(t);if(null==n)return void this.setSelected(null,l);var i=this.dropdownEle.find(".layui-tree-set[data-id="+t+"]");this.setSelected({data:n,elem:i},l);for(var a=i.parents(".layui-tree-set"),r=0;r<a.length;r++){var o=e(a[r]);o.find(".layui-tree-iconClick:first").trigger("click")}}},getValue:function(){return this.value},getDataById:function(e){function t(e,l){for(var n=0;n<e.length;n++){var i=e[n];if(i.id==l)return i;var a=i.children;if(null!=a&&a.length>0){var r=t(a,l);if(null!=r)return r}}return null}if(null==e)return null;var l=this.conf.treeConf.data;return null==l?null:t(l,e)},setData:function(e,t){this.treeObj=null,this.value=null,this.selectedObj=null,this.target.val("");var l=this.conf.treeConf;l.data=e,this.initTree(l),null!=t&&this.setValue(t,!1)}},e.fn.treeSelect=function(l){var n=e(this);if(0!=n.length){e(this).length>1&&(n=e(n[0]));var i=n[0].treeSelectObj;if(null==i){var a=new t(n,l);i={getValue:function(){return a.getValue()},setValue:function(e){a.setValue(e,!1)},setData:function(e,t){a.setData(e,t)}},n[0].treeSelectObj=i}return i}}}(jQuery);layui.define(["layer","table"],function(e){var t=layui.jquery,i=layui.layer,a=layui.table,r={render:function(e){if(r.checkParam(e))if(e.data)r.init(e,e.data);else{var a=e.where;null==a&&(a={}),e.initSort&&e.initSort.field&&(a[t.common.getConfigValue("sortFieldName")]=e.initSort.field,a[t.common.getConfigValue("sortOrderName")]=e.initSort.type),t.ajax({type:e.method,url:e.url,data:a,success:function(a){var n=t.common.onAjaxSuccess(a);return n.success?void r.init(e,a.data):void i.msg(n.msg)},error:function(){i.msg(t.msg("common.load.fail"))}})}},init:function(e,n){function l(t){if(!t.id){if(!e.treeIdName)return void i.msg("参数treeIdName不能为空",{icon:5});t.id=t[e.treeIdName]}if(!t.pid){if(!e.treePidName)return void i.msg("参数treePidName不能为空",{icon:5});t.pid=t[e.treePidName]}}function o(e,t){if(null!=e&&0!=e.length)for(var i=0;i<e.length;i++){var a=e[i];l(a),d.push(a);var r=a.children;null!=r&&r.length>0&&(a.isParent=!0),o(r,t+1)}}var d=[],s=e.done,c=n;if("tree"==e.treeDataType)c.length>0&&o(c,1);else{for(var u=0;u<c.length;u++){var f=c[u];l(f)}var g=function(e,t){for(var i=0;i<t.length;i++)if(t[i].pid==e){var a=d.length;a>0&&d[a-1].id==e&&(d[a-1].isParent=!0),d.push(t[i]),g(t[i].id,t)}};g(e.treeSpid,c)}e.url=void 0,e.data=d,e.page=!1,e.limit=1e6,e.autoSort=!1;var p=e.cols[0][e.treeColIndex].templet;return e.cols[0][e.treeColIndex].templet=function(t){for(var i=null==p?t[e.cols[0][e.treeColIndex].field]:p(t),a=t.id,n=t.pid,l=t.isParent,o=r.getEmptyNum(n,d),s="",c=0;c<o;c++)s+='<span class="treeTable-empty"></span>';s+=l?'<i class="layui-icon layui-icon-triangle-d"></i> <i class="layui-icon layui-icon-layer"></i>':'<i class="layui-icon layui-icon-file"></i>',s+="&nbsp;&nbsp;";var u=l?"dir":"file",f='<span class="treeTable-icon open" lay-tid="'+a+'" lay-tpid="'+n+'" lay-ttype="'+u+'">';return f+s+i+"</span>"},e.done=function(i,a,n){t(e.elem).next().addClass("treeTable"),t(".treeTable .layui-table-page").css("display","none"),t(e.elem).next().attr("treeLinkage",e.treeLinkage),e.treeDefaultClose&&r.foldAll(e.elem),s&&s(i,a,n)},a.render(e)},getEmptyNum:function(e,t){var i=0;if(!e)return i;for(var a,n=0;n<t.length;n++)if(e==t[n].id){i+=1,a=t[n].pid;break}return i+r.getEmptyNum(a,t)},toggleRows:function(e,i){var a=e.attr("lay-ttype");if("file"!=a){var r=e.attr("lay-tid"),n=e.hasClass("open");n?e.removeClass("open"):e.addClass("open"),e.closest("tbody").find("tr").each(function(){var e=t(this).find(".treeTable-icon"),a=e.attr("lay-tpid"),l=e.attr("lay-ttype"),o=e.hasClass("open");r==a&&(n?(t(this).hide(),"dir"==l&&o==n&&e.trigger("click")):(t(this).show(),i&&"dir"==l&&o==n&&e.trigger("click")))})}},checkParam:function(e){return e.treeSpid||0==e.treeSpid?!(!e.treeColIndex&&0!=e.treeColIndex)||(i.msg("参数treeColIndex不能为空",{icon:5}),!1):(i.msg("参数treeSpid不能为空",{icon:5}),!1)},expandAll:function(e){t(e).next(".treeTable").find(".layui-table-body tbody tr").each(function(){var e=t(this).find(".treeTable-icon"),i=e.attr("lay-ttype"),a=e.hasClass("open");"dir"!=i||a||e.trigger("click")})},foldAll:function(e){t(e).next(".treeTable").find(".layui-table-body tbody tr").each(function(){var e=t(this).find(".treeTable-icon"),i=e.attr("lay-ttype"),a=e.hasClass("open");"dir"==i&&a&&e.trigger("click")})},openNode:function(e,t,i){function a(e){var t=r.find(".treeTable-icon[lay-tid='"+e+"']");if(t.length>0){n.push(t);var i=t.attr("lay-tpid");a(i)}}var r=e.next(".treeTable"),n=[];a(t);var l=i?1:0;if(n.length>l)for(var o=n.length-1;o>=l;o--)n[o].trigger("click")}};t("body").on("click",".treeTable .treeTable-icon",function(){var e=t(this).parents(".treeTable").attr("treeLinkage");"true"==e?r.toggleRows(t(this),!0):r.toggleRows(t(this),!1)}),e("treetable",r)});