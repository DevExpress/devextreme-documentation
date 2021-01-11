This section describes how to configure the pager, a component that allows users to navigate through pages and change their size at runtime. The pager consists of the page navigator and several optional elements: the page size selector, navigation buttons, and page information. 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Pager](/images/DataGrid/visual_elements/pager.png)

Set the [showNavigationButtons](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/showNavigationButtons.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showNavigationButtons') and the [showPageSizeSelector](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/showPageSizeSelector.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showPageSizeSelector') options to **true** to show the navigation buttons and the page size selector. The set of available page sizes depends on how large the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') is. You can change it using the [allowedPageSizes](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/allowedPageSizes.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#allowedPageSizes') option.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 20, 50],
                showNavigationButtons: true
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-pager
            [showPageSizeSelector]="true"
            [allowedPageSizes]="[10, 20, 50]"
            [showNavigationButtons]="true">
        </dxo-pager>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxPager
                :show-page-size-selector="true"
                :allowed-page-sizes="[10, 20, 50]"
                :show-navigation-buttons="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxPager
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxPager
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Pager
    } from 'devextreme-react/data-grid';

    const allowedPageSizes = [10, 20, 50];

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Pager
                        showPageSizeSelector={true}
                        allowedPageSizes={allowedPageSizes}
                        showNavigationButtons={true}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---

Assign **true** to the [showInfo](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/showInfo.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showInfo') property to show the page information. You can change the default text by specifiyng the [infoText](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/infoText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#infoText').


---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            pager: {
                showInfo: true,
                infoText: "Page #{0}. Total: {1} ({2} items)" 
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid>
        <dxo-pager
            [showInfo]="true"
            infoText="Page #{0}. Total: {1} ({2} items)">
        </dxo-pager>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxPager
                :show-info="true"
                info-text="Page #{0}. Total: {1} ({2} items)"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxPager
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxPager
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Pager
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Pager
                        showInfo={true}
                        infoText="Page #{0}. Total: {1} ({2} items)"
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordPaging/"
}

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')