#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/SelectBox/Configure_Search_Parameters/", name: "Configure Search Parameters" }

To allow users to search through SelectBox values, set [searchEnabled](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#searchEnabled') to **true**:

---

##### jQuery

    <!-- tab: index.js -->
    $("#selectBox").dxSelectBox({
        searchEnabled: true,
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().SelectBox()
        .SearchEnabled(true)
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        [searchEnabled]="true"
    ></dx-select-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox
            :search-enabled="true"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    import { SelectBox } from 'devextreme-react/select-box';

    export default function App() {
        return (
            <SelectBox
                searchEnabled={true}
            />
        );
    }

---

For more information about DevExtreme SelectBox search capabilities, review the following demo:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/SearchAndEditing/"
}
