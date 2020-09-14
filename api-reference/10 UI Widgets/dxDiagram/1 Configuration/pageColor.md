---
id: dxDiagram.Options.pageColor
type: String
default: 'white'
---
---
##### shortDescription
Specifies the color of a diagram page.

---
The following color formats are available:

- Longhand and shorthand hexadecimal notations. For example, `"#3b3"`, `"#31bb32"`.

- RGB and RGBA formats. For example, `"rgb(51,187,51)"`, `"rgba(0,204,0,1)"`.

- Named colors. For example, `"darkturquoise"`.

[note]

- If you call the [import](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/import(data_updateExistingItemsOnly).md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#importdata_updateExistingItemsOnly') method, it applies the imported page settings and the **pageColor** option is ignored.

- Page settings are stored in a diagram model. The **pageColor** property is not in effect if the model is read-only (the [readOnly](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#readOnly')  property is set to **true**).

[/note]
