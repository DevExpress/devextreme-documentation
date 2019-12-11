---
##### shortDescription
Starts loading data.

##### param(obj): Object
The object specifying data shaping options.

##### field(obj.filter): Object
Data filtering conditions.

##### field(obj.sort): Object
Data sorting options.

##### field(obj.select): Object
Data selection options.

##### field(obj.group): Object
Data grouping options.

##### field(obj.skip): Number
The count of items to be excluded from loading.

##### field(obj.take): Number
The count of items to be loaded.

##### field(obj.userData): Object
A bag holding user-defined parameters.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after data has been loaded.

---
<!--JavaScript-->
    store.load(options)
        .done(function(result) {
            // 'result' contains the loaded data
        })
        .fail(function(error) {
            // handle error
        })

For more information on data shaping options, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data') topic.