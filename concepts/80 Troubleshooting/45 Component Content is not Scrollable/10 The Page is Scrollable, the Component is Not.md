If your component does not display a scrollbar, while you can scroll the page or the parent element, check the following conditions:

- One of the component ancestors in the DOM has a fixed height.
- The component height is `auto`.

The image below shows DataGrid in Popup, and scrolling is enabled in Popup, not in DataGrid.

![DataGrid in Popup with a native scrollbar](/images/Troubleshooting/scrolling-grid-in-popup-native-scrolling.gif)

To resolve the issue, limit the component's height. For example, set a fixed height either for the component or for one of its parent elements.