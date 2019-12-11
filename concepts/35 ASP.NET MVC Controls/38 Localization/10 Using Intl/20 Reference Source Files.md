Files that you need to reference include the [devextreme-intl](https://github.com/DevExpress/DevExtreme-Intl#devextreme-intl) module and dictionaries for required locales. DevExtreme is shipped with several predefined dictionaries - **dx.messages.[lang].js** files. You can use them "as is" or as a base for your custom dictionary. They are located in your project's **Scripts/localization** or  **wwwroot/js/devextreme/localization** folder. Reference the module and dictionaries in a section created on the view with the DevExtreme ASP.NET MVC Controls to be localized.

    <!--Razor C#-->
    @section Localization {
        <script src="https://unpkg.com/devextreme-intl/dist/devextreme-intl.min.js"></script>
        <script src="~/Scripts/localization/dx.messages.de.js"></script>
        <script src="~/Scripts/localization/dx.messages.ru.js"></script>
    }

    <!--Razor VB-->
    @Section Localization
        <script src="https://unpkg.com/devextreme-intl/dist/devextreme-intl.min.js"></script>
        <script src="~/Scripts/localization/dx.messages.de.js"></script>
        <script src="~/Scripts/localization/dx.messages.ru.js"></script>
    End Section

After that, add the command rendering this section to the `<head>` tag of the shared layout view - **Views/Shared/_Layout.csthml(.vbhtml)**. 

    <!--Razor C#-->
    @RenderSection("Localization", false)

    <!--Razor VB-->
    @RenderSection("Localization", false)

To create a custom dictionary, copy one of the predefined dictionaries and give it an appropriate name, for example, **dx.messages.es.js** for Spanish translation. Then, translate messages in the dictionary to the required language. Finally, reference the custom dictionary like a predefined one.
