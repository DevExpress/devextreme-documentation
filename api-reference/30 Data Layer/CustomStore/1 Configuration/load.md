---
type: function
---
---
##### shortDescription
The user implementation of the [load(options)](/api-reference/30%20Data%20Layer/Store/3%20Methods/load(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions') method.

##### param(options): object
An object specifying data shaping options.

##### field(options.filter): object
Filter expression.

##### field(options.sort): object
Sort expression.

##### field(options.select): object
Select expression.

##### field(options.group): object
Group expression.

##### field(options.skip): number
The index of the first loaded item.

##### field(options.take): number
The number of loaded items.

##### field(options.userData): object
A bag for holding user-defined parameters.

##### field(options.requireTotalCount): boolean
Specifies whether the function passed to this option should resolve the jQuery.Deferred with the second argument containing the <b>totalCount</b> field.

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