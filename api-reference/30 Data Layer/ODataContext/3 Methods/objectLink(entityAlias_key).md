---
##### shortDescription
Return a special proxy object to describe the entity link.

##### param(entityAlias): String
The type name.

##### param(key): Object|String|Number
The target entity key value.

##### return: Object
The desired proxy object.

---
This method is used within the [insert()](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#insertvalues') and [update()](/api-reference/30%20Data%20Layer/Store/3%20Methods/update(key_values).md '/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#updatekey_values') method calls.

The following example demonstrates how to change the Category property of the Product entity with the key **1** to the Category with the key **2**.

    <!--JavaScript-->
    context.Products.update(1, {
        Category: context.objectLink("Categories", 2)
    });

For more information on linking entities, refer to the [Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Associations) section of the Data Source Examples article.