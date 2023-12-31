﻿using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Security.Claims;

public class AbpClaimsPrincipalFactory : IAbpClaimsPrincipalFactory, ITransientDependency
{
    public static string AuthenticationType => "Abp.Application";

    protected IServiceScopeFactory ServiceScopeFactory { get; }
    protected AbpClaimsPrincipalFactoryOptions Options { get; }

    public AbpClaimsPrincipalFactory(
        IServiceScopeFactory serviceScopeFactory,
        IOptions<AbpClaimsPrincipalFactoryOptions> abpClaimOptions)
    {
        ServiceScopeFactory = serviceScopeFactory;
        Options = abpClaimOptions.Value;
    }

    public virtual async Task<ClaimsPrincipal> CreateAsync(ClaimsPrincipal? existsClaimsPrincipal = null)
    {
        using (var scope = ServiceScopeFactory.CreateScope())
        {
            var claimsPrincipal = existsClaimsPrincipal ?? new ClaimsPrincipal(new ClaimsIdentity(
                AuthenticationType,
                AbpClaimTypes.UserName,
                AbpClaimTypes.Role));

            var context = new AbpClaimsPrincipalContributorContext(claimsPrincipal, scope.ServiceProvider);

            foreach (var contributorType in Options.Contributors)
            {
                var contributor = (IAbpClaimsPrincipalContributor)scope.ServiceProvider.GetRequiredService(contributorType);
                await contributor.ContributeAsync(context);
            }

            return claimsPrincipal;
        }
    }
}
