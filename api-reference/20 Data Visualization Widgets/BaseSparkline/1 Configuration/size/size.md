---
##### merge

---
By default, the UI component occupies the entire area of the container. If you need to set a particular size for the UI component, different from the container's size, assign a height and width in pixels to **height** and **width** properties of the **size** object.

Using the **size** object, you can hide the UI component. For this purpose, simply assign 0 to both the height and width of the UI component.

[note]The **size** configuration object reserves space for the main UI component elements, while displaying a tooltip may require extra space. To reserve the area around the UI component for the tooltip, you can apply a <a href="http://www.w3schools.com/css/css_margin.asp" target="_blank">margin</a> to the UI component's container.