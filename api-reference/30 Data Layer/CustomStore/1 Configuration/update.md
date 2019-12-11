---
type: function(key, values)
---
---
##### shortDescription
The user implementation of the [update(key, values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/update(key_values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values') method.

##### param(key): Object|String|Number
The key value of the item being updated.

##### param(values): Object
The object containing new values for the specified item.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been updated.

---
The method passed to this option should return either the [jQuery.Deferred](https://api.jquery.com/jQuery.Deferred) promise or the **jQuery.Deferred** compatible object.

You can resolve the returned jQuery.Deferred with any data. For example, the key of the updated item.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        update: function (key, values) {
            var deferred = $.Deferred();
            $.ajax({
                url: SERVICE_URL + "/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            }).done(function(){
                deferred.resolve(key);
            });
            return deferred.promise();
        }
    });