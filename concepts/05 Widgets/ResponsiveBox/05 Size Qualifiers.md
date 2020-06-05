When choosing the layout for a specific screen, the widget considers the screen's size qualifier. There are four size qualifiers in all.

<table class="dx-table">
    <tr>
        <th>Size Qualifier</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>xs</td>
        <td>Stands for "extra small". Screens with width less than 768 pixels.</td>
    </tr>
    <tr>
        <td>sm</td>
        <td>Stands for "small". Screens with width between 768 and 992 pixels.</td>
    </tr>
    <tr>
        <td>md</td>
        <td>Stands for "medium". Screens with width between 992 and 1200 pixels.</td>
    </tr>
    <tr>
        <td>lg</td>
        <td>Stands for "large". Screens with width more than 1200 pixels.</td>
    </tr>
</table>

If a size qualifier should be identified with other screen width values, use the [screenByWidth](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#screenByWidth') option to specify the relation.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            // ...
            screenByWidth: function(width) {
                if (width < 640)
                    return 'xs';
                if (width < 1280)
                    return 'sm';
                if (width < 1920)
                    return 'md';
                return 'lg';
            }
        });
    });

    <!--CSS-->
    html, body { height: 100%; }

##### Angular

    <!--HTML-->
    <dx-responsive-box ...
        [screenByWidth]="getSizeQualifier">
        <!-- ... -->
    </dx-responsive-box>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        getSizeQualifier(width) {
            if (width < 640)
                return 'xs';
            if (width < 1280)
                return 'sm';
            if (width < 1920)
                return 'md';
            return 'lg';
        }
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

    <!--CSS-->
    html, body { height: 100%; }

##### Vue

    <!--HTML-->
    <template>
        <DxResponsiveBox ...
            :screen-by-width="getSizeQualifier">
            <!-- ... -->
        </DxResponsiveBox>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxResponsiveBox } from 'devextreme-vue/responsive-box';

    export default {
        components: {
            DxResponsiveBox
        },
        data() {
            return {
                getSizeQualifier(width) {
                    if (width < 640)
                        return 'xs';
                    if (width < 1280)
                        return 'sm';
                    if (width < 1920)
                        return 'md';
                    return 'lg';
                }
        }
    };
    </script>
    <style>
    html, body { height: 100%; }
    </style>
    
##### React

    <!--HTML-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import ResponsiveBox from 'devextreme-react/responsive-box';

    class App extends React.Component {
        render() {
            return (
                <ResponsiveBox ...
                    screenByWidth={this.getSizeQualifier}
                />
            );
        }

        getSizeQualifier = (width) => {
            if (width < 640)
                return 'xs';
            if (width < 1280)
                return 'sm';
            if (width < 1920)
                return 'md';
            return 'lg';
        }
    }

    export default App;

    <!--CSS-->
    html, body { height: 100%; }

---

#####See Also#####
- [ResponsiveBox - Create the Layout Grid](/concepts/05%20Widgets/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/Widgets/ResponsiveBox/Create_the_Layout_Grid/')
- [ResponsiveBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ResponsiveBox/Overview)
- [ResponsiveBox API Reference](/api-reference/10%20UI%20Widgets/dxResponsiveBox '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/')

[tags]responsive box, responsiveBox, size qualifier, adaptive layout, extra small screen, small screen, medium screen, large screen 
