---
default: 'none'
acceptValues: 'none' | 'normal' | 'selectAll'
type: String
---
---
##### shortDescription
Specifies the current check boxes display mode.

---
The option accepts the following values.

- 'none'  
 The widget does not display check boxes.

- 'normal'  
 The widget displays a check box for each item.

- 'selectAll'  
 The widget displays a check box for each item and the 'select all' check box at the top of the widget.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `TreeViewCheckBoxMode` enum. This enum accepts the following values: `None`, `Normal` and `SelectAll`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>