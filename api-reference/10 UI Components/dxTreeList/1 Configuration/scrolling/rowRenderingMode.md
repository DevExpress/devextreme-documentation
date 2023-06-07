
Unlike the [mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/scrolling/#mode) property, which defines when to load data for rows, this property defines when to render them. The following rendering modes are available: 

- *"standard"*        
Renders all the loaded rows at once.

- *"virtual"*     
Renders only those rows that get into the viewport. Use this mode if the [pageSize](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#pageSize) is large. Specify the component's [height](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#height) and height of its container if you use the *virtual* mode. 

[note] The **rowRenderingMode** property value is *"virtual"* and cannot be changed if you set the **scrolling**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/scrolling/#mode) property to *"virtual"* or *"infinite"*. TreeList does not support server-side paging and virtual scrolling.