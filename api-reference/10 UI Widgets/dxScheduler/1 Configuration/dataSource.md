---
default: null
type: String | Array | DataSource | DataSource_Options
---
---
##### shortDescription
A data source used to fetch data to be displayed by the widget.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

If you access a data source containing [Scheduler](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/') appointments using a CustomStore, the function passed to the **load** option should support the **Scheduler** field in addition to a standard field set of the argument object. This field holds an object containing the following fields.

- **startDate**  
 Specifies the start date of a range of appointments to be loaded.

- **endDate**  
 Specifies the end date of a range of appointments to be loaded.

- **resources**  
 Specifies resources used to filter the appointments to be loaded.

<!---->

    <!--JavaScript-->var schedulerInstance = $("#schedulerContainer").dxScheduler("instance");

    var myDataSource = new data.DataSource({
        store: new data.CustomStore({
            load: function(options) {
                var result = $.Deferred();
                $.ajax({
                    url: "/data/appointments",
                    data: {
                        start: schedulerInstance.getStartViewDate().getTime(),
                        end: schedulerInstance.getEndViewDate().getTime(),
                        ownerid: schedulerInstance.option("resources")
                    }
                }).done(function(response){
                    result.resolve(response);
                });
                return result.promise();
            }
        })
    });

[note]Filtering by date range and resources should also be implemented on the server.

[note]If you use [mapping](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') for your data, its [filtering](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') becomes unavailable.

You can assign an array directly to this option as well as use the [Data Source](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') object provided by the DevExtreme library.

To display appointments, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/') section of the widget's API. Alternatively, you can implement a custom item template. 


<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergooglecalendarintegration" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>