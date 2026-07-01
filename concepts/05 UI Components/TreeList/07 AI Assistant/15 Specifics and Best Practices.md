Note the following AI Assistant specifics and best practices:

- The assistant does not have access to component data by default. In some scenarios, this approach can cause commands to fail.

    For instance, to select the last row on a [page](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/paging '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/'), the assistant calls the `selectByIndexes` command and uses the page size to specify an index. If the number of rows on the active page is smaller than the page size, the command fails.

- The AI Assistant may not preserve the results of previously executed commands of the same type. To preserve or discard previous results, specify this in your request with keywords such as "also" or "only".

- If {WidgetName} is bound to a large dataset, the `selectAll` command may increase the context size of requests beyond the limits of your AI service. The `selectAll` command adds all row keys to the request context (in [onAIAssistantRequestCreating](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onAIAssistantRequestCreating.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onAIAssistantRequestCreating')).

- The assistant does not support certain actions that are only accessible in the component UI (for instance, it cannot expand/collapse groups).

- If users are likely to request specific commands in the AI Assistant, ensure that the corresponding {WidgetName} feature is enabled to prevent command failures.

#####See Also#####
- [PredefinedCommands](/api-reference/40%20Common%20Types/15%20grids/PredefinedCommands '/Documentation/ApiReference/Common_Types/grids/PredefinedCommands/')