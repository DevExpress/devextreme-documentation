If your component does not display a scrollbar while you can scroll the page or the parent element, check the following conditions:

- None of the component parents in DOM have a fixed height.
- The component height is `auto`.

The image below shows DataGrid in Popup, but scrolling is enabled in Popup and not in DataGrid.

![DataGrid in Popup with a native scrollbar](/images/Troubleshooting/scrolling-grid-in-popup-native-scrolling.gif)

To resolve the issue, do one of the following:
- Set a fixed height for the component.
- Set the component height to `100%` and a fixed height for one of the component parent elements.