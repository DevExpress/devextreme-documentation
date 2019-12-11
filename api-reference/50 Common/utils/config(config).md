---
module: core/config
---
---
##### shortDescription
Sets the global configuration object.

##### param(config): object
An object containing the required global configuration options.

---
The global configuration object contains the following fields:  

- **rtlEnabled** - Specifies whether or not the application supports a right-to-left representation.  
  By default, rtlEnabled is set to *false*.

- **defaultCurrency** - Specifies the default currency used in the application.  
  By default, defaultCurrency is set to *'USD'*.

        <!--JavaScript-->var config = {
            rtlEnabled: true,
            defaultCurrency: "EUR"
        };
        DevExpress.config(config);