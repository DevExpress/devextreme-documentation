To activate the AI Assistant, configure the following properties:

- Specify [aiIntegration](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#aiIntegration) or **aiAssistant**.[aiIntegration](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#aiIntegration)
- Set **aiAssistant**.[enabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#enabled) to `true`

Once activated, {WidgetName} adds a predefined item (*"aiAssistantButton"*) to the component [toolbar](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/). This button opens the AI Assistant chat in a pop-up window.

[note]

To ensure users can access the AI assistant, note the following recommendations:

- Do not hide the {WidgetName} toolbar (do not set **toolbar**.[visible](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/#visible) to `false`).
- If you define **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/), include *"aiAssistantButton"* in the array.

[/note]

You can specify [chat](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#chat) and [popup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#popup) objects in **aiAssistant** to customize the assistant window. These objects support DevExtreme [Chat](/Documentation/ApiReference/UI_Components/dxChat/Configuration/) and [Popup](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/) configration and allow you to integrate options such as [Chat suggestions](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#suggestions).

You can also define **aiAssistant**.[title](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#title) to specify a custom title for the AI Assistant popup.