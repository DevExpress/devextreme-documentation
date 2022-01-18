On desktops and iOS devices, the Lookup's drop-down menu is the [Popover](/concepts/05%20UI%20Components/Popover/00%20Overview.md '/Documentation/Guide/UI_Components/Popover/Overview/') UI component; on other devices, it is the [Popup](/concepts/05%20UI%20Components/Popup/00%20Getting%20Started%20with%20Popup '/Documentation/Guide/UI_Components/Popup/Getting_Started_with_Popup/') component.

To customize Popup or Popover, use the [dropDownOptions](/api-reference/10%20UI%20Components/dxLookup/1%20Configuration/dropDownOptions.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dropDownOptions') object. For example, the following code closes Lookup when users click outside and removes the item list title:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookupContainer").dxLookup({
            // ...
            dropDownOptions: {
                closeOnOutsideClick: true,
                showTitle: false
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup>
        <dxo-drop-down-options
            [closeOnOutsideClick]="true"
            [showTitle]="false">
        </dxo-drop-down-options>
    </dx-lookup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup>
            <DxDropDownOptions
                :close-on-outside-click="true"
                :show-title="false"
            />
        </DxLookup>
    </template>

    <script>
    // ...

    import { DxLookup, DxDropDownOptions } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup,
            DxDropDownOptions
        },
        data() {
            return {
                // ...
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import { Lookup, DropDownOptions } from 'devextreme-react/lookup';

    function App() {
        return (
            <Lookup>
                <DropDownOptions
                    closeOnOutsideClick={true}
                    showTitle={false}
                />
            </Lookup>
        );
    }
    export default App;

---

You have configured basic Lookup features. To take a more detailed look at this UI component, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)
* [API Reference](/api-reference/10%20UI%20Components/dxLookup '/Documentation/ApiReference/UI_Components/dxLookup/')