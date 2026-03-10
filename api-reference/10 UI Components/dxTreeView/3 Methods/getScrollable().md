---
id: dxTreeView.getScrollable()
---
---
##### shortDescription
Returns the scrolling component within the TreeView.

##### return: dxScrollable
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

#####See Also#####
#include common-link-callmethods