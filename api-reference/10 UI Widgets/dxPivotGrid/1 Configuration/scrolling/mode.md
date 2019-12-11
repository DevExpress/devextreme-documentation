---
default: 'standard'
acceptValues: 'standard' | 'virtual'
type: string
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
    
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-pivot_grid-virtual_scrolling" class="button orange small fix-width-155" style="margin-right:20px;" target="_blank">View Demo</a>