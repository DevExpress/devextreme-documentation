DevExtreme ASP.NET MVC Controls can be localized using the [Intl](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl) object. Follow the steps described in this topic to set up Intl localization.

[note]

Our project templates use Globalize as default means of localization. To prevent possible conflicts with Intl, remove the load of Globalize and CLDR resources by doing one of the following:

- Open **App\_Start/DevExtremeBundleConfig.cs(.vb)** and remove code lines that add Globalize and CLDR files to the DevExtreme bundle.

- Open the shared layout view and remove links to Globalize and CLDR files from the `<head>` tag.

[/note]
