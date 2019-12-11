---
default: 'localStorage'
acceptValues: 'custom' | 'localStorage' | 'sessionStorage'
type: String
---
---
##### shortDescription
Specifies the type of storage where the state is saved.

---
This option accepts the following values: 

- *"sessionStorage"*    
    The state is stored for the duration of the browser's session.

- *"localStorage"*  
    The state is stored in the local storage and has no expiration time.

- *"custom"*       
    Puts state storing into manual mode. You need to implement the [customSave](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/customSave.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#customSave') and [customLoad](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/customLoad.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#customLoad') functions. 

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `StateStoringType` enum. This enum accepts the following values: `LocalStorage`, `SessionStorage`, and `Custom`.