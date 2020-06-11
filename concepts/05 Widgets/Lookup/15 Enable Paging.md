Paging options are set in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'): [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') enables paging; [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') specifies how many data items a page should contain.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            }),
            // ...
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup ...
        [dataSource]="lookupData">
    </dx-lookup>

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource: any = {};
        constructor() {
            this.lookupData = new DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup ...
            :data-source="dataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';
    import DataSource from "devextreme/data/data_source";

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                dataSource: new DataSource({
                    store: /* A store is configured here */ ,
                    paginate: true,
                    pageSize: 10
                })
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';
    import DataSource from "devextreme/data/data_source";

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dataSource = new DataSource({
                store: /* A store is configured here */ ,
                paginate: true,
                pageSize: 10
            });
        }

        render() {
            return (
                <Lookup ...
                    dataSource={dataSource}
                />
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Lookup()
        .ID("lookup")
        .DataSource(d => d
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Paginate(true)
            .PageSize(10)
        )
    )

---

**Lookup** renders the next page once a user scrolls the item list to the bottom. If you set the [pageLoadMode](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/pageLoadMode.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#pageLoadMode') to *"nextButton"*, **Lookup** renders the next page when a user clicks the **Next** button. You can change this button's text using the [nextButtonText](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/nextButtonText.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#nextButtonText') option:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            // ...
            pageLoadMode: "nextButton",
            nextButtonText: "More"
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup ...
        pageLoadMode="nextButton"
        nextButtonText="More">
    </dx-lookup>

##### Vue

    <template>
        <DxLookup ...
            page-load-mode="nextButton"
            next-button-text="More"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    class App extends React.Component {
        render() {
            return (
                <Lookup ...
                    pageLoadMode="nextButton"
                    nextButtonText="More"
                />
            );
        }
    }

    export default App;

---

[Local arrays](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/') and remote datasets loaded using the **CustomStore** in [raw mode](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode') are *only rendered* page by page. In other cases, remote datasets are *also loaded* page by page if the server can partition data.

#####See Also#####
- **Data Binding**: [Web API, PHP, MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/') | [OData Service](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/') | [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') | [JavaScript Array](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/')
- [Lookup - Enable Grouping](/concepts/05%20Widgets/Lookup/10%20Enable%20Grouping.md '/Documentation/Guide/Widgets/Lookup/Enable_Grouping/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]lookup, paginate, page size, pageSize, loading mode
