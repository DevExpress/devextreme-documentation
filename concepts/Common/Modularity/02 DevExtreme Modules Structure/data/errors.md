Exposes a method that enables you to handle errors that may occur within the DevExtreme Data Layer.

Exports:

- *setErrorHandler* - The [setErrorHandler](/api-reference/30%20Data%20Layer/Utils/setErrorHandler.md '/Documentation/ApiReference/Data_Layer/Utils/#setErrorHandler') method

        require("data/errors").setErrorHandler(function (error) {
            console.log(error.message);
        });
