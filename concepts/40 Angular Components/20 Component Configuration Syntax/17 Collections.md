Use UI components prefixed with `dxi-` ("i" stands for "item"). The following example shows how to configure the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview)'s [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') property:

    <!--HTML-->
    <dx-data-grid>
        <dxi-data-grid-column dataField="firstName" caption="First Name"></dxi-data-grid-column>
        <dxi-data-grid-column dataField="lastName" caption="Last Name" [visible]="false"></dxi-data-grid-column>
    </dx-data-grid>

For properties that accept either an object or a collection, use UI components prefixed with `dxi-` as well. The [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') and [valueAxis](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/') properties in the [Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Overview) UI component exemplify this case:

    <!--HTML-->
    <dx-chart>
        <dxi-chart-series valueField="value" argumentField="argument"></dxi-chart-series>
        <dxi-chart-value-axis>
            <dxo-chart-label format="millions"></dxo-chart-label>
        </dxi-chart-value-axis>
    </dx-chart>

A special `dxi-` element, `dxi-component-name-item`, is designed to declare items in collection UI components. The following code shows how to use `dxi-list-item` to declare items in the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemTemplate) UI component.

`dxi-component-name-item` also supports directives that control parts of item appearance, such as `badge` in the code below. They are described in the [items](/api-reference/10%20UI%20Components/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/') section of each collection UI component.

    <!-- tab: app.component.html -->
    <dx-list>
        <dxi-list-item>
            <h1>Available items</h1>
        </dxi-list-item>
        <dxi-list-item *ngFor="let item of listItems" [badge]="item.badge">
            <h2>{{item.text}}</h2>
        </dxi-list-item>
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

If a `dxi-component-name-item` contains nested components, wrap the content in an element with the `dxTemplate` directive without parameters:

    <!--HTML-->
    <dx-list>
        <dxi-list-item>
            <div *dxTemplate>
                <dx-button text="I am a nested component"></dx-button>
            </div>
        </dxi-list-item>
    </dx-list>
