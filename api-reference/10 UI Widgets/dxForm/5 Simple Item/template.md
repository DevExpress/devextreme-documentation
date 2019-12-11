---
type: template
---
---
##### shortDescription
A template to be used for rendering the form item.

##### param(data): object
An object providing access to the field data, form instance and the configuration object of the editor.

##### param(itemElement): object
An HTML element of the item to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
A binding context of an item template is an object containing the following fields. So, you can bind template elements to these fields directly. To access another binding context within an item template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.

- **component**  
 An instance of the current **Form** widget.

- **dataField**  
 A [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field bound to the form item being rendered.

- **editorOptions**  
 The configuration object of the current form item editor.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')