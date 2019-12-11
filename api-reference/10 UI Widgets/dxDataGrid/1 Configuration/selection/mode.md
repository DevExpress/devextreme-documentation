---
default: 'none'
acceptValues: 'none' | 'single' | 'multiple'
type: String
---
---
##### shortDescription
Specifies the selection mode.

---
Selection in the **DataGrid** widget can be carried out in a single or multiple mode. For a comprehensive overview of these modes, refer to the [Single Mode](/concepts/05%20Widgets/DataGrid/017%20Selection/020%20Selecting%20in%20UI/20%20Single%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Selection/#Selecting_in_UI/Single_Mode') and [Multiple Mode](/concepts/05%20Widgets/DataGrid/017%20Selection/020%20Selecting%20in%20UI/30%20Multiple%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Selection/#Selecting_in_UI/Multiple_Mode') articles.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `SelectionMode` enum. This enum accepts the following values: `None`, `Single` and `Multiple`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/RowSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Row Selection Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/MultipleRecordSelectionModes/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Multiple Row Selection Demo</a>