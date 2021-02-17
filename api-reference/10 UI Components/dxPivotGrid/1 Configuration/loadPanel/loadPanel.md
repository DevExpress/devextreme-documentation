---
id: dxPivotGrid.Options.loadPanel
type: Object
---
---
##### shortDescription
Specifies properties configuring the load panel.

---
When PivotGrid operates with a large number of records or uses a remote storage as a data source, loading data takes time. As data is being prepared, PivotGrid displays a load panel.

The load panel consists of a pane, a loading indicator and a text. You can specify whether the pane or loading indicator must be displayed using the [showPane](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/loadPanel/showPane.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/loadPanel/#showPane') or [showIndicator](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/loadPanel/showIndicator.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/loadPanel/#showIndicator') properties respectively. The text displayed by the load panel can be specified using the [text](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/loadPanel/text.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/loadPanel/#text') property. Also, you can change the height or width of the load panel using the corresponding properties of the **loadPanel** configuration object.

Since the grid load panel is practically the DevExtreme [LoadPanel](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Components/dxLoadPanel/') UI component, you can specify any property belonging to this UI component in the **loadPanel** object.