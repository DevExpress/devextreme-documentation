---
##### shortDescription
Filters the current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') data.

##### param(criteria): array
A filter expression.

##### return: object
The Query object.

---
The following example demonstrates how to get an array of the Query items whose **price** value is lower than 500.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).filter("price", "<", 500).toArray();

For information on filter expressions, refer to the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') section of the Data Layer article.