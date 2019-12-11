---
type: string | array
---
---
##### shortDescription
Specifies the key properties within the data associated with the Store.

---
The key configuration option is required if you create a Store for read-write data access. The key property is specified by an appropriate [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters'). If you need to specify a compound key property, assign an array of getters to this option.

The following example demonstrates how to set **id** and **code** key properties.

    <!--JavaScript-->
    var storeConfig = {
        key: ["id", "code"]
    }