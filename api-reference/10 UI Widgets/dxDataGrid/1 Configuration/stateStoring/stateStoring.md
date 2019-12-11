---
type: object
---
---
##### shortDescription
Specifies options of state storing.

---
At runtime, end-users may adjust user interface settings to their needs. By default, these settings disappear when you dispose of the grid; on next loading, the grid appears in its original configuration. If user settings need to be saved and then restored, enable client-side state storing for the grid by setting the **stateStoring** | [enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#enabled') option to *true*. The grid state will be saved under a specified [storage key](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/storageKey.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#storageKey'). The saving operation is conducted after a certain amount of time has passed since the last change of the state. To specify the amount of time in milliseconds, use the [savingTimeout](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/savingTimeout.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#savingTimeout') option.

**DataGrid** supports various types of state storing. The type of storage that will suit your needs best depends on the supposed lifetime of user-specified grid settings. For more information about state storing types, refer to the [type](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/type.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#type') option description.

**DataGrid** provides the [state](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/state().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#state') method to operate the grid state in code. Call this method without arguments to obtain the grid state. When you need to set the grid state, call this method with the state object as its argument. You can also return the widget to its default state by calling the [state](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/state().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#state') method with the empty array or *null* argument.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridstatepersistencestatepersistence/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>