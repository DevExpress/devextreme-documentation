---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether or not a grid must preload pages adjacent to the current page when using virtual scrolling.

---
In the virtual [scrolling mode](/concepts/05%20Widgets/DataGrid/015%20Data%20Navigation/30%20Scrolling/020%20Vertical%20Scrolling.md '/Documentation/Guide/Widgets/DataGrid/Data_Navigation/#Scrolling/Vertical_Scrolling'), the grid loads a page when it gets into the grid's field of vision. Additionally, it can preload the pages adjacent to the currently displayed page. To enable this feature, assign *true* to the **preloadEnabled** option. With preloading enabled, the **DataGrid** widget scrolls records smoothly. However, enabling this feature may cause lags on devices with low performance.