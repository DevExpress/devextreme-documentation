DevExtreme React Components may have reduced performance due to unnecessary component re-renders that can also cause the following side effects:

- The component responds to a click incorrectly. 
- The component discards its value on input.
- The component displays data incorrectly (for example, the [DataGrid](/concepts/05%20UI%20Components/DataGrid/00%20Getting%20Started%20with%20DataGrid '/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/') shows gray placeholders).
- Element selection does not work.
- The [render](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/55%20Markup%20Customization/3%20Using%20a%20Rendering%20Function.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_a_Rendering_Function') or [component](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/55%20Markup%20Customization/5%20Using%20a%20Custom%20Component.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_a_Custom_Component') functions work unexpectedly.

This help topic describes best practices that ensure the component updates only when necessary.

