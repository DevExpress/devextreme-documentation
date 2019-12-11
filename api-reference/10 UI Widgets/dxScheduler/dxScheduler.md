---
module: ui/scheduler
inherits: ..\Widget\Widget.md
---
---
##### widgettree
dataSource: []

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Scheduler** is a widget that represents scheduled data and allows a user to manage and edit it.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxScheduler` jQuery plug-in.

        <!--HTML-->
        <div id="scheduler">

    <!---->

        <!--JavaScript-->
        $("#scheduler").dxScheduler({
            dataSource: schedulerDataSource
        });

- **Knockout**  
 Add a div element and apply the `dxScheduler` binding to this element.

        <!--HTML-->
        <div data-bind="dxScheduler: {
            dataSource: schedulerDataSource
        }">
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-scheduler` directive to this element.

        <!--HTML-->
        <div dx-scheduler="{
            dataSource: schedulerDataSource
        }">
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

The [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource') option takes on an array of appointment objects, as well as the [DataSource](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') object that requests appointment data from the associated [Store](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/') (local, OData or a custom one). The appointment objects loaded to the widget's data source may have a [particular set of fields](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/') that allow the widget to use a [default appointment template](/concepts/10%20UI%20Widgets/72%20Scheduler/10%20Visual%20Elements/010%20Appointment.md '/Documentation/Guide/UI_Widgets/Scheduler/Visual_Elements/#Appointment'). In case of custom data source fields, you can define a custom template for displaying appointments.

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')


Refer to the **Scheduler** [UI Widgets guides](/Documentation/Guide/#uiwidgets) for more information on working with the **Scheduler** widget.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulerscheduler" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=evabB5-rZZ8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=52" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>