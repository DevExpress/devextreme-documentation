---
id: dxButtonGroup.Options.items
type: Array<dxButtonGroupItem>
inheritsType: dxButtonGroupItem
---
---
##### shortDescription
Configures buttons in the group.

---
The **items** array can contain:

- Objects with fields described in this section
- Objects with any other fields. In this case, specify the [buttonTemplate](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/buttonTemplate.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#buttonTemplate').


If you need to update the widget items, reassign the entire **items[]** array as shown in the following example:

    <!--JavaScript-->
    buttonGroupInstance.option('items', newItems);

#####See Also#####
- [keyExpr](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#keyExpr')
- [selectedItemKeys](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#selectedItemKeys')