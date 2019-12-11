---
default: null
type: String | Array<dxSchedulerAppointmentTemplate> | DataSource | DataSource_Options
---
---
##### shortDescription
Specifies the origin of data for the widget.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
  The URL of a JSON file or service that returns JSON data.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 The **DataSource** is an object that provides an API for data processing. The **DataSource**'s underlying data access logic is isolated in a store. Refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') and [DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/') guides for more information about the **DataSource**. 

    [note] Turn the **DataSource**'s [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') off to prevent data from partitioning.

#include widgets-ref-datasource-fieldname-note

To display appointments, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/') section of the widget's API. Alternatively, you can implement a [custom template](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/'). 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergooglecalendarintegration"
}

#####See Also#####
- [Scheduler - Data Binding](/concepts/05%20Widgets/Scheduler/020%20Data%20Binding '/Documentation/Guide/Widgets/Scheduler/Data_Binding/')