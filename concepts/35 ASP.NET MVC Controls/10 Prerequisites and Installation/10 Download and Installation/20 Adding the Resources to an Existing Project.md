You can manually add control resources to an existing project using the following instructions: 

#### ASP.NET MVC 3, 4, 5 ####

Use [this tool](/concepts/35%20ASP.NET%20MVC%20Controls/40%20Visual%20Studio%20Integration/05%20Add%20or%20Upgrade%20the%20Required%20Resources%20in%20Your%20Project '/Documentation/Guide/ASP.NET_MVC_Controls/Visual_Studio_Integration/Add_or_Upgrade_the_Required_Resources_in_Your_Project/') for Visual Studio.

#### ASP.NET Core MVC ####

1. Open your project in Visual Studio or open the console and navigate to your project's directory:

        cd MyProject

2. Add one of the following NuGet package sources:

    - **DevExpress NuGet Feed**     

        Find your authorization key in your DevExpress account's [Download Manager](https://www.devexpress.com/ClientCenter/DownloadManager).

        ![DevExtreme ASP.NET MVC Controls - Install the NuGet Packages](/images/Common/download-manager.png)

        Run the following command with this key. If `nuget` is not recognized, install the NuGet CLI using [this instruction](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference).
            
            nuget sources Add -Name "DevExpress NuGet Feed" -Source "https://nuget.devexpress.com/{authorization key}/api"

    - **Local Source**

        DevExtreme NuGet packages for ASP.NET Core MVC are included in the [installer for Windows](/concepts/35%20ASP.NET%20MVC%20Controls/10%20Prerequisites%20and%20Installation/10%20Download%20and%20Installation '/Documentation/Guide/ASP.NET_MVC_Controls/Prerequisites_and_Installation/#Download_and_Installation'). Add their path to the package sources by running the following command. If `nuget` is not recognized, install the NuGet CLI using [this instruction](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference).
            
            nuget sources Add -Name "DevExtreme ASP.NET MVC Controls" -Source "%ProgramFiles(x86)%\DevExpress 17.1\DevExtreme\System\DevExtreme\Bin\AspNetCore"

    In both cases, you can change the %AppData%\NuGet\NuGet.config file as follows instead of running commands in the NuGet CLI:

        <configuration>
            <packageSources>
                ...
                <add key="DevExpress NuGet Feed"
                     value="https://nuget.devexpress.com/{authorization key}/api" />
                <!-- or -->
                <add key="DevExtreme ASP.NET MVC Controls"
                     value="%ProgramFiles(x86)%\DevExpress 17.1\DevExtreme\System\DevExtreme\Bin\AspNetCore" />
            </packageSources>
        </configuration>

    ... or use the [NuGet Package Manager](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui#package-sources) in Visual Studio:

    ![DevExtreme ASP.NET MVC Controls - Add a New NuGet Package Resource](/images/Common/MvcWrappers/nuget_add-package-source.png) 

3. Install the **DevExtreme.AspNet.Data** and **DevExtreme.AspNet.Core** packages for your project using the console:

        dotnet add package DevExtreme.AspNet.Data
        dotnet add package DevExtreme.AspNet.Core

    ... or using the NuGet Package Manager:

    ![DevExtreme ASP.NET MVC Controls - Install the NuGet Packages](/images/Common/MvcWrappers/nuget_devextreme-packages.png)

4. Reference the **jquery**, **devextreme**, and **devextreme-aspnet-data** bower packages in the bower.json file's `"dependencies"` section. If this file is absent, run the [`bower init`](https://bower.io/docs/api/#init) command.

        "dependencies": {
            ...
            "jquery": "~3.1",
            "devextreme": "~17.1",
            "devextreme-aspnet-data": "~1"
        }

5. Install the bower packages:

        bower install

6. Open the _Layout.cshtml file located in the Views/Shared folder (for conventional Razor views) or Pages folder (for Razor Pages) and move the jQuery links in the `<environment>` containers from the `<body>` to the `<head>` section. If there are no jQuery links, add one to the `<head>` section manually.

        <head>
            ...
            <environment names="Development">
                <script src="~/lib/jquery/dist/jquery.js"></script>
                    ...
            <environment names="Staging,Production">
                <script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-2.2.0.min.js"
                    ...
            <!-- or -->
            <!-- script src="~/lib/jquery/dist/jquery.js"></script -->

7. Link the following styles and scripts after the jQuery links:

        <head>
            ...
            <link href="~/lib/devextreme/css/dx.common.css" rel="stylesheet" /> 
            <link href="~/lib/devextreme/css/dx.light.css" rel="stylesheet" /> 
            <script src="~/lib/devextreme/js/dx.all.js"></script>     
            <script src="~/lib/devextreme-aspnet-data/js/dx.aspnet.data.js"></script> 
            <script src="~/lib/devextreme/js/dx.aspnet.mvc.js"></script>
        </head>

8. Import the `DevExtreme.AspNet.Mvc` namespace in the _ViewImports.cshtml file located in the same folder:

        @using DevExtreme.AspNet.Mvc

9. In the Startup.cs file, amend the `ConfigureServices` method as follows to ensure proper JSON serialization:

        // ...
        using Newtonsoft.Json.Serialization;

        public void ConfigureServices(IServiceCollection services) {
            services
                .AddMvc()
                // ... other settings of the MVC service ...
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
        }
