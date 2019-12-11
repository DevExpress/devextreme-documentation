---
type: function(key)
---
---
##### shortDescription
The user implementation of the [byKey(key, extraOptions)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey_extraOptions) method.

##### param(key): Object|String|Number
The required key value.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been loaded.

---
The method passed to this option should return either the [jQuery.Deferred](https://api.jquery.com/jQuery.Deferred) promise or the **jQuery.Deferred** compatible object.

    <!--JavaScript-->
    var myStore = new DevExpress.data.CustomStore({
        byKey: function(key) {
            var d = new $.Deferred();
            $.get('http://data.example.com/products?id=' + key)
                .done(function (result) {
                    d.resolve(result[i]);
                });
            return d.promise();
        },
        . . .
    });