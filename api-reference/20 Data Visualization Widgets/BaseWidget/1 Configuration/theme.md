---
default: 'generic.light'
acceptValues: 'generic.light' | 'generic.dark' | 'generic.contrast' | 'generic.carmine' | 'generic.darkmoon' | 'generic.softblue' | 'generic.darkviolet' | 'generic.greenmist' | 'android5.light' | 'ios7.default'
type: String
---
---
##### shortDescription
Sets the name of the theme the widget uses.

---
A theme is a widget configuration that gives the widget a distinctive appearance. Use can use one of the [predefined themes](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/0%20Themes '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Themes') or create a [custom one](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/0%20Themes/02%20Customize%20a%20Theme.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Themes/Customize_a_Theme'). Changing the option values in the widget's configuration object overrides the theme's corresponding values.

[note]The following themes were deprecated or renamed: _'desktop'_, _'desktop-dark'_, _'android'_, _'android-holo-light'_, _'ios'_, _'win8'_, _'win8-white'_, _'win8.white'_, _'win8.black'_. In new applications, use themes listed in the accepted values.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `VizTheme` enum. This enum accepts the following values: `GenericLight`, `GenericDark`, `GenericContrast`, `GenericCarmine`, `GenericDarkMoon`, `GenericSoftBlue`, `GenericDarkViolet`, `GenericGreenMist`, `Android5Light`, `IOS7Default`, `Win10Black` and `Win10White`.