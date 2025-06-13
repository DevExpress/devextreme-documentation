---
id: dxCardView.Options.onSelectionChanged
type: function(e)
---
---
##### shortDescription
A function that is executed when a card is selected or its selection is cleared.

##### param(e): ui/card_view:SelectionChangedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.currentDeselectedCardKeys): Array<any>
The keys of the cards whose selection was cleared.

##### field(e.currentSelectedCardKeys): Array<any>
The keys of the cards that were selected.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.selectedCardKeys): Array<any>
The keys of all selected cards.

##### field(e.selectedCardsData): Array<any>
The data of all selected cards.

---
<!-- Description goes here -->