React includes a DOM equivalent, a Virtual DOM (VDOM). Virtual DOM is a programming concept or "virtual" representation of a UI. When you insert or change an element, React compares the new VDOM and the previous VDOM. Since a React component is a function, when you use an object literal, it becomes a new object in memory. Therefore, the VDOM comparison result shows that the React component has been changed, and the component re-renders.

For example, declare the component...

    <!-- tab: App.js -->const MyComponent = ({props}) => {
        return <Button>{props.text}</Button>
    }

... and then implement the code below:

    <!-- tab: App.js --><MyComponent props={{text: 'Hello World'}} />

In this case, the `MyComponent` component always re-renders, even if a value does not change. Re-render side effects can be the following:

- The component works incorrectly on click. 
- The component discards its value on input.
- The component displays data incorrectly (for example, the [DataGrid](/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/) shows gray placeholders).
- The element selection does not work.
- The [render](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_a_Rendering_Function) or [component](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_a_Custom_Component) functions work unexpectedly.
- Slow performance.

Follow the steps below to avoid re-render issues in your application.

