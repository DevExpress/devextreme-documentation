---
##### shortDescription
Sets the current search operation.

##### param(op): string
A search operation expression.

---
The available search operations are: **"="**, **"<>"**, **">"**, **">="**, **"<"**, **"<="**, **"startswith"**, **"endswith"**, **"contains"** and **"notcontains"**.

    <!--JavaScript-->
    dataSource.searchExpr("firstName");
    dataSource.searchOperation("contains");
    dataSource.searchValue("Jo");

For more information on searching, refer to the [Search Api section](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/2%20Search%20Api.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api') of the Data Layer article.