---
id: dxDropDownList.Options.searchExpr
type: getter | Array<getter>
default: null
---
---
##### shortDescription
Specifies the name of a data source item field or an expression whose value is compared to the search criterion.

---
In most cases, you should pass the name of a field by whose value data items are searched. If you need to search elements by several field values, assign an array of field names to this option.

    <!--JavaScript-->
    searchExpr: ["firstName", "lastName"]

For more information on searching, refer to the [Search Api section](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/2%20Search%20Api.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api') of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') of the Data Layer article.