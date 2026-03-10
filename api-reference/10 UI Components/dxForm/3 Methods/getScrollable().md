---
id: dxForm.getScrollable()
---
---
##### shortDescription
Returns the scrolling component within the Form.

##### return: Scrollable | undefined
The scrolling component's instance (a `Scrollable` object).

---
This method returns a `Scrollable` object used in our `ScrollView` component. After you obtain this object, you can use [ScrollView](/api-reference/10%20UI%20Components/dxScrollView '/Documentation/ApiReference/UI_Components/dxScrollView/') configuration properties. Note that the following options are not available:

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

- This method returns a Scrollable instance only if [scrollingEnabled](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/scrollingEnabled.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#scrollingEnabled') is `true`.
- When **scrollingEnabled** is `true`, Form contains a Scrollable instance even if the content fits within the component and scrolling is not active.

[/note]

#####See Also#####
#include common-link-callmethods