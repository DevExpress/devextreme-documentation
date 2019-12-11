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
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

#include widgets-ref-datasource-fieldname-note

To display appointments, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/') section of the widget's API. Alternatively, you can implement a [custom template](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/'). 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergooglecalendarintegration"
}

#####See Also#####
- [Scheduler - Data Binding](/concepts/05%20Widgets/Scheduler/020%20Data%20Binding '/Documentation/Guide/Widgets/Scheduler/Data_Binding/')