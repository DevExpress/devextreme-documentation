The TreeList UI component has an integrated filter builder that can be invoked using the [filter panel](/concepts/05%20UI%20Components/TreeList/40%20Filtering%20and%20Searching/4%20Filter%20Panel%20with%20Filter%20Builder.md '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder'). You can also use the [FilterBuilder](/concepts/05%20UI%20Components/FilterBuilder/010%20Overview.md '/Documentation/Guide/UI_Components/FilterBuilder/Overview/') UI component as a standalone component. Pass an array of columns that should be filtered to the FilterBuilder's [fields](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/fields '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#fields') property. Each item in this array should at least specify a [dataField](/api-reference/_hidden/dxFilterBuilderField/dataField.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataField'). The following code passes TreeList columns to the FilterBuilder:

---
#####jQuery

    <!--JavaScript-->
    var columns = [{
        caption: "ID",
        dataField: "Product_ID",
        dataType: "number"
    }, {
        dataField: "Product_Name"
    }, {
        caption: "Cost",
        dataField: "Product_Cost",
        dataType: "number",
        format: "currency"
    }];

    $(function () {
        $("#treeList").dxTreeList({
            dataSource: products, 
            columns: columns
        });
        $("#filterBuilder").dxFilterBuilder({
            fields: columns
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder 
        [fields]="columns">
    </dx-filter-builder>
    <dx-tree-list 
        [dataSource]="products"  
        [columns]="columns">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule, DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        columns = [{
            caption: "ID",
            dataField: "Product_ID",
            dataType: "number"
        }, {
            dataField: "Product_Name"
        }, {
            caption: "Cost",
            dataField: "Product_Cost",
            dataType: "number",
            format: "currency"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxTreeList :columns="columns" />
            <DxFilterBuilder :fields="columns" />          
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';
    import DxFilterBuilder from 'devextreme-vue/filter-builder';

    export default {
        components: {
            DxTreeList,
            DxFilterBuilder
        },
        data() {
            return {
                columns: [{
                    caption: "ID",
                    dataField: "Product_ID",
                    dataType: "number"
                }, {
                    dataField: "Product_Name"
                }, {
                    caption: "Cost",
                    dataField: "Product_Cost",
                    dataType: "number",
                    format: "currency"
                }]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';
    import FilterBuilder from 'devextreme-react/filter-builder';
    
    const columns = [{
        caption: "ID",
        dataField: "Product_ID",
        dataType: "number"
    }, {
        dataField: "Product_Name"
    }, {
        caption: "Cost",
        dataField: "Product_Cost",
        dataType: "number",
        format: "currency"
    }];

    class App extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <TreeList defaultColumns={columns} />              
                    <FilterBuilder defaultFields={columns} />
                </React.Fragment>
            );
        }
    }

---

Then, add a button that updates a filter of the TreeList's data source according to the filter expression:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").getFilterExpression();
                $("#treeList").dxTreeList("instance").filter(filter);
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { 
        DxTreeListModule, 
        DxFilterBuilderModule, 
        DxTreeListComponent, 
        DxFilterBuilderComponent 
    } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        @ViewChild(DxFilterBuilderComponent, { static: false }) filterBuilder: DxFilterBuilderComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        // @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        buttonClick() {
            this.treeList.instance.filter(this.filterBuilder.instance.getFilterExpression());
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-button 
        text="Apply Filter"
        (onClick)="buttonClick()">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxTreeList ... 
               :ref="gridRefKey"
            />
            <DxFilterBuilder ... 
                :ref="fbRefKey"
            />
            <DxButton 
                @click="buttonClick"
                text="Apply Filter"   
            />               
        </div>    
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';
    import DxFilterBuilder from 'devextreme-vue/filter-builder';
    import DxButton from 'devextreme-vue/button';

    const treeListRefKey = 'tree-list';
    const fbRefKey = 'filter-builder';

    export default {
        components: {
            DxTreeList,
            DxButton,
            DxFilterBuilder
        },
        data() {
            return {
                // ...
                treeListRefKey,
                fbRefKey
            };
        },
        methods: {
            buttonClick () {
                this.treeList.filter(this.filterBuilder.getFilterExpression());
            }
        },
        computed: {
            treeList: function() {
                return this.$refs[treeListRefKey].instance;
            },
            filterBuilder: function(){
                return this.$refs[fbRefKey].instance;                
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';
    import FilterBuilder from 'devextreme-react/filter-builder';
    import Button from 'devextreme-react/button';
   
    class App extends React.Component {
        constructor(props) {
            super(props);    
            this.gridRef = React.createRef();
            this.fbRef = React.createRef();                   
        }
        get treeList() {
            return this.gridRef.current.instance();
        }
        get filterBuilder() {
            return this.fbRef.current.instance();
        }
        
        render() {
            return (
                <React.Fragment>
                    <TreeList ... 
                        :ref="gridRef" />              
                    <FilterBuilder ...
                        :ref="fbRef" />
                    <Button 
                        text="Apply Filter" 
                        onClick={this.buttonClick} />    
                </React.Fragment>
            );
        }
        buttonClick = () => {
            this.treeList.filter(this.filterBuilder.getFilterExpression());
        }
    }

---

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20UI%20Components/TreeList/40%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
