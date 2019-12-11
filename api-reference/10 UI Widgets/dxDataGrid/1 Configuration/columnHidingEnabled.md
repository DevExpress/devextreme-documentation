---
default: false
type: boolean
---
---
##### shortDescription
Specifies whether or not the widget should hide columns in order to adapt to the screen or container size.

---
Displaying **DataGrid** in your app, you may want to use different layouts for different screen sizes. While desktop monitors provide enough space to display all columns, mobile screens do not. In that case, you can enable the widget to hide certain columns automatically if they do not fit into the screen size. For this purpose, assign *true* to the **columnHidingEnabled** option. Information from hidden columns will still be avaialble in the adaptive detail row.

For hiding columns, the **DataGrid** uses the following principles. 

1. The lesser the [hidingPriority](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/hidingPriority.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#hidingPriority') option value, the higher the probability that this column is hidden.
2. If [column width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') option is not specified, a column becomes hidden in case its text is larger than the current column width.
3. If a column has fixed width, it becomes hidden in case its width does not fit the whole grid width. 

#####See Also#####
- [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onAdaptiveDetailRowPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onAdaptiveDetailRowPreparing') - allows you to customize the adaptive detail rows.

<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>