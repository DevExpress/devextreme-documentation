---
EventForAction: ..\4 Events\editorPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before an editor is created.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.parentType): String
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.

##### field(e.value): any
The editor's value.

##### field(e.setValue(newValue, newText)): any
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.

##### field(e.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

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

##### field(e.row): dxTreeListRowObject
The [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/') of the row editor belongs to.

---
Numerous **TreeList** elements are based on editors: the [search panel](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Search_Panel') is a text box, the [filter row](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Row') uses text boxes, calendars, and select boxes, and so on. Use this function to customize those default editors or substitute them for other editors. 

In the following code, a default editor is replaced with the DevExtreme [TextArea](/concepts/05%20Widgets/TextArea/00%20Overview.md '/Documentation/Guide/Widgets/TextArea/Overview/') widget. Note that the widget's **onValueChanged** function is overridden, and its declaration ends with the **setValue(newValue, newText)** method's call. This method updates the cell value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            onEditorPreparing: function(e) {
                if (e.dataField == "description") {
                    e.editorName = "dxTextArea"; 
                    e.editorOptions.showClearButton = true;
                    e.editorOptions.onValueChanged = function (event) {
                        var value = event.value;
                        e.setValue(value.toLowerCase()); 
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
                e.editorOptions.onValueChanged = function (event) {
                    var value = event.value;
                    e.setValue(value.toLowerCase()); 
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

The following code shows how to replace a default editor with a non-DevExtreme editor (an HTML checkbox in this case):

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            onEditorPreparing: function(e) {
                if(e.dataField === "completed") {
                    e.cancel = true; // Cancels creating the default editor
                    $('<input type="checkbox">')
                        .prop("checked", e.value)
                        .on("change", function(event) {
                            e.setValue(event.target.checked); 
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
            if(e.dataField === "completed") {
                e.cancel = true; // Cancels creating the default editor
                let checkbox = document.createElement("INPUT");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("checked", e.value);
                checkbox.addEventListener("change", function(event) {
                    e.setValue(event.target.checked);
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

[note] This function is not executed for cells that use the [editCellTemplate](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate').