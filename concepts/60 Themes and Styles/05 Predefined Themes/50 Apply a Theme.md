Do the following to apply a theme:

- **jQuery, Knockout, AngularJS**   
Include `dx.common.css` and a [theme stylesheet](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#theme-files) in the `<head>` tag on your index page. You can use [local files](/concepts/00%20Getting%20Started/01%20Installation/10%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') or get the stylesheets [from CDN](/concepts/00%20Getting%20Started/01%20Installation/05%20CDN%20Services '/Documentation/Guide/Getting_Started/Installation/CDN_Services/').

- **Angular, React, or Vue**    
Configure the module bundler you are using and import `dx.common.css` and a theme stylesheet. See the instructions in the dedicated GitHub repositories: [Angular](https://github.com/DevExpress/devextreme-angular#additional-configuration), [React](https://github.com/DevExpress/devextreme-react#additional-configuration), [Vue](https://github.com/DevExpress/devextreme-vue#additional-configuration).

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
