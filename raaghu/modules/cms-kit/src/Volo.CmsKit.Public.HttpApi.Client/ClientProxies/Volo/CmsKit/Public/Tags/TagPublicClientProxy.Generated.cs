// This file is automatically generated by ABP framework to use MVC Controllers from CSharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Http.Client.ClientProxying;
using Volo.Abp.Http.Modeling;
using Volo.CmsKit.Tags;

// ReSharper disable once CheckNamespace
namespace Volo.CmsKit.Public.Tags;

[Dependency(ReplaceServices = true)]
[ExposeServices(typeof(ITagAppService), typeof(TagPublicClientProxy))]
public partial class TagPublicClientProxy : ClientProxyBase<ITagAppService>, ITagAppService
{
    public virtual async Task<List<TagDto>> GetAllRelatedTagsAsync(string entityType, string entityId)
    {
        return await RequestAsync<List<TagDto>>(nameof(GetAllRelatedTagsAsync), new ClientProxyRequestTypeValue
        {
            { typeof(string), entityType },
            { typeof(string), entityId }
        });
    }

    public virtual async Task<List<PopularTagDto>> GetPopularTagsAsync(string entityType, int maxCount)
    {
        return await RequestAsync<List<PopularTagDto>>(nameof(GetPopularTagsAsync), new ClientProxyRequestTypeValue
        {
            { typeof(string), entityType },
            { typeof(int), maxCount }
        });
    }
}
