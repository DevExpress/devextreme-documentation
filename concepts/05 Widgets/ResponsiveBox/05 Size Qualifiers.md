When choosing the layout for a specific screen, the widget considers the screen's size qualifier. There are four size qualifiers in all.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Size Qualifier</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
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
    </tbody>
  </table>
</div>

If a size qualifier should be identified with other screen width values, use the [screenByWidth](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#screenByWidth') option to specify the relation.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            // ...
            screenByWidth: function (width) {
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

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box ...
                [screenByWidth]="getSizeQualifier">
                <!-- ... -->
            </dx-responsive-box>
        </body>
    </html>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        getSizeQualifier (width) {
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

---

#####See Also#####
- [ResponsiveBox - Create the Layout Grid](/concepts/05%20Widgets/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/Widgets/ResponsiveBox/Create_the_Layout_Grid/')
- [ResponsiveBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ResponsiveBox/Overview)
- [ResponsiveBox API Reference](/api-reference/10%20UI%20Widgets/dxResponsiveBox '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/')

[tags]responsive box, responsiveBox, size qualifier, adaptive layout, extra small screen, small screen, medium screen, large screen 
