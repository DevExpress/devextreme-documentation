The following list points out the differences in editing modes.

- [**Row**](/Documentation/Guide/Widgets/TreeList/Editing/#Row_Mode)       
A user edits one row at a time. The widget saves changes when the row leaves the editing state.
- [**Batch**](/Documentation/Guide/Widgets/TreeList/Editing/#Batch_Mode)     
A user edits data cell by cell. The widget does not save changes until a user clicks the global *"Save"* button.
- [**Cell**](/Documentation/Guide/Widgets/TreeList/Editing/#Cell_Mode)      
Differs from the batch mode in that the widget saves changes when the cell leaves the editing state.
- [**Form**](/Documentation/Guide/Widgets/TreeList/Editing/#Form_Mode)      
On entering the editing state, a row becomes a form with editable fields. The widget saves changes after a user clicks a *"Save"* button.
- [**Popup**](/Documentation/Guide/Widgets/TreeList/Editing/#Popup_Mode)     
Differs from the form mode in that the form with editable fields is placed in a popup window.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridEditMode` enum. This enum accepts the following values: `Row`, `Batch`, `Cell`, `Form` and `Popup`.