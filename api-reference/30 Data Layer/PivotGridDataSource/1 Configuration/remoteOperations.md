---
id: PivotGridDataSource.Options.remoteOperations
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the data processing operations (filtering, grouping, summary calculation) should be performed on the server.

---
If you enable this option, the **PivotGrid** sends several requests to load data. At first launch, the widget sends a request to get the data structure. It contains the following [loadOptions](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/'):

    <!--JavaScript-->
    {
        skip: 0,
        take: 20
    }

The server should return an array of data objects. It may contain a single object if this object reflects the entire data structure.

Subsequent requests are different and contain the following **loadOptions**:

    <!--JavaScript-->
    {
        filter: [
            [ "dataFieldName1", "operator", "value" ],
            "and", // "or"
            [ "dataFieldName2", "operator", "value" ],
            // Filter for date fields
            // The following date components are supported:
            // year, month (from 1 to 12), day, dayOfWeek (from 0 to 6)
            // ['dateField.year', '>', '2000'],
            // "and", // "or"
            // ['dateField.dayOfWeek', '=', '4']
            // ...
        ],
        group: [
            // Group expression for numbers
            { selector: "dataFieldName1", groupInterval: 100, desc: false },
            // Group expression for dates
            { selector: "dataFieldName2", groupInterval: "year", desc: false },
            { selector: "dataFieldName2", groupInterval: "month", desc: false },
            // Group expression for strings
            { selector: "dataFieldName3", desc: true },
            // ...
        ],
        totalSummary: [
            { selector: "dataFieldName1", summaryType: "sum" }, 
            { selector: "dataFieldName2", summaryType: "min" },
            // ... 
        ],
        groupSummary: [
            { selector: "dataFieldName1", summaryType: "sum" }, 
            { selector: "dataFieldName2", summaryType: "min" },
            // ... 
        ]
    }

Refer to the [Custom Data Sources | Server-Side Data Processing](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources/2%20Load%20Data/5%20Server-Side%20Data%20Processing.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/#Load_Data/Server-Side_Data_Processing') article for more information on how DevExtreme components communicate with the server.

#include common-demobutton with {
    url: "Demos/WidgetsGallery/Demo/PivotGrid/WebAPIService/jQuery/Light/"
}

#####See Also#####
- [Configure the CustomStore for Local and Remote Operations](/concepts/05%20Widgets/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/Widgets/PivotGrid/Use_CustomStore/')