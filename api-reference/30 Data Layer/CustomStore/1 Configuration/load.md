---
type: function(options)
---
---
##### shortDescription
The user implementation of the [load(options)](/api-reference/30%20Data%20Layer/Store/3%20Methods/load(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions') method.

##### param(options): Object
An object specifying data shaping options.

##### field(options.filter): Object
Filter expression.

##### field(options.sort): Object
Sort expression.

##### field(options.select): Object
Select expression.

##### field(options.group): Object
Group expression.

##### field(options.skip): Number
The index of the first loaded item.

##### field(options.take): Number
The number of loaded items.

##### field(options.userData): Object
A bag for holding user-defined parameters.

##### field(options.requireTotalCount): Boolean
Specifies whether the function passed to this option should resolve the jQuery.Deferred with the second argument containing the <b>totalCount</b> field.

##### field(options.searchValue): Object
The value to which the search expression value is compared.

##### field(options.searchOperation): String
A search operation expression.

##### field(options.searchExpr): getter|Array
A getter representing a search expression.

##### return: Promise
A promise of a deferred object resolved after data is loaded.

---
The function passed to this option should return a promise. More often, this is either a [jQuery.Deferred](https://api.jquery.com/jQuery.Deferred) promise or a **jQuery.Deferred** compatible object.

[note]In **AngularJS approach**, APIs for deferred/promises are exposed by the [$q service](https://docs.angularjs.org/api/ng/service/$q).

If the **loadOptions.requireTotalCount** field is *true*, the function should resolve the jQuery.Deferred with a second argument containing the **totalCount** field as shown in the following code snippet.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        load: function (loadOptions) {
            var deferred = $.Deferred();
            $.get('url/to/the/resource', loadOptions).done(function (response) {
                if (loadOptions.requireTotalCount === true)
                    deferred.resolve(response.data, { totalCount: response.totalCount });
                else
                    deferred.resolve(response.data)
            });
            return deferred.promise();
        }
    });

In **AngularJS approach**, if the **loadOptions.requireTotalCount** field is *true*, the promise must be resolved with an object of two fields: **data** and **totalCount**. In the following code snippet, the `.then()` method creates a promise internally and resolves it with the return from the callback function.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        load: function (loadOptions) {
            return $http.get('url/to/the/resource', loadOptions).then(function (response) {
                        if (loadOptions.requireTotalCount === true)
                            return { data: response.data, totalCount: response.totalCount };
                        else
                            return response.data;
                    })
        }
    });