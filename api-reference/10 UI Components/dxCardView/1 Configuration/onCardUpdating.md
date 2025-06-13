---
id: dxCardView.Options.onCardUpdating
type: function(e)
---
---
##### shortDescription
A function that is executed before a card is updated in the data source.

##### param(e): ui/card_view:CardUpdatingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
`true`, a Promise resolved with `true`, or a rejected Promise stops card updating.       
`false` or a Promise resolved with `false` or `undefined` continues card updating.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The card's key.

##### field(e.newData): Object
The card's updated data.

##### field(e.oldData): any
The card's old data.

---
<!-- Description goes here -->