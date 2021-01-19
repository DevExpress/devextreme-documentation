---
id: dxPolarChart.Options.valueAxis.visualRangeUpdateMode
acceptValues: 'auto' | 'keep' | 'reset'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies how the axis's [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/visualRange/') should behave when the **PolarChart** data is updated.

---
The following modes are available:

- *"auto"*      
The applied mode changes depending on the visual range's position on the axis:
    - at the start or middle, then *"keep"*;
    - if set to view the whole range, then *"reset"* (the visual range remains equal to the whole range).

- *"keep"*      
The visual range does not change.

- *"reset"*     
The visual range becomes equal to the [whole range](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/wholeRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/wholeRange/').