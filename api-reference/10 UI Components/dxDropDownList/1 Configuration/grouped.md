---
id: dxDropDownList.Options.grouped
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether data items should be grouped.

---
When this property is **true**, make sure that all data source objects have the following structure:

    <!--JavaScript-->const dataSource = [{
        key: "Group 1", // Group caption 
        items: [ // Items in the group
            { ... },
            { ... }
        ]
    }, {
        // ...
    }];

You can supply data to this structure using the **DataSource** object's [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property.

[note]

- Only one-level grouping is supported.

- If you enable both this property and DataSource.[paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate'), the pagination works only on the group level.

[/note]

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/GroupedItems/",
    name: "SelectBox"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/GroupedItems/",
    name: "TagBox"
}

#####See Also#####
- [SelectBox - Grouping](/concepts/05%20UI%20Components/SelectBox/07%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/UI_Components/SelectBox/Grouping/')
- [TagBox - Grouping](/concepts/05%20UI%20Components/TagBox/07%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/UI_Components/TagBox/Grouping/')