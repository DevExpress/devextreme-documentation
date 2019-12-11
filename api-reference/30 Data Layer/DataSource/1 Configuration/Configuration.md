---
##### shortDescription
This section describes configuration options used to configure the data source.

---
[note]To create a **DataSource** instance that uses custom data access logic, pass the [CustomStore configuration object](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/') to the **DataSource** constructor. As an example, consider the following synthetic implementation, which generates a read-only infinite list.

    <!--JavaScript-->
    var infiniteListSource = new DevExpress.data.DataSource({
        load: function(loadOptions) {
            var result = [ ];
            for(var i = 0; i < loadOptions.take; i++)
                result.push({ id: 1 + loadOptions.skip + i });
            return result;
        },
        byKey: function(key) {
            return { id: key };
        }
    });