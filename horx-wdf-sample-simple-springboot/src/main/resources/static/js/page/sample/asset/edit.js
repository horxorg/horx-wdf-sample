$(document).ready(function(){
    var laydate = layui.laydate;
    laydate.render({elem:"#purchaseDate"});

    $.common.editPage({
        loadApi:$.root + "/api/sample/asset/{0}",
        createApi:$.root + "/api/sample/asset",
        modifyApi:$.root + "/api/sample/asset/{0}",
        onLoad: onLoad,
        beforeSubmit: beforeSubmit
    });

    function onLoad(data) {
        $("#status").listSelect({
            multi:false,
            value:(data == null) ? "01" : data.status,
            data: dict.assetStatus,
            idProp: "code",
            search: true,
            searchProps: ["code", "name", "fullCode", "simpleCode"]
        });

        $("#orgId").treeSelect({
            multi:false,
            value:(data == null) ? null : data.orgId,
            load: {
                type: "POST",
                url: $.root + "/api/sys/org/queryForTree"
            }
        });
    }

    function beforeSubmit(formData) {
        var orgId = $("#orgId").treeSelect().getValue();
        formData.orgId = orgId;
        var status = $("#status").listSelect().getValue();
        formData.status = status;
    }
});