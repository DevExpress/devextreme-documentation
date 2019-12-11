---
default: 'cell'
type: template
---
---
##### shortDescription
The template to be used for rendering calendar cells.

##### param(itemData): object
An object holding data associated with the cell to be rendered.

##### param(itemIndex): number
The index of the cell to be rendered.

##### param(itemElement): jQuery
An HTML element of the cell to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
The binding context of the template as well as the **itemData** parameter of a function passed to this option is an object containing the following fields.

- **text**  
 A text displayed by the cell.

- **date**  
 A Date object associated with the cell.

- **view**  
 The name of the current view.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

[note]A binding context of an item template is the data source object that corresponds to the currently rendered cell. To access another binding context within an item template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.