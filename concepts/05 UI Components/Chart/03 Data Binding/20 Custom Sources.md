Access to a custom data source is configured using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component. DevExtreme provides <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">ASP.NET</a> and <a href="https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md" target="_blank">PHP</a> extensions that help configure it and implement server-side data processing. You can also use the third-party extension for <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">MongoDB</a>. 

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the next example. 

#include common-code-customsource-rawmode-pagingdisabled

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/"
}
    
In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the Chart:

- **Sorting settings**: [sort](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/sort.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort')         
Present if the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') property is set.

- **Filtering settings**: [filter](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/filter.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter')    
Present if the **DataSource**'s [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') property is set.

- **Searching settings**: [searchExpr](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchExpr.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchExpr'), [searchOperation](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchOperation.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchOperation'), and [searchValue](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchValue.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchValue')     
Present if [corresponding properties](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') are set in the **DataSource**.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [ ... ] // result data objects
    }

This example shows how to make a query for data.

#include dataviz-code-customsource

#####See Also#####
- [Bind Series to Data](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/')
- [Update Data in the Chart](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')
- [Data Aggregation](/concepts/05%20UI%20Components/Chart/88%20Data%20Aggregation '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/')
- [Data Layer - DataSource Examples | Custom Sources](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources')
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, data binding, provide data, custom data source, CustomStore, DataSource, load
