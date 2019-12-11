---
default: 'generic.light'
acceptValues: 'generic.dark' | 'generic.light' | 'generic.contrast' | 'ios7.default' | 'generic.carmine' | 'generic.darkmoon' | 'generic.darkviolet' | 'generic.greenmist' | 'generic.softblue' | 'material.blue.light' | 'material.lime.light' | 'material.orange.light' | 'material.purple.light' | 'material.teal.light'
type: String
---
---
##### shortDescription
Sets the name of the theme the widget uses.

---
A theme is a widget configuration that gives the widget a distinctive appearance. Use can use one of the [predefined themes](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/0%20Themes '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Themes') or create a [custom one](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/0%20Themes/02%20Customize%20a%20Theme.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Themes/Customize_a_Theme'). Changing the option values in the widget's configuration object overrides the theme's corresponding values.

[note]The following themes were deprecated or renamed: _'desktop'_, _'desktop-dark'_, _'android'_, _'android-holo-light'_, _*android5.light*_, _'ios'_, _'win8'_, _'win8-white'_, _'win8.white'_, _'win8.black'_, _'win10.white'_, _'win10.black'_. In new applications, use themes listed in the accepted values.

#include common-ref-enum with {
    enum: "`VizTheme`",
    values: "`GenericLight`, `GenericDark`, `GenericContrast`, `GenericCarmine`, `GenericDarkMoon`, `GenericSoftBlue`, `GenericDarkViolet`, `GenericGreenMist`, `IOS7Default`, `MaterialBlueLight`, `MaterialLimeLight`, `MaterialOrangeLight`, `MaterialPurpleLight`, `MaterialTealLight`"
}