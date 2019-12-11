In the following code, `command-editing` is a custom command column. It displays links that redirect a user to a separate page for editing. The column is configured using a [cellTemplate](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#cellTemplate'). Note that it is an unbound column, that is, it does not have the [dataField](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField') specified. 

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#treeListContainer").dxTreeList({
            dataSource: [
                { id: '1', fullName: "John Heart", position: "CEO" },
                // ... 
            ],
            columns: [
                "fullName", "position", 
                {
                    name: "command-editing",
                    allowFiltering: false,
                    allowSorting: false,
                    cellTemplate: function(cellElement, cellInfo) {
                        cellElement.append("<a href='./edit?id=" + cellInfo.data.id + "'>Edit</a>");
                    }
                }
            ]
        });
        
    });

#####Angular

    <!--HTML-->
    <dx-tree-list 
        [dataSource]="dataSource">        
        <dxi-column dataField="fullName"></dxi-column>
        <dxi-column dataField="position"></dxi-column>
        <dxi-column
            name="command-editing"
            [allowFiltering]="false"
            [allowSorting]="false" 
            cellTemplate="cellTemplate">
            <div *dxTemplate="let data of 'cellTemplate'">
                <a [routerLink]="['/edit']" [queryParams]="{ id: data.data.id }">Edit</a>
            </div>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    // app.component.ts
    import { dxTreeListModule } from "devextreme-angular";
    import { AppRoutingModule } from "./app-routing.module";
    // ...    
    export class AppComponent {
        dataSource = [
            { id: '1', fullName: "John Heart", position: "CEO" },
            // ... 
        ];
    } 
    @NgModule({
        imports: [
            dxTreeListModule
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
    @(Html.DevExtreme().TreeList()
        .ID("treeList")
        .DataSource(new object[] {
            new { 
                id = "1", 
                fullName = "John Heart", 
                position = "CEO" 
            }
            // ...
        })
        .Columns(columns => {
            columns.Add().DataField("fullName");
            columns.Add().DataField("position");
            columns.Add().Name("command-editing")
                .AllowFiltering(false)
                .AllowSorting(false)
                .CellTemplate(@<text>
                    <a href="@Url.Action("Edit")?id=<%= data.id %>">Edit</a>
                </text>);
        })
    )

---

You can also customize the built-in command columns. See the [Command Columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/4%20Command%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Command_Columns/') topic for more details.
