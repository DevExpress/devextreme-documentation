---
##### shortDescription
Creates the [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') object for the underlying array.

##### return: object
The desired Query object.

---
This method is used internally by the [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), but you can also use it for advanced queries.

    <!--JavaScript-->
    var query = myStore.createQuery();

For more information on Queries, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept') article.