---
id: dxDiagram.Options.pageOrientation
acceptValues: 'portrait' | 'landscape'
type: String
default: 'portrait'
---
---
##### shortDescription
Specifies the page orientation.

---
[note]

- If you call the [import](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/import(data_updateExistingItemsOnly).md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#importdata_updateExistingItemsOnly') method, it applies the imported page settings and the **pageOrientation** option is ignored.

- Page settings are stored in a diagram model. The **pageOrientation** property is not in effect if the model is read-only (the [readOnly](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#readOnly')  property is set to **true**).

[/note]

#include common-ref-enum with {
    enum: "`DiagramPageOrientation`",
    values: "`Portrait`, `Landscape`"
}