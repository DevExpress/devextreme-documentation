---
default: 'item'
type: template
---
---
##### shortDescription
The template to be used for rendering appointments.

##### param(itemData): object
The appointment object to be rendered.

##### param(itemIndex): number
The index of the appointment to be rendered.

##### param(itemElement): jQuery
An HTML element of the appointment to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
A binding context of an appointment template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object fields. To access another binding context within an appointment template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS#####

    <!--HTML-->
    <div dx-scheduler="{
        dataSource: schedulerData,
        currentDate: currentDate,
        appointmentTemplate: 'appointment',
    }" dx-item-alias="appItem">
        <div data-options="dxTemplate: {name: 'appointment'}" style="padding: 0;">
            <div class="appointment-header">{{appItem.text}}</div>
            <div class="appointment-time">{{appItem.from}} - {{appItem.to}}</div>
        </div>
    </div>

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')