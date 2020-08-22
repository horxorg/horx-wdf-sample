package org.horx.wdf.sample.simple.mapper;

import org.horx.wdf.common.entity.PaginationResult;
import org.horx.wdf.common.mybatis.entity.PaginationRowBounds;
import org.horx.wdf.common.mybatis.mapper.BaseMapper;
import org.horx.wdf.sample.simple.domain.Asset;
import org.horx.wdf.sample.simple.domain.query.AssetQuery;

/**
 * 资产Mapper。
 * 通过扩展BaseMapper接口，自动具有insert、update、logicalDelete、selectById方法。
 */
public interface AssetMapper extends BaseMapper<Asset> {

    /**
     * 分页查询。
     * @param query
     * @param paginationParam
     * @return
     */
    PaginationResult<Asset> paginationSelect(AssetQuery query, PaginationRowBounds paginationParam);
}
