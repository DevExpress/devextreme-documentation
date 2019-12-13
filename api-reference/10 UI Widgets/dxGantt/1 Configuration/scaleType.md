---
id: dxGantt.Options.scaleType
acceptValues: 'auto' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies the zoom level of tasks in the **Gantt** chart.

---

The **scaleType** option specifies the zoom level for tasks when the **Gantt** widget is initialized or when you call the **option()** method.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            scaleType: 'hours',
            // ...
        });
    }); 

---

If the **scaleType** option is set to *"auto"*, the widget is scaled to fit all tasks in the **Gantt** chart's visible area. 

To browse tasks across various levels of detail in real time, hold the CTRL key and scroll the mouse wheel to zoom (in or out).
