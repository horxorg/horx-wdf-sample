package org.horx.wdf.sample.simple.domain.query;

import org.horx.wdf.common.filed.value.annotation.RequestParameter;

import java.util.Date;

/**
 * 资产查询条件。
 */
public class AssetQuery {

    @RequestParameter(key = "orgId[]")
    private Long[] orgId;

    @RequestParameter
    private String code;

    @RequestParameter
    private String name;

    @RequestParameter(key = "status[]")
    private String[] status;

    @RequestParameter(pattern = "yyyy-MM-dd")
    private Date purchaseDateGte;

    @RequestParameter(pattern = "yyyy-MM-dd", expr = "T(org.horx.common.utils.DateUtils).addDay(#value, 1)")
    private Date purchaseDateLt;

    public Long[] getOrgId() {
        return orgId;
    }

    public void setOrgId(Long[] orgId) {
        this.orgId = orgId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String[] getStatus() {
        return status;
    }

    public void setStatus(String[] status) {
        this.status = status;
    }

    public Date getPurchaseDateGte() {
        return purchaseDateGte;
    }

    public void setPurchaseDateGte(Date purchaseDateGte) {
        this.purchaseDateGte = purchaseDateGte;
    }

    public Date getPurchaseDateLt() {
        return purchaseDateLt;
    }

    public void setPurchaseDateLt(Date purchaseDateLt) {
        this.purchaseDateLt = purchaseDateLt;
    }
}
