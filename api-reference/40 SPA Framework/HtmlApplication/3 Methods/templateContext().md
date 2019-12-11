---
##### shortDescription
Provides access to the object that defines the current context to be considered when choosing an appropriate template for a view.

##### return: Object
An object that represents the current context to be used when choosing an appropriate template for a view.

---
Currently, the object returned by this method specifies the current device orientation only. But you can add a custom context to this object so that it is also considered when choosing an appropriate template for a view. For this purpose, use the **option(optionName, optionValue)** method of TemplateContext object. For details, refer to the [Context Specific Markup](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/#Context_Specific_Markup) topic.