---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a user clicks a [label](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Labels') on the [argument axis](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/10%20Argument%20Axis.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Argument_Axis').

##### param(e): object
Information about the event.

##### field(e.component): object
The widget's instance.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.argument): Date|Number|string
The clicked label's value.

---
#####See Also#####
#include common-link-handleevents