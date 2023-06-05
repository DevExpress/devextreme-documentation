---
id: dxScheduler.Options.dateCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for day scale items.

##### param(itemData): Object
The data of the current date scale item.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | UserDefinedElement
A template name or container.

---
The following image shows the difference between Scheduler cell types:

![DevExtreme Scheduler - Cell Types](/images/Scheduler/scheduler-cells.png)

Use this template for date cells only.

The data of this template consists of the following fields:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>date</code></td>    
        <td>Date of the cell.</td>
    </tr>
    <tr>
        <td><code>groups</code></td>          
        <td>A group object to which date cell belongs.</td> 
    </tr>
    <tr>
        <td><code>groupIndex</code></td>          
        <td>Index of a group to which date cell belongs.</td> 
    </tr>
    <tr>
        <td><code>text</code></td>          
        <td>Text of date cell.</td> 
    </tr>
</table>

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

[note]There is no **dateCellTemplate** in such views as "day" and "timelineDay".

#####See Also#####
- [Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')