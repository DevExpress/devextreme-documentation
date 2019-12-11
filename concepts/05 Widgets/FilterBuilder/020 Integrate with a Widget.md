The **FilterBuilder**'s [fields](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/fields.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#fields') array should 
contain data fields from a widget's data source. For example, the following code allows using the [List's](/concepts/05%20Widgets/List/00%20Overview.md '/Documentation/Guide/Widgets/List/Overview/') `Name` and `Price` fields in the **FilterBuilder**:

---
#####jQuery

    <!--JavaScript-->
    var products = [{
        ID: 1,
        Name: "HD Video Player",
        Price: 330,
        Category: "Video Players"
    }, {
        ID: 2,
        Name: "SuperPlasma 50",
        Price: 2400,
        Category: "Televisions"
    }, 
    // ...
    ];
    var fields = [{
        dataField: "Name"
    }, {
        dataField: "Price",
        dataType: "number",
        format: "currency"
    }];

    $(function () {
        $("#list").dxList({
            dataSource: products, 
            itemTemplate: function (data) {
                return $("<div>").text(data.Category ": " data.Name);
            }
        });
        $("#filterBuilder").dxFilterBuilder({
            fields: fields
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder 
        [fields]="fields">
    </dx-filter-builder>
    <dx-list 
        [dataSource]="products">
        <div *dxTemplate="let item of 'item'">
            <div>{{item.Category}}: {{item.Name}}</div>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule, DxFilterBuilderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        products = [{
            ID: 1,
            Name: "HD Video Player",
            Price: 330,
            Category: "Video Players"
        }, {
            ID: 2,
            Name: "SuperPlasma 50",
            Price: 2400,
            Category: "Televisions"
        }, 
        // ...
        ];
        fields = [{
            dataField: "ID",
            dataType: "number"
        }, {
            dataField: "Name"
        }, {
            dataField: "Price",
            dataType: "number",
            format: "currency"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

---

To filter data, update the data source's [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') according to the built filter expression stored in the [value](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#value') option. The following code does this on a button click:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").option("value");
                var listData = $("#list").dxList("instance").getDataSource();
                listData.filter(filter);
                listData.load();
            },
        });
    });

#####Angular

    <!--TypeScript-->
    import { 
        DxListModule, 
        DxFilterBuilderModule, 
        DxButtonModule,
        DxListComponent, 
        DxFilterBuilderComponent 
    } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent) list: DxListComponent;
        @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        buttonClick() {
            let listData = this.list.getDataSource();
            listData.filter(this.filterBuilder.value);
            listData.load();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule,
            DxListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <!-- ... -->
    <dx-button 
        text="Apply Filter"
        (onClick)="buttonClick()">
    </dx-button>   

---

<a href="/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Filter Builder with Data Grid Demo</a>
<a href="/Demos/WidgetsGallery/Demo/FilterBuilder/WithList/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Filter Builder with List Demo</a>

#####See Also#####
- [Predefine Filter Values](/concepts/05%20Widgets/FilterBuilder/040%20Predefine%20Filter%20Values.md '/Documentation/Guide/Widgets/FilterBuilder/Predefine_Filter_Values/')
