---
id: dxForm.Options.customizeItem
type: function(item)
---
---
##### shortDescription
Specifies a function that customizes a form item after it has been created.

##### param(item): dxFormSimpleItem | dxFormGroupItem | dxFormTabbedItem | dxFormEmptyItem | dxFormButtonItem
The item's object.

---
If you did not define form items using the [items](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/items.md '{basewidgetpath}/Configuration/#items') property, the Form UI component creates them automatically according to the structure of an object passed to the [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '{basewidgetpath}/Configuration/#formData') property. The **customizeItem** property enables you to modify properties of each generated item before this item is rendered. Each generated item passed to this function as an argument has a [Simple Item](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/') structure.

If the **items** property contains definition for form items, you usually do not need to pass a function to the **customizeItem** property because you can customize items before passing them to the **items** property. However, if you assign a function to this property, it will be called for each item. In this case, an item can have structure corresponding to one of the [item types](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/).

#####See Also#####
- [Customize a Simple Item](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/#Customize_a_Simple_Item')