---
id: GridBase.Options.editing.editColumnName
type: String
default: null
firedEvents: optionChanged
---
---
##### shortDescription
The column name of a cell being edited.

---
This option can only be used if **editing**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) is *"cell"* or *"batch"*.

Use this option to check if a user edits an item as done in this example:

    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            // editing.mode should be "cell" or "batch"
            onOptionChanged: function(e) {
                var editColumnName = e.component.option("editing.editColumnName");
                if(editColumnName === null) {
                    console.log('Editing a cell in a column ', editColumnName);
                } else {
                    console.log('Editing is inactive');
                }
            }
        });
    });

#####See Also#####
- [editRowKey](http://localhost:32956/Documentation/20_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#editRowKey)
