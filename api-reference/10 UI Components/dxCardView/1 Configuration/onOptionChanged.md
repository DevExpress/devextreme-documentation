---
id: dxCardView.Options.onOptionChanged
type: function(e)
---
---
##### shortDescription
A function that is executed after a {WidgetName} property is changed.

##### param(e): ui/card_view:OptionChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fullName): String
The modified property's path (includes all parent properties).

##### field(e.name): String
The modified property or a top-level parent if the modified property is nested.

##### field(e.previousValue): any
The modified property's previous value.

##### field(e.value): any
The modified property's new value.

---
<!-- Description goes here -->