---
id: dxDataGrid.Options.selection.showCheckBoxesMode
acceptValues: 'always' | 'none' | 'onClick' | 'onLongTap'
type: String
default: 'onClick'
---
---
##### shortDescription
Specifies when to display the selection column and row selection checkboxes. Applies only if **selection**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode') is *"multiple"*.

---
The possible values are:

- *"onClick"*
The selection column is always shown. Checkboxes appear once a user clicks in the column or if two or more rows are selected [programmatically](/concepts/05%20Widgets/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection') or using [keyboard shortcuts](/concepts/05%20Widgets/DataGrid/75%20Keyboard%20Support.md '/Documentation/Guide/Widgets/DataGrid/Keyboard_Support/'). Checkboxes disappear once row selection is canceled.

- *"onLongTap"*
The selection column with all the checkboxes appears and disappears on long tap (click and hold).

- *"always"*
The selection column with all the checkboxes is always visible. A user can select a row by clicking the checkbox or its grid cell, but not the row itself.

- *"none"*  
The selection column with all the checkboxes is hidden. Users can select rows with keyboard shortcuts or long tap (click and hold).

[Keyboard shortcuts](/concepts/05%20Widgets/DataGrid/75%20Keyboard%20Support.md '/Documentation/Guide/Widgets/DataGrid/Keyboard_Support/') work identically regardless of the chosen mode.

#include common-ref-enum with {
    enum: "`GridSelectionShowCheckBoxesMode`",
    values: "`OnClick`, `OnLongTap`, `Always`, and `None`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionModes/"
}

#####See Also#####
- [Selection - User Interaction](/concepts/05%20Widgets/DataGrid/50%20Selection/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Selection/#User_Interaction')
