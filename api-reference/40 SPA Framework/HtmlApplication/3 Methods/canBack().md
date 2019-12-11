---
##### shortDescription
Returns a Boolean value indicating whether or not backwards navigation is currently possible.

##### return: boolean
<i>true</i> if the backwards navigation is possible. Otherwise, the value is <i>false</i>.

---
When the navigation system operates in ['website'](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/6%20Navigation%20in%20Web%20Apps.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Web_Apps') mode, this method always returns *true*. In ['mobileApp'](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Mobile_Apps) mode, this method returns *false* if the current view is a root view in the navigation history; otherwise, it returns *true*.