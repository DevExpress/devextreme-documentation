---
id: dxPolarChart.Options.argumentAxis.period
type: Number
default: undefined
---
---
##### shortDescription
Specifies the period of the argument values in the data source.

---
This option makes sense when you have a continuous argument axis. By default, all the argument values in the data source fit one circle of the argument axis. You can use the **period** option to set the interval of argument values that fits one circle of the argument axis. For instance, the argument values from 5 to 10 can be displayed with a period set to 5 in two argument axis circles: from 0 to 5 and from 6 to 10.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PeriodicData/"
}