---
##### shortDescription
Displays the [load panel](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/130%20Load%20Panel.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Load_Panel').

##### param(messageText): string
Text to be displayed in the load panel.

---
Normally, **DataGrid** displays a load panel automatically when it is busy rendering or loading data. Additionally, the load panel can be invoked when required by calling the **beginCustomLoading(messageText)** method. If you call this method without the argument, the load panel displays text specified by the **loadPanel** | [text](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/text.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#text') option. To specify the appearance of the load panel, use the properties of the [loadPanel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/') configuration object.

Once invoked in code, the load panel will not hide until the [endCustomLoading()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/endCustomLoading().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#endCustomLoading') method is called.

[note] The load panel invoked from code does not replace the automatically invoked load panel. This circumstance might lead to a situation where the load panel invoked from code suddenly changes its text because it was overridden by the automatically invoked load panel. Hence, be mindful when invoking the load panel with different text.