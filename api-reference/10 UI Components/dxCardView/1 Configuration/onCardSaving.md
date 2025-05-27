---
id: dxCardView.Options.onCardSaving
type: function(e)
---
---
##### shortDescription
A function that is executed before pending card changes are saved.

##### param(e): ui/card_view:CardSavingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Set this field to `true` if the default saving logic should be disabled.

##### field(e.changes): Array<DataChange>
Pending row changes; a copy of the **editing**.[changes]({basewidgetpath}/Configuration/editing/changes/) array. Includes only card changes, unlike [onCardSaved]({basewidgetpath}/Configuration/#onCardSaved), which contains all card data (including changes).

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---
<!-- Description goes here -->