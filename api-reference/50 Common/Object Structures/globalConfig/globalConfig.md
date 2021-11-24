---
id: globalConfig
module: core/config
export: globalConfig
type: Object
---
---
##### shortDescription
Specifies settings that affect all DevExtreme UI components.

---
Pass this object to the [DevExpress.config(globalConfig)](/api-reference/50%20Common/utils/config().md '/Documentation/ApiReference/Common/Utils/#config') method to apply these setting, or call the same method without arguments to get the object with current settings.

    DevExpress.config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        //...
    });
