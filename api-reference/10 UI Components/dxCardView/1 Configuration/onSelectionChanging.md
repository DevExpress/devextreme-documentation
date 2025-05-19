---
id: dxCardView.Options.onSelectionChanging
type: function(e)
---
---
##### shortDescription
A function that is called before selection changes.

##### param(e): ui/card_view:SelectionChangingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel selection.

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