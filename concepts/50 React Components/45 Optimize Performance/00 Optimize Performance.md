DevExtreme React Components may exhibit lower performance due to unnecessary component re-renders. Unnecessary re-renders may produce the following side effects:

- The component responds to a click incorrectly. 
- The component discards its value on input.
- The component displays data incorrectly (for example, the [DataGrid](/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/) shows gray placeholders).
- Element selection does not work.
- The [render](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_a_Rendering_Function) or [component](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_a_Custom_Component) functions work unexpectedly.
- Slow performance.

This help topic describes best practices that ensure the component updates only when necessary.

