---
uid: viz\core\base_widget:BaseWidgetLoadingIndicator.enabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the loading indicator should be displayed and hidden automatically.

---
<!--
The loading indicator's visibility is tied to the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/')'s [load](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method: it appears when the method's execution starts and hides when the execution is complete. The {WidgetName} calls the method internally.

[note] The [dataSource](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') property does not have to be set to a **DataSource** instance because the UI component wraps anything passed to this property in the **DataSource**. 

If you want to change the loading indicator's visibility, use the [show](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/loadingIndicator/show.md '{basewidgetpath}/Configuration/loadingIndicator/#show') property.
-->