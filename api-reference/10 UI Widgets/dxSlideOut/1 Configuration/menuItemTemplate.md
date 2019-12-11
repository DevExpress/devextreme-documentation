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
As in all container widgets in DevExtreme, slide-out menu items are displayed by a default HTML template. This template is based on certain fields of the [data source](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#dataSource'). You can define a custom menu item template that will use specific fields of the data source.

    <!--HTML--><div id="slideOut" data-bind="dxSlideOut: { dataSource: items, selectedIndex: selectedIndex }">
        <div data-options="dxTemplate: { name: 'menuItem' } ">
            This is <div data-bind="text: text"></div>
        </div>
    </div>

[note]A binding context of a menu item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly (see the code above). To access another binding context within a menu item template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

If you have several menu item templates specified within the widget, assign the name of a specific template to the widget's **menuItemTemplate** option.

You can define the markup for a menu item template as a separate element, as demonstrated below.

    <!--HTML--><script type="text/html" id="person-template">
        <h3 data-bind="text: name"></h3>
        <p>Address: <span data-bind="text: address"></span></p>
    </script>

To set the common template as a menu item template, pass the template container element to the **menuItemTemplate** option. The option accepts a jQuery object, a DOM node, or a function that returns a jQuery object or a DOM node.