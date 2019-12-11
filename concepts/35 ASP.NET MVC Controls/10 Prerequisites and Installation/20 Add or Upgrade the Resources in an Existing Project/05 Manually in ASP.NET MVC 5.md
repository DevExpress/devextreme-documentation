1. Open your project in Visual Studio.

2. Add the DevExtreme.AspNet.Mvc.dll assembly to References. You can find the assembly in %ProgramFiles(x86)%\DevExpress 18.2\DevExtreme\System\DevExtreme\Bin\AspNet if you did not change the default installation path. Alternatively, you can install the **DevExtreme.AspNet.Mvc** NuGet package from the [DevExpress NuGet feed](https://nuget.devexpress.com).

3. Add the `DevExtreme.AspNet.Mvc` namespace to the Views\Web.config file:

        <configuration>
            <system.web.webPages.razor>
                <pages>
                    <namespaces>
                        <add namespace="DevExtreme.AspNet.Mvc" />
                        ...
    
4. Install the **DevExtreme.AspNet.Data** NuGet package from [NuGet.org](https://www.nuget.org/packages/DevExtreme.AspNet.Data).

    ![DevExtreme ASP.NET MVC Controls - Install the DevExtreme.AspNet.Data NuGet Package](/images/Common/MvcWrappers/nuget_add-devextreme-data-package.png)

5. Copy the DevExtreme scripts and CSS files:

    - from %ProgramFiles(x86)%\DevExpress 18.2\DevExtreme\Sources\Lib\css to the Content folder     
    - from %ProgramFiles(x86)%\DevExpress 18.2\DevExtreme\Sources\Lib\js to the Scripts folder       
    
6. Create a DevExtremeBundleConfig.cs file in the AppStart folder and configure bundles for the DevExtreme resources in it:

    ---
    ##### DevExtremeBundleConfig.cs

        <!--C#-->
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Web.Optimization;
        namespace ProjectName {
            public class DevExtremeBundleConfig {
                public static void RegisterBundles(BundleCollection bundles) {
                    var scriptBundle = new ScriptBundle("~/Scripts/DevExtremeBundle");
                    var styleBundle = new StyleBundle("~/Content/DevExtremeBundle");
                    // CLDR scripts
                    scriptBundle
                        .Include("~/Scripts/cldr.js")
                        .Include("~/Scripts/cldr/event.js")
                        .Include("~/Scripts/cldr/supplemental.js")
                        .Include("~/Scripts/cldr/unresolved.js");
                    // Globalize 1.x
                    scriptBundle
                        .Include("~/Scripts/globalize.js")
                        .Include("~/Scripts/globalize/message.js")
                        .Include("~/Scripts/globalize/number.js")
                        .Include("~/Scripts/globalize/currency.js")
                        .Include("~/Scripts/globalize/date.js");
                    // NOTE: jQuery may already be included in the default script bundle. Check the BundleConfig.cs file​​​
                    // scriptBundle
                    //    .Include("~/Scripts/jquery-1.10.2.js");
                    // JSZip for client-side exporting
                    // scriptBundle
                    //    .Include("~/Scripts/jszip.js");
                    // DevExtreme + extensions
                    scriptBundle
                        .Include("~/Scripts/dx.all.js")
                        .Include("~/Scripts/aspnet/dx.aspnet.data.js")
                        .Include("~/Scripts/aspnet/dx.aspnet.mvc.js");
                    // VectorMap data
                    // scriptBundle
                    //    .Include("~/Scripts/vectormap-data/africa.js")
                    //    .Include("~/Scripts/vectormap-data/canada.js")
                    //    .Include("~/Scripts/vectormap-data/eurasia.js")
                    //    .Include("~/Scripts/vectormap-data/europe.js")
                    //    .Include("~/Scripts/vectormap-data/usa.js")
                    //    .Include("~/Scripts/vectormap-data/world.js");
                    // DevExtreme themes              
                    styleBundle
                        .Include("~/Content/dx.common.css")
                        .Include("~/Content/dx.light.css");
                    bundles.Add(scriptBundle);
                    bundles.Add(styleBundle);
        #if !DEBUG
                    BundleTable.EnableOptimizations = true;
        #endif
                }
            }
        }

    ---

7. Register the bundles in the Global.asax.cs file:

        <!--C#-->
        protected void Application_Start() {
            ...        
            DevExtremeBundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    
8. Open the Views\Shared\\_Layout.cshtml file, find a jQuery bundle reference in the `<body>` section and move it to the `<head>`. If there is no reference, return to the DevExtremeBundleConfig.cs file (step 6) and uncomment the lines that add jQuery to the DevExtreme script bundle. After that, reference the DevExtreme bundles in the `<head>` section.
        
        <!--Razor C#-->
        <head>
            ...
            @Scripts.Render("~/bundles/jquery")
            @Styles.Render("~/Content/DevExtremeBundle")
            @Scripts.Render("~/Scripts/DevExtremeBundle")
        </head>

To upgrade your project, update the NuGet packages and replace the files mentioned in steps 2 and 5 with their new versions.
