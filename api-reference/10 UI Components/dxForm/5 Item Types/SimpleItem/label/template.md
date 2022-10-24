---
id: dxFormSimpleItem.label.template
type: template
---
---
##### shortDescription
A template that can be used to replace the label with custom content.

##### param(itemData): Object
The item's data.

##### field(itemData.component): dxForm
The Form instance.

##### field(itemData.dataField): String
The item's [dataField](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField).

##### field(itemData.editorOptions): any
The item editor's [configuration](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions).

##### field(itemData.editorType): String
The editor's [type](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType).

##### field(itemData.name): String
The item's [name](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#name).

##### field(itemData.text): String
The label's [text](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#text).

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
A template name or container.

---
