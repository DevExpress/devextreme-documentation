---
id: dxChartArgumentAxis.visualRangeUpdateMode
acceptValues: 'auto' | 'keep' | 'reset' | 'shift'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies how the axis's [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/') should behave when chart data is updated.

---
The following modes are available:

- *"shift"*     
The visual range moves to the axis's end. The range's length does not change.

- *"reset"*     
The visual range becomes equal to the [whole range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/wholeRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/wholeRange/').

- *"keep"*      
The visual range does not change.

- *"auto"*      
The applied mode changes depending on the visual range's position on the axis:
    - at the start or middle, then *"keep"*;
    - if set to view the whole range, then *"reset"* (the visual range remains equal to the whole range).

#####See Also#####
- **Axis**.[visualRange()](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRange')