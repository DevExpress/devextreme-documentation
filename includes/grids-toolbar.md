## Predefined Controls

Predefined controls appear on the toolbar depending on whether a specific {WidgetName} feature is enabled. The following table illustrates the dependency:

<table class="dx-table">
    <tr>
        <th>Control Name</th>
        <th>Image</th>
        <th>Prerequisites</th>
    </tr>
    <tr>
        <td><i>addRowButton</i></td>
        <td><img src="/images/DataGrid/icons/toolbar_add.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar AddButton" style="margin:1px; vertical-align:middle"/></td>
        <td><a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#allowAdding">allowAdding</a> is <b>true</b></td>
    </tr>
    <tr>
        <td><i>applyFilterButton</i></td>
        <td><img src="/images/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/></td>
        <td><a href="{basewidgetpath}/Configuration/filterRow/">filterRow</a>.<a href="{basewidgetpath}/Configuration/filterRow/#visible">visible</a> is <b>true</b> and filterRow.<a href="{basewidgetpath}/Configuration/filterRow/#applyFilter">applyFilter</a> is set to <i>"onClick"</i></td>
    </tr>
    <tr>
        <td><i>columnChooserButton</i></td>
        <td><img src="/images/DataGrid/icons/columnChooser.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
        <td><a href="{basewidgetpath}/Configuration/columnChooser/">columnChooser</a>.<a href="{basewidgetpath}/Configuration/columnChooser/#enabled">enabled</a> is <b>true</b></td>
    </tr>
    <tr>
        <td><i>revertButton</i></td>
        <td><img src="/images/DataGrid/icons/toolbar_revert.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar RevertButton" style="margin:1px; vertical-align:middle"/></td>
        <td><a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i></td>
    </tr>
    <tr>
        <td><i>saveButton</i></td>
        <td><img src="/images/DataGrid/icons/toolbar_save.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar SaveButton" style="margin:1px; vertical-align:middle"/></td>
        <td><a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i> and <a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#allowUpdating">allowUpdating</a> is <b>true</b></td>
    </tr>
    <tr>
        <td><i>searchPanel</i></td>
        <td><img src="/images/DataGrid/icons/toolbar_searchPanel.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar searchPanel" style="margin:1px; vertical-align:middle"/></td>
        <td><a href="{basewidgetpath}/Configuration/searchPanel/">searchPanel</a>.<a href="{basewidgetpath}/Configuration/searchPanel/#visible">visible</a> is <b>true</b></td>
    </tr>
    ${{datagrid_unique_toolbar_items}}
</table>

If you need to customize a predefined control, add an object to the **items[]** array. This object must contain the control's [name](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) that you want to customize. If a control does not need customization, simply include its name in the **toolbar**.**items[]** array. 

The example below customizes the Column Chooser button, adds an Add Row button, and enables the corresponding {WidgetName} features:

---
##### jQuery

    <!--tab: index.js-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: {
                allowAdding: true
            },
            columnChooser: {
                enabled: true
            },
            toolbar: {
                items: [ "addRowButton", {
                    name: "columnChooserButton",      
                    locateInMenu: "auto",
                }]  
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-editing [allowAdding]="true"></dxo-editing>
        <dxo-column-chooser [enabled]="true"></dxo-column-chooser>
        <dxo-toolbar>
            <dxi-item name="addRowButton"></dxi-item>
            <dxi-item 
                name="columnChooserButton"
                locateInMenu="auto"
                location="after">
            </dxi-item>
        </dxo-toolbar>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
        
    import { Dx{WidgetName}Module } from 'devextreme-angular';
        
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module,
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxEditing :allow-adding="true" />
            <DxColumnChooser :enabled="true"/>
            <DxToolbar>
                <DxItem name="addRowButton" />
                <DxItem
                    name="columnChooserButton"
                    locate-in-menu="auto"
                    location="after"
                />
            </DxToolbar>
        </Dx{WidgetName}>
    </template>
    <script>
    import { Dx{WidgetName}, DxEditing, DxColumnChooser, DxToolbar, DxItem } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxEditing,
            DxToolbar, 
            DxItem,
            DxColumnChooser
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import {WidgetName}, { Editing, Toolbar, Item, ColumnChooser } from 'devextreme-react/{widget-name}';
    // ...
    function App() {
        return (
            <{WidgetName} ... >
                <Editing allowAdding={true} />
                <ColumnChooser enabled={true} />
                <Toolbar>
                    <Item name="addRowButton" />
                    <Item
                        name="columnChooserButton"
                        locateInMenu="auto"
                        location="after"
                    />
                </Toolbar>
            </{WidgetName}>
        );
    }

---

[important] The {WidgetName} does not display controls missing from the **items[]** array. Ensure that this array includes controls for all enabled features.

## DevExtreme Components

---
##### jQuery

You can use DevExtreme components as toolbar items. Set the [widget]({currentpath}/#widget) property to specify the component that you want to use and configure the component's [options]({currentpath}/#options):

    <!--tab: index.js-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            toolbar: {
                items: [{
                    widget: "dxSelectBox",
                    options: {
                        // SelectBox properties are specified here
                    }
                }]  
            }
        });
    });

##### Angular

You can use DevExtreme components as toolbar items. Declare a `dxi-item` element to add a [supported component]({currentpath}/#widget):

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-toolbar>
            <dxi-item>
                <dx-select-box>
                    <!-- SelectBox properties are specified here -->
                </dx-select-box>
            </dxi-item>
        </dxo-toolbar>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
        
    import { Dx{WidgetName}Module, DxSelectBoxModule } from 'devextreme-angular';
        
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module,
            DxSelectBoxModule,
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

You can use DevExtreme components as toolbar items. Declare a `DxItem` element to add a [supported component]({currentpath}/#widget):

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxToolbar>
                <DxItem>
                    <DxSelectBox>
                        <!-- SelectBox properties are specified here -->
                    </DxSelectBox>
                </DxItem>
            </DxToolbar>
        </Dx{WidgetName}>
    </template>
    <script>
    import { Dx{WidgetName}, DxToolbar, DxItem } from 'devextreme-vue/{widget-name}';
    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            Dx{WidgetName}, 
            DxToolbar, 
            DxItem,
            DxSelectBox
        }
    };
    </script>

##### React

You can use DevExtreme components as toolbar items. Declare a `Item` element to add a [supported component]({currentpath}/#widget):

    <!-- tab: App.js -->
    import { SelectBox } from 'devextreme-react/select-box';
    import {WidgetName}, { Toolbar, Item } from 'devextreme-react/{widget-name}';
    // ...
    function App() {
        return (
            <{WidgetName} ... >
                <Toolbar>
                    <Item>
                        <SelectBox>
                            {/* SelectBox properties are specified here */}
                        </SelectBox>
                    </Item>
                </Toolbar>
            </{WidgetName}>
        );
    }

---

## Custom Controls
To use a custom control, specify a [template]({currentpath}/#template) for it.
