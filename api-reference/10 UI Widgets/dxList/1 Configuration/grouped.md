---
id: dxList.Options.grouped
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether data items should be grouped.

---
When this option is **true**, make sure that all data source objects have the following structure:

    <!--JavaScript-->var dataSource = [{
        key: "Group 1", // Group caption 
        items: [ // Items in the group
            { ... },
            { ... }
        ]
    }, {
        // ...
    }];

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/"
}

You can supply data to this structure using the **DataSource** object's [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option.

[note]Only one-level grouping is supported.

#####See Also#####
- [List - Grouping](/concepts/05%20Widgets/List/14%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/')