package org.horx.wdf.sample.simple.service;

import org.horx.wdf.common.entity.PaginationParam;
import org.horx.wdf.common.entity.PaginationResult;
import org.horx.wdf.sample.simple.domain.Asset;
import org.horx.wdf.sample.simple.domain.query.AssetQuery;

/**
 * 资产Service。
 */
public interface AssetService {

    /**
     * 根据ID获取资产。
     * @param id
     * @return
     */
    Asset getById(Long id);

    /**
     * 资产分页查询。
     * @param query
     * @param paginationParam
     * @return
     */
    PaginationResult<Asset> paginationQuery(AssetQuery query, PaginationParam paginationParam);

    /**
     * 新增资产。
     * @param asset
     * @return
     */
    Long create(Asset asset);

    /**
     * 修改资产。
     * @param asset
     */
    void modify(Asset asset);

    /**
     * 删除资产。
     * @param ids
     */
    void remove(Long[] ids);
}
