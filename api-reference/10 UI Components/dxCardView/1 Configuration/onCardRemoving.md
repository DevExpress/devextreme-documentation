---
id: dxCardView.Options.onCardRemoving
type: function(e)
---
---
##### shortDescription
A function that is executed before a card is removed from the data source.

##### param(e): ui/card_view:CardRemovingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
`true`, a Promise resolved with `true`, or a rejected Promise stops card removal.       
`false` or a Promise resolved with `false` or `undefined` continues card removal.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): any
The data of the card that should be removed.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The card's key.

---
<!-- Description goes here -->