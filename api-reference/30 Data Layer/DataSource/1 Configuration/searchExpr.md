---
type: getter | Array
---
---
##### shortDescription
Specifies a value by which the required items are searched.

---
In most cases, you should pass the name of a field by whose value data items are searched. If you need to search elements by several field values, assign an array of field names to this option.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: myStore,
        searchExpr: ["firstName", "lastName"]
    });

For more information on searching, refer to the [Search Api section](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/2%20Search%20Api.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api') of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') of the Data Layer article.