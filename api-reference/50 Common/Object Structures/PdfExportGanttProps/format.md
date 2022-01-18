---
id: PdfExportGanttProps.format
type: String | Object
default: undefined
---
---
##### shortDescription
Specifies the document size.

---

The **format** property accepts the following formats: 

- Standard document sizes from A0 to A10

        format: 'a4'

- Custom document width and height

        format: {
            width: 210,
            height: 300
        }

- Auto (Gantt adjusts document size to the exported data) 

        format: 'auto'