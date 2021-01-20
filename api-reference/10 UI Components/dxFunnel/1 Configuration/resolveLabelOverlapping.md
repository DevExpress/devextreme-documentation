---
id: dxFunnel.Options.resolveLabelOverlapping
acceptValues: 'hide' | 'none' | 'shift'
type: String
default: 'shift'
---
---
##### shortDescription
Specifies how [item labels](/concepts/05%20Widgets/Funnel/17%20Item%20Labels/00%20Overview.md '/Documentation/Guide/UI_Components/Funnel/Item_Labels/Overview/') should behave when they overlap.

---
The following modes are available:

- *"shift"*     
Item labels shift from their positions. If they still overlap, some of them hide. 

- *"hide"*      
Certain item labels hide.

- *"none"*      
Item labels overlap.

#include common-ref-enum with {
    enum: "`FunnelResolveLabelOverlapping`",
    values: "`None`, `Hide`, and `Shift`"
}

#####See Also#####
- **label**.[position](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/position.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/label/#position')