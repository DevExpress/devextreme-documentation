---
id: dxFormGroupItem.template
type: template
---
---
##### shortDescription
A template to be used for rendering a group item.

##### param(data): Object
Information about the **Form**.

##### field(data.component): dxForm
The **Form** instance.

##### field(data.formData): Object
The [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "current group item" }

##### return: String | Element | jQuery
A template name or container.

---
Use the **template** option of a group item to display custom content under a group caption, for instance an image. To specify a custom template for items contained in a group, define the **template** option of each of these items.

![Form With Image](/images/UiWidgets/FormWithImage.png)

[note]To define a custom template used to render group items, assign the required template name or template container to each simple item's template option.

#####See Also#####
- [Custom Content within a Group](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups/10%20Custom%20Content%20within%20a%20Group.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/#Custom_Content_within_a_Group')