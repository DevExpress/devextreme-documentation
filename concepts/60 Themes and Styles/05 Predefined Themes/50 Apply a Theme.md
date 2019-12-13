Do the following to apply a theme:

- **jQuery, Knockout, AngularJS**   
Include `dx.common.css` and a [theme stylesheet](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#theme-files) in the `<head>` tag on your index page. You can use [local files](/concepts/00%20Getting%20Started/01%20Installation/10%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') or get the stylesheets [from CDN](/concepts/00%20Getting%20Started/01%20Installation/05%20CDN%20Services '/Documentation/Guide/Getting_Started/Installation/CDN_Services/').

- **Angular, React, or Vue**    
Configure the module bundler you are using and import `dx.common.css` and a theme stylesheet. See the following instructions: [Angular](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/03%20Configure%20Stylesheets.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Configure_Stylesheets'), [React](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/40%20Import%20Stylesheets.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Import_Stylesheets'), [Vue](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/40%20Import%20Stylesheets.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/#Import_Stylesheets').

- **ASP.NET MVC 5**     

1. Go to the AppStart folder.
2. Open the DevExtremeBundleConfig.cs file
3. Find the following code and replace `dx.light.css` in it with the theme stylesheet of your choice:

            styleBundle
                .Include("~/Content/dx.common.css")
                .Include("~/Content/dx.light.css");

- **ASP.NET Core**      

1. Go to the Views/Shared folder (for conventional Razor views) or Pages folder (for Razor Pages).
2. Open the _Layout.cshtml or _DevExtremeLayout.cshtml file (depending on which of them is used in the _ViewStart.cshtml file).
3. Find the following line and replace `dx.light.css` in it with the theme stylesheet of your choice:

            <link href="~/lib/devextreme/css/dx.light.css" rel="stylesheet">
