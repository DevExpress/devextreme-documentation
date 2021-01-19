---
id: dxDataGrid.Options.masterDetail.template
type: template
---
---
##### shortDescription
Specifies a custom template for detail sections.

##### param(detailElement): dxElement
#include common-ref-elementparam with { element: "detail section" }

##### param(detailInfo): Object
Information about the master row.

##### field(detailInfo.data): Object
The master row's data object.

##### field(detailInfo.key): any
The master row's key.

##### field(detailInfo.watch): function()
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function called when this variable changes.

---
You should call the [updateDimensions()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/updateDimensions().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#updateDimensions') method each time the size of the detail section's content changes to make the table layout automatically adapt its size. In the following code, the [TabPanel](/concepts/05%20Widgets/TabPanel/00%20Overview.md '/Documentation/Guide/Widgets/TabPanel/Overview/') in the detail section contains views that can have different heights. The **updateDimensions** method is called in the [onSelectionChanged](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onSelectionChanged') handler to update the table layout when another view is selected.

---
#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        // ...
        masterDetail: {
            enabled: true,
            template: function (container, info) {
                $("<div>").dxTabPanel({ 
                    // ...
                    onSelectionChanged: function () {
                        $("#dataGridContainer").dxDataGrid("instance").updateDimensions();
                    }
                }).appendTo(container); 
            }
        }
    });

#####Angular

    <!--HTML-->
    <dx-data-grid  ...
        [masterDetail]="{ enabled: true, template: 'detail' }">
        <div *dxTemplate="let info of 'detail'">
            <dx-tab-panel ... 
                (onSelectionChanged)="onSelectionChanged()">
            </dx-tab-panel>
        </div>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule, DxDataGridComponent, DxTabPanelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
        onSelectionChanged () {
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

---

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')