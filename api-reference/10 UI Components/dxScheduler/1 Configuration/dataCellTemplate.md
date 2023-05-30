---
id: dxScheduler.Options.dataCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for table cells.

##### param(itemData): Object
The current table cell's data.

##### param(itemIndex): Number
The current table cell's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "table cell" }

##### return: String | UserDefinedElement
A template name or container.

---
The following image shows the difference between Scheduler cell types:

![DevExtreme Scheduler - Cell Types](/images/Scheduler/scheduler-cells.png)

Use this template for data cells only.

The data of this template consists of the following fields:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>startDate</code></td>    
        <td>Start date of the data cell.</td>
    </tr>
    <tr>
        <td><code>endDate</code></td>     
        <td>End date of the data cell.</td>
    </tr>
    <tr>
        <td><code>allDay</code></td>          
        <td>Specifies whether the appointment in cell lasts all day.</td>
    </tr>
    <tr>
        <td><code>groups</code></td>          
        <td>A group object to which data cell belongs.</td> 
    </tr>
    <tr>
        <td><code>groupIndex</code></td>          
        <td>Index of a group to which data cell belongs.</td> 
    </tr>
    <tr>
        <td><code>text</code></td>          
        <td>Text of data cell.</td> 
    </tr>
</table>

[note]There is no **dataCellTemplate** in the [agenda](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/050%20Agenda%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Agenda_View') view.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

#####See Also#####
- [Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')