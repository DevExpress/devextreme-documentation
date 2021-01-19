---
id: dxDataGrid.Options.summary.texts
type: Object
---
---
##### shortDescription
Contains options that specify text patterns for summary items.

---
Depending on their [type](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType'), summary items use one of predefined text patterns specified in the **summary**.**texts** object. For example, summary items of the *"avg"* type use the pattern specified by the [avg](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/texts/avg.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/texts/#avg') field of the **texts** object.

By default, a summary item is located in the column that provides data for it. This column is called the "parent column". However, a summary item may be located [in any other column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn') or [in a group row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter'). To specify text patterns for such summary items, use options with the *OtherColumn* addition in their name. For example, summary items of the *"avg"* type located outside their parent column use the pattern specified by the [avgOtherColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/texts/avgOtherColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/texts/#avgOtherColumn') field of the **texts** object.

When implementing a pattern, you can access the summary item value with applied [format](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/valueFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat') using position marker 0. If the summary item is placed outside its parent column, you can also access the [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption') of the parent column using position marker 1. Place each of these position markers within curly brackets.