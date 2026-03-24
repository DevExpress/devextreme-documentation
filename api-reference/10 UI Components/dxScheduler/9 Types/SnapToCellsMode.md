---
id: Enums.SnapToCellsMode
acceptValues: 'always' | 'auto' | 'never'
type: Union
references: dxScheduler.Options.snapToCellsMode|dxScheduler.Options.views.snapToCellsMode
---
---
##### shortDescription
Specifies when Scheduler snaps appointment edges to the cell grid.

---
The following values are available:

- *"always"*: Scheduler snaps all appointment edges to the cell grid.
- *"auto"*: Appointments that cover at least 50% of a cell are stretched to fill the cell.
- *"never"*: Scheduler does not adjust appointment dimensions.