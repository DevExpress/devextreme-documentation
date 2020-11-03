---
id: dxChartValueAxis.visualRangeUpdateMode
acceptValues: 'auto' | 'keep' | 'reset' | 'shift'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies how the axis's [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange/') should behave when chart data is updated.

---
The following modes are available:

- *"reset"*     
The visual range becomes equal to the data range or the [whole range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/wholeRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/wholeRange/') if it is a subrange of the data range.

- *"keep"*      
The visual range does not change.

- *"auto"*      
When the visual range is specified, the applied mode is the same as the argument axis' [visualRangeUpdateMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#visualRangeUpdateMode').

- *"shift"*     
The same as *"auto"* mode.

#####See Also#####
- **Axis**.[visualRange()](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRange')
