---
type: array | DataSource | DataSource configuration | string
---
---
##### notUsedInTheme

##### shortDescription
Specifies the origin of data for the widget.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.  
 <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LocalDataSource/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

- URL       
 A URL to JSON data or to a service returning data in JSON format.  
 <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

[note]When using the **DataSource** object, turn the [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') off to prevent data from partitioning.

#####See Also#####
- **series** | [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/argumentField.md '{basewidgetpath}/Configuration/series/#argumentField')
- **series** | [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueField.md '{basewidgetpath}/Configuration/series/#valueField')
- [getDataSource()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getDataSource().md '{basewidgetpath}/Methods/#getDataSource')
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer')
- [Data Layer - Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples')