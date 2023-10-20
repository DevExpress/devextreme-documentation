You can define custom content in DevExtreme components. We supply 2 types of properties for this task: ones that end with *'render'*, and ones that end with *'component'*.

The *'render'* properties are useful when you need to pass relatively straightforward markup as custom content like simple HTML or JSX. Refer to the following article to see an example: [Using a Rendering Function](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_a_Rendering_Function).

If your custom content involves more complexity, implement a React component and pass its name to the *'component'* property. Refer to the following article to see an example: [Using a Custom Component](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_a_Custom_Component).

In some cases, you need to use the *'template'* properties instead. Refer to the following article to learn more: [Using the Template Component](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization/Using_the_Template_Component).