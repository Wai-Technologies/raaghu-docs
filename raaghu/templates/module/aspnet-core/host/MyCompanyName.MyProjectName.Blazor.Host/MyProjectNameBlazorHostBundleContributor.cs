﻿using Volo.Abp.Bundling;

namespace MyCompanyName.MyProjectName.Blazor.Host;

public class MyProjectNameBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("global-styles.css", true);
        context.Add("main.css", true);          
    }
}
