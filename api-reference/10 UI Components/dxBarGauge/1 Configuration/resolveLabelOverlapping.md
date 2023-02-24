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
If a BarGauge displays several values close to each other, the corresponding labels may overlap. If you want to avoid overlapped labels, use the **resolveLabelOverlapping** property to specify how the gauge adjusts label position or visibility. The following values are available: 

- *'hide'*    
The gauge hides labels with smaller values except for the label with the smallest value.

- *'shift'*    
The gauge shifts labels. If the component's size is not big enough to accommodate all labels, the BarGauge hides labels with the smallest values.

- *'none'*    
Labels overlap.