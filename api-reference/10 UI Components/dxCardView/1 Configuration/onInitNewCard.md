---
id: dxCardView.Options.onInitNewCard
type: function(e)
---
---
##### shortDescription
A function that is executed before a new card is added to the UI component.

##### param(e): ui/card_view:InitNewCardEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Object
The data of the inserted card; initially empty.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---
<!-- Description goes here -->