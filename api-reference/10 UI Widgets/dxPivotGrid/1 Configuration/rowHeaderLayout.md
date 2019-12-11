---
default: 'standard'
acceptValues: 'standard' | 'tree'
type: String
---
---
##### shortDescription
Specifies the layout of items in the [row header](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers').

---
Frequently, items in the row header have a hierarchical structure. By default, these items are arranged in a line occupying a significant amount of space. If the area assigned to **PivotGrid** is limited, use a more compact tree layout. The image below illustrates the difference between standard and tree layouts.
![DevExpress DevExtreme HTML5 PivotGrid](/images/DataGrid/PivotGrid_rowHeaderLayout.png)

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PivotGridRowHeadersLayout` enum. This enum accepts the following values: `Standard` and `Tree`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/LayoutCustomization/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>