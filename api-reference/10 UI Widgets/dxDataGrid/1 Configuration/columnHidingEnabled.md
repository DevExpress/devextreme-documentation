---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether the widget should hide columns in order to adapt to the screen or container size.

---
You may want to use different layouts for different screen sizes when displaying the **DataGrid** in your app. While desktop monitors provide enough space to display all columns, mobile screens do not. In that case, you can enable the widget to hide certain columns automatically if they do not fit into the screen size. For this purpose, assign *true* to the **columnHidingEnabled** option. Information from hidden columns is still available in the adaptive detail row.

For hiding columns, the **DataGrid** uses the following principles:

1. The lower the [hidingPriority](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/hidingPriority.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#hidingPriority') option value, the higher the probability that this column is hidden. When you do not specify hiding priorities explicitly, their values ascend from right to left beginning with 0. This means that the widget hides the rightmost columns at first.
2. If the [width of a column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') is specified, this column hides only if it does not fit into the [width of the widget](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#width').
3. If the width of a column is not specified, this column hides only if its content overflows.

#####See Also#####
- [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onAdaptiveDetailRowPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onAdaptiveDetailRowPreparing') - allows you to customize the adaptive detail rows.

<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>