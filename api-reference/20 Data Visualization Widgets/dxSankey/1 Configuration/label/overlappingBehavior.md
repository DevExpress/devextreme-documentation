---
id: dxSankey.Options.label.overlappingBehavior
acceptValues: 'ellipsis' | 'hide' | 'none'
type: String
default: 'ellipsis'
---
---
##### shortDescription
Specifies how to arrange labels when there is insufficient space to display them all.

---
You can set this option to rearrange two overlapping labels. It accepts the following values: 

- *"ellipsis"*   
Adds ellipsis to one label to leave more space for the other.

- *"hide"*  
Hides one label.

- *"none"*  
Leaves labels overlapped.

Use the `SankeyLabelOverlappingBehavior` enum to specify this option when the widget is used as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>. This enum accepts the following values: `Ellipsis`, `Hide`, and `None`.