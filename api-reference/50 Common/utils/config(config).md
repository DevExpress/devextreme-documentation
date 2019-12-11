---
module: core/config
export: default
---
---
##### shortDescription
Sets the global configuration object.

##### param(config): Object
An object containing the required global configuration options.

---
The global configuration object contains the following fields:  

- **rtlEnabled**  
    Specifies whether the application supports a right-to-left representation. By default, **rtlEnabled** is set to *false*.

- **defaultCurrency**  
    Specifies the default currency used in the application. By default, **defaultCurrency** is set to *'USD'*.

- **forceIsoDateParsing**  
    Specifies whether dates are parsed and serialized according to the ISO 8601 standard in all browsers. When you assign *true* to this option, widgets detect the format of date-time values automatically. If the values are not provided to the widget yet, you need to specify the format explicitly using the widget's **dateSerializationFormat** option. When you assign *false* to the **forceIsoDateParsing**, a browser's resources are utilized to parse and serialize date-time values.

        <!--JavaScript-->var config = {
            rtlEnabled: true,
            defaultCurrency: "EUR",
            forceIsoDateParsing: true
        };
        DevExpress.config(config);