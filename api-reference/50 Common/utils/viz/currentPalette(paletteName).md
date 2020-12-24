---
id: viz.currentPalette(paletteName)
module: viz/palette
export: currentPalette
---
---
##### shortDescription
Changes the current palette for all data visualization UI components on the page.

##### param(paletteName): String
A new palette's name.

---
Only the UI components created after calling this method use the new palette. Refresh the styling settings in other UI components using the [DevExpress.viz.refreshTheme()](/api-reference/50%20Common/utils/viz/refreshTheme().md '/Documentation/ApiReference/Common/utils/viz/#refreshTheme') method.

#####See Also#####
- [DevExpress.viz.registerPalette(paletteName, palette)](/api-reference/50%20Common/utils/viz/registerPalette(paletteName_palette).md '/Documentation/ApiReference/Common/utils/viz/#registerPalettepaletteName_palette')