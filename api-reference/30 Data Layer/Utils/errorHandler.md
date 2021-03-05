---
id: Utils.errorHandler
module: data/errors
export: errorHandler
type: function(e)
deprecated: 
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
- [Handling Errors](/concepts/70%20Data%20Binding/5%20Data%20Layer/55%20Handling%20Errors.md '/Documentation/Guide/Data_Binding/Data_Layer/#Handling_Errors')