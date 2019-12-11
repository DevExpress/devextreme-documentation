---
##### shortDescription
This section describes the configuration options of the **PivotGridDataSource** object.

---
[note]To create a **PivotGridDataSource** instance that uses custom data access logic, pass the [CustomStore configuration object](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/') to the **PivotGridDataSource** constructor as shown below. 

    <!--JavaScript-->
    var myPivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        load: function(loadOptions) {
            // data loading logic
        },
        byKey: function(key) {
            // data access by key logic
        }
    });