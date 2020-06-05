The **Lookup** and [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/') widgets implement a similar functionality - while both consist of a text field and display a collection of items in the drop-down list, they also have differences:

- **Drop-down field content**   
The **SelectBox** has only a list of items in a drop-down field whereas **Lookup** also has a search field and the Cancel button.

- **Appearance on desktop and mobile devices**    
The **SelectBox** looks the same on any platform, while **Lookup** changes its appearance. The **Lookup**'s drop-down field is replaced with a popup window that occupies most of the screen. This design optimizes **Lookup** for mobile devices.

    <table class="dx-table">
        <tr>
            <th>SelectBox on any device</th>
            <th>Lookup on desktop</th>
            <th>Lookup on mobile devices</th>
        </tr>
        <tr>
            <td><img src="/Content/images/doc/20_2/UiWidgets/selectbox-mobile-desktop.png" alt="SelectBox on any device"></td>
            <td><img src="/Content/images/doc/20_2/UiWidgets/lookup-desktop.png" alt="Lookup on desktop"></td>
            <td><img src="/Content/images/doc/20_2/UiWidgets/lookup-mobile.png" alt="Lookup on mobile devices"></td>
        </tr>
    </table>

#include common-demobutton-named with {
    name: "SelectBox",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview/"
} 
#include common-demobutton-named with {
    name: "Lookup",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/"
}