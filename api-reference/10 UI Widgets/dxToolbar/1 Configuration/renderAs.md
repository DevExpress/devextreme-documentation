---
id: dxToolbar.Options.renderAs
acceptValues: 'bottomToolbar' | 'topToolbar'
type: String
default: 'topToolbar'
---
---
##### shortDescription
Informs the widget about its location in a view HTML markup.

---
When configuring the **Toolbar** widget, use the **renderAs** option to specify the location of this widget in a view HTML template. Depending on the value that you set for this option, the widget's appearance will be adjusted accordingly. For instance, when a toolbar is located at the top of a view on an iOS device, it must be separated by a border from the bottom view content.

#include common-ref-enum with {
    enum: "`ToolbarRenderMode`",
    values: "`TopToolbar` and `BottomToolbar`"
}