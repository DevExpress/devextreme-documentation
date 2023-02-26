---
id: GridBase.Options.columnChooser.mode
type: Enums.ColumnChooserMode
default: 'dragAndDrop'
---
---
##### shortDescription
Specifies how a user manages columns using the column chooser.

---
In drag and drop mode, a user moves column headers to and from the column chooser by drag and drop. In select mode, the user selects column headers in the column chooser using check boxes. The select mode is designed primarily for touch-enabled devices. On mouse-equipped platforms, either mode is suitable.

<img src="/images/{WidgetName}/visual_elements/column-chooser_draganddrop-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component {WidgetName} ColumnChooser" style="margin-right:60px" /> <img src="/images/{WidgetName}/visual_elements/column-chooser_select-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component {WidgetName} ColumnChooser" style="margin-right:90px" />

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/ColumnChooser/"
}

[note] When the mode is *"select"*, the column chooser does not hide column headers from the [group panel](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/10%20User%20Interaction/10%20Group%20Data.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#User_Interaction/Group_Data') (does not ungroup data).