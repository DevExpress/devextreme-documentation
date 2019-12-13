---
##### merge

---
By default, the widget occupies the entire area of the container. If you need to set a particular size for the widget, different from the container's size, assign a height and width in pixels to **height** and **width** properties of the **size** object.

Using the **size** object, you can hide the widget. For this purpose, simply assign 0 to both the height and width of the widget.

[note]The **size** configuration object reserves space for the main widget elements, while displaying a tooltip may require extra space. To reserve the area around the widget for the tooltip, you can apply a <a href="http://www.w3schools.com/css/css_margin.asp" target="_blank">margin</a> to the widget's container.