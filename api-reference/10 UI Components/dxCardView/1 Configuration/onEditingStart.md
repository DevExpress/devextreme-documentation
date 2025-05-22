---
id: dxCardView.Options.onEditingStart
type: function(e)
---
---
##### shortDescription
A function that is executed before a card switches to the editing state.

##### param(e): ui/card_view:EditingStartEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel card editing.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Object
The data of a card to be edited.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The card's key. An added card not saved has the `undefined` key.   
Without a specified key field in the [data source](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'), the data object acts as the key.

---
<!-- Description goes here -->