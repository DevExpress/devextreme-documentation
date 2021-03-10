Exposes a method that enables you to handle errors that may occur within the DevExtreme Data Layer.

Exports:

- *setErrorHandler* - The [setErrorHandler](/Documentation/ApiReference/Data_Layer/Utils/#setErrorHandler) method

        require("data/errors").setErrorHandler(function (error) {
            console.log(error.message);
        });
