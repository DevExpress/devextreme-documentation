Note the following AI Assistant specifics and best practices:

- The assistant does not have access to component data out of the box. This can cause a command failure in certain usage scenarios.

    For instance, to select the last row on a page (when [paging](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/) is enabled), the assistant calls the `selectByIndexes` command and uses the page size to specify an index. If the number of rows on the active page is smaller than the page size, the command fails.

- AI Assistant may not preserve results of previously executed commands of the same type. Specify if the AI should preserve or discard previous results in your requests (using keywords such as "also" or "only").

- If {WidgetName} is bound to a large dataset, the `selectAll` command may increase the context size of requests beyond the limits of your AI service. The `selectAll` command adds all row keys to the request [context](/Documentation/ApiReference/UI_Components/dxTreeList/Types/AIAssistantRequestCreatingEvent/#context) (in [onAIAssistantRequestCreating](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onAIAssistantRequestCreating)). To avoid this behavior, you can enable **selection**.[deferred](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#deferred).

- The assistant does not support certain actions that are only accessible in the component UI (for instance, expanding/collapsing groups).

#####See Also#####
- [PredefinedCommands](/Documentation/ApiReference/Common_Types/grids/PredefinedCommands/)