Currently, the DevExtreme components do not support server side rendering. Thus, make sure that this feature is disabled. To disable server-side rendering, remove the "asp-prerender-module" attribute from the app element in the "Views/Home/Index.cshtml" file.

Use

    <app>Loading...</app>

instead of

    <app asp-prerender-module="ClientApp/dist/main-server">Loading...</app>

![Disable server-side rendering](/images/DevExtreme/DisableServerSideRendering.png)