---
id: dxGantt.Options.dependencies.dataSource
type: Array<Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to the data source which contains dependencies.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies
            },
            //...
        });
    });

---
