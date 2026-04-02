---
id: Enums.SnapToCellsMode
acceptValues: 'always' | 'auto' | 'never'
type: Union
references: dxScheduler.Options.snapToCellsMode|dxScheduler.Options.views.snapToCellsMode
---
---
##### shortDescription
Specifies how Scheduler snaps appointments to the grid.

---
The following **snapToCellsMode** values are available:

- *"always"*: Scheduler snaps all appointments to the grid.
- *"auto"*: Appointments that cover more than half of a cell are stretched to occupy the entire cell.
- *"never"*: Scheduler does not snap appointments to the grid.