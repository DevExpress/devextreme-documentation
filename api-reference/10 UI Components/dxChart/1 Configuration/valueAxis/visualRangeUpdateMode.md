---
id: dxChart.Options.valueAxis.visualRangeUpdateMode
type: Enums.VisualRangeUpdateMode
default: 'auto'
---
---
##### shortDescription
Specifies how the component changes **valueAxis**.[visualRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/visualRange/') when chart data is updated.

---
The following modes are available:

- *"reset"*    
**visualRange** becomes equal to the data range or [wholeRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/wholeRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/wholeRange/') if defined and within the data range.

- *"keep"*    
**visualRange** does not change.

- *"auto"*    
The component applies a mode based on [argumentAxis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/).[visualRangeUpdateMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#visualRangeUpdateMode'):
    
    - If **argumentAxis**.**visualRangeUpdateMode** is *"shift"* or *"reset"*, **valueAxis**.**visualRangeUpdateMode** is set to *"reset"*.
    - If **argumentAxis**.**visualRangeUpdateMode** is *"keep"*, **valueAxis**.**visualRangeUpdateMode** is set to *"keep"*.

- *"shift"* (**deprecated since v23.1**)    
The same as *"auto"* mode.

#####See Also#####
- **Axis**.[visualRange()](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Axis/Methods/#visualRange')
