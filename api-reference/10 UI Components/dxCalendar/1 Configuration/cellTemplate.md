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

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "cell" }

##### return: String | Element | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

If a cell is a [week number](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/showWeekNumbers.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#showWeekNumbers'), the `date` field value is `undefined`.

#####See Also#####
- [Customize Cell Appearance](/Documentation/Guide/UI_Components/Calendar/Getting_Started_with_Calendar/#Customize_Cell_Appearance)
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')