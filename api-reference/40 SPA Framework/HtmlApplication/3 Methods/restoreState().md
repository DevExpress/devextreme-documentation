---
##### shortDescription
Calls the [restoreState()](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/restoreState().md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#restoreState') method of the application's [StateManager](/api-reference/40%20SPA%20Framework/StateManager '/Documentation/ApiReference/SPA_Framework/StateManager/') object.

---
Currently, only information about the current [navigation stack](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps) is saved by the **saveState()** method. So, when calling the **restoreState()** method, the saved navigation stack becomes the current navigation stack in the application, and the view that was displayed the moment the state was saved is displayed again.