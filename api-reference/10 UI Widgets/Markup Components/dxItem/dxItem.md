---
id: dxItem
type: Object
---
---
##### shortDescription
Specifies markup for a widget item.

---
The **dxItem** component defines custom markup for items in layout and collection widgets. **dxItem** has different options depending on the widget where it is used. For a full list of them, see the **items** option description in a specific widget's API Reference.

---
#####jQuery  

    <!--HTML-->
    <div id="list">
        <div data-options="dxItem: { text: 'Apples', disabled: true }"></div>
        <div data-options="dxItem: { text: 'Lemons', visible: false }"></div>
        <div data-options="dxItem: { }">
            <!-- Custom markup -->
        </div>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#list").dxList({/* ... */});
    });

#####Angular

    <!-- tab: app.component.html -->
    <dx-list>
        <dxi-item text="Apples" [disabled]="true"></dxi-item>
        <dxi-item text="Lemons" [visible]="false"></dxi-item>
        <dxi-item>
            <!-- Custom markup -->
        </dxi-item>
        <dxi-item>
            <!-- A nested component should be wrapped in an element with a parameterless dxTemplate directive -->
            <div *dxTemplate>
                <dx-button text="I am a nested component"></dx-button>
            </div>
        </dxi-item>
    </dx-list>

    <!-- tab: app.module.ts -->
    import { DxListModule } from "devextreme-angular";
    // ...
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })
    export class AppModule { }

#####AngularJS

    <!--HTML-->
    <div dx-list="{ }">
        <div data-options="dxItem: { text: 'Apples', disabled: true }"></div>
        <div data-options="dxItem: { text: 'Lemons', visible: false }"></div>
        <div data-options="dxItem: { }">
            <!-- Custom markup -->
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            // ...
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: { ... }">
        <div data-options="dxItem: { text: 'Apples', disabled: true }"></div>
        <div data-options="dxItem: { text: 'Lemons', visible: false }"></div>
        <div data-options="dxItem: { }">
            <!-- Custom markup -->
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        // ...
    };

    ko.applyBindings(viewModel);

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import List, { Item } from 'devextreme-react/list';

    class App extends React.Component {
        render() {
            return (
                <List>
                    <Item text="Apples" disabled={true} />
                    <Item text="Oranges" visible={false} />
                    <Item>
                        <!-- Custom markup -->
                    </Item>
                </List>
            );
        }
    }
    export default App;

---

[note]**dxItem** elements are ignored when the **dataSource** option is defined.