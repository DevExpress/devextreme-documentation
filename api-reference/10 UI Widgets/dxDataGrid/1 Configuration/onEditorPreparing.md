---
EventForAction: ..\4 Events\editorPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before an editor is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.parentType): String
The editor's location. One of *"dataRow"*, *"filterRow"*, *"headerRow"* or *"searchPanel"*.      
Options passed to the function depend on this value.

##### field(e.value): any
The editor's value.

##### field(e.setValue(newValue, newText)): any
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *"filterRow"* or *"searchPanel"*.

##### field(e.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses a right-to-left representation.

##### field(e.cancel): Boolean
Allows you to cancel creating the editor.        
Set it to **true** and implement a custom editor if your scenario requires it.

##### field(e.editorElement): dxElement
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.editorName): String
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*.      
Import a new editor's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/').

##### field(e.editorOptions): Object
Gets and sets the editor configuration.

##### field(e.dataField): String
The name of the field that provides data for the column the editor belongs to.

##### field(e.row): dxDataGridRowObject
The [properties](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/') of the row the editor belongs to.

---
Numerous **DataGrid** elements are based on editors: the [search panel](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Search_Panel') is a text box, the [selection column](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/') uses check boxes, and so on. Use this function to customize those default editors or substitute them for other editors. 

In the following code, a default editor is replaced with the DevExtreme [TextArea](/concepts/05%20Widgets/TextArea/00%20Overview.md '/Documentation/Guide/Widgets/TextArea/Overview/') widget. Note that the widget's **onValueChanged** function is overridden, and its declaration ends with the **setValue(newValue, newText)** method's call. This method updates the cell value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onEditorPreparing: function(e) {
                if (e.dataField == "description") {
                    e.editorName = "dxTextArea"; 
                    e.editorOptions.showClearButton = true;
                    e.editorOptions.onValueChanged = (event) => {
                        var value = event.value;
                        e.setValue(value.toLowerCase()); 
                    }
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onEditorPreparing (e) { 
            if (e.dataField == "description") {
                e.editorName = "dxTextArea"; 
                e.editorOptions.showClearButton = true;
                e.editorOptions.onValueChanged = (event) => {
                    let value = event.value;
                    e.setValue(value.toLowerCase()); 
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-data-grid>
    
---

The following code shows how to replace a default editor with a non-DevExtreme editor (an HTML checkbox in this case):

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onEditorPreparing: function(e) {
                if(e.dataField === "completed") {
                    e.cancel = true; // Cancels creating the default editor
                    $('<input type="checkbox">')
                        .prop("checked", e.value)
                        .on("change", (event) => {
                            e.setValue(event.target.checked);
                        })
                        .appendTo(e.editorElement);
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onEditorPreparing (e) { 
            if(e.dataField === "completed") {
                e.cancel = true; // Cancels creating the default editor
                let checkbox = document.createElement("INPUT");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("checked", e.value);
                checkbox.addEventListener("change", (event) => {
                    e.setValue(event.target.checked);
                });
                e.editorElement.appendChild(checkbox);
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-data-grid>
    
---

[note] This function is not executed for cells that use the [editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate').

#####See Also#####
- [Customize Editors](/concepts/05%20Widgets/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors')