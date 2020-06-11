By default, the **TagBox** closes the drop-down list _immediately_ after a user selects an item from it. Therefore, the user has to open the list again if he/she wants to select another item. To enable the user to select multiple items without reopening the list, set the [applyValueMode](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#applyValueMode') option to *"useButtons"*. In this case, the list is not closed until the user clicks the **OK** button. To make multiple selection even easier for the user, add selection controls to the **TagBox** using the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            applyValueMode: 'useButtons',
            showSelectionControls: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        applyValueMode="useButtons"
        [showSelectionControls]="true">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
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
            :data-source="dataSource"
            :show-selection-controls="true"
            apply-value-mode="useButtons"
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
                dataSource: [
                    'HD Video Player',
                    'SuperHD Video Player',
                    'SuperPlasma 50',
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

    const dataSource = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    showSelectionControls={true}
                    applyValueMode="useButtons"
                />
            );
        }
    }

    export default App;

---

When selected items overflow the input field, they are arranged in several lines. To disable this behavior, set the [multiline](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/multiline.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#multiline') option to **false**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            multiline: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        [multiline]="false">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
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
            :data-source="dataSource"
            :multiline="false"
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
                dataSource: [
                    'HD Video Player',
                    'SuperHD Video Player',
                    'SuperPlasma 50',
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

    const dataSource = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    multiline={false}
                />
            );
        }
    }

    export default App;

---

By default, selected items stay in the drop-down list. If they should be hidden after being selected, set the [hideSelectedItems](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/hideSelectedItems.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#hideSelectedItems') option to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            hideSelectedItems: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        [hideSelectedItems]="true">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
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
            :data-source="dataSource"
            :hide-selected-items="true"
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
                dataSource: [
                    'HD Video Player',
                    'SuperHD Video Player',
                    'SuperPlasma 50',
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

    const dataSource = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    hideSelectedItems={true}
                />
            );
        }
    }

    export default App;

---

The **TagBox** allows a user to clear selection in one click on the **Clear** button. To show this button, assign **true** to the [showClearButton](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/showClearButton.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showClearButton') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            showClearButton: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        [showClearButton]="true">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
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
            :data-source="dataSource"
            :show-clear-button="true"
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
                dataSource: [
                    'HD Video Player',
                    'SuperHD Video Player',
                    'SuperPlasma 50',
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

    const dataSource = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    showClearButton={true}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TagBox - Handle the Value Change Event](/concepts/05%20Widgets/TagBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/')
- [TagBox - Create a User-Defined Item](/concepts/05%20Widgets/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/')
- [TagBox - Configure Search Parameters](/concepts/05%20Widgets/TagBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/')
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview)

[tags]tagBox, tag box, editor, apply value mode, select all, selection controls, hide selected items, clear selection, clear button