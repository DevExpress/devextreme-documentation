---
module: data/errors
export: errorHandler
type: function
---
---
##### shortDescription
The global data layer error handler.

---
This utility property takes on an error handling function, which is executed when any error occurs within the data layer. The function passed to this property takes on the JavaScript **Error** object as a parameter.

    <!--JavaScript-->
    DevExpress.data.errorHandler = function(error) {
        console.log(error.message);
    };

For more information on handling errors, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer/55%20Handling%20Errors.md '/Documentation/Guide/Data_Layer/Data_Layer/#Handling_Errors') article.