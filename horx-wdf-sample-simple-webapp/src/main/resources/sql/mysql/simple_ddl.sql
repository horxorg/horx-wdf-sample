/*==============================================================*/
/* DBMS name:      MySQL                                        */
/*==============================================================*/


/*==============================================================*/
/* Table: wdf_sample_asset                                      */
/*==============================================================*/
create table wdf_sample_asset
(
   id                   bigint not null auto_increment comment 'ID',
   org_id               bigint comment '所属机构ID',
   code                 varchar(30) comment '资产编码',
   name                 varchar(100) comment '资产名称',
   brand                varchar(30) comment '品牌',
   model                varchar(30) comment '型号',
   status               varchar(2) comment '状态',
   purchase_date       datetime comment '购置日期',
   price                decimal(10,2) comment '购买价格',
   location             varchar(200) comment '所在位置',
   responsible_person varchar(30) comment '负责人',
   remarks              varchar(500) comment '备注',
   is_deleted           decimal(1) not null default 0 comment '是否删除',
   create_time          datetime(6) comment '创建时间',
   create_user_id       bigint comment '创建用户ID',
   modify_time          datetime(6) comment '最后修改时间',
   modify_user_id       bigint comment '最后修改用户ID',
   trace_id             varchar(50) comment '跟踪ID',
   primary key (id)
)
engine = InnoDB comment '资产';
