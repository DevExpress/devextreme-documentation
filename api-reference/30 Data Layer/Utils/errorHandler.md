---
id: Utils.errorHandler
module: data/errors
export: errorHandler
type: function(e)
---
---
##### shortDescription
Specifies the function that is executed when a data layer object throws an error.

##### param(e): Error
A JavaScript **Error** object.

---
<!--->

    <!--JavaScript-->
    DevExpress.data.errorHandler = function (error) {
        console.log(error.message);
    };

#####See Also#####
- [Handling Errors](/concepts/30%20Data%20Layer/5%20Data%20Layer/55%20Handling%20Errors.md '/Documentation/Guide/Data_Layer/Data_Layer/#Handling_Errors')