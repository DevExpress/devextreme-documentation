---
##### shortDescription
Adds an object that implements an interface of a *state source* to the state manager's collection of state sources.

##### param(stateSource): Object
An object that has the <b>saveState(storage)</b>, <b>restoreState(storage)</b> and <b>removeState(storage)</b> methods to manipulate a particular state in the application.

---
To manipulate the application's state, the state manager passes the requests received from the [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object to the state sources that are collected using the **addStateSource(stateSource)** method. The state sources must have the following methods.

- **saveState(storage)**
- **restoreState(storage)**
- **removeState(storage)**

To remove a state source from the state manager's collection, use the [removeStateSource(stateSource)](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/removeStateSource(stateSource).md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#removeStateSourcestateSource') method.