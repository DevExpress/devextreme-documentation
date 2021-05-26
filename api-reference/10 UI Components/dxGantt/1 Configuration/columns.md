---
id: dxGantt.Options.columns
type: Array<dxTreeListColumn, String>
default: undefined
---
---
##### shortDescription
An array of columns in the Gantt.

---

The **columns** property accepts an array of columns. To configure a column, use a **dxTreeListColumn** object or specify a data source field (as a string value) to which the column is bound.

[note]

The Gantt UI component does not support:

- data sorting

- column templates

[/note]

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            columns: [{
                dataField: "title",
                caption: "Subject",
                width: 300
            }, {
                dataField: "start",
                caption: "Start Date"
            }, "end"
            ],
            // ...
        });
    });

---