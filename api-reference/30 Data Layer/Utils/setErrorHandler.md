---
id: Utils.setErrorHandler
module: common/data
export: setErrorHandler
type: function(handler)
---
---
##### shortDescription
A method that specifies a function to be executed when a [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/') component throws an error.

##### param(handler): function()
An error handler. Accepts a JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object as a parameter.

---
---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.data.setErrorHandler(function (error) {
        console.log(error.message);
    });
    // ===== or when using modules =====
    import { setErrorHandler } from "data/errors";

    setErrorHandler(function(error) {
        console.log(error.message);
    });


##### Angular

    <!-- tab: app.component.ts -->
    import { setErrorHandler } from "data/errors";

    setErrorHandler(function(error) {
        console.log(error.message);
    });

##### Vue

    <!-- tab: App.vue -->
    import { setErrorHandler } from "data/errors";

    setErrorHandler(function(error) {
        console.log(error.message);
    });

##### React

    <!-- tab: App.js -->
    import { setErrorHandler } from "data/errors";

    setErrorHandler(function(error) {
        console.log(error.message);
    });

---

#####See Also#####
- [Handling Errors](/concepts/70%20Data%20Binding/5%20Data%20Layer/55%20Handling%20Errors.md '/Documentation/Guide/Data_Binding/Data_Layer/#Handling_Errors')