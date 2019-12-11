---
default: null
type: template
---
---
##### shortDescription
The template to be used for rendering the widget text field.

##### param(selectedItem): object
The data that is bound to the selected item.

##### param(fieldElement): object
An HTML element of the field to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
This option enables you to render the widget text field depending on selected item values.

A binding context of a field template is the data source object that corresponds to the currently rendered item.

So, in **Knockout approach**, you can bind template elements to the item's fields directly (see the code below). To access another binding context within a field template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access item object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive (see the code below). Add the directive to the widget element to specify an alias to the root object of an item. Without this directive, item object fields are beyond reach. To access another binding context within a field template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####Knockout Approach#####

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myField' }">
        <div data-bind="dxTextBox: { value: name + ' (' + capital + ')' } "></div>
    </div>

#####AngularJS Approach#####

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myField' }" dx-item-alias="itemObj">
        <div dx-text-box: { value: itemObj.name + ' (' + itemObj.capital + ')' } "></div>
    </div>


#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')