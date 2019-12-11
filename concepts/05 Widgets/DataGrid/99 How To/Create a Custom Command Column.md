In the following code, `command-editing` is a custom command column. It displays links that redirect a user to a separate page for editing. The column is configured using a [cellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate'). Note that it is an unbound column, that is, it does not have the [dataField](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') specified. 

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            dataSource: [{
                ID: 1,
                CompanyName: "Premier Buy",
                City: "Richfield",
                State: "Minnesota"
            },
            // ... 
            ],
            keyExpr: "ID",
            columns: [
                "CompanyName", "City", "State", 
                {
                    name: "command-editing",
                    allowFiltering: false,
                    allowSorting: false,
                    cellTemplate: function(cellElement, cellInfo) {
                        cellElement.append("<a href='./edit?id=" + cellInfo.data.ID + "'>Edit</a>");
                    }
                }
            ]
        });
        
    });

#####Angular

    <!--HTML-->
    <dx-data-grid 
        keyExpr="ID"
        [dataSource]="dataSource">        
        <dxi-column dataField="CompanyName"></dxi-column>
        <dxi-column dataField="City"></dxi-column>
        <dxi-column dataField="State"></dxi-column>
        <dxi-column
            name="command-editing"
            [allowFiltering]="false"
            [allowSorting]="false" 
            cellTemplate="cellTemplate">
            <div *dxTemplate="let data of 'cellTemplate'">
                <a [routerLink]="['/edit']" [queryParams]="{ id: data.data.ID }">Edit</a>
            </div>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    // app.component.ts
    import { DxDataGridModule } from "devextreme-angular";
    import { AppRoutingModule } from "./app-routing.module";
    // ...    
    export class AppComponent {
        dataSource = [{
            ID: 1,
            CompanyName: "Premier Buy",
            City: "Richfield",
            State: "Minnesota"
        },
        // ... 
        ];
    } 
    @NgModule({
        imports: [
            DxDataGridModule
            // ...
        ],
        // ...
    })

<!---->

    <!--TypeScript-->
    // app-routing.module.ts
    import { RouterModule, Routes } from "@angular/router";
    import { APP_BASE_HREF } from "@angular/common";
    // ...    
    const routes: Routes = [
        { path: '', redirectTo: '/yourBaseRoot', pathMatch: 'full' },
        { path: 'edit', component: YourEditComponent }
    ];
    @Component({
        // ...
        providers: [
            { provide: APP_BASE_HREF, useValue : '/yourBaseRoot' },
            // ...
        ]
    })  
    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
            // ...
        ],
        // ...
    })
    export class AppRoutingModule { }


#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        .DataSource(new[] {
            new {
                ID = 1,
                CompanyName = "Premier Buy",
                City = "Richfield",
                State = "Minnesota"
            },
            // ...
        }, "ID")
        .Columns(columns => {
            columns.Add().DataField("CompanyName");
            columns.Add().DataField("City");
            columns.Add().DataField("State");
            columns.Add().Name("command-editing")
                .AllowFiltering(false)
                .AllowSorting(false)
                .CellTemplate(@<text>
                    <a href="@Url.Action("Edit")?id=<%= data.ID %>">Edit</a>
                </text>);
        })
    )

---

You can also customize the built-in command columns. See the [Command Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/') topic for more details.
