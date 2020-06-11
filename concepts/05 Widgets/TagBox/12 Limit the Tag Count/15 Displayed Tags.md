Specify the [maxDisplayedTags](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/maxDisplayedTags.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#maxDisplayedTags') option to limit the number of displayed tags. In this case, when the specified limit is exceeded, the widget replaces tags with a single multi-tag displaying the number of selected items. The **TagBox** can display the multi-tag alone or with ordinary tags depending on the [showMultiTagOnly](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/showMultiTagOnly.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showMultiTagOnly') option's value.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        const products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];

        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            maxDisplayedTags: 3,
            showMultiTagOnly: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products"
        [maxDisplayedTags]="3"
        [showMultiTagOnly]="false">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="products"
            :max-displayed-tags="3"
            :show-multi-tag-only="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                products: [
                    'HD Video Player',
                    'SuperHD Video Player',
                    'SuperPlasma 50',
                    'SuperLED 50',
                    // ...
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';

    const products = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        'SuperLED 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={products}
                    maxDisplayedTags={3}
                    showMultiTagOnly={false}
                />
            );
        }
    }

    export default App;

---

You can also customize the multi-tag within the [onMultiTagPreparing](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onMultiTagPreparing.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onMultiTagPreparing') event handler. In the following code, the multi-tag's text is changed and it is shown only when a user selects all items:

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            maxDisplayedTags: 2,
            onMultiTagPreparing: function (args) {
                const selectedItemsLength = args.selectedItems.length;
                const totalCount = products.length;
                if (selectedItemsLength < totalCount) {
                    args.cancel = true;
                } else {
                    args.text = "All selected (" + selectedItemsLength + ")";
                    args.multiTagElement.addClass("red");
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products"
        [maxDisplayedTags]="2"
        (onMultiTagPreparing)="onMultiTagPreparing($event)">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];
        onMultiTagPreparing (e) {
            const selectedItemsLength = e.selectedItems.length;
            const totalCount = this.products.length;
            if (selectedItemsLength < totalCount) {
                e.cancel = true;
            } else {
                e.text = "All selected (" + selectedItemsLength + ")";
                e.multiTagElement.classList.add("red");
            }
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="products"
            :max-displayed-tags="2"
            @multi-tag-preparing="onMultiTagPreparing"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                products: [
                    'HD Video Player',
                    'SuperHD Video Player',
                    'SuperPlasma 50',
                    'SuperLED 50',
                    // ...
                ]
            };
        },
        methods: {
            onMultiTagPreparing(args) {
                const selectedItemsLength = args.selectedItems.length;
                const totalCount = this.products.length;
                if (selectedItemsLength < totalCount) {
                    args.cancel = true;
                } else {
                    args.text = 'All selected (' + selectedItemsLength + ')';
                    args.multiTagElement.classList.add('red');
                }
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';

    const products = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        'SuperLED 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={products}
                    maxDisplayedTags={2}
                    onMultiTagPreparing={this.onMultiTagPreparing}
                />
            );
        }

        onMultiTagPreparing(args) {
            const selectedItemsLength = args.selectedItems.length;
            const totalCount = products.length;
            if (selectedItemsLength < totalCount) {
                args.cancel = true;
            } else {
                args.text = 'All selected (' + selectedItemsLength + ')';
                args.multiTagElement.classList.add('red');
            }
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/"
}
