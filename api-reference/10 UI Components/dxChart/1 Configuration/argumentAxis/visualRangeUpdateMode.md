---
id: dxChart.Options.argumentAxis.visualRangeUpdateMode
type: Enums.VisualRangeUpdateMode
default: 'auto'
---
---
##### shortDescription
Specifies how the component changes **argumentAxis**.[visualRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/') when chart data is updated.

---
The following modes are available:

- *"shift"*    
**visualRange** moves to the end of the data range or [wholeRange](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/wholeRange/) if defined. The range does not change.

- *"reset"*    
**visualRange** becomes equal to the data range or **wholeRange** if defined.

- *"keep"*    
**visualRange** does not change.

- *"auto"*    
**visualRange** does not change. The component applies a mode based on the position of **visualRange** on the data range or **argumentAxis**.**wholeRange** if defined:

    - If **visualRange** is in the middle or at the start, **visualRangeUpdateMode** is set to *"keep"*.
    - If **visualRange** is at the end, **visualRangeUpdateMode** is set to *"shift"*.
    - If **visualRange** covers the entire data range or **wholeRange**, **visualRangeUpdateMode** is set to *"reset"*.

#####See Also#####
- **Axis**.[visualRange()](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Axis/Methods/#visualRange')
- **valueAxis**.[visualRangeUpdateMode](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#visualRangeUpdateMode)