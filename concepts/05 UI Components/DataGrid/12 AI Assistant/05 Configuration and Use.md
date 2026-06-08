To activate the AI Assistant, configure the following properties:

- Specify [aiIntegration](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/aiIntegration.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#aiIntegration') or **aiAssistant**.[aiIntegration](/api-reference/40%20Common%20Types/15%20grids/AIAssistant/aiIntegration.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#aiIntegration')
- Set **aiAssistant**.[enabled](/api-reference/40%20Common%20Types/15%20grids/AIAssistant/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#enabled') to `true`

Once activated, {WidgetName} adds a predefined item (*"aiAssistantButton"*) to the component [toolbar](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/toolbar.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/'). This button opens the AI Assistant chat in a pop-up window.

[note]

Ensure users can access the AI Assistant:

- Do not hide the {WidgetName} toolbar (do not set **toolbar**.[visible](/api-reference/_hidden/dxDataGridToolbar/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/#visible') to `false`).
- If you define **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/), include *"aiAssistantButton"* in the array.

[/note]

You can specify [chat](/api-reference/40%20Common%20Types/15%20grids/AIAssistant/chat.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#chat') and [popup](/api-reference/40%20Common%20Types/15%20grids/AIAssistant/popup.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#popup') objects in **aiAssistant** to customize the assistant window. These objects support DevExtreme [Chat](/api-reference/10%20UI%20Components/dxChat/1%20Configuration '/Documentation/ApiReference/UI_Components/dxChat/Configuration/') and [Popup](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/') configuration and allow you to integrate options such as [Chat suggestions](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/suggestions.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#suggestions').

You can also define **aiAssistant**.[title](/api-reference/40%20Common%20Types/15%20grids/AIAssistant/title.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#title') to specify a custom title for the AI Assistant popup.