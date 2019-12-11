---
##### shortDescription
Obtains the total count of items that will be returned by the **load()** function.

##### param(obj): object
An object holding filtering and grouping options.

##### field(obj.filter): object
Data filtering conditions.

##### field(obj.group): object
Data grouping options.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the total item count is obtained.

---
<!--JavaScript-->
    myStore.totalCount(options)
        .done(function(result) {
            // 'result' contains the item count.
        })
        .fail(function(error) {
            // handle error
        });

For more information on filtering and grouping options, refer to the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') and [Grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping') sections of the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data') article.