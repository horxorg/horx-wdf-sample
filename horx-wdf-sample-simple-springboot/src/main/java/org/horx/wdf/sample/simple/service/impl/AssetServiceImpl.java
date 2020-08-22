package org.horx.wdf.sample.simple.service.impl;

import org.apache.commons.lang3.ArrayUtils;
import org.horx.wdf.common.entity.PaginationParam;
import org.horx.wdf.common.entity.PaginationResult;
import org.horx.wdf.common.mybatis.entity.PaginationRowBounds;
import org.horx.wdf.sample.simple.domain.Asset;
import org.horx.wdf.sample.simple.domain.query.AssetQuery;
import org.horx.wdf.sample.simple.mapper.AssetMapper;
import org.horx.wdf.sample.simple.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 资产Service实现类。
 */
@Service("assetService")
public class AssetServiceImpl implements AssetService {

    @Autowired
    private AssetMapper assetMapper;

    @Override
    public Asset getById(Long id) {
        return assetMapper.selectById(id);
    }

    @Override
    public PaginationResult<Asset> paginationQuery(AssetQuery query, PaginationParam paginationParam) {
        return assetMapper.paginationSelect(query, new PaginationRowBounds(paginationParam));
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long create(Asset asset) {
        assetMapper.insert(asset);
        return asset.getId();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void modify(Asset asset) {
        assetMapper.update(asset);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void remove(Long[] ids) {
        if (ArrayUtils.isEmpty(ids)) {
            return;
        }

        for (Long id : ids) {
            assetMapper.logicalDelete(id);
        }
    }
}
