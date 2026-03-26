---
id: dxScheduler.Options.views.snapToCellsMode
type: Enums.SnapToCellsMode
---
---
##### shortDescription
Specifies when Scheduler increases appointment dimensions to snap edges to the cell grid (within a specific view).

---
Scheduler supports snapping appointment containers to the cell grid. The component moves appointment edges away from the appointment center to implement this capability. Scheduler does not shrink appointment containers to snap to the cell grid.

The following **snapToCellsMode** values are available:

- *"always"*: Scheduler stretches all appointments to snap to the cell grid.
- *"auto"*: Appointment edges that are less than half a cell duration away from the cell grid are moved.
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

[note] This property is ignored in the *"agenda"* view.

#####See Also#####
- [cellDuration]({currentpath}/#cellDuration)