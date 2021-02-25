The **List** can display items as a two-level hierarchy: parent and child items. To group items, set the [grouped](/Documentation/ApiReference/UI_Components/dxList/Configuration/#grouped) property to **true** and ensure that data is structured as a [hierarchical array of objects](/Documentation/Guide/UI_Components/List/Grouping/In_the_Data_Source/). Each object must contain a **key** property (parent) and an **items** property (child items).

An alternative to the **key** + **items** structure is a flat array grouped using the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) component. Wrap your array in a [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/) as shown below and use the DataSource's [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to specify a data field to group data by.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list1').dxList({
            dataSource: new DevExpress.data.DataSource({
                // ...
                group: 'Category',
            }),
            displayExpr: 'Name',
        });
            // ...
            grouped: true,
    });
    
---
