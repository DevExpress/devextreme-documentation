---
id: dxScheduler.Options.views.snapToCellsMode
type: Enums.SnapToCellsMode
---
---
##### shortDescription
Specifies how Scheduler snaps appointment edges to the cell grid when loading data (within a specific view).

---
Scheduler supports snapping appointments loaded from the component [dataSource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource) to the cell grid. Scheduler increases appointment dimensions to implement this capability. The component does not shrink appointment containers to snap to the cell grid.

The following **snapToCellsMode** values are available:

- *"always"*: Appointments occupy cells fully.
- *"auto"*: Appointments that cover more than half of a cell are stretched to occupy the full cell.
- *"never"*: Scheduler does not increase appointment dimensions.

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

- This property overrides [snapToCellsMode](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#snapToCellsMode) defined at the component level.
- The *"agenda"* view ignores this property.

[/note]

#####See Also#####
- [cellDuration]({currentpath}/#cellDuration)