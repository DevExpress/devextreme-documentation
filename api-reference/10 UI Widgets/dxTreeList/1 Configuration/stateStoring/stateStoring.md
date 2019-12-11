---
##### merge

---
State storing enables the widget to save applied settings and restore them the next time the widget is loaded. These settings include filtering, sorting, column order and width, selection, and others. Assign **true** to the **stateStoring**.[enabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring/enabled.md '{basewidgetpath}/Configuration/stateStoring/#enabled') option to enable this functionality.

[note] The expanded row keys are not saved if the [autoExpandAll](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/autoExpandAll.md '{basewidgetpath}/Configuration/#autoExpandAll') is set to **true**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/StatePersistence/"
}

#####See Also#####
- [state()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/state().md '{basewidgetpath}/Methods/#state')