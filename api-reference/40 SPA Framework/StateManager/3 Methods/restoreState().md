---
##### shortDescription
Restores the application state that has been saved by the [saveState()](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/saveState().md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#saveState') method to the state storage.

---
Use this method to restore the current application state when required, e.g., when the application is recreated. This method passes the request to restore the saved state to all the state sources that are ["known"](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/addStateSource(stateSource).md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#addStateSourcestateSource') to the state manager.

[note]By default, the [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object calls this method during its initialization so that the previously saved state is restored, in case anything was saved.