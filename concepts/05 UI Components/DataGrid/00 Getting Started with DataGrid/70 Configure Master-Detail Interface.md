#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/", name: "DataGrid - Master-Detail Interface" }

DataGrid supports master-detail data presentation. You can display detail data in expandable sections under master rows. To configure a master-detail data grid, set **masterDetail**.[enabled](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#enabled') to **true** and specify a [template](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail/template.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#template'). This tutorial configures a template that displays employee images using file paths stored in the component data source:

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        masterDetail: {
            enabled: true,
            template: function (_, options) {
                const employee = options.data;
                const photo = $("<img>")
                    .addClass("employee-photo")
                    .attr("src", employee.Photo);
                const notes = $("<p>")
                    .addClass("employee-notes")
                    .text(employee.Notes);
                return $("<div>").append(photo, notes);
            }
        },
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .MasterDetail(m => m
            .Enabled(true)
            .Template(new JS ("masterDetailTemplate"))
        )
        @* ... *@
    )

    <script>
        function masterDetailTemplate(_, options) {
            const employee = options.data;
            const photo = $('<img>').addClass('employee-photo').attr('src', employee.Photo);
            const notes = $('<p>').addClass('employee-notes').text(employee.Notes);
            return $('<div>').append(photo, notes);
        }
    </script>

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-data-grid-master-detail
            [enabled]="true"
            [template]="'employee-info'">
        </dxo-data-grid-master-detail>
        <div *dxTemplate="let employee of 'employee-info'">
            <img class="employee-photo" [src]="employee.data.Photo">
            <p class="employee-notes">{{ employee.data.Notes }}</p>
        </div>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxMasterDetail
                :enabled="true"
                template="employee-info"
            />
            <template #employee-info="{ data: employee }">
                <div>
                    <img class="employee-photo" :src="employee.data.Photo">
                    <p class="employee-notes">{{ employee.data.Notes }}</p>
                </div>
            </template>
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxMasterDetail } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, MasterDetail } from 'devextreme-react/data-grid';

    function DetailSection(props) {
        const employee = props.data.data;
        return (
            <div>
                <img
                    className="employee-photo"
                    alt={employee.FullName}
                    src={employee.Photo}
                />
                <p className="employee-notes">{employee.Notes}</p>
            </div>
        );
    }

    function App() {
        return (
            <DataGrid>
                <MasterDetail
                    enabled={true}
                    component={DetailSection}
                />
                {/* ... */}
            </DataGrid>
        );
    }

---
