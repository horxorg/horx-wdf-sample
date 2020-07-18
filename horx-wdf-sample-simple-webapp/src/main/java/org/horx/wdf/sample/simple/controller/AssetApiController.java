package org.horx.wdf.sample.simple.controller;

import org.horx.wdf.common.arg.annotation.ArgEntity;
import org.horx.wdf.common.entity.PagingParam;
import org.horx.wdf.common.entity.PagingResult;
import org.horx.wdf.common.entity.Result;
import org.horx.wdf.sample.simple.domain.Asset;
import org.horx.wdf.sample.simple.domain.query.AssetQuery;
import org.horx.wdf.sample.simple.service.AssetService;
import org.horx.wdf.sys.annotation.AccessPermission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 资产 API Controller。
 */
@RestController
@RequestMapping("/api/sample/asset")
public class AssetApiController {

    @Autowired
    private AssetService assetService;

    /**
     * 分页查询。
     * @param query
     * @param pagingParam
     * @return
     */
    @AccessPermission("sample.asset.query")
    @PostMapping("/pagingQuery")
    public PagingResult<Asset> pagingQuery(@ArgEntity AssetQuery query, PagingParam pagingParam) {
        PagingResult<Asset> pagingResult = assetService.pagingQuery(query, pagingParam);
        return pagingResult;
    }

    /**
     * 根据ID查询。
     * @param id
     * @return
     */
    @AccessPermission("sample.asset.query")
    @GetMapping("/{id}")
    public Result<Asset> getById(@PathVariable("id") Long id) {
        Asset asset = assetService.getById(id);
        return new Result<>(asset);
    }

    /**
     * 新增。
     * @param asset
     * @return
     */
    @AccessPermission("sample.asset.create")
    @PostMapping()
    public Result<Long> create(@ArgEntity(create = true) Asset asset) {
        Long id = assetService.create(asset);
        return new Result(id);
    }

    /**
     * 修改。
     * @param asset
     * @return
     */
    @AccessPermission("sample.asset.modify")
    @PutMapping("/{id}")
    public Result modify(@ArgEntity(modify = true) Asset asset) {
        assetService.modify(asset);
        return new Result();
    }

    /**
     * 删除。
     * @param ids
     * @return
     */
    @AccessPermission("sample.asset.remove")
    @DeleteMapping("/{ids}")
    public Result remove(@PathVariable Long[]  ids) {
        assetService.remove(ids);
        return new Result();
    }
}
