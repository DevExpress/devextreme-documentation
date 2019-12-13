You can reorder **List** items from code in the following ways.

- **By index**        
Pass the index to the [reorderItem(itemIndex, toItemIndex)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/reorderItem(itemIndex_toItemIndex).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#reorderItemitemIndex_toItemIndex') method. If the **List** is [grouped](/concepts/05%20Widgets/List/14%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/'), this method should be given two objects with the indexes of the groups and the items.

    ---
    #####jQuery

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        // Places the item with index 1 after the item with index 5 
        list.reorderItem(1, 5);
        // Takes the item with index 0 from the group with index 2
        // and places it to the group with index 4 after the item with index 2 
        list.reorderItem(
            { group: 2, item: 0 },
            { group: 4, item: 2 }
        );


    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxListModule, DxListComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
            // Prior to Angular 8
            // @ViewChild(DxListComponent) list: DxListComponent;
            reorderItems (index1, index2) {
                // Places the item with index1 after the item with index2 
                this.list.instance.reorderItem(index1, index2);
            }
            reorderItemsInGroups (groupIndex1, itemIndex1, groupIndex2, itemIndex2) {
                // Takes the item with index itemIndex1 from the group with groupIndex1
                // and places it to the group with groupIndex2 after the item with itemIndex2 
                this.list.instance.reorderItem(
                    { group: groupIndex1, item: itemIndex1 },
                    { group: groupIndex2, item: itemIndex2 }
                );
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

- **By DOM node**      
Pass the <a href="http://www.w3schools.com/js/js_htmldom_nodes.asp" target="_blank">DOM node</a> to the [reorderItem(itemElement, toItemElement)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/reorderItem(itemElement_toItemElement).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#reorderItemitemElement_toItemElement') method.

    ---
    #####jQuery

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        // Finds all List items
        var itemNodes = $("#listContainer").find(".dx-list-item");
        // Makes the first item the last
        list.reorderItem(itemNodes[0], itemNodes[itemNodes.length-1]);

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxListModule, DxListComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
            // Prior to Angular 8
            // @ViewChild(DxListComponent) list: DxListComponent;
            makeFirstItemLast () {
                // Finds all List items
                let itemNodes = document.getElementsByClassName("dx-list-item");
                // Makes the first item the last
                this.list.instance.reorderItem(itemNodes[0], itemNodes[itemNodes.length-1]);
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
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

