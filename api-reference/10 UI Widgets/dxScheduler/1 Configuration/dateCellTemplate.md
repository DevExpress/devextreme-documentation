---
default: null
type: template
---
---
##### shortDescription
The template to be used for rendering date scale items.

##### param(itemData): object
The currently rendered object that represents a date scale item.

##### param(itemIndex): number
The index of the date scale item to be rendered.

##### param(itemElement): jQuery
An HTML element of the date scale item to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
A binding context of a date template is the object that corresponds to the currently rendered item of the date scale.

So, in the **Knockout approach**, you can bind template elements to the date scale item fields. To access another binding context within a template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In the **AngularJS approach**, if you need to access date scale item fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, object fields are beyond reach. To access another binding context within a date scale template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-scheduler="{
        dataSource: schedulerData,
        currentDate: currentDate,
        dateCellTemplate: 'dateTemplate',
    }" dx-item-alias="item">
        <div data-options="dxTemplate: {name: 'dateTemplate'}">
            <div class="date">{{ item.text }}</div>
        </div>
    </div>

[note]There is no **dateCellTemplate** in such views as 'day' and 'timelineDay'.

#####See Also#####
- [Visual Elements of Views](/Documentation/Guide/Widgets/Scheduler/Views/#Views)
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')