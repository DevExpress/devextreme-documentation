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

##### field(e.component): DOMComponent
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Methods/#instance').

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.value): any
The editor's value.

##### field(e.setValue(newValue)): any
A method that you should call to change the data field's value after the editor's value is changed.

##### field(e.cancel): Boolean
Allows you to cancel the creation of the editor.    
Set it to **true** and implement a custom editor if your scenario requires it.

##### field(e.editorElement): dxElement
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.editorName): String
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*.      
Import a new editor's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/').

##### field(e.editorOptions): Object
Gets and sets the editor configuration.

##### field(e.dataField): String
The data field's name.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between when a user stops typing a field value and when it is applied.

##### field(e.width): Number
The editor's width.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

---
The widget offers a user a different editor for entering a value depending on the field's [dataType](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/dataType.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataType'): [Calendar](/concepts/05%20Widgets/Calendar/00%20Overview.md '/Documentation/Guide/Widgets/Calendar/Overview/'), [TextBox](/concepts/05%20Widgets/TextBox/00%20Overview.md '/Documentation/Guide/Widgets/TextBox/Overview/'), [SelectBox](/concepts/05%20Widgets/SelectBox/00%20Overview.md '/Documentation/Guide/Widgets/SelectBox/Overview/'), etc. Within this handler, you can customize a default editor or substitute it for another DevExtreme editor. To do the latter, assign the editor's name to the **editorName** field and then configure the editor in the **editorOptions** object. If you specify the editor's **onValueChanged** handler, call the **setValue(newValue)** method in it to update the value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilder").dxFilterBuilder({
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
    import { DxFilterBuilderModule } from 'devextreme-angular';
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
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-filter-builder>
    
---

If you use a third-party editor, cancel the default editor creation and then implement your one. Call the **setValue(newValue)** method in the **onEditorPreparing** handler to notify the **FilterBuilder** of the changed value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilder").dxFilterBuilder({
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
    import { DxFilterBuilderModule } from 'devextreme-angular';
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
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-filter-builder>
    
---

[note]This handler is not executed for fields that use the [editorTemplate](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/editorTemplate.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#editorTemplate').