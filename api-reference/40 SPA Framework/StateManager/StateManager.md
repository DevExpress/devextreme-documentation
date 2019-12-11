---
module: framework/state_manager
export: default
type: Object
---
---
##### shortDescription
An object that stores the current application state.

---
In an application, there can be different information that should be saved and restored when required, e.g., when the application is closed and then opened. For instance, the current navigation history should be saved when closing the application so that the last displayed view is displayed again when reopening the application. Thus, the navigation manager implements special methods that characterize it as a *state source*. As there can be several state sources in an application, the application should have a state manager that "knows" about all of them and calls their methods to save/restore their states.

The **StateManager** object has a collection of state sources that should be notified when a request to save/restore the current state arrives. By default, only the navigation manager is added to this collection. To add another state source to this collection, use the state manager's [addStateSource(stateSource)](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/addStateSource(stateSource).md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#addStateSourcestateSource') method. You can remove a state source from this collection when required by using the [removeStateSource(stateSource)](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/removeStateSource(stateSource).md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#removeStateSourcestateSource') method.

When the [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') requests to save/clear/restore the application state, the **StateManager** object calls the [saveState()](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/saveState().md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#saveState')/[restoreState()](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/restoreState().md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#restoreState')/[clearState()](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/clearState().md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#clearState') method, in which the corresponding method of each of the "known" state sources is called.

By default, the [session storage](https://en.wikipedia.org/wiki/Web_storage#Local_and_session_storage) is used as a state storage. You can use another storage specifying it using the [stateStorage](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/stateStorage.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#stateStorage') option of the **HtmlApplication** object.