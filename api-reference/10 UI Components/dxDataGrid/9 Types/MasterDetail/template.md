---
uid: ui\data_grid:MasterDetail.template
type: template
---
---
##### shortDescription
Specifies a custom template for detail sections.

##### param(detailElement): DxElement
#include common-ref-elementparam with { element: "detail section" }

##### param(detailInfo): Object
Information about the master row.

##### field(detailInfo.data): Object
The master row's data object.

##### field(detailInfo.key): any
The master row's key.

##### field(detailInfo.watch): function()
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function called when this variable changes.

##### return: any
A template name or container.

---
<!--
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailView/",
    name: "Master-Detail View"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AdvancedMasterDetailView/",
    name: "Advanced Master-Detail View"
}

You should call the [updateDimensions()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/updateDimensions().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#updateDimensions') method each time the size of the detail section's content changes to make the table layout automatically adapt its size. In the following code, the [TabPanel](/api-reference/10%20UI%20Components/dxTabPanel '/Documentation/ApiReference/UI_Components/dxTabPanel/') in the detail section contains views that can have different heights. The **updateDimensions** method is called in the [onSelectionChanged](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanged') handler to update the table layout when another view is selected.

---
#####jQuery

    &lt;!--JavaScript--&gt;
    $("#dataGridContainer").dxDataGrid({
        // ...
        masterDetail: {
            enabled: true,
            template: function (container, info) {
                $("&lt;div&gt;").dxTabPanel({ 
                    // ...
                    onSelectionChanged: function () {
                        // ...
                        $("#dataGridContainer").dxDataGrid("instance").updateDimensions();
                    }
                }).appendTo(container); 
            }
        }
    });

#####Angular

    &lt;!--HTML--&gt;
    &lt;dx-data-grid ... &gt;
        &lt;dxo-master-detail
            [enabled]="true"
            [template]="'detail'"&gt;
        &lt;/dxo-master-detail&gt;
        &lt;div *dxTemplate="let info of 'detail'"&gt;
            &lt;dx-tab-panel ... 
                (onSelectionChanged)="onSelectionChanged()"&gt;
            &lt;/dx-tab-panel&gt;
        &lt;/div&gt;
    &lt;/dx-data-grid&gt;

    &lt;!--TypeScript--&gt;
    import { DxDataGridModule, DxDataGridComponent, DxTabPanelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
        onSelectionChanged () {
            // ...
            this.dataGrid.instance.updateDimensions();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxTabPanelModule
        ],
        // ...
    })

##### Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxDataGrid ...
            :ref="dataGridRefKey"&gt;
            &lt;DxMasterDetail
                :enabled="true"
                template="detail"
            /&gt;
            &lt;template #detail="{ data }"&gt;
                &lt;DxTabPanel ... 
                    @selection-changed="onSelectionChanged"&gt;
                &lt;/DxTabPanel&gt;
            &lt;/template&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxMasterDetail
    } from 'devextreme-vue/data-grid';
    import DxTabPanel from 'devextreme-vue/tab-panel';

    const dataGridRefKey = "my-data-grid";

    export default {
        components: {
            DxDataGrid,
            DxMasterDetail
        },
        data: function() {
            return {
                dataGridRefKey
            };
        },
        methods: {
            onSelectionChanged() {
                // ...
                this.dataGrid.updateDimensions();
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[dataGridRefKey].instance;
            }
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React, { useRef, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        MasterDetail
    } from 'devextreme-react/data-grid';
    import TabPanel from 'devextreme-react/tab-panel';

    const DetailSection = (data, updateGridDimensions) =&gt; {
        const onSelectionChanged = useCallback(() =&gt; {
            // ...
            updateGridDimensions();
        }, []);
      
        return (
            &lt;TabPanel ... 
                onSelectionChanged&gt;
            &lt;/TabPanel&gt;
        );
    };

    export default function App() {
        const dataGrid = useRef(null);

        const updateGridDimensions = () =&gt; {
            dataGrid.current.instance.updateDimensions();
        };

        const renderDetailSection = useCallback(({ data }) =&gt; {
            return DetailSection(data, updateGridDimensions);
        }, []);

        return (
            &lt;DataGrid ...
                ref={dataGrid}&gt;
                &lt;MasterDetail
                    enabled={true}
                    render={renderDetailSection}
                /&gt;
            &lt;/DataGrid&gt;
        );
    }

---

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
-->