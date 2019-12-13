---
id: viz.currentTheme(platform, colorScheme)
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
Only the widgets created after calling this method use the new theme. Refresh the styling settings in other widgets using the [DevExpress.viz.refreshTheme()](/api-reference/50%20Common/utils/viz/refreshTheme().md '/Documentation/ApiReference/Common/utils/viz/#refreshTheme') method.

#####See Also#####
- [Themes](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/15%20Themes/00%20Themes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes')
- [DevExpress.viz.registerTheme(customTheme, baseTheme)](/api-reference/50%20Common/utils/viz/registerTheme(customTheme_baseTheme).md '/Documentation/ApiReference/Common/utils/viz/#registerThemecustomTheme_baseTheme')