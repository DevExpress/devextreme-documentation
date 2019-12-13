You can use the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component to configure access to a custom data source. DevExtreme provides <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">ASP.NET</a> and <a href="https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md" target="_blank">PHP</a> extensions to configure it and implement server-side data processing. You can also use a third-party extension for <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">MongoDB</a>. 

To access a server that uses another technology, configure the **CustomStore** manually. In this case, data can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the following example: 

#include common-code-customsource-rawmode-pagingdisabled
    
In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (filtering, sorting, and others) you enabled in the **DataSource**. The following settings apply to the **Sankey**:

- **Sorting settings**: [sort](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/sort.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort')         
Present if the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') option is set.

- **Filtering settings**: [filter](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/filter.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter')    
Present if the **DataSource**'s [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') option is set.

- **Searching settings**: [searchExpr](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchExpr.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchExpr'), [searchOperation](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchOperation.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchOperation'), and [searchValue](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchValue.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchValue')     
Present if [corresponding options](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') are set in the **DataSource**.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [ ... ] // result data objects
    }

The following example shows how to make a query for data:

#include dataviz-code-customsource

#####See Also#####
- [DataSource Examples - Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources')
- [Update Data in the Sankey](/concepts/05%20Widgets/Sankey/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Sankey/Data_Binding/Update_Data/')
