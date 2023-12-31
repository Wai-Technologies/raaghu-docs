﻿using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace Volo.Abp.PermissionManagement.MongoDB;

[ConnectionStringName(AbpPermissionManagementDbProperties.ConnectionStringName)]
public class PermissionManagementMongoDbContext : AbpMongoDbContext, IPermissionManagementMongoDbContext
{
    public IMongoCollection<PermissionGroupDefinitionRecord> PermissionGroups => Collection<PermissionGroupDefinitionRecord>();
    public IMongoCollection<PermissionDefinitionRecord> Permissions => Collection<PermissionDefinitionRecord>();
    public IMongoCollection<PermissionGrant> PermissionGrants => Collection<PermissionGrant>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigurePermissionManagement();
    }
}
