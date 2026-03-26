---
id: dxScheduler.Options.views.snapToCellsMode
type: Enums.SnapToCellsMode
---
---
##### shortDescription
Specifies when Scheduler snaps appointment edges to the cell grid (within a specific view).

---
The following **snapToCellsMode** values are available:

- *"always"*: Scheduler snaps all appointment edges to the cell grid.
- *"auto"*: Appointments that cover at least 50% of a cell are stretched to fill the cell.
- *"never"*: Scheduler does not adjust appointment dimensions.

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