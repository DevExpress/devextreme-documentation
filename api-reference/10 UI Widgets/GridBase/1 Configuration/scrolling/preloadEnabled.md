---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether the widget should load pages adjacent to the current page. Applies only if **scrolling**.[mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling/mode.md '{basewidgetpath}/Configuration/scrolling/#mode') is *"virtual"*.

---
In virtual scrolling mode, a page is loaded when it gets into the viewport. If you set this option to **true**, adjacent pages will be loaded as well. Note that although this setting makes scrolling smoother, it may cause lags on devices with low performance.