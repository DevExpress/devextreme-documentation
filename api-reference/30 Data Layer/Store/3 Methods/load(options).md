---
##### shortDescription
Starts loading data.

##### param(obj): object
The object specifying data shaping options.

##### field(obj.filter): object
Data filtering conditions.

##### field(obj.sort): object
Data sorting options.

##### field(obj.select): object
Data selection options.

##### field(obj.group): object
Data grouping options.

##### field(obj.skip): number
The count of items to be excluded from loading.

##### field(obj.take): number
The count of items to be loaded.

##### field(obj.userData): object
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