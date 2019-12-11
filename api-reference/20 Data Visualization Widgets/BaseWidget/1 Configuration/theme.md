---
default: 'generic.light'
acceptValues: 'generic.light' | 'generic.dark' | 'generic.contrast' | 'android5.light' | 'ios7.default' | 'win10.black' | 'win10.white'
type: string
---
---
##### shortDescription
Sets the name of the theme to be used in the widget.

---
Use this property to set a [predefined](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/0%20Themes '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Themes') or [custom](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/0%20Themes/02%20Customize%20a%20Theme.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Themes/Customize_a_Theme') theme. The options defining chart appearance will be set to the values that are set in the specified theme. You can override some of these values within the chart's configuration object.

[note]The following themes were deprecated or renamed: _'desktop'_, _'desktop-dark'_, _'android'_, _'android-holo-light'_, _'ios'_, _'win8'_, _'win8-white'_, _'win8.white'_, _'win8.black'_. In new applications, use themes listed in the accepted values.