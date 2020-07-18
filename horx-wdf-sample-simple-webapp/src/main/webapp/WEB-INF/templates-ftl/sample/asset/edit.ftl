<!DOCTYPE html>
<html>
<head>
<#include "../../inc/head.ftl">
    <script type="text/javascript">
        var dict=${dict};
    </script>
</head>
<body>
<input type="hidden" id="id" name="id" value="${id!''}">
<div id="form" class="layui-form layui-container edit-container" lay-filter="edit-form">
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label"><span class="edit-required">*</span>所属机构</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" id="orgId" name="orgId" lay-verify="required" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label"><span class="edit-required">*</span>资产编码</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" name="code" lay-verify="required" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label"><span class="edit-required">*</span>资产名称</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" name="name" lay-verify="required" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label">品牌</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" name="brand" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label">型号</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" name="model" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label"><span class="edit-required">*</span>状态</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" id="status" name="status" lay-verify="required" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label">购置日期</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" id="purchaseDate" name="purchaseDate" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label">购买价格</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" name="price" lay-verify="number" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label">所在位置</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" name="responsiblePerson" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label">负责人</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <input type="text" name="location" autocomplete="off" class="layui-input">
        </div>
    </div>
    <div class="layui-row edit-row">
        <label class="layui-col-xs4 layui-col-md3 edit-label">备注</label>
        <div class="layui-col-xs8 layui-col-md6 edit-input">
            <textarea name="remarks" class="layui-textarea"></textarea>
        </div>
    </div>
    <div class="layui-form-item layui-hide">
        <input type="button" lay-submit lay-filter="edit-form-submit" id="edit-form-submit">
    </div>
</div>
<#include "../../inc/js.ftl">
<script src="${rc.contextPath}/js/page/sample/asset/edit.js?${staticVer}"></script>
</body>
</html>
