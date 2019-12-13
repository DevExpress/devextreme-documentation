DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component for Angular, AngularJS and Knockout apps. The following code shows how you can customize column cells using this component. Note that the template's [name](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/Configuration/#name') is assigned to the column's [cellTemplate](/api-reference/_hidden/dxTreeListColumn/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#cellTemplate') option. 

---

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Title" cellTemplate="cellTemplate"></dxi-column>
        <div *dxTemplate="let cell of 'cellTemplate'">
            <div style="color:blue">{{ cell.text }}</div>
        </div>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tree-list="{
            ...
            columns: [{
                dataField: 'Title',
                cellTemplate: 'cellTemplate'
            }]
        }" dx-item-alias="cell">
            <div data-options="dxTemplate: { name: 'cellTemplate' }">
                <div style="color:blue">{{ cell.text }}</div>
            </div>
        </div>
    </div>

[note] The `dx-item-alias` directive specifies the variable used to access cell settings.

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')

    <!--HTML-->
    <div data-bind="dxTreeList: {
        ...
        columns: [{
            dataField: 'Title',
            cellTemplate: 'cellTemplate'
        }]
    }">
        <div data-options="dxTemplate: { name: 'cellTemplate' }">
            <div style="color:blue" data-bind="text: $data.text"></div>
        </div>
    </div>

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for cells. To apply this markup, use the **cellTemplate** function as shown in the following code:

[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                cellTemplate: function(element, info) {
                     element.append("<div>" + info.text + "</div>")
                            .css("color", "blue");
                }
            }]
        });
    });

While **cellTemplate** customizes data cells only, the [onCellPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellPrepared') function can customize any cell. Unlike **cellTemplate**, this function does customizations after a cell is created, so you cannot use it to change the cell value. Check the [rowType](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType') field of the function's argument to detect the UI element that owns the cell.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onCellPrepared: function(e) {
                if (e.rowType == "detailAdaptive") {
                    e.cellElement.addClass("adaptiveRowStyle"); 
                }
            }
        });
    });

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType == "detailAdaptive") {
                e.cellElement.addClass("adaptiveRowStyle");
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list
        (onCellPrepared)="onCellPrepared($event)">
    </dx-tree-list>

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }
    
---

#####See Also#####
- [Customize Column Headers](/concepts/05%20Widgets/TreeList/10%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/Widgets/TreeList/Columns/Customize_Column_Headers/')
