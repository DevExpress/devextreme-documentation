Predefined controls appear on the toolbar depending on whether a specific DataGrid feature is enabled. The following table illustrates the dependency:

## Predefined Controls
Predefined controls include:

<table class="dx-table">
  <tr>
    <th>Control Name</th>
    <th>Image</th>
    <th>Prerequisites</th>
  </tr>
  <tr>
    <td><i>addRowButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_add.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar AddButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#allowAdding">allowAdding</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>applyFilterButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="{basewidgetpath}/Configuration/filterRow/">filterRow</a>.<a href="{basewidgetpath}/Configuration/filterRow/#visible">visible</a> is set to <b>true</b> and filterRow.<a href="{basewidgetpath}/Configuration/filterRow/#applyFilter">applyFilter</a> is set to <i>"onClick"</i></td>
  </tr>
  <tr>
    <td><i>columnChooserButton</i></td>
    <td><img src="/images/DataGrid/icons/columnChooser.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="{basewidgetpath}/Configuration/columnChooser/">columnChooser</a>.<a href="{basewidgetpath}/Configuration/columnChooser/#enabled">enabled</a> is set to <b>true</b></td>
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
    <td><a href="{basewidgetpath}/Configuration/searchPanel/">searchPanel</a>.<a href="{basewidgetpath}/Configuration/searchPanel/#visible">visible</a> is set to <b>true</b></td>
  </tr>
  ${{datagrid_unique_toolbar_items}}
</table>

If you need to customize a predefined item, add an object to the **items[]** array. This object must contain the item's [name](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) that you want to customize. If an item does not need customization, simply include its name in the **toolbar**.**items[]** array.

---
##### jQuery

    <!--tab: index.js-->
    $(function(){
        $("#gridContainer").dxDataGrid({
            // ...
            columnChooser: {
                enabled: true
            },
            items: [{
                name: "columnChooserButton",      
                locateInMenu: "auto",
                location: "after"
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...>
        <dxo-column-chooser [enabled]="true"></dxo-column-chooser
        <dxo-toolbar>
            <dxi-item 
                name="columnChooserButton"
                locateInMenu="auto"
                location="after"
            >
            </dxi-item>
        </dxo-toolbar>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <DxDataGrid ... >
        <DxColumChooser :enabled="true"/>
        <DxToolbar>
            <DxItem
                name="columnChooserButton"
                locateInMenu="auto"
                location="after"
            />
        </DxToolbar>
    </DxDataGrid>
    // ...

##### React

    <!-- tab: App.js -->
    // ...
    function App() {
        return (
            <DataGrid ... >
                <ColumnChooser enabled={true} />
                <Toolbar>
                    <Item
                        name="columnChooserButton"
                        locateInMenu="auto"
                        location="after"
                    />
                </Toolbar>
            </DataGrid>
        );
    }

---

[important] The {WidgetName} does not display controls missing from the **items[]** array. Ensure that this array includes controls for all enabled features.

## DevExtreme Components
You can use DevExtreme components as toolbar items. Set the [widget]({currentpath}/#widget) property to specify the component that you want to use and configure the component's [options]({currentpath}/#options):

---
##### jQuery

    <!--tab: index.js-->
    $(function(){
        $("#gridContainer").dxDataGrid({
            // ...
            items: [{
                location: "before",
                widget: "dxTabs",
                options: {
                    dataSource: tabData,
                    width: 300,
                    scrollByContent: true,
                    showNavButtons: true
                }
            }]
        });
    });

    <!--tab: data.js-->
    var tabData = [
        {text: "Authors"},
        {text: "Books"},
        {text: "Genres"}
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...>
        <dxo-toolbar>
            <dxi-item location="before">
                <dx-tabs
                    [dataSource]="tabData"
                    [width]="300"
                    [scrollByContent]="true"
                    [showNavButtons]="true"
                ></dx-tabs>
            </dxi-item>
        </dxo-toolbar>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AppService, Tab } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
    })
    export class AppComponent {
        tabData: Tab[];

        constructor(service: AppService) {
            this.tabData = service.getTabs();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Tab {
        text: string;
    }

    const tabs: Tab[] = [
        {text: "Authors"},
        {text: "Books"},
        {text: "Genres"}
    ];

    @Injectable()
    export class Service {
        getTabs(): Tab[] {
            return tabs;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxToolbar>
                <DxItem location="after">
                    <DxTabs
                        :data-source="tabData"
                        :width="300"
                        :scroll-by-content="true"
                        :show-nav-buttons="true"
                    />
                </DxItem>
            </DxToolbar>
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid, DxToolbar, DxItem } from 'devextreme-vue/data-grid';
    import DxTabs from 'devextreme-vue/tabs';
    import { tabData } from './data.js';

    export default {
        components: {
            DxDataGrid, 
            DxToolbar, 
            DxItem,
            DxTabs
        },
        data() {
            return {
                tabData
            };
        }
    };
    </script>
    // ...

    <!--tab: data.js-->
    var tabData = [
        {text: "Authors"},
        {text: "Books"},
        {text: "Genres"}
    ];

##### React

    <!-- tab: App.js -->
    import Tabs from 'devextreme-react/tabs';
    import DataGrid, { Toolbar, Item } from 'devextreme-react/data-grid';
    import { tabData } from './data.js';
    // ...
    function App() {
        return (
            <DataGrid ... >
                <Toolbar>
                    <Item location="after">
                        <Tabs
                            dataSource={tabData}
                            width={300}
                            scrollByContent={true}
                            showNavButtons={true}
                        />
                    </Item>
                </Toolbar>
            </DataGrid>
        );
    }

    <!--tab: data.js-->
    var tabData = [
        {text: "Authors"},
        {text: "Books"},
        {text: "Genres"}
    ];

---

## Custom Controls
To use a custom control, specify a [template](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#template) for it.
