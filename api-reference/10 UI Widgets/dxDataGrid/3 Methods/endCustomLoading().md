---
##### shortDescription
Hides the [load panel](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/130%20Load%20Panel.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Load_Panel').

---
Normally, a load panel in **DataGrid** is hidden automatically when the widget is ready. But if you have invoked the load panel from code using the [beginCustomLoading(messageText)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/beginCustomLoading(messageText).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#beginCustomLoadingmessageText') method, you must call the **endCustomLoading()** method to hide it.