Download the DevExtreme installer (**.exe** file) [here](https://go.devexpress.com/DevExpressDownload_DevExtremeCompleteTrial.aspx) and run it.  The setup wizard will guide you through the installation steps. After installation is completed, you can create a new project that includes all the resources required by ASP.NET MVC Wrappers.

![DevExtreme HTML5 ASPNET MVCWrappers](/images/Common/MvcWrappers/new_project.png)

If you already have a project, add these resources manually using the instructions below.

### ASP.NET MVC 3, 4, 5 ###

Use [this tool](/concepts/35%20ASP.NET%20MVC%20Wrappers/40%20Visual%20Studio%20Integration/05%20Add%20or%20Upgrade%20the%20Required%20Resources%20in%20Your%20Project '/Documentation/Guide/ASP.NET_MVC_Wrappers/Visual_Studio_Integration/Add_or_Upgrade_the_Required_Resources_in_Your_Project/') for Visual Studio.

### ASP.NET Core MVC ###

1. Add a [new NuGet package source](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui#package-sources), which is located in the folder where you have installed DevExtreme.

    ![DevExtreme HTML5 ASP.NET MVC Wrappers](/images/Common/MvcWrappers/nuget_add-package-source.png) 

2. [Install](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui#finding-and-installing-a-package) the **DevExtreme.AspNet.Data** and **DevExtreme.AspNet.Core** packages for your solution. 

    ![DevExtreme HTML5 ASP.NET MVC Wrappers](/images/Common/MvcWrappers/nuget_devextreme-packages.png)

3. Add the following strings to the *bower.json* file into the `"dependencies"` section.

        "jquery": "~3.1",
        "devextreme": "~16.2",
        "devextreme-aspnet-data": "~1"

    [note]If the *bower.json* file is absent, run the console in the project directory and execute the [`bower init`](https://bower.io/docs/api/#init) command in it.

4. Copy and paste the following strings to the *Views/Shared/_Layout.cshtml* file into the `<head>` tag.

        <link href="~/lib/devextreme/css/dx.common.css" rel="stylesheet" /> 
        <link href="~/lib/devextreme/css/dx.light.css" rel="stylesheet" /> 
        <script src="~/lib/jquery/dist/jquery.js"></script>
        <script src="~/lib/devextreme/js/dx.all.js"></script>     
        <script src="~/lib/devextreme-aspnet-data/js/dx.aspnet.data.js"></script> 
        <script src="~/lib/devextreme/js/dx.aspnet.mvc.js"></script>

5. Add the following string to the *Views/_ViewImports.cshtml* file.

        @using DevExtreme.AspNet.Mvc