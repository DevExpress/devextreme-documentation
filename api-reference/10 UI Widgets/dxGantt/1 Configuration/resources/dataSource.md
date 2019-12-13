---
id: dxGantt.Options.resources.dataSource
type: Array<Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to the data source, which contains resources.

---
---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resources: {
                dataSource: resources
            },
            //...
        });
    });

---
