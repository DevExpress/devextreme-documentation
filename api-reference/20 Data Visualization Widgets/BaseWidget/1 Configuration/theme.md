---
default: 'generic.light'
acceptValues: 'generic.dark' | 'generic.light' | 'generic.contrast' | 'ios7.default' | 'generic.carmine' | 'generic.darkmoon' | 'generic.darkviolet' | 'generic.greenmist' | 'generic.softblue' | 'material.blue.light' | 'material.lime.light' | 'material.orange.light' | 'material.purple.light' | 'material.teal.light'
type: String
---
---
##### shortDescription
Sets the name of the theme the widget uses.

---
A theme is a widget configuration that gives the widget a distinctive appearance. Use can use one of the [predefined themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') or create a [custom one](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/15%20Themes/00%20Themes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes'). Changing the option values in the widget's configuration object overrides the theme's corresponding values.

[note]The following themes were deprecated or renamed: _'android5.light'_, _'win8.white'_, _'win8.black'_, _'win8.light'_, _'win8.dark'_, _'win10.white'_, _'win10.black'_, _'win10.light'_, _'win10.dark'_. In new applications, use themes listed in the accepted values.

#include common-ref-enum with {
    enum: "`VizTheme`",
    values: "`GenericLight`, `GenericDark`, `GenericContrast`, `GenericCarmine`, `GenericDarkMoon`, `GenericSoftBlue`, `GenericDarkViolet`, `GenericGreenMist`, `IOS7Default`, `MaterialBlueLight`, `MaterialLimeLight`, `MaterialOrangeLight`, `MaterialPurpleLight`, `MaterialTealLight`"
}