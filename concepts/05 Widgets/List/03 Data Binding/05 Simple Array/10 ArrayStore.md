If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.ArrayStore({
                data: fruits,
                onLoaded: function() {
                    // Event handling commands go here
                }
            }),
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        fruits = [ /* ... */ ];
        fruitStore = new ArrayStore({
            data: this.fruits,
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML--><dx-list
        [dataSource]="fruitStore">
        <div *dxTemplate="let data of 'item'">
            <b>{{data.fruit}}</b><br/>
            <p style="margin:0">{{data.count}}</p>
        </div>
    </dx-list>

---

Data kept in an **ArrayStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). Its purpose is similar to that of the [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept'), but **DataSource** provides wider capabilities. For example, the **DataSource** can map objects from the array that underlies the **ArrayStore**, as shown in the following code:

---
#####jQuery

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        // ...
    ];
    
    $(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: fruits,
                map: function(item) {
                    return {
                        text: item.fruit,
                        badge: item.count
                    }   
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: "Apples", count: 10 },
            // ...
        ];
        fruitDataSource = new DataSource({
            store: this.fruits,
            map: function (item) {
                return {
                    text: item.fruit,
                    badge: item.count
                }   
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="fruitDataSource">
    </dx-list>

---

[note]Even if you have [passed a JavaScript array](/concepts/05%20Widgets/List/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/List/Data_Binding/Simple_Array/Array_Only/') to the **dataSource** option, the **List** automatically places it into an **ArrayStore** wrapped into the **DataSource** that you can get with the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#getDataSource') method.

#####See Also#####
- [Data Layer - What Are Stores](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - DataSource Examples | In-memory Data](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data')
- [List - Access the DataSource](/concepts/05%20Widgets/List/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, data binding, provide data, ArrayStore, DataSource, process data