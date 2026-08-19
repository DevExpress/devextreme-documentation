---
id: dxScheduler.Options.resources.parentIdExpr
type: String
default: undefined
---
---
##### shortDescription
Specifies the data field that contains a resource item's parent ID.

---
Use this property to organize items of one resource kind into a hierarchy. For each child item, the specified field should contain its parent item's [valueExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/valueExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#valueExpr') value. Leave the field empty for top-level items.

To group appointments by this hierarchy, add the resource's [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr') value to the [groups](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/groups.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#groups') array. For example, rooms can be top-level items with employees nested under them.
