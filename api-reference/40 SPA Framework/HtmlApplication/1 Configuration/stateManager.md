---
type: Object
---
---
##### shortDescription
A state manager to be used in the application.

---
When initializing the **HtmlApplication** object, the [StateManager](/api-reference/40%20SPA%20Framework/StateManager '/Documentation/ApiReference/SPA_Framework/StateManager/') object is created and assigned to the [stateManager](/api-reference/40%20SPA%20Framework/HtmlApplication/2%20Fields/stateManager.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Fields/#stateManager') field. You can use the application's state manager to manipulate the application state - add additional state sources, save and restore the state when required.

By default, the [session storage](https://en.wikipedia.org/wiki/Web_storage#Local_and_session_storage) is used by the application state manager as a state storage. You can use another storage specifying it using the [stateStorage](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/stateStorage.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#stateStorage') option of the **HtmlApplication** object.