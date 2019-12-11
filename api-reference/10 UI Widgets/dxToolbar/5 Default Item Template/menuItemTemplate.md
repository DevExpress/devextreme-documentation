---
type: template
---
---
##### shortDescription
Specifies a template that should be used to render a menu item.

##### return: string|jQuery
A template name or a template container.

---
Whether you use a default or a custom template for menu items, you can specify a specific template for a particular menu item. To do so, set the **menuItemTemplate** field for the data source object of this menu item. The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/').
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')