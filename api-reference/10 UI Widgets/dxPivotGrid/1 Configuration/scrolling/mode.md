---
default: 'standard'
acceptValues: 'standard' | 'virtual'
type: String
---
---
##### shortDescription
Specifies the scrolling mode.

---
There are two different scrolling modes.

- **Standard Mode**        
    In a standard scrolling mode, the grid loads the entire summary data at once. This operation may affect grid performance as the loaded data may contain many summary values.

- **Virtual Mode**        
    In a virtual scrolling mode, the grid loads a summary value at runtime when it gets into a field of vision. Once a summary cell is out of the field of vision, it is removed from the grid. This behavior allows an end-user to scroll through large amounts of grid records without notable lags.      
    
When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridScrollingMode` enum. This enum accepts the following values: `Standard` and `Virtual`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-pivot_grid-virtual_scrolling"
}