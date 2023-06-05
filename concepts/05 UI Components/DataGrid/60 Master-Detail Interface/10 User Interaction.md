The master-detail interface supplies a standard data row with an expandable section that contains detail data. In master-detail terms, the data row is called *"master row"* and the expandable section - *"detail section"*.

![DevExtreme HTML5/JavaScript DataGrid UI component Master Detail Interface](/images/DataGrid/MasterDetail.png)

The master-detail interface becomes available after you specify the detail sections' contents using the **masterDetail**.[template](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail/template.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#template') property. You can expand and collapse detail sections [programmatically](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/#API') or enable a user to do it by setting the **masterDetail**.[enabled](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#enabled') property to **true**. Set the **masterDetail**.[autoExpandAll](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail/autoExpandAll.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#autoExpandAll') property to **true** to expand these sections by default.

---

#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            masterDetail: {
                enabled: true,
                autoExpandAll: true,
                template: function (container, info) {
                    сonst currentEmployeeData = info.data;
                    container.append(
                        $(`<div class="employeeInfo">
                            <img class="employeePhoto" src=${currentEmployeeData.Picture}/>
                            <p class="employeeNotes">${currentEmployeeData.Notes}</p>
                        </div>`)
                    );
                } 
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-master-detail
            [enabled]="true"
            [autoExpandAll]="true"
            [template]="'detail'">
        </dxo-master-detail>
        <div *dxTemplate="let employee of 'detail'">
            <div class="employeeInfo">
                <img class="employeePhoto" [src]="employee.data.Picture" />
                <p class="employeeNotes">{{employee.data.Notes}}</p>
            </div>
        </div>
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
            <DxMasterDetail
                :enabled="true"
                :auto-expand-all="true"
                template="detail"
            />
            <template #detail="{ data }">
                <div class="employeeInfo">
                    <img class="employeePhoto" :src="data.Picture" />
                    <p class="employeeNotes">{{ data.Notes }}</p>
                </div>
            </template>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxMasterDetail
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxMasterDetail
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        MasterDetail
    } from 'devextreme-react/data-grid';

    const DetailSection = ({ data }) => {
        return (
            <div class="employeeInfo">
                <img class="employeePhoto" src={data.Picture} />
                <p class="employeeNotes">{data.Notes}</p>
            </div>
        );
    };

    export default function App() {
        return (
            <DataGrid ... >
                <MasterDetail
                    enabled={true}
                    autoExpandAll={true}
                    render={DetailSection}
                />
            </DataGrid>
        );
    }

---

Once loaded, a detail section's content remains cached until a user switches to another page in the DataGrid or reloads the web page.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailView/"
}
