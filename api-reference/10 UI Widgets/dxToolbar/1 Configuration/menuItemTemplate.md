---
default: 'menuItem'
type: template
---
---
##### shortDescription
The template used to render menu items.

##### param(itemData): object
The menu item object to be rendered.

##### param(itemIndex): number
The index of the menu item to be rendered.

##### param(itemElement): jQuery
An HTML element of the menu item to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
As in all container widgets in DevExtreme, toolbar menu items are displayed by a default HTML template. This template is based on certain fields of the data source (these fields are listed in the description of the widgets that are used to present a toolbar menu). You can define a custom item template that will use specific fields of the data source. 

A binding context of a menu item template is the data source object that corresponds to the currently rendered item.

So, in **Knockout approach**, you can bind template elements to the item object fields directly. To access another binding context within a template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access item object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object of an item. Without this directive, item object fields are beyond reach. To access another binding context within a menu item template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')