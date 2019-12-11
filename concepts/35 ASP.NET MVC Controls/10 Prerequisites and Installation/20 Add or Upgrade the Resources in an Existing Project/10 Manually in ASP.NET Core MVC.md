1. Open the console and navigate to your project's directory:

        cd MyProject

2. Add one of the following NuGet package sources:

    - **DevExpress NuGet Feed**     

        [Obtain your NuGet feed URL](https://docs.devexpress.com/GeneralInformation/116042/installation/install-devexpress-controls-using-nuget-packages/obtain-your-nuget-feed-url) and run the following command. If `nuget` is not recognized, install the NuGet CLI using [these instructions](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference).
            
            nuget sources Add -Name "DevExpress NuGet Feed" -Source "https://nuget.devexpress.com/{authorization key}/api"

    - **Local Source**

        DevExtreme NuGet packages for ASP.NET Core MVC are included in the [installer for Windows](/concepts/35%20ASP.NET%20MVC%20Controls/10%20Prerequisites%20and%20Installation/10%20Download%20and%20Installation.md '/Documentation/Guide/ASP.NET_MVC_Controls/Prerequisites_and_Installation/#Download_and_Installation'). Add their path to the package sources by running the following command. If `nuget` is not recognized, install the NuGet CLI using [this instruction](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference).
            
            nuget sources Add -Name "DevExtreme ASP.NET MVC Controls" -Source "%ProgramFiles(x86)%\DevExpress 17.2\DevExtreme\System\DevExtreme\Bin\AspNetCore"

    In both cases, you can change the %AppData%\NuGet\NuGet.config file as follows instead of running commands in the NuGet CLI:

        <configuration>
            <packageSources>
                ...
                <add key="DevExpress NuGet Feed"
                     value="https://nuget.devexpress.com/{authorization key}/api" />
                <!-- or -->
                <add key="DevExtreme ASP.NET MVC Controls"
                     value="%ProgramFiles(x86)%\DevExpress 17.2\DevExtreme\System\DevExtreme\Bin\AspNetCore" />
            </packageSources>
        </configuration>

3. Install the **DevExtreme.AspNet.Data** and **DevExtreme.AspNet.Core** packages for your project:

        dotnet add package DevExtreme.AspNet.Data
        dotnet add package DevExtreme.AspNet.Core

4. Reference the **jquery**, **devextreme**, and **devextreme-aspnet-data** bower packages in the bower.json file's `"dependencies"` section. If this file is absent, run the [`bower init`](https://bower.io/docs/api/#init) command.

        "dependencies": {
            ...
            "jquery": "~3.1",
            "devextreme": "~17.2",
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

To upgrade your project, update the NuGet and bower packages from steps 3 and 4.
