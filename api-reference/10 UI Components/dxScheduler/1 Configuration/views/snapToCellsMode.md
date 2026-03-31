---
id: dxScheduler.Options.views.snapToCellsMode
type: Enums.SnapToCellsMode
---
---
##### shortDescription
Specifies how a Scheduler View snaps appointments to grid.

---
If a Scheduler is bound to a [dataSource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource), you can snap appointments to grid. If this functionality is active, the Scheduler increases appointment dimensions (never shrinks appointments).

The following **snapToCellsMode** values are available:

- *"always"*: Scheduler snaps all appointments to grid.
- *"auto"*: Appointments that cover more than half of a cell are stretched to occupy the entire cell.
- *"never"*: Scheduler does not snap appointments to grid.

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