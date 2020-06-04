The following table gives an overview of scrolling-related methods exposed by the **List**.

<table class="dx-table">
    <tr>
        <th>Method</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>scrollHeight()</td>
        <td>Returns the height of the scrollable content in pixels.</td>
    </tr>
    <tr>
        <td>scrollToItem(itemIndex)</td>
        <td>Scrolls the <b>List</b> to the item with a specific index.</td>
    </tr>
    <tr>
        <td>scrollToItem(itemElement)</td>
        <td>Scrolls the <b>List</b> to a specific <a href="http://www.w3schools.com/js/js_htmldom_nodes.asp">DOM node</a>.</td>
    </tr>
    <tr>
        <td>scrollTo(location)</td>
        <td>Scrolls the <b>List</b> to a location specified in pixels.</td>
    </tr>
    <tr>
        <td>scrollBy(distance)</td>
        <td>Scrolls the <b>List</b> from the current location by a distance specified in pixels.</td>
    </tr>
    <tr>
        <td>scrollTop()</td>
        <td>Returns a pixel-measured value that shows how far the <b>List</b> is scrolled from the top.</td>
    </tr>
</table>

The following examples shows how to call these methods.

---
#####jQuery

    <!--JavaScript-->
    var list = $("#listContainer").dxList("instance");
    var listItems = list.option("items");

    // Scrolls the List to the last item
    list.scrollToItem(listItems.length-1);

    // Scrolls a grouped List to the first item of the last group
    list.scrollToItem({
        group: listItems.length-1,
        item: 0
    });

<!---->

    <!--JavaScript-->
    // Finds the DOM nodes of all items and scrolls the List to the last node
    var listItemNodes = $("#listContainer").find(".dx-list-item");
    list.scrollToItem(listItemNodes[listItemNodes.length-1]);

    // Finds the DOM nodes of all groups and scrolls the List to the last node
    var listGroupNodes = $("#listContainer").find(".dx-list-group");
    list.scrollToItem(listGroupNodes[listGroupNodes.length-1]);

<!---->

    <!--JavaScript-->
    var contentHeight = list.scrollHeight();
    var scrolledFromTopBy = list.scrollTop();
    list.scrollTo(200);
    list.scrollBy(100);

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        scrollToLastItem () {
            let listItems = this.list.instance.option("items");
            this.list.instance.scrollToItem(listItems.length-1);
        }
        scrollToLastGroup () {
            let listItems = this.list.instance.option("items");
            this.list.instance.scrollToItem({
                group: listItems.length-1,
                item: 0
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

<!---->

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        scrollToLastItem () {
            // Finds the DOM nodes of all items and scrolls the List to the last node
            let listItemNodes = document.getElementsByClassName("dx-list-item");
            this.list.instance.scrollToItem(listItemNodes[listItemNodes.length-1]);
        }
        scrollToLastGroup () {
            // Finds the DOM nodes of all groups and scrolls the List to the last node
            let listGroupNodes = document.getElementsByClassName("dx-list-group");
            this.list.instance.scrollToItem(listGroupNodes[listGroupNodes.length-1]);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

<!---->

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        getListHeight() {
            return this.list.instance.scrollHeight();
        }
        getScrolledDistanceFromTop () {
            return this.list.instance.scrollTop();
        }
        scrollTo () {
            this.list.instance.scrollTo(200);
        }
        scrollBy () {
            this.list.instance.scrollBy(100);
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
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')