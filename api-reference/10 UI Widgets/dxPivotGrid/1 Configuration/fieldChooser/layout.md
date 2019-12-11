---
default: 0
acceptValues: 0 | 1 | 2
type: Number
---
---
##### shortDescription
Specifies the field chooser layout.

---
The image below shows different layout types.

![](/Content/images/doc/17_1/DataGrid/fieldChooserLayouts.png)

The following abbreviations are used on the image.

* **A** &#8212; All Fields
* **F** &#8212; Filter Fields
* **R** &#8212; Row Fields
* **C** &#8212; Column Fields
* **D** &#8212; Data Fields
 
When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridFieldChooserLayout` enum. This enum accepts the following values: `Layout0`, `Layout1` and `Layout2`.