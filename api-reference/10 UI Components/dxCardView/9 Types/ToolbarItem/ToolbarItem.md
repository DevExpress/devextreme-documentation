---
id: dxCardViewToolbarItem
module: ui/card_view
export: ToolbarItem
type: dxToolbarItem | Object
inherits: dxToolbarItem
generateTypeLink: 
---
---
##### shortDescription
Configures toolbar items.

---
The toolbar can contain the following elements as items:

- **Predefined controls**       
Predefined controls appear on the toolbar depending on whether a specific CardView feature is enabled. The following table illustrates the dependency:

    <table class="dx-table">
        <tr>
            <th>Control Name</th>
            <th>Image</th>
            <th>Prerequisites</th>
        </tr>
        <tr>
            <td><i>addCardButton</i></td>
            <td><img src="/images/CardView/toolbar/add-button.png" alt="DevExtreme CardView toolbar addCardButton" style="margin:1px; vertical-align:middle; width: 50px;"/></td>
            <td><a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#allowAdding">allowAdding</a> is <b>true</b></td>
        </tr>
        <tr>
            <td><i>columnChooserButton</i></td>
            <td><img src="/images/CardView/toolbar/column-chooser.png" alt="DevExtreme CardView toolbar columnChooserButton" style="margin:1px; vertical-align:middle; width: 50px;"/></td>
            <td><a href="{basewidgetpath}/Configuration/columnChooser/">columnChooser</a>.<a href="{basewidgetpath}/Configuration/columnChooser/#enabled">enabled</a> is <b>true</b></td>
        </tr>
        <tr>
            <td><i>searchPanel</i></td>
            <td><img src="/images/CardView/toolbar/search-panel.png" alt="DevExtreme CardView toolbar searchPanel" style="margin:1px; vertical-align:middle; width: 185px;"/></td>
            <td><a href="{basewidgetpath}/Configuration/searchPanel/">searchPanel</a>.<a href="{basewidgetpath}/Configuration/searchPanel/#visible">visible</a> is <b>true</b></td>
        </tr>
        <tr>
            <td><i>selectAllButton</i></td>
            <td><img src="/images/CardView/toolbar/select-all.png" alt="DevExtreme CardView toolbar selectAllButton" style="margin:1px; vertical-align:middle; width: 135px;"/></td>
            <td><a href="{basewidgetpath}/Configuration/selection/">selection</a>.<a href="{basewidgetpath}/Configuration/selection/#allowSelectAll">allowSelectAll</a> is <b>true</b> and <b>selection</b>.<a href="{basewidgetpath}/Configuration/selection/#mode">mode</a> is <i>'multiple'</i></td>
        </tr>
        <tr>
            <td><i>clearSelectionButton</i></td>
            <td><img src="/images/CardView/toolbar/clear-selection.png" alt="DevExtreme CardView toolbar clearSelectionButton" style="margin:1px; vertical-align:middle; width: 175px;"/></td>
            <td><a href="{basewidgetpath}/Configuration/selection/">selection</a>.<a href="{basewidgetpath}/Configuration/selection/#mode">mode</a> is <i>'single'</i> or <i>'multiple'</i></td>
        </tr>
    </table>

    If you need to customize a predefined control, add an object to the **items[]** array. This object must contain the control's [name](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/toolbar/items/#name') and [properties](/api-reference/10%20UI%20Components/dxCardView/9%20Types/Toolbar/items.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/toolbar/items/') that you want to customize. If a control does not need customization, simply include its name in the **toolbar**.**items[]** array. 

    The example below customizes the Column Chooser button, adds an Add Card button, and enables the corresponding CardView features:

    ---
    ##### jQuery

        <!--tab: index.js-->
        $(function(){
            $("#CardViewContainer").dxCardView({
                // ...
                editing: {
                    allowAdding: true
                },
                columnChooser: {
                    enabled: true
                },
                toolbar: {
                    items: [ "addCardButton", {
                        name: "columnChooserButton",      
                        locateInMenu: "auto",
                        location: "after"
                    }]  
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxo-{widget-name}-editing [allowAdding]="true"></dxo-{widget-name}-editing>
            <dxo-{widget-name}-column-chooser [enabled]="true"></dxo-{widget-name}-column-chooser>
            <dxo-{widget-name}-toolbar>
                <dxi-{widget-name}-item name="addCardButton"></dxi-{widget-name}-item>
                <dxi-{widget-name}-item 
                    name="columnChooserButton"
                    locateInMenu="auto"
                    location="after">
                </dxi-{widget-name}-item>
            </dxo-{widget-name}-toolbar>
        </dx-{widget-name}>

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';
            
        import { DxCardViewModule } from 'devextreme-angular';
            
        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxCardViewModule,
            ],
            providers: [ ],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxCardView ... >
                <DxEditing :allow-adding="true" />
                <DxColumnChooser :enabled="true"/>
                <DxToolbar>
                    <DxItem name="addCardButton" />
                    <DxItem
                        name="columnChooserButton"
                        locate-in-menu="auto"
                        location="after"
                    />
                </DxToolbar>
            </DxCardView>
        </template>
        <script setup lang="ts">
        import { DxCardView, DxEditing, DxColumnChooser, DxToolbar, DxItem } from 'devextreme-vue/{widget-name}';
        </script>

    ##### React

        <!-- tab: App.js -->
        import CardView, { Editing, Toolbar, Item, ColumnChooser } from 'devextreme-react/{widget-name}';
        // ...
        function App() {
            return (
                <CardView ... >
                    <Editing allowAdding={true} />
                    <ColumnChooser enabled={true} />
                    <Toolbar>
                        <Item name="addCardButton" />
                        <Item
                            name="columnChooserButton"
                            locateInMenu="auto"
                            location="after"
                        />
                    </Toolbar>
                </CardView>
            );
        }

    ---

    [important] CardView does not display controls missing from the **items[]** array. Ensure that this array includes controls for all enabled features.

- **DevExtreme components**     

    ---
    ##### jQuery

    You can use DevExtreme components as toolbar items. Set the [widget](/api-reference/_hidden/dxToolbarItem/widget.md '{basewidgetpath}/Configuration/toolbar/items/#widget') property to specify the component that you want to use and configure the component's [options](/api-reference/_hidden/dxToolbarItem/options.md '{basewidgetpath}/Configuration/toolbar/items/#options'):

        <!--tab: index.js-->
        $(function(){
            $("#CardViewContainer").dxCardView({
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

    You can use DevExtreme components as toolbar items. Declare a `dxi-item` element to add a [supported component](/api-reference/_hidden/dxToolbarItem/widget.md '{basewidgetpath}/Configuration/toolbar/items/#widget'):

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxo-{widget-name}-toolbar>
                <dxi-{widget-name}-toolbar-item>
                    <dx-select-box>
                        <!-- SelectBox properties are specified here -->
                    </dx-select-box>
                </dxi-{widget-name}-toolbar-item>
            </dxo-{widget-name}-toolbar>
        </dx-{widget-name}>

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';
            
        import { DxCardViewModule, DxSelectBoxModule } from 'devextreme-angular';
            
        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxCardViewModule,
                DxSelectBoxModule,
            ],
            providers: [ ],
            bootstrap: [AppComponent]
        })
        export class AppModule { }


    ##### Vue

    You can use DevExtreme components as toolbar items. Declare a `DxItem` element to add a [supported component](/api-reference/_hidden/dxToolbarItem/widget.md '{basewidgetpath}/Configuration/toolbar/items/#widget'):

        <!-- tab: App.vue -->
        <template>
            <DxCardView ... >
                <DxToolbar>
                    <DxItem>
                        <DxSelectBox>
                            <!-- SelectBox properties are specified here -->
                        </DxSelectBox>
                    </DxItem>
                </DxToolbar>
            </DxCardView>
        </template>
        <script setup lang="ts">
        import { DxCardView, DxToolbar, DxItem } from 'devextreme-vue/{widget-name}';
        import { DxSelectBox } from 'devextreme-vue/select-box';
        </script>

    ##### React

    You can use DevExtreme components as toolbar items. Declare an `Item` element to add a [supported component](/api-reference/_hidden/dxToolbarItem/widget.md '{basewidgetpath}/Configuration/toolbar/items/#widget'):

        <!-- tab: App.js -->
        import { SelectBox } from 'devextreme-react/select-box';
        import CardView, { Toolbar, Item } from 'devextreme-react/{widget-name}';
        // ...
        function App() {
            return (
                <CardView ... >
                    <Toolbar>
                        <Item>
                            <SelectBox>
                                {/* SelectBox properties are specified here */}
                            </SelectBox>
                        </Item>
                    </Toolbar>
                </CardView>
            );
        }

    ---

- **Custom controls**           
To use a custom control, specify a [template](/api-reference/_hidden/CollectionWidgetItem/template.md '{basewidgetpath}/Configuration/toolbar/items/#template').
