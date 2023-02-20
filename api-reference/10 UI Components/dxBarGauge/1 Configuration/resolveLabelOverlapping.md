---
id: dxBarGauge.Options.resolveLabelOverlapping
acceptValues: 'hide' | 'none' | 'shift'
type: String
default: 'hide'
---
---
##### shortDescription
Specifies how the UI component should behave when [bar labels](/api-reference/10%20UI%20Components/dxBarGauge/1%20Configuration/label '/Documentation/ApiReference/UI_Components/dxBarGauge/Configuration/label/') overlap.

---
If bar values in your BarGauge are close to each other, bar labels may overlap. In this case, use the **resolveLabelOverlapping** property to specify how the gauge must resolve overlapping. To hide certain labels, set this property to *'hide'*. The component automatically determines labels to hide. 

The component can also shift labels from their positions. Set the **resolveLabelOverlapping** property to *'shift'* to use this functionality. If there is not enough space for all labels after they are shifted, the BarGauge hides labels with the smallest values.