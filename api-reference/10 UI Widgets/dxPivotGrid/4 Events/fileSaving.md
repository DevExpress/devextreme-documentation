---
type: event
---
---
##### shortDescription
Fires before the grid saves an Excel file with exported data on the user's local storage.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.fileName): string
The name of the file to be saved.

##### field(e.format): string
The format of the file to be saved. Equals to <i>'EXCEL'</i> for an Excel file.

##### field(e.data): blob
Exported data as a BLOB.

##### field(e.cancel): boolean
To cancel file saving, assign <i>true</i> to this parameter.

---
Instead, you can use the [onFileSaving](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onFileSaving') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')