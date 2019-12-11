---
default: true
type: Boolean
---
---
##### shortDescription
A Boolean value specifying whether or not the search bar is visible.

---
To specify a field by which to search items, assign the required field name to the [searchExpr](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') configuration option of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object passed to the [dataSource](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#dataSource') option of the widget.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: myStore,
        searchExpr: "firstName"
    });

If you need to search items by several field values, assign an array of field names to the **searchExpr** option of the **DataSource**.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: myStore,
        searchExpr: ["firstName", "lastName"]
    });

For more information on searching, refer to the [Search Api section](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/2%20Search%20Api.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api') of the Data Layer article.