---
type: template
---
---
##### shortDescription
Specifies a template that should be used to render a menu item.

##### return: String|Node|jQuery
A template name or a template container.

---
Whether you use a default or a custom template for menu items, you can specify a specific template for a particular menu item. To do so, set the **menuTemplate** field for the data source object of this menu item. The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/').
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')