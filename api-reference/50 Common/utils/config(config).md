---
id: config(config)
module: core/config
export: default
---
---
##### shortDescription
Configures your application before its launch.

##### param(config): globalConfig
Global configuration options.

---
DevExpress.config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        // ...
    });
    // ===== or when using modules =====
    import config from "devextreme/core/config";
    
    config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        // ...
    })

[note] This method should be called only once - at the application's launch. It is necessary to reload the page each time you need to apply new global configuration parameters.