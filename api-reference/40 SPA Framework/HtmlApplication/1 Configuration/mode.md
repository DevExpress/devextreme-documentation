---
default: 'mobileApp'
acceptValues: 'mobileApp' | 'webSite'
type: String
---
---
##### shortDescription
Specifies whether the current application must behave as a mobile or web application.

---
Use this option to notify the application whether it should be treated as a mobile application or a web application. Currently, the mode that you set using this option influences the following two aspects.

- How to build a navigation history in the application  
    In a *'webSite'* mode, the navigation history is linear and is based on browser history. In a *'mobileApp'* mode, the navigation history is based on navigation stacks and root views. To learn more about navigation history, refer to the [Navigation History in Mobile Apps](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps) and [Navigation in Web Apps](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Web_Apps) topics.
    
- Whether or not to initialize a view port for the application
    In a *'mobileApp'* mode, the mobile browser's viewport must be initialized. In a *'webSite'* mode, view port initialization is not needed.