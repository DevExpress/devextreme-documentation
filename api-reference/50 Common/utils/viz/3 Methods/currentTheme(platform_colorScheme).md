---
module: viz/themes
export: currentTheme
---
---
##### shortDescription
Changes the current theme for all data visualization widgets on the page. The color scheme is defined separately.

##### param(platform): String
The platform name or *"generic"*.

##### param(colorScheme): String
The color scheme: *"light"* or *"dark"*.

---
Only the widgets created after calling this method use the new theme. Refresh the styling settings in other widgets using the [DevExpress.viz.refreshTheme()](/api-reference/50%20Common/utils/viz/3%20Methods/refreshTheme().md '/Documentation/ApiReference/Common/utils/viz/Methods/#refreshTheme') method.

#####See Also#####
- [Appearance Customization](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/0%20Themes '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Themes')
- [DevExpress.viz.registerTheme(customTheme, baseTheme)](/api-reference/50%20Common/utils/viz/3%20Methods/registerTheme(customTheme_baseTheme).md '/Documentation/ApiReference/Common/utils/viz/Methods/#registerThemecustomTheme_baseTheme')