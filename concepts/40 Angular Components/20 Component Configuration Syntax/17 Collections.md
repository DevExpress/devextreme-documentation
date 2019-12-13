Use components prefixed with `dxi-` ("i" stands for "item"). The following example shows how to configure the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light) widget's [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') option:

    <!--HTML-->
    <dx-data-grid>
        <dxi-column dataField="firstName" caption="First Name"></dxi-column>
        <dxi-column dataField="lastName" caption="Last Name" [visible]="false"></dxi-column>
    </dx-data-grid>

For options that accept either an object or a collection, use components prefixed with `dxi-` as well. The [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') and [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') options in the [Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Overview/Angular/Light) widget exemplify this case:

    <!--HTML-->
    <dx-chart>
        <dxi-series valueField="value" argumentField="argument"></dxi-series>
        <dxi-value-axis>
            <dxo-label format="millions"></dxo-label>
        </dxi-value-axis>
    </dx-chart>

A special `dxi-` component, `dxi-item`, is designed to declare items in collection widgets. It supports <a href="https://angular.io/docs/ts/latest/guide/structural-directives" target="_blank">structural directives</a> provided by Angular, for instance, `ngFor`. The following code shows how to use `dxi-item` to declare items in the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemTemplate/Angular/Light) widget.

`dxi-item` also supports directives that control parts of item appearance, such as `badge` in the code below. They are described in the [items](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/') section of each collection widget.

    <!-- tab: app.component.html -->
    <dx-list>
        <dxi-item>
            <h1>Available items</h1>
        </dxi-item>
        <dxi-item *ngFor="let item of listItems" [badge]="item.badge">
            <h2>{{item.text}}</h2>
        </dxi-item>
    </dx-list>


    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        listItems = [{
            text: 'Cars',
            badge: '12'
        }, {
            text: 'Bikes',
            badge: '5'
        }];
    }

If a `dxi-item` contains nested components, wrap the content in an element with the `dxTemplate` directive without parameters:

    <!--HTML-->
    <dx-list>
        <dxi-item>
            <div *dxTemplate>
                <dx-button text="I am a nested component"></dx-button>
            </div>
        </dxi-item>
    </dx-list>
