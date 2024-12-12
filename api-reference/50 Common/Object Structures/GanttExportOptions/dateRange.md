---
id: GanttExport.Options.dateRange
type: Enums.GanttPdfExportDateRange | Object
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


Note that the `startDate` and `endDate` properties do not filter Gantt tasks. For example, the exported Gantt chart displays rows even if their tasks are invisible within the specified date range. 

Refer to the [pdfExporter.exportGantt(options)](/api-reference/50%20Common/utils/pdfExporter/exportGantt(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions') topic to see an example.

