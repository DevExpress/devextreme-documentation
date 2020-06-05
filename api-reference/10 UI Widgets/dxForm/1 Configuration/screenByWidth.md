---
id: dxForm.Options.screenByWidth
type: function()
default: null
---
---
##### shortDescription
Specifies a function that categorizes screens by their width.

---
The widget uses the following size qualifiers to categorize screens by width:

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

Implement the **screenByWidth** function to change the relation between a size qualifier and screen width. This function accepts the screen width and should return a size qualifier. The following code shows the function's default implementation that you can customize:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            screenByWidth: function(width) {
                if (width < 768) return "xs";
                if (width < 992) return "sm";
                if (width < 1200) return "md";
                return "lg";
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        getSizeQualifier(width) {
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

    <!--HTML-->
    <dx-form ...
        [screenByWidth]="getSizeQualifier">
    </dx-form>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/ColumnsAdaptability/"
}