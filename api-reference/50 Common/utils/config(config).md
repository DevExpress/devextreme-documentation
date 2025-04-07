---
id: config(config)
module: common
export: config
---
---
##### shortDescription
Configures your application before its launch.

##### param(config): GlobalConfig
Global configuration properties.

---
---
##### jQuery

    <!-- tab: index.js -->
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

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";
    
    config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";
    
    config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        // ...
    })

##### React

    <!-- tab: App.js -->
    import config from "devextreme/core/config";
    
    config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        // ...
    })

---

[note] This method should be called only once - at the application's launch. It is necessary to reload the page each time you need to apply new global configuration parameters.
