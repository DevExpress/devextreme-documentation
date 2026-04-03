---
id: dxScheduler.Options.views.snapToCellsMode
type: Enums.SnapToCellsMode
---
---
##### shortDescription
Specifies how a Scheduler View snaps appointments to the grid.

---
The Scheduler can snap appointments to the grid. When this feature is enabled, the component increases appointment dimensions and never reduces them.

The following **snapToCellsMode** values are available:

- *"always"*: Scheduler snaps all appointments to the grid.
- *"auto"*: Only appointments that occupy less than two cells are snapped to the grid.
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

- **snapToCellsMode** does not affect appointment [resizing](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowResizing) behavior.
- This property overrides [snapToCellsMode](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#snapToCellsMode) defined at the component level.
- The *"agenda"* view ignores this property.

[/note]

#####See Also#####
- [cellDuration]({currentpath}/#cellDuration)