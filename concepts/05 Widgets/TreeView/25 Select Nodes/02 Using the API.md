To retrieve the keys of all selected nodes, call the [getSelectedNodeKeys()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/getSelectedNodeKeys().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#getSelectedNodeKeys').

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("instance").getSelectedNodeKeys();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        getSelectedNodeKeys() {
            return this.treeView.instance.getSelectedNodeKeys();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
---

You can also retrieve all keys for the selected items via [selectItemKeys](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedItemKeys') option.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("instance").option('selectedItemKeys');

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        getSelectedNodeKeys() {
            return this.treeView.instance.option('selectedItemKeys');
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
---

To retrieve all selected nodes, call the [getSelectedNodes()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/getSelectedNodes().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#getSelectedNodes').

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("instance").getSelectedNodes();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        getSelectedNodes() {
            return this.treeView.instance.getSelectedNodes();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
    
---

To retrieve all selected items, use the [selectedItems](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedItems') option.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("instance").option('selectedItems');

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        getSelectedItems() {
            return this.treeView.instance.option('selectedItems');
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
---

To select or cancel the selection of a node programmatically, call the [selectItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/selectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement') or [unselectItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/unselectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement') method passing the key of the node as a parameter.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("selectItem", nodeKey);
    // $("#treeViewContainer").dxTreeView("unselectItem", nodeKey);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        selectNode (key) {
            this.treeView.instance.selectItem(key);
        }
        unselectNode (key) {
            this.treeView.instance.unselectItem(key);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
    
---

To select or cancel the selection of all nodes programmatically, call the [selectAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll') or [unselectAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/unselectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll') method.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("selectAll");
    // $("#treeViewContainer").dxTreeView("unselectAll");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        selectAllNodes () {
            this.treeView.instance.selectAll();
        }
        unselectAllNodes () {
            this.treeView.instance.unselectAll();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
    
---

You can also select or cancel the selection of a node via [selectItemKeys](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedItemKeys') option.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("instance").option('selectedItemKeys', keys);

##### Angular
    <!--HTML-->
    <dx-tree-view
        [dataSource]="hierarchicalData"
        [selectedItemKeys]: "selectedKeys"
        showCheckBoxesMode="normal">
    </dx-tree-view>
    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData: Data[];
        selectedKeys: Any[];
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
    
---

[note]If the [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode') is *"none"*, nodes selected using the API do not differ from unselected nodes in appearance.

---

[note]This API allows to interact with selection for the loaded nodes only. So, in case of the [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualMode') or the [createChildren option](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren'), the selection for the not yet loaded nodes will be not affected.

---

[important] If you specify the [selected](/api-reference/_hidden/dxTreeViewItem/selected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/#selected') field and the [selectItemKeys](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedItemKeys') option both, then the priority will be given to the values specified in the selected field. And the the selectedItemKeys option values will be replaced by keys from the selected data source items.

If you you use the remote data source, [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') or the [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') option it is recommends to use the [selected](/api-reference/_hidden/dxTreeViewItem/selected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/#selected') field.
