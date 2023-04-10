---
uid: common\grids:StateStoring.type
type: Enums.StateStoreType
default: 'localStorage'
---
---
##### shortDescription
Specifies the type of storage where the state is saved.

---
<!--
This property accepts the following values: 

- *"sessionStorage"*    
    The state is stored for the duration of the browser's session.

- *"localStorage"*  
    The state is stored in the &lt;a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank"&gt;window.localStorage&lt;/a&gt; object and has no expiration time.

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/StatePersistence/"
    }

- *"custom"*       
    Puts state storing into manual mode. You need to implement the [customSave](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/customSave.md '{basewidgetpath}/Configuration/stateStoring/#customSave') and [customLoad](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/customLoad.md '{basewidgetpath}/Configuration/stateStoring/#customLoad') functions. 

-->