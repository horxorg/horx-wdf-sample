package org.horx.wdf.sample.simple.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.horx.wdf.common.entity.Groups;
import org.horx.wdf.common.field.annotation.FieldDesc;
import org.horx.wdf.common.filed.value.annotation.CurrentUserId;
import org.horx.wdf.common.filed.value.annotation.Now;
import org.horx.wdf.common.filed.value.annotation.PathParameter;
import org.horx.wdf.common.filed.value.annotation.RequestParameter;
import org.horx.wdf.common.filed.value.annotation.TraceId;
import org.horx.wdf.common.jdbc.annotation.Sequence;
import org.horx.wdf.common.mybatis.value.annotation.Deleted;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Date;

/**
 * 资产。
 * <code>@Table</code>注解用于表示数据库中的表名。
 */
@Table(name = "wdf_sample_asset")
public class Asset {

    /**
     * 资产ID。
     * <code>@PathParameter(groups = {Groups.Modify.class})</code>表示取uri参数值，比如取<code>/asset/{id}</code>中的值。
     * 其中，<code>groups = {Groups.Modify.class}</code>表示只在修改操作是，给这个属性赋值。
     * <code>@NotNull(groups = {Groups.Modify.class})</code>表示进行非null校验。
     * 其中<code>groups = {Groups.Modify.class}</code>表示只在修改操作时校验这个属性。
     * <code>@Id</code>表示这个属性是数据库表的主键。
     * <code>@Sequence(name = "seq_wdf_sample_asset")</code>表示在Oracle等支持Sequence的数据库中生成主键所用的序列。
     * 如果所用数据库不支持序列，也不打算以后移植到这样的数据库，可不写<code>@Sequence</code>注解。
     */
    @PathParameter(groups = {Groups.Modify.class})
    @NotNull(groups = {Groups.Modify.class})
    @Id
    @Sequence(name = "seq_wdf_sample_asset")
    private Long id;

    /**
     * 所属机构ID。
     * <code>@RequestParameter(groups = {Groups.Default.class})</code>表示从request的parameter取值给属性赋值。
     * 其中，<code>groups = {Groups.Default.class}</code>表示新增、修改时都对该属性进行赋值。
     * <code>@Column</code>表示对应的数据库表字段。
     */
    @RequestParameter(groups = {Groups.Default.class})
    @Column
    private Long orgId;

    /**
     * 所属机构名称。
     * <code>@Transient</code>表示不进行属性的持久化。
     */
    @Transient
    @Column
    private String orgName;

    /**
     * 资产编码。
     * <code>@FieldDesc(name = "资产编码")</code>是对属性的描述，在校验时，会根据这个值显示校验不通过的属性。
     * <code>@NotEmpty(groups = {Groups.Default.class})</code>表示非空校验。
     */
    @FieldDesc(name = "资产编码")
    @RequestParameter(groups = {Groups.Default.class})
    @NotEmpty(groups = {Groups.Default.class})
    @Column
    private String code;

    /**
     * 资产名称。
     */
    @FieldDesc(name = "资产名称")
    @RequestParameter(groups = {Groups.Default.class})
    @NotEmpty(groups = {Groups.Default.class})
    @Column
    private String name;

    /**
     * 品牌。
     */
    @RequestParameter(groups = {Groups.Default.class})
    @Column
    private String brand;

    /**
     * 型号。
     */
    @RequestParameter(groups = {Groups.Default.class})
    @Column
    private String model;

    /**
     * 状态。
     */
    @FieldDesc(name = "状态")
    @RequestParameter(groups = {Groups.Default.class})
    @NotEmpty(groups = {Groups.Default.class})
    @Column
    private String status;

    /**
     * 购置日期。
     */
    @FieldDesc(name = "购置日期")
    @RequestParameter(groups = {Groups.Default.class}, pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column
    private Date purchaseDate;

    @FieldDesc(name = "购买价格")
    @RequestParameter(groups = {Groups.Default.class})
    @Column
    private BigDecimal price;

    /**
     * 所在位置。
     */
    @RequestParameter(groups = {Groups.Default.class})
    @Column
    private String location;

    /**
     * 负责人。
     */
    @RequestParameter(groups = {Groups.Default.class})
    @Column
    private String responsiblePerson;

    /**
     * 备注。
     */
    @RequestParameter(groups = {Groups.Default.class})
    @Column
    private String remarks;

    /**
     * 是否已删除。
     * <code>@Deleted(groups = {Groups.Insert.class, Groups.LogicalDelete.class})</code>表示逻辑删除字段，
     * 在新增、逻辑删除时赋值。
     */
    @Deleted(groups = {Groups.Insert.class, Groups.LogicalDelete.class})
    @Column(name = "is_deleted")
    private Boolean deleted;

    /**
     * 创建时间。
     * <code>@Now(groups = {Groups.Insert.class})</code>表示取当前时间赋值。
     * 其中，<code>groups = {Groups.Insert.class}</code>表示在insert操作时赋值。
     */
    @Now(groups = {Groups.Insert.class})
    @Column
    private Date createTime;

    /**
     * 创建用户ID。
     * <code>@CurrentUserId(groups = {Groups.Insert.class})</code>表示取当前登录用户ID赋值。
     */
    @CurrentUserId(groups = {Groups.Insert.class})
    @Column
    private Long createUserId;

    /**
     * 修改时间。
     */
    @Now(groups = {Groups.Insert.class, Groups.Update.class, Groups.LogicalDelete.class})
    @Column
    private Date modifyTime;

    /**
     * 修改用户ID。
     */
    @CurrentUserId(groups = {Groups.Insert.class, Groups.Update.class, Groups.LogicalDelete.class})
    @Column
    private Long modifyUserId;

    /**
     * 跟踪ID。
     * <code>@TraceId</code>表示取跟踪ID赋值。跟踪ID是用户每次请求生成的唯一ID，通过跟踪ID，
     * 在log、数据库中可以查到本次请求做了什么操作。
     */
    @TraceId(groups = {Groups.Insert.class, Groups.Update.class, Groups.LogicalDelete.class})
    @Column
    private String traceId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrgId() {
        return orgId;
    }

    public void setOrgId(Long orgId) {
        this.orgId = orgId;
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
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

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getResponsiblePerson() {
        return responsiblePerson;
    }

    public void setResponsiblePerson(String responsiblePerson) {
        this.responsiblePerson = responsiblePerson;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Long getCreateUserId() {
        return createUserId;
    }

    public void setCreateUserId(Long createUserId) {
        this.createUserId = createUserId;
    }

    public Date getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    public Long getModifyUserId() {
        return modifyUserId;
    }

    public void setModifyUserId(Long modifyUserId) {
        this.modifyUserId = modifyUserId;
    }

    public String getTraceId() {
        return traceId;
    }

    public void setTraceId(String traceId) {
        this.traceId = traceId;
    }
}
