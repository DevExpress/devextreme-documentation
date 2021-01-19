---
id: dxRangeSelector.Options.selectedRangeUpdateMode
acceptValues: 'auto' | 'keep' | 'reset' | 'shift'
type: String
default: 'reset'
---
---
##### shortDescription
Specifies how the selected range should behave when data is updated. Applies only when the **RangeSelector** is [bound to a data source](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSource').

---
The following modes are available:

- *"shift"*     
The selected range moves to the scale's end. The range's length does not change.

- *"reset"*     
The selected range is set to be equal to the data range.

- *"keep"*      
The selected range does not change.

- *"auto"*      
The applied mode changes depending on the selected range's position on the scale:
    - at the start or middle, then *"keep"*;
    - at the end, then *"shift"*;
    - if set to view the data range, then *"reset"* (the selected range remains equal to the data range).

#####See Also#####
- [value](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value')