If the user should be able to collapse or expand a group in the **List**, set the [collapsibleGroups](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/collapsibleGroups.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#collapsibleGroups') option to **true**. In this case, the user can collapse or expand a group with a click on the group header.

---
#####jQuery

    <!--JavaScript-->var fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        // ...
    }];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruitsVegetables,
            grouped: true,
            collapsibleGroups: true,
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<p>").text(data.name + " | " + data.count).css("margin", 0)
                )
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="fruitsVegetables"
        [grouped]="true"
        [collapsibleGroups]="true">
        <div *dxTemplate="let data of 'item'">
            <p style="margin:0px">{{data.name}} | {{data.count}}</p>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruitsVegetables = [{
            key: "Fruits",
            items: [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 }
            ]
        }, {
            // ...
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/"
}

To collapse or expand a specific group programmatically, call the [collapseGroup(groupIndex)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/collapseGroup(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#collapseGroupgroupIndex') or [expandGroup(groupIndex)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/expandGroup(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#expandGroupgroupIndex') method.

---
#####jQuery

    <!--JavaScript-->
    var list = $("#listContainer").dxList("instance");
    list.collapseGroup(0); // collapses the group with index 0
    list.expandGroup(4); // expands the group with index 4

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        collapseGroup (groupIndex) {
            this.list.instance.collapseGroup(groupIndex);
        }
        expandGroup (groupIndex) {
            this.list.instance.expandGroup(groupIndex);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [List - Grouping in the Data Source](/concepts/05%20Widgets/List/14%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/')
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, expand, collapse, collapsibleGroups, collapseGroup, expandGroup