---
EventForAction: ..\4 Events\editorPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **editorPreparing** event. Executed before an editor is created.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.parentType): String
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.

##### field(e.value): any
The editor's value.

##### field(e.setValue(newValue)): any
A method that you should call to change the cell value after the editor's value is changed.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.

##### field(e.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(e.cancel): Boolean
Allows you to cancel the creation of the editor.    
Set it to **true** and implement a custom editor if your scenario requires it.

##### field(e.editorElement): jQuery
The editor's container.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.editorName): String
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*.       
Import a new editor's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/').

##### field(e.editorOptions): Object
Gets and sets the editor configuration.

##### field(e.dataField): String
The name of the field that provides data for the column to which the editor belongs.

##### field(e.row): dxTreeListRowObject
The properties of the row to which the editor belongs.

---
Many **TreeList** elements are based on editors. For example, the search panel is based on a text box, the selection column uses check boxes, etc. Within this handler, you can customize a default editor or substitute it for another DevExtreme editor. To do the latter, assign the editor's name to the **editorName** field and then configure the editor in the **editorOptions** object. If you specify the editor's **onValueChanged** handler, call the **setValue(newValue)** method in it to update the cell value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            onEditorPreparing: function(e) {
                if (e.dataField == "name") {
                    e.editorName = "dxTextArea";
                    e.editorOptions.showClearButton = true;
                    e.editorOptions.onValueChanged = function (e) {
                        var value = e.value;
                        if(value == "") {
                            alert("TextArea is empty");
                            return;
                        }
                        e.setValue(value);
                    }
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onEditorPreparing (e) { 
            if (e.dataField == "name") {
                e.editorName = "dxTextArea";
                e.editorOptions.showClearButton = true;
                e.editorOptions.onValueChanged = function (e) {
                    var value = e.value;
                    if (value == "") {
                        alert("TextArea is empty");
                        return;
                    }
                    e.setValue(value);
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-tree-list>
    
---

If you use a third-party editor, cancel creation of the default editor and then implement your own one. To notify the **TreeList** of the changed value, call the **setValue(newValue)** method in the **onEditorPreparing** handler.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            onEditorPreparing: function(e) {
                if(e.dataField === "hidden") {
                    e.cancel = true;
                    $('<input type="checkbox">')
                        .prop("checked", e.value)
                        .on("change", function(args) {
                            e.setValue(args.target.checked);
                        })
                        .appendTo(e.editorElement);
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onEditorPreparing (e) { 
            if(e.dataField === "hidden") {
                e.cancel = true;
                let checkbox = document.createElement("INPUT");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("checked", e.value);
                checkbox.addEventListener("change", function(args) {
                                                        e.setValue(args.target.checked);
                                                    });
                e.editorElement.appendChild(checkbox);
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-tree-list>
    
---

[note]For cells that use the [editCellTemplate](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate'), the **onEditorPreparing** handler is not executed.