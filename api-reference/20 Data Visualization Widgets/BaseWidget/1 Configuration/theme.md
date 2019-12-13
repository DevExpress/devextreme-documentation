---
id: BaseWidget.Options.theme
acceptValues: 'generic.dark' | 'generic.light' | 'generic.contrast' | 'generic.carmine' | 'generic.darkmoon' | 'generic.darkviolet' | 'generic.greenmist' | 'generic.softblue' | 'material.blue.light' | 'material.lime.light' | 'material.orange.light' | 'material.purple.light' | 'material.teal.light'
type: String
default: 'generic.light'
---
---
##### shortDescription
Sets the name of the theme the widget uses.

---
A theme is a widget configuration that gives the widget a distinctive appearance. Use can use one of the [predefined themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') or create a [custom one](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/15%20Themes/00%20Themes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes'). Changing the option values in the widget's configuration object overrides the theme's corresponding values.

#include common-ref-enum with {
    enum: "`VizTheme`",
    values: "`GenericLight`, `GenericDark`, `GenericContrast`, `GenericCarmine`, `GenericDarkMoon`, `GenericSoftBlue`, `GenericDarkViolet`, `GenericGreenMist`, `MaterialBlueLight`, `MaterialLimeLight`, `MaterialOrangeLight`, `MaterialPurpleLight`, `MaterialTealLight`"
}