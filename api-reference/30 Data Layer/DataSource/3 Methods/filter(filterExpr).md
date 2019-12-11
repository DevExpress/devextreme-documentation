---
##### shortDescription
Sets the **filter** option value.

##### param(filterExpr): Object
A filter expression.

---
<!--JavaScript-->
    dataSource.filter("age", ">", 18);

For information on filter expressions, refer to the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') section of the Data Layer article.

To clear filtering conditions, call this method with **null** as a parameter.