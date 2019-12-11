---
default: undefined
type: string
---
---
##### shortDescription
Specifies a pattern for the summary item text.

---
When implementing the pattern, you can access the summary item value with applied [format](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/valueFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#valueFormat') using position marker 0. If the summary item is placed in any other column rather than its [parent one](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column'), you can also access the [caption](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption') of the parent column using position marker 1. Place each of these position markers within curly brackets.

If your scenario requires more complex text customizations, utilize the [customizeText](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#customizeText') option.