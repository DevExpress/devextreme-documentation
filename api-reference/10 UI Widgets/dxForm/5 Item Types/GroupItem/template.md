---
type: template
---
---
##### shortDescription
A template to be used for rendering a group item.

##### param(data): object
An object providing access to the field data, form instance and the configuration object of the editor.

##### param(itemElement): object
An HTML element of the group item to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
Use the **template** option of a group item to display custom content under a group caption, for instance an image. To specify a custom template for items contained in a group, define the **template** option of each of these items.

![Form With Image](/images/UiWidgets/FormWithImage.png)

[note]To define a custom template used to render group items, assign the required template name or template container to each simple item's template option.

A binding context of an item template is an object containing the following fields. So, you can bind template elements to these fields directly. To access another binding context within an item template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

- component  
 An instance of the current **Form** widget.

- dataField  
 A [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field bound to the form item being rendered.

- editorOptions  
 Configuration object of the current form item editor.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')