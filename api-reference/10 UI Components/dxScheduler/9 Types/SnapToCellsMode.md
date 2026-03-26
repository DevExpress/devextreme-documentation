---
id: Enums.SnapToCellsMode
acceptValues: 'always' | 'auto' | 'never'
type: Union
references: dxScheduler.Options.snapToCellsMode|dxScheduler.Options.views.snapToCellsMode
---
---
##### shortDescription
Specifies when Scheduler increases appointment dimensions to snap edges to the cell grid.

---
The following **snapToCellsMode** values are available:

- *"always"*: Scheduler stretches all appointments to snap to the cell grid.
- *"auto"*: Appointment edges that are less than half a cell duration away from the cell grid are moved.
- *"never"*: Scheduler does not increase appointment dimensions.