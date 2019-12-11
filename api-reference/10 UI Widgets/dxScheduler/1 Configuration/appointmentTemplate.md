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

In **AngularJS approach**, if you need to access appointment object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS Approach#####

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

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')