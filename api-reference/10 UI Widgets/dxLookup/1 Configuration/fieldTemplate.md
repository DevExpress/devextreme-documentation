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

So, in the **Knockout approach**, you can bind template elements to the item's fields directly (see the code below). To access another binding context within a field template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In the **AngularJS approach**, if you need to access the item object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive (see the code below). Add the directive to the widget element to specify an alias to the root object of an item. Without this directive, item object fields are beyond reach. To access another binding context within a field template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

---
#####AngularJS#####

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myField' }" dx-item-alias="itemObj">
        <div dx-text-box: { value: itemObj.name + ' (' + itemObj.capital + ')' } "></div>
    </div>

#####Knockout#####

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myField' }">
        <div data-bind="dxTextBox: { value: name + ' (' + capital + ')' } "></div>
    </div>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Templates/jQuery/Light/"
}

#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')