---
id: dxChart.Options.argumentAxis.visualRangeUpdateMode
---
---
##### shortDescription
Specifies how the axis's [visual range](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/') should behave when chart data is updated.

---
The following modes are available:

- *"shift"*     
The visual range moves to the axis's end. The range's length does not change.

- *"reset"*     
The visual range becomes equal to the [whole range](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/wholeRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/wholeRange/').

- *"keep"*      
The visual range does not change.

- *"auto"*      
The applied mode changes depending on the visual range's position on the axis:
    - at the start or middle, then *"keep"*;
    - if set to view the whole range, then *"reset"* (the visual range remains equal to the whole range).

#####See Also#####
- **Axis**.[visualRange()](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Axis/Methods/#visualRange')