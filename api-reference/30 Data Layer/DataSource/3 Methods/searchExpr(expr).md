---
##### shortDescription
Sets the [searchExpr](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') option value.

##### param(expr): getter|Array
A getter representing a search expression.

---
<!--JavaScript-->
    dataSource.searchExpr("firstName");
    dataSource.searchOperation("contains");
    dataSource.searchValue("Jo");

For more information on searching, refer to the [Search Api section](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/2%20Search%20Api.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api') of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') of the Data Layer article.