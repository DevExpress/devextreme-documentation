Certain Globalize modules require specific CLDR data. DevExtreme ASP.NET MVC Controls use only five Globalize modules: core, number, currency, date, and message. Consult the [CLDR Content](https://github.com/globalizejs/globalize#2-cldr-content) topic to learn which CLDR data in the JSON format you need for these modules, and then see the [Package Organization](https://github.com/unicode-cldr/cldr-json#package-organization) topic for information on where to get them.

Once you added the CLDR JSON files to your project, create an action method in your controller that loads them using `CldrDataScriptBuilder()`. The following is an example of an action method that loads CLDR JSONs for Deutsch and Russian locales from the **Content/cldr-data** project folder and sets the Deutsch as the default:

     <!--C#-->
    public ActionResult CldrData() {
        return new CldrDataScriptBuilder()
            .SetCldrPath("~/Content/cldr-data")
            .SetInitialLocale("de")
            .UseLocales("de", "ru")
            .Build();
    }

    <!--VB-->
    Public Function CldrData() As ActionResult
        Return New CldrDataScriptBuilder() _
            .SetCldrPath("~/Content/cldr-data") _
            .SetInitialLocale("de") _
            .UseLocales("de", "ru") _
            .Build()
    End Function

Execute this action method in a section created on the view with DevExtreme ASP.NET MVC Controls to be localized. Use the `@Url.Action` helper to do that. The third argument passed to it ensures that the browser caches the CLDR data. In the following example, this section is called **Localization**:

    <!--Razor C#-->
    @section Localization {
        <script src="@Url.Action('CldrData', 'ControllerName', new { t = CldrDataScriptBuilder.GetCacheParam() })"></script>
    }

    <!--Razor VB-->
    @Section Localization
        <script src="@Url.Action('CldrData', 'ControllerName', New With { .t = CldrDataScriptBuilder.GetCacheParam() }))"></script>
    End Section

After that, add the command rendering this section to the `<head>` tag of the shared layout view - **Views/Shared/_Layout.csthml(.vbhtml)**. 

    <!--Razor C#-->
    @RenderSection("Localization", false)

    <!--Razor VB-->
    @RenderSection("Localization", false)
