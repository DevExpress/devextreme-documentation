---
type: function
---
---
##### shortDescription
The user implementation of the [insert(values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues') method.

##### param(values): object
An object representing the inserted item.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been inserted.

---
The method passed to this option should return either the [jQuery.Deferred](https://api.jquery.com/jQuery.Deferred) promise or the **jQuery.Deferred** compatible object.

You can resolve the returned jQuery.Deferred with any data. For example, the key of the inserted item.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        insert: function (values) {
            var deferred = $.Deferred();
            $.post("http://www.example.com/service/myEntity", values).done(function(data) {
                deferred.resolve(data.key);
            })
            return deferred.promise();
        }
    });