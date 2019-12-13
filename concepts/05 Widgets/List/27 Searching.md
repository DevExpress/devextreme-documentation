[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and grouped data, transform the plain data using the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option.

Searching is disabled in the **List** widget by default. Assign **true** to the [searchEnabled](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#searchEnabled') option to display the search panel. The [searchExpr](/api-reference/10%20UI%20Widgets/SearchBoxMixin/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#searchExpr') option specifies which data fields should be searched. Assign an _array_ of field names to it if you need to search several fields.

---
#####jQuery

    <!--JavaScript-->
    var listData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: listData,
            searchEnabled: true,
            searchExpr: ['country', 'capital'],
            itemTemplate: function(data) {
                return $("<div>").text(data.capital + " (" + data.country + ")");
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="listData"
        [searchEnabled]="true"
        [searchExpr]="['country', 'capital']"
        itemTemplate="listItem">
        <div *dxTemplate="let item of 'listItem'">
            <div>{{item.capital}} ({{item.country}})</div>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        listData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListWithSearchBar/"
}

When a user types a string in the input field, the **List** suggests all items that _contain_ this string. Assign *'startswith'* to the [searchMode](/api-reference/10%20UI%20Widgets/SearchBoxMixin/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#searchMode') option if you want the **List** to suggest only those items that _start_ with the input string.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            dataSource: listData,
            searchEnabled: true,
            searchExpr: 'country',
            searchMode: 'startswith',
            itemTemplate: function(data) {
                return $("<div>").text(data.capital + " (" + data.country + ")");
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="listData"
        [searchEnabled]="true"
        [searchExpr]="['country', 'capital']"
        searchMode="startswith"
        itemTemplate="listItem">
        <div *dxTemplate="let item of 'listItem'">
            <div>{{item.capital}} ({{item.country}})</div>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        listData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxListModule
         ],
         // ...
     })

---

You can customize the search panel by specifying the [searchEditorOptions](/api-reference/10%20UI%20Widgets/SearchBoxMixin/1%20Configuration/searchEditorOptions.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#searchEditorOptions') option. The following code changes the panel's default width and placeholder:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            dataSource: listData,
            searchEnabled: true,
            searchExpr: 'country',
            searchEditorOptions: {
                placeholder: "Type search value here...",
                width: 300
            },
            itemTemplate: function(data) {
                return $("<div>").text(data.capital + " (" + data.country + ")");
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="listData"
        [searchEnabled]="true"
        [searchExpr]="['country', 'capital']"
        itemTemplate="listItem">
        <dxo-search-editor-options
            placeholder="Type search value here..."
            [width]="300">
        </dxo-search-editor-options>
        <div *dxTemplate="let item of 'listItem'">
            <div>{{item.capital}} ({{item.country}})</div>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        listData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
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
- [Grouping](/concepts/05%20Widgets/List/14%20Grouping '/Documentation/Guide/Widgets/List/Grouping/')

[tags]list, collection widget, search, search mode, search expression
