---
id: dxCardView.Options.onCardInserting
type: function(e)
---
---
##### shortDescription
A function that is executed before a new card is inserted into the data source.

##### param(e): ui/card_view:CardInsertingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
`true`, a Promise resolved with `true`, or a rejected Promise stops card insertion.       
`false` or a Promise resolved with `false` or `undefined` continues card insertion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Object
The data of the card that should be inserted.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
<!-- Description goes here -->