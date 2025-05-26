---
id: dxCardView.Options.onCardHoverChanged
type: function(e)
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a card.

##### param(e): ui/card_view:CardHoverChangedEvent
Information about the event that caused the function's execution.

##### field(e.card): CardInfo
The card properties.

##### field(e.cardElement): DxElement
#include common-ref-elementparam with { element: "card" }

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.eventType): String
Indicates whether the pointer entered or left the card. Can be either *"mouseover"* or *"mouseout"*.

---
<!-- Description goes here -->