---
id: dxForm.getScrollable()
---
---
##### shortDescription
Returns the scrolling component within the Form.

##### return: Scrollable | undefined
The scrolling component's instance (a `Scrollable` object).

---
This method returns a `Scrollable` object used in our `ScrollView` component. As such, once you obtain the object, you can use [ScrollView](/Documentation/ApiReference/UI_Components/dxScrollView/) configuration properties. Note that the following options are not available:

Properties:

- **pullingDownText**  
- **pulledDownText**  
- **refreshingText**  
- **reachBottomText**  
- **onPullDown**  
- **onReachBottom**  

Methods:

- **release(preventScrollBottom)**
- **refresh()**

[note]

- This method returns a Scrollable instance only if [scrollingEnabled](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#scrollingEnabled) is `true`.
- When **scrollingEnabled** is `true`, Form contains a Scrollable even if content fits within the component and scrolling is not active.

[/note]

#####See Also#####
#include common-link-callmethods