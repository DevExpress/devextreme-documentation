DevExtreme is shipped with several predefined dictionaries - **dx.messages.[lang].js** files - that you can use "as is" or as a base for your custom dictionary. You can find them in your project's **Scripts/localization** or **wwwroot/js/devextreme/localization** folder. 

Reference a predefined dictionary in the **Localization** section after the `CldrData()` action method's call to use it.

    <!--Razor C#-->
    @section Localization {
        <script src="@Url.Action('CldrData', 'ControllerName', new { t = CldrDataScriptBuilder.GetCacheParam() })"></script>
        <script src="~/Scripts/localization/dx.messages.de.js"></script>
        <script src="~/Scripts/localization/dx.messages.ru.js"></script>
    }

    <!--Razor VB-->
    @Section Localization
        <script src="@Url.Action('CldrData', 'ControllerName', New With { .t = CldrDataScriptBuilder.GetCacheParam() }))"></script>
        <script src="~/Scripts/localization/dx.messages.de.js"></script>
        <script src="~/Scripts/localization/dx.messages.ru.js"></script>
    End Section


To create a custom dictionary, copy one of the predefined dictionaries and give it an appropriate name, for example, **dx.messages.es.js** for Spanish translation. Then, translate messages in the dictionary to the required language. Finally, reference the custom dictionary in the **Localization** section like a predefined one.
