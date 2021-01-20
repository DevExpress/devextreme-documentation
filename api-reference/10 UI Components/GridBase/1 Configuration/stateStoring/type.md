---
id: GridBase.Options.stateStoring.type
acceptValues: 'custom' | 'localStorage' | 'sessionStorage'
type: String
default: 'localStorage'
---
---
##### shortDescription
Specifies the type of storage where the state is saved.

---
This option accepts the following values: 

- *"sessionStorage"*    
    The state is stored for the duration of the browser's session.

- *"localStorage"*  
    The state is stored in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a> object and has no expiration time.

- *"custom"*       
    Puts state storing into manual mode. You need to implement the [customSave](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring/customSave.md '{basewidgetpath}/Configuration/stateStoring/#customSave') and [customLoad](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring/customLoad.md '{basewidgetpath}/Configuration/stateStoring/#customLoad') functions. 

#include common-ref-enum with {
    enum: "`StateStoringType`",
    values: "`LocalStorage`, `SessionStorage`, and `Custom`"
}