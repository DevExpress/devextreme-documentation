---
id: dxGantt.Options.resourceAssignments.dataSource
type: Array<Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to the data source, which contains resource assignments.

---
---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resourceAssignments: {
                dataSource: resourceAssignments
            },
            //...
        });
    });

---
