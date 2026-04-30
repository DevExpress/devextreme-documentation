---
uid: ui/scheduler:SelectionEndEvent.selectedCellData
type: Array<any>
---
---
##### shortDescription
An array of objects that describe the selected cells.

---
Each object in the array contains the following properties describing a selected cell:

- `startDate` - the cell's start date and time.
- `endDate` - the cell's end date and time.
- `allDay` - indicates whether the cell belongs to the all-day panel.
- `groups` - the resource groups the cell belongs to.

The array items are ordered from the first selected cell to the last. Use `selectedCellData[0].startDate` and `selectedCellData[selectedCellData.length - 1].endDate` to obtain the start and end of the full selected range.