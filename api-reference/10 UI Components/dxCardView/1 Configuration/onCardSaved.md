---
id: dxCardView.Options.onCardSaved
type: function(e)
---
---
##### shortDescription
A function that is executed after card changes are saved.

##### param(e): ui/card_view:CardSavedEvent
Information about the event that caused the function's execution.

##### field(e.changes): Array<DataChange>
All card data (including changes). Differs from [onCardSaving](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/onCardSaving.md '{basewidgetpath}/Configuration/#onCardSaving'), which only consists of pending changes.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
<!-- Description goes here -->