---
##### shortDescription
Removes the application state that has been saved by the [saveState()](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/saveState().md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#saveState') method to the state storage.

---
The saved application state is not restored after the **clearState()** method is called.

This method passes the request to clear the saved state to all the state sources that are ["known"](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/addStateSource(stateSource).md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#addStateSourcestateSource') to the state manager.