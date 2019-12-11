In the batch mode, like in the [cell mode](/concepts/05%20Widgets/TreeList/20%20Editing/10%20User%20Interaction/20%20Cell%20Mode.md '/Documentation/Guide/Widgets/TreeList/Editing/#User_Interaction/Cell_Mode'), a user edits data cell by cell. However, in this mode the widget stores changes in a buffer until a user clicks the global *"Save"* button instead of saving them immediately. This mode is useful when you need to defer saving multiple changes.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Batch Mode](/images/treelist/editing/batch_mode.png)

When a user clicks a *"Delete"* button in a row, the widget only marks the row as deleted. Users can restore this row by clicking the *"Undelete"* button if they have not saved the changes yet. They can also discard all unsaved changes by clicking the *"Revert"* button.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Batch Mode Deletion](/images/treelist/editing/batch_mode_deletion.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/BatchEditing/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/TreeList/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/TreeList/Editing/#Data_Validation')