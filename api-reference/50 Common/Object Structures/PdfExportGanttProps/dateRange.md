---
id: PdfExportGanttProps.dateRange
acceptValues: 'all' | 'visible'
type: String | Object
---
---
##### shortDescription
Specifies the date range for which to export tasks.

---

The **dateRange** property accepts the following values: 

- *'all'* or *'visible'* to export only visible or entire Gantt data

        dateRange: 'visible'

- A range of task indexes

        dateRange: {
            startIndex: 0,
            endIndex: 5
        }

- A range of <a href="https://www.w3schools.com/js/js_dates.asp" target="_blank">Date</a> values

        dateRange: {
            startDate: new Date(2020, 0, 1),
            endDate: new Date(2020, 1, 1)
        }