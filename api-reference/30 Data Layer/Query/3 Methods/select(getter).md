---
##### shortDescription
Applies the specified transformation to each item.

##### param(getter): Object
The getter specifying the transformation rules.

##### return: Object
This Query object.

---
The following example demonstrates how to get an array of **price** values of initial Query items.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).select("price").toArray();

For the information on getters, refer to the [Getters and Setters section](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') of the Data Layer article.