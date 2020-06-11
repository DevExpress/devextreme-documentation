On desktops and iOS devices, the drop-down menu is the [Popover](/concepts/05%20Widgets/Popover/00%20Overview.md '/Documentation/Guide/Widgets/Popover/Overview/') widget; on other devices, it is the [Popup](/concepts/05%20Widgets/Popup/00%20Overview.md '/Documentation/Guide/Widgets/Popup/Overview/') widget. To use the **Popup** on all devices, assign **false** to the [usePopover](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/usePopover.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#usePopover') option. In this case, you can specify whether to [shade](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/shading.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#shading') the area beneath the **Popup** and whether the **Popup** should occupy the [full screen](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/fullScreen.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fullScreen'). 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            usePopover: false,
            shading: false,
            fullScreen: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        [usePopover]="false"
        [shading]="false"
        [fullScreen]="false">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [ "HD Video Player", "SuperHD Video Player", "SuperPlasma 50" ];
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
        <DxLookup
            :data-source="dataSource"
            :use-popover="false">
            <DxDropDownOptions
                :shading="false"
                :full-screen="false"
            />
        </DxLookup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup, DxDropDownOptions } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup,
            DxDropDownOptions
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

    import { Lookup, DropDownOptions } from 'devextreme-react/lookup';

    const dataSource = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={dataSource}
                    usePopover={false}>
                    <DropDownOptions
                        shading={false}
                        fullScreen={false}
                    />
                </Lookup>
            );
        }
    }

    export default App;

---

To change the size of the drop-down menu and position it against a specific element on your page, specify the **popupHeight**, **popupWidth** and [position](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#position') options, respectively. The following configuration of the **position** option reads as follows: "place **my** *left* side **at** the *left* side **of** the *"#targetElement"*.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            popupHeight: 300,
            popupWidth: 300,
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
        });
    });

##### Angular

    <!--HTML-->
    <img id="targetElement" src="http://here/goes/my.jpg">
    <dx-lookup
        [dataSource]="lookupDataSource"
        [popupHeight]="300"
        [popupWidth]="300">
        <dxo-position
            my="left"
            at="left"
            of="#targetElement">
        </dxo-position>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [ "HD Video Player", "SuperHD Video Player", "SuperPlasma 50" ];
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
        <div>
            <img id="targetElement" src="http://here/goes/my.jpg" />
            <DxLookup
                :data-source="dataSource">
                <DxDropDownOptions
                    :width="300"
                    :height="300">
                    <DxPosition
                        my="left"
                        at="left"
                        of="#targetElement"
                    />
                </DxDropDownOptions>
            </DxLookup>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup, DxDropDownOptions, DxPosition } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup,
            DxDropDownOptions,
            DxPosition
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

    import { Lookup, DropDownOptions, Position } from 'devextreme-react/lookup';

    const dataSource = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="targetElement" src="http://here/goes/my.jpg" />
                    <Lookup
                        dataSource={dataSource}>
                        <DropDownOptions
                            width={300}
                            height={300}>
                            <Position
                                my="left"
                                at="left"
                                of="#targetElement"
                            />
                        </DropDownOptions>
                    </Lookup>
                </div>
            );
        }
    }

    export default App;

---

The drop-down menu can have a title. Use the [title](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/title.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#title') option to specify its text, or the [titleTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/titleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#titleTemplate') option to redesign it completely. For details on implementing templates, see the [Customize Item Appearance](/concepts/05%20Widgets/Lookup/20%20Customize%20the%20Appearance/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/Customize_Item_Appearance/') topic.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            title: "Products"
            /*
            titleTemplate: function () {
                return $("<div style='color: blue'>Products</div>");
            }
            */
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        title="Products">
        <!-- titleTemplate="titleTemplate">
            <div *dxTemplate="let title of 'titleTemplate'">
                <div style='color: blue'>Products</div>
            </div> -->
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [ "HD Video Player", "SuperHD Video Player", "SuperPlasma 50" ];
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
        <DxLookup
            :data-source="dataSource">
            <DxDropDownOptions
                title="Products" />
                <!-- title-template="titleTemplate" />
                <template #titleTemplate>
                    <div :style="{color: 'blue'}">Products</div>
                </template> -->
        </DxLookup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup, DxDropDownOptions } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup,
            DxDropDownOptions
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

    import { Lookup, DropDownOptions } from 'devextreme-react/lookup';

    const dataSource = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        // ...
    ];

    const renderTitle = () => {
        return (
            <div style={{color: 'blue'}}>Products</div>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={dataSource}>
                    <DropDownOptions
                        title="Products"
                        {/* titleRender={renderTitle} */}
                    />
                </Lookup>
            );
        }
    }

    export default App;

---

If you have not specified anything to be displayed in the title, hide it by assigning **false** to the [showPopupTitle](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/showPopupTitle.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#showPopupTitle') option.

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Templates)


[tags]lookup, drop-down menu, size, width, height, popover, popup, position, title, custom title template, title template