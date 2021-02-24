The **List** can display items as a two-level hierarchy: parent and child items. To group items, set the [grouped](/Documentation/ApiReference/UI_Components/dxList/Configuration/#grouped) property to **true**. The component can automatically group items when the data is structured as a multidimensional [array of objects](/Documentation/Guide/UI_Components/List/Grouping/In_the_Data_Source/). Each object must contain a unique **key** value and an array of list **items**. An alternative to the **key** + **items** structure is a flat array which is used in this example. In this case use the **DataSource**'s **store** property as shown in the [Bind the List to Data](/Documentation/Guide/UI_Components/List/Getting_Started_with_List/#Bind_the_List_to_Data) article. Define the [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property within the **DataSource** instance, then specify a field name witihin your data object to group data by.

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