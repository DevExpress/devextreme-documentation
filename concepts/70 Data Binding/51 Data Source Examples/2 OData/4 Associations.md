Consider the following ODataContext.

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        entities: {
            Categories: { 
                key: "CategoryID", 
                keyType: "Int32" 
            },
            Products: { 
                key: "ProductID", 
                keyType: "Int32" 
            }
        }
    });

Assume that each **Product** entity is connected to a **Category** via the **Product.Category** navigation property.

Navigation properties are usually deferred and are not loaded automatically together with the owning entity. To load both entities at once, use the [expand](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/expand.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#expand') load options extension, specific for ODataStore.

    <!--JavaScript-->
    var productSource = new DevExpress.data.DataSource({
        store: context.Products,
        expand: [ "Category" ]
    });
    
The **expand** option is also supported by the [byKey](/api-reference/30%20Data%20Layer/ODataStore/3%20Methods/byKey(key_extraOptions).md '/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#byKeykey_extraOptions') method.

    <!--JavaScript-->
    context.Products.byKey(1, { expand: [ "Category" ] });

Another task is updating a navigation property or inserting a new entity with a navigation property, in other words creating links between entities. To accomplish this, use the [objectLink(entityAlias, key)](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/objectLink(entityAlias_key).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#objectLinkentityAlias_key') method of the ODataContext.

In the following example, the Category property of the Product entity with the key **1** is changed to the Category with the key **2**.

    <!--JavaScript-->
    context.Products.update(1, {
        Category: context.objectLink("Categories", 2)
    });
