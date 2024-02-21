---
id: dxFormGroupItem.captionTemplate
type: template
---
---
##### shortDescription
Specifies a template that can be used to replace group caption with custom content.

##### param(data): Object
The group item's data.

##### field(data.caption): String
The group [caption](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#caption).

##### field(data.component): dxForm
The Form instance.

##### field(data.name): String
The group item's [name](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#name).

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
The template name or container.

---
This property overrides the [caption](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#caption).