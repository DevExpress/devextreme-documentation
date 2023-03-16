DevExtreme includes the [setErrorHandler](/api-reference/30%20Data%20Layer/Utils/setErrorHandler.md '/Documentation/ApiReference/Data_Layer/Utils/#setErrorHandler') utility method to help you handle errors that occur within the entire data layer. Pass an error handler to this method. The handler accepts a JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object as a parameter.

    <!--JavaScript-->
    DevExpress.data.setErrorHandler(function (error) {
        console.log(error.message);
    });

    // or when using modules
    import { setErrorHandler } from "data/errors";

    setErrorHandler(function(error) {
        console.log(error.message);
    });

A Store enables you to handle errors that occur only within itself. To handle Store errors, assign an error handling function to the **handleError** configuration property of the Store.

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        name: "MyStore",
        errorHandler: function(error) {
            console.log(error.message);
        }
    };

---

##### jQuery

DevExtreme also provides an ability to handle errors that occur during operation execution. All DevExtreme data transfer operations are asynchronous and return a Promise (a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a>) allowing you to specify both success and error callbacks.

##### Angular

#include data-binding-promise

##### Vue

#include data-binding-promise

##### React

#include data-binding-promise

---

The following example illustrates how to handle errors that occurred during the execution of the [load](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') operation of a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            // process result
        })
        .fail(function(error) {
            console.log(error.message);
        });