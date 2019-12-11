You can use [Globalize](https://github.com/globalizejs/globalize#globalize) to localize DevExtreme ASP.NET MVC Controls. Its modules and [CLDR scripts](https://github.com/rxaviers/cldrjs#cldrjs---simple-cldr-traverser) must already be linked in your project. If in doubt, do one of the following:

- Open **App\_Start/DevExtremeBundleConfig.cs(.vb)** and make sure that Globalize and CLDR files are included in the DevExtreme bundle. Then, open the shared layout view - **Views/Shared/_Layout.csthml(.vbhtml)** - and check that the `<head>` tag includes a command similar to this:

        @Scripts.Render("~/Scripts/DevExtremeBundle")

- Open the shared layout view and check that the `<head>` tag includes the links to Globalize and CLDR files directly.

If everything is correct, see the following subtopics for further steps:
