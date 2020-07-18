$(document).ready(function(){
    var laydate = layui.laydate;
    laydate.render({elem:"#purchaseDateGte"});
    laydate.render({elem:"#purchaseDateLt"});

    $("#orgId").treeSelect({
        multi:true,
        load: {
            type: "POST",
            url: $.root + "/api/sys/org/queryForTree"
        },
        treeConf: {
            checkParent: false
        }
    });

    $("#status").listSelect({
        multi:true,
        data: dict.assetStatus,
        idProp: "code",
        search: true,
        searchProps: ["code", "name", "fullCode", "simpleCode"]
    });

    function convertStatus(d) {
        return $.common.convertByList(dict.assetStatus, d.status, "", "code", "name");
    }

    var conf = {
        gridConf:{
            url:$.root + "/api/sample/asset/pagingQuery",
            initSort:{field:"code", type:"asc"},
            cols: [[
                {field: "id", type: "checkbox", width:40, align:"center", fixed: "left"},
                {field: "orgName", title: "所属机构", width:200, align:"center", sort: true},
                {field: "code", title: "资产编码", width:120, align:"center", sort: true},
                {field: "name", title: "资产名称", width:200, align:"center", sort: true},
                {field: "brand", title: "品牌", width:150, align:"center", sort: true},
                {field: "model", title: "型号", width:150, align:"center", sort: true},
                {field: "status", title: "状态", width:150, align:"center", sort: true, templet:convertStatus},
                {field: "purchaseDate", title: "购置日期", width:120, align:"center", sort: true},
                {field: "price", title: "购买价格", width:120, align:"center", sort: true},
                {field: "location", title: "所在位置", width:200, sort: true},
                {field: "responsiblePerson", title: "负责人", width:120, sort: true}
            ]]
        },
        createPage: $.root + "/page/sample/asset/create",
        modifyPage: $.root + "/page/sample/asset/modify/{0}",
        removeApi: $.root + "/api/sample/asset/{0}",
        beforeReload:beforeReload
    }
    $.common.listPage(conf);

    function beforeReload(formData) {
        var orgId = $("#orgId").treeSelect().getValue();
        if (orgId != null && orgId.length > 0) {
            formData.orgId = orgId;
        }

        var status = $("#status").listSelect().getValue();
        if (status != null && status.length > 0) {
            formData.status = status;
        }
    }
});