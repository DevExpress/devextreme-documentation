---
id: dxCardView.Options.onCardRemoved
type: function(e)
---
---
##### shortDescription
A function that is executed after a card was removed from the data source.

##### param(e): ui/card_view:CardRemovedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): any
The card data.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The card's key.  
If no field specifies the keys in the [data source](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'), the entire data object acts as the key.

---
<!-- Description goes here -->