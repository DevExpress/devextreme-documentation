---
##### shortDescription
Saves the current application state.

---
Use this method to save the current application state when required, e.g., when the application is closed. This method passes the request to save the current state to all the state sources that are ["known"](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/addStateSource(stateSource).md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#addStateSourcestateSource') to the state manager.

[note]This method is called in the DevExtreme [Basic Application](/concepts/50%20VS%20Integration/0%20Project%20Templates/1%20Basic%20Application.md '/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application') and [Multi-Channel Application](/concepts/50%20VS%20Integration/0%20Project%20Templates/15%20Multi-Channel%20Application '/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application') templates provided by Visual Studio.