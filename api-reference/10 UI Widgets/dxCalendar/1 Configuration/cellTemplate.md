---
id: dxCalendar.Options.cellTemplate
type: template
default: 'cell'
---
---
##### shortDescription
Specifies a custom template for calendar cells.

##### param(itemData): Object
The current cell's data.

##### field(itemData.date): Date
A Date object associated with the cell.

##### field(itemData.text): String
The cell's text.

##### field(itemData.view): String
The current view's name.

##### param(itemIndex): Number
The current cell's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### return: String | Element | jQuery
A template name or container.

---
#####See Also#####
- [Customize Cell Appearance](/concepts/05%20Widgets/Calendar/15%20Customize%20Cell%20Appearance.md '/Documentation/Guide/Widgets/Calendar/Customize_Cell_Appearance/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')