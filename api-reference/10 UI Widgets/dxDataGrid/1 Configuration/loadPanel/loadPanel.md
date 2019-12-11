---
type: Object
---
---
##### shortDescription
Specifies options configuring the [load panel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/130%20Load%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Load_Panel').

---
When **DataGrid** operates with a large number of records or uses a remote storage as a data source, loading data takes time. As data is being prepared, **DataGrid** displays a load panel.

The load panel consists of a pane, a loading indicator and a text. You can specify whether the pane or loading indicator must be displayed using the [showPane](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/showPane.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#showPane') or [showIndicator](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/showIndicator.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#showIndicator') options respectively. The text displayed by the load panel can be specified using the [text](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/text.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#text') option. Also, you can change the height or width of the load panel using the corresponding options of the **loadPanel** configuration object.

Additionally, you can show/hide the load panel from code when using the [beginCustomLoading(messageText)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/beginCustomLoading(messageText).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#beginCustomLoadingmessageText') and [endCustomLoading()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/endCustomLoading().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#endCustomLoading') methods.

Since the grid load panel is practically the DevExtreme [LoadPanel](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/') widget, you can specify any option belonging to this widget in the **loadPanel** object.