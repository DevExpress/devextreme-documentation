---
default: 'single'
acceptValues: 'none' | 'single' | 'multiple'
type: String
---
---
##### shortDescription
Specifies the runtime sorting mode.

---
Sorting in the **DataGrid** widget can be carried out in a single or multiple mode. For a comprehensive overview of these modes, refer to the [Single Mode](/concepts/05%20Widgets/DataGrid/020%20Sorting/020%20Sorting%20in%20UI/20%20Single%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Sorting/#Sorting_in_UI/Single_Mode') or [Multiple Mode](/concepts/05%20Widgets/DataGrid/020%20Sorting/020%20Sorting%20in%20UI/30%20Multiple%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Sorting/#Sorting_in_UI/Multiple_Mode') articles.

If you must disable sorting, assign *"none"* to the **mode** option.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GridSortingMode` enum. This enum accepts the following values: `Single`, `Multiple` and `None`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/MultipleSorting/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>