---
id: dxScheduler.Options.snapToCellsMode
type: Enums.SnapToCellsMode
---
---
##### shortDescription
Specifies how the Scheduler component snaps appointments to the grid (applies to all view types).

---
The Scheduler can snap appointments to the grid. When **snapToCellsMode** is set to *"always"* or *"auto"*, the component only increases appointment dimensions.

The following **snapToCellsMode** values are available:

- *"always"*: Scheduler snaps all appointments to the grid.
- *"auto"*: Only appointments that occupy two or fewer cells are snapped to the grid.
- *"never"*: Scheduler does not snap appointments to the grid.

The default **snapToCellsMode** value varies by view:

<table class="dx-table">
    <tr>
        <th>Value</th>
        <th>Scheduler Views</th>
    </tr>
    <tr>
        <td><i>"never"</i></td>
        <td><i>"day"</i>, <i>"week"</i>, <i>"workWeek"</i>, <i>"timelineDay"</i>, <i>"timelineWeek"</i>, <i>"timelineWorkWeek"</i></td>
    </tr>
    <tr>
        <td><i>"always"</i></td>
        <td><i>"month"</i>, <i>"timelineMonth"</i></td>
    </tr>
</table>

[note]

- **snapToCellsMode** does not affect appointment [resizing](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowResizing.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowResizing').
- The *"agenda"* view ignores this property.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Timelines/"
}

#####See Also#####
- [cellDuration](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/cellDuration.md '{currentpath}/#cellDuration')
- **views[]**.[snapToCellsMode](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/snapToCellsMode.md '{currentpath}/views/#snapToCellsMode')