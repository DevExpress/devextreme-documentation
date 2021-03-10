The search panel allows searching for values in several columns at once. Search is case-insensitive.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList SearchPanel](/images/treelist/visual_elements/search_panel.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingSearchPanel/"
}

To make the search panel visible, assign **true** to the [searchPanel](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/').**visible** property. You can set a column's [allowSearch](/api-reference/_hidden/GridBaseColumn/allowSearch.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowSearch') property to **false** if it should be excluded from searching. Note that this property inherits the [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowFiltering') property's value by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            searchPanel: { visible: true },
            columns: [{
                // ...
                allowSearch: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-search-panel [visible]="true"></dxo-search-panel>
        <dxi-column [allowSearch]="false" ... ></dxi-column>
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
           <DxSearchPanel :visible="true" />
           <DxColumn :allow-search="false" />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn,
        DxSearchPanel
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxSearchPanel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        SearchPanel
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                  <SearchPanel visible={true} />
                  <Column allowSearch={false} />
                </TreeList>
            );
        }
    }
    
---

Use the **searchPanel**.[text](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/searchPanel/text.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/#text') property to predefine the search value. You can also change it at runtime by calling the [searchByText(text)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/searchByText(text).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#searchByTexttext') method:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            searchPanel: {
                visible: true,
                text: "4/1/2015"
            }
        });
    });

<!---->

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("searchByText", "1/29/2016");

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-search-panel 
            [visible]="true" 
            [(text)]="searchText">
        </dxo-search-panel>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        searchText: string = "4/1/2015";
        setSearchValue (searchText) {
            this.searchText = searchText;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxSearchPanel 
                :visible="true"
                v-model:text="searchText" 
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxSearchPanel
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxSearchPanel
        },
        data() {
           return {
               searchText: "4/1/2015",
           }
        },
        methods: {
            setSearchValue (searchText) {
                this.searchText = searchText;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        SearchPanel
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                searchText: "4/1/2015"
            }
        }

        render() {
            let { searchText } = this.state;
            return (
                <TreeList ... 
                    onOptionChanged={this.onOptionChanged}>
                    <SearchPanel 
                        visible={true}
                        text={searchText} 
                    />
                </TreeList>
            );
        }
        onOptionChanged = (e) => {
            if(e.fullName === "searchPanel.text") {
                this.setSearchValue(e.value);
            }
        }
        setSearchValue = (searchText) => {
            this.setState({
                searchText: searchText
            })
        }
    }

---

Searching is performed differently depending on a column's [data type](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType'). Numeric, Boolean, and date columns require that a user enters a full value into the search panel. Searching columns containing string values and specifying the search value using the API requires entering only a part of a value.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/')
