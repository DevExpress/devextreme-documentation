Do the following to apply a theme:

- **jQuery**   
Include `dx.common.css` and a theme stylesheet in the index page's `<head>` tag. You can use [local files](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/10%20Local%20Files.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/#Local_Files') or get the stylesheets [from CDN](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/05%20CDN%20Files.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/#CDN_Files').

- **Angular, React, Vue**    
Configure the module bundler you use and import `dx.common.css` and a theme stylesheet. See the following instructions: [Angular](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/03%20Configure%20Stylesheets.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Configure_Stylesheets'), [React](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/40%20Import%20Stylesheets.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Import_Stylesheets'), [Vue](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/40%20Import%20Stylesheets.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/#Import_Stylesheets').

- **ASP.NET MVC 5**     

1. Go to the AppStart folder.
2. Open the DevExtremeBundleConfig.cs file
3. Find the following code and replace `dx.light.css` with the desired theme stylesheet:

            <!-- tab: DevExtremeBundleConfig.cs -->
            styleBundle
                .Include("~/Content/dx.common.css")
                .Include("~/Content/dx.light.css");

4. Open the Views/Shared/_Layout.cshtml file and add the `dx-viewport` class to the `<body>` tag. This ensures that theme colors and typography settings are applied to all page elements (and not only to DevExtreme widgets).

            <!-- tab: _Layout.cshtml -->
            <body style="padding-top: 5rem;" class="dx-viewport">
                <!-- ... -->
            </body>

- **ASP.NET Core**      

1. Go to the Views/Shared folder (for conventional Razor views) or Pages folder (for Razor Pages).
2. Open the _Layout.cshtml or _DevExtremeLayout.cshtml file (depending on which file is used in _ViewStart.cshtml).
3. Find the following line and replace `dx.light.css` with the desired theme stylesheet:

            <!-- tab: _Layout.cshtml -->
            <link href="~/lib/devextreme/css/dx.light.css" rel="stylesheet">

4. Add the `dx-viewport` class to the `<body>` tag. This ensures that theme colors and typography settings are applied to all page elements (and not only to DevExtreme widgets).

            <!-- tab: _Layout.cshtml -->
            <body class="dx-viewport">
                <!-- ... -->
            </body>
