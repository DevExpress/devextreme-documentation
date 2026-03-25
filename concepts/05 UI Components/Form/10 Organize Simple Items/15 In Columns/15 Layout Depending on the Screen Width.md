The Form UI component supports different layouts for different screen widths. Use the [screenByWidth](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#screenByWidth') function to convert the current screen width into a size qualifier, and the [colCountByScreen](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/colCountByScreen '/Documentation/ApiReference/UI_Components/dxForm/Configuration/colCountByScreen/') property to map that qualifier to a column count.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                hireDate: new Date(2012, 4, 13)
            },
            screenByWidth: function (width) {
                if (width < 768)  return "xs";
                if (width < 992)  return "sm";
                if (width < 1200) return "md";
                return "lg";
            },
            colCountByScreen: {
                "xs": 1, "md": 3,
                "sm": 2, "lg": 4
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [screenByWidth]="getSizeQualifier">
        <dxo-form-col-count-by-screen [xs]="1" [sm]="2" [md]="3" [lg]="4"></dxo-form-col-count-by-screen>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
            hireDate: new Date(2012, 4, 13)
        }
        getSizeQualifier (width) {
            if (width < 768)  return "xs";
            if (width < 992)  return "sm";
            if (width < 1200) return "md";
            return "lg";
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm
            :form-data="employee"
            :col-count-by-screen="colCountByScreen"
            :screen-by-width="screenByWidth" />
    </template>
    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxForm from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13)
    }

    export default {
        components: {
            DxForm
        },
        data() {
            return {
                employee
            };
        },
        computed: {
            colCountByScreen() {
                return {
                    xs: 1,
                    sm: 2,
                    md: 3
                    lg: 4
                };
            }
        },
        methods: {
            screenByWidth(width) {
                if (width < 768)  return 'xs';
                if (width < 992)  return 'sm';
                if (width < 1200) return 'md';
                return 'lg';
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import Form from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13)
    };
    const colCountByScreen = {
        xs: 1,
        sm: 2,
        md: 3
        lg: 4
    };
    class App extends React.Component {
        render() {
            return (
                <Form
                    formData={employee}
                    colCountByScreen={colCountByScreen}
                    screenByWidth={screenByWidth} />
            );
        }
    }

    function screenByWidth(width) {
        if (width < 768)  return 'xs';
        if (width < 992)  return 'sm';
        if (width < 1200) return 'md';
        return 'lg';
    }

    export default App;

---

[note] Changing the column count [repaints](/api-reference/10%20UI%20Components/Widget/3%20Methods/repaint().md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#repaint') the Form. Repainting resets item states and reinitializes Form items and item templates.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/ColumnsAdaptability/"
}

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
- [Form - Organize Simple Items in Groups](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/')
- [Form - Organize Simple Items in Tabs](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/')
- [Form - Add an Empty Space Between Smple Items](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/Add_an_Empty_Space/')
- [Form API Reference](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')
