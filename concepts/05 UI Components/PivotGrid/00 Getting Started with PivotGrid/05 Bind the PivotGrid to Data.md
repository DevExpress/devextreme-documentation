The PivotGrid component can work with data from local arrays, OLAP services (Microsoft SQL Server Analysis Services), or any other data sources. Regardless of the data source type, use the [dataSource](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource) property to bind the PivotGrid to data. This property accepts a [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/) instance or configuration object.

PivotGridDataSource allows you to process data before displaying it in the PivotGrid. At its core, PivotGridDataSource contains a [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) that encapsulates data access logic. Different store types should be used with different data source types.

In this tutorial, we use the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) to bind the PivotGrid to an OLAP service. To configure the XmlaStore, specify the OLAP service's [url](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url), the [catalog](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog) that contains the OLAP cube to use, and the name of the [cube](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#cube). The following code binds the PivotGrid to a sample OLAP service:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            dataSource: {
                store: {
                    type: "xmla",
                    url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                    catalog: "Adventure Works DW Standard Edition",
                    cube: "Adventure Works"
                }
            },
        });
    });

---

If you want to bind the PivotGrid to other data source types, refer to the following demos for more information:

- [Simple Array](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SimpleArray/)

- [Web API Service](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/WebAPIService/)