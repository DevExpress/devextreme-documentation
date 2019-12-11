---
default: null
type: template
---
---
##### shortDescription
The template to be used for rendering table cells.

##### param(itemData): object
The table cell object to be rendered.

##### param(itemIndex): number
The index of the table cell to be rendered.

##### param(itemElement): jQuery
An HTML element of the table cell to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
The binding context of a cell template is the object that corresponds to the currently rendered table cell.

So, in the **Knockout approach**, you can bind template elements to the cell object fields. To access another binding context within a template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In the **AngularJS approach**, if you need to access cell object fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, the fields of cell object are unavailable. To access another binding context within a table cell template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

[note]There is no **dataCellTemplate** in the [agenda](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types/050%20Agenda%20View.md '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View') view.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scheduler-cell_templates"
}

#####See Also#####
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')