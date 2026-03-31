---
id: Enums.SnapToCellsMode
acceptValues: 'always' | 'auto' | 'never'
type: Union
references: dxScheduler.Options.snapToCellsMode|dxScheduler.Options.views.snapToCellsMode
---
---
##### shortDescription
Specifies how Scheduler snaps appointments to grid.

---
The following **snapToCellsMode** values are available:

- *"always"*: Appointments occupy cells fully.
- *"auto"*: Appointments that cover more than half of a cell are stretched to occupy the full cell.
- *"never"*: Scheduler does not increase appointment dimensions.