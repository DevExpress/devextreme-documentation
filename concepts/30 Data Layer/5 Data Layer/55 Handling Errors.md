DevExtreme provides the [errorHandler](/api-reference/30%20Data%20Layer/Utils/errorHandler.md '/Documentation/ApiReference/Data_Layer/Utils/#errorHandler') utility property to help you handle errors that occur within the entire data layer. Assign the error handling function to this property. This function takes on the JavaScript **Error** object as a parameter.

    <!--JavaScript-->
    DevExpress.data.errorHandler = function(error) {
        console.log(error.message);
    };

A Store enables you to handle errors that occur only within itself. To handle Store errors, assign an error handling function to the **handleError** configuration option of the Store.

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        name: "MyStore",
        errorHandler: function(error) {
            console.log(error.message);
        }
    };

DevExtreme also provides an ability to handle errors that occur during operation execution. All DevExtreme data transfer operations are asynchronous and return a Promise (a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery) allowing you to specify both success and error callbacks.

The following example illustrates how to handle errors that occurred during the execution of the [load](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') operation of a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            // process result
        })
        .fail(function(error) {
            console.log(error.message);
        });