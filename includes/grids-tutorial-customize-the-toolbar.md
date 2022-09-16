The {WidgetName} includes an integrated toolbar that displays predefined and custom controls. To add or remove toolbar items, declare the [toolbar](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/).[items[]](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) array. Toolbar items within the UI preserve the order in which they are declared.

This tutorial illustrates how to add the following items to the toolbar:

- **Predefined controls**       
Declare a toolbar item element and specify the [name](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) that you want to customize (see the *"addRowButton"* configuration in the code below). If a control does not need customization, include its [name](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name) only. Ensure that [items[]](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) contain controls for all features that you enabled in your {WidgetName}.

- **DevExtreme components**     
Configure a DevExtreme component within a toolbar item element. In this tutorial, we extended the toolbar's item collection with a custom [Button](/Documentation/ApiReference/UI_Components/dxButton/) that expands or collapses all grid records.