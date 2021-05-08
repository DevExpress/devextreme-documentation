---
id: CollectionWidgetItem.template
type: template
---
---
##### shortDescription
Specifies a template that should be used to render this item only.

##### return: String | Element | jQuery
A template name or container.

##### param(itemData): any
<!-- Description goes here -->

##### param(itemIndex): Number
<!-- Description goes here -->

##### param(itemElement): DxElement
<!-- Description goes here -->

---
The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/').
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')