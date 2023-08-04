If your component is not scrollable, while you can scroll the page, check the following conditions:

- One of the component ancestors in the DOM has a fixed height.
- The component height is `auto`.

If all the conditions are met, to resolve the issue, limit the component's height. For example, set a fixed height either for the component or for one of its parent elements.