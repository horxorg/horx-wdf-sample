/*==============================================================*/
/* DBMS name:      ORACLE                                       */
/*==============================================================*/

create sequence seq_wdf_sample_asset;

/*==============================================================*/
/* Table: wdf_sample_asset                                      */
/*==============================================================*/
create table wdf_sample_asset
(
   id                    NUMBER               not null,
   org_id               NUMBER,
   code                 VARCHAR2(30),
   name                 NVARCHAR2(100),
   brand                NVARCHAR2(30),
   model                NVARCHAR2(30),
   status               VARCHAR2(2),
   purchase_date       DATE,
   price                NUMBER(10,2),
   location             NVARCHAR2(200),
   responsible_person  NVARCHAR2(30),
   remarks              NVARCHAR2(500),
   is_deleted           NUMBER(1)            default 0,
   create_time          DATE,
   create_user_id      NUMBER,
   modify_time         DATE,
   modify_user_id     NUMBER,
   trace_id            VARCHAR2(50),
   constraint wdf_sample_asset primary key (id)
);

comment on table wdf_sample_asset is
'资产';

comment on column wdf_sample_asset.id is
'ID';

comment on column wdf_sample_asset.org_id is
'所属机构ID';

comment on column wdf_sample_asset.code is
'资产编码';

comment on column wdf_sample_asset.name is
'资产名称';

comment on column wdf_sample_asset.brand is
'品牌';

comment on column wdf_sample_asset.model is
'型号';

comment on column wdf_sample_asset.status is
'状态';

comment on column wdf_sample_asset.purchase_date is
'购置日期';

comment on column wdf_sample_asset.price is
'购买价格';

comment on column wdf_sample_asset.location is
'所在位置';

comment on column wdf_sample_asset.responsible_person is
'负责人';

comment on column wdf_sample_asset.remarks is
'备注';

comment on column wdf_sample_asset.is_deleted is
'是否删除';

comment on column wdf_sample_asset.create_time is
'创建时间';

comment on column wdf_sample_asset.create_user_id is
'创建用户ID';

comment on column wdf_sample_asset.modify_time is
'最后修改时间';

comment on column wdf_sample_asset.modify_user_id is
'最后修改用户ID';

comment on column wdf_sample_asset.trace_id is
'跟踪ID';
