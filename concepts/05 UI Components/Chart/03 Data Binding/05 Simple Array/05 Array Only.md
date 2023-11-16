---
tags: chart, data binding, provide data, array, process data, Query
---
To bind the Chart to an array, pass this array to the [dataSource](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource') property. The array should contain objects.

#include data-binding-examples-js-array

After that, you need to bind one or several Chart series to data. Depending on the [series type](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/10%20Line%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/') you chose, use one of the techniques described in the [Bind Series to Data](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/') topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LocalDataSource/"
}

#####See Also#####
- [Update Data in the Chart](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')
- [Data Aggregation](/concepts/05%20UI%20Components/Chart/88%20Data%20Aggregation '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

