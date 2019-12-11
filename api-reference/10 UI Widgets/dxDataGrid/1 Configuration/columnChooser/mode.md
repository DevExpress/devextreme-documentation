---
default: 'dragAndDrop'
acceptValues: 'dragAndDrop' | 'select'
type: string
---
---
##### shortDescription
Specifies how the end-user chooses columns.

---
In the *"dragAndDrop"* mode, the end-user moves column headers to the column chooser and back by drag-and-drop. In the *"select"* mode, the end-user selects column headers in the column chooser using check boxes. In both modes, the corresponding columns appear/disappear in the grid.

When displaying **DataGrid** on touch-enabled devices, it is more convenient to use the *"select"* mode. Yet on mouse-equipped clients, either mode is suitable.