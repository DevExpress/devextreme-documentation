Note the following AI Assistant specifics and best practices:

- The assistant does not have access to component data out of the box. In certain usage scenarios, this approach can cause commands to fail.

    For instance, to select the last row on a [page](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/), the assistant calls the `selectByIndexes` command and uses the page size to specify an index. If the number of rows on the active page is smaller than the page size, the command fails.

- AI Assistant may not preserve the results of executed commands of the same type. Specify if the AI should preserve or discard previous results in your requests (include keywords such as "also" or "only").

- If {WidgetName} is bound to a large dataset, the `selectAll` command may increase the context size of requests beyond the limits of your AI service. The `selectAll` command adds all row keys to the request [context](/Documentation/ApiReference/UI_Components/dxTreeList/Types/AIAssistantRequestCreatingEvent/#context) (in [onAIAssistantRequestCreating](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onAIAssistantRequestCreating)).

- The assistant does not support certain actions that are only accessible in the component UI (for instance, it cannot expand/collapse groups).

- If you expect users to request certain commands in the AI Assistant, ensure the corresponding {WidgetName} feature is enabled to avoid command failures.

#####See Also#####
- [PredefinedCommands](/Documentation/ApiReference/Common_Types/grids/PredefinedCommands/)