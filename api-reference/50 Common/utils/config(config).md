---
module: core/config
export: default
---
---
##### shortDescription
Configures your application before its launch.

##### param(config): Object
Global configuration options.

---
The global configuration options are listed below. Setting them affects all DevExtreme widgets.

- **rtlEnabled**  
    Specifies whether the application supports a right-to-left representation. **rtlEnabled** is set to **false** by default.      
    The same option is available for individual widgets.

- **defaultCurrency**  
    Specifies the application's default currency. **defaultCurrency** is set to *'USD'* by default.

- **forceIsoDateParsing**  
    Specifies whether dates are parsed and serialized according to the ISO 8601 standard in all browsers. The default value of this option is **true**. This implies that widgets automatically detect the date-time values' format. You need to specify the format explicitly using the widget's **dateSerializationFormat** option if the values are not provided to the widget at design time. When you assign **false** to the **forceIsoDateParsing**, a browser's resources are utilized to parse and serialize date-time values.

<!---->

    <!--JavaScript-->var config = {
        rtlEnabled: true,
        defaultCurrency: "EUR",
        forceIsoDateParsing: false
    };
    DevExpress.config(config);

[note] This method should be called only once - at the application's launch. It is necessary to reload the page each time you need to apply new global configuration parameters.