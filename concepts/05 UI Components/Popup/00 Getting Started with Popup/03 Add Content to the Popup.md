---
##### jQuery

Use the [contentTemplate](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#contentTemplate) to define content of the Popup:

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            contentTemplate: () => {
                const content = $("<div />");
                content.append(
                    $("<img />").attr("src", "./images/dx-logo.png"),
                    $(popupText)
                );
                return content;
            },
        });
    });

    var popupText = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit.
    Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu.
    Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu.
    Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>

    <p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus.
    Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
    Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim.
    Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.</p>`;
 
##### Angular

Use the [dxTemplate](/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/) to define content of the Popup:

    <!-- tab: app.component.html -->
    <dx-popup>
        <div *dxTemplate="let data of 'content'">
            <img src="assets/images/dx-logo.png" alt="logo">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit.
                Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu.
                Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu.
                Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
            </p>
            <p>
                Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus.
                Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
                Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim.
                Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.
            </p>
        </div>
    </dx-popup>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        
    }


##### Vue

Use the template to define content of the Popup:

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup>
                <template #content>
                    <img src="./assets/dx-logo.png" alt="logo">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit.
                        Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu.
                        Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu.
                        Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
                    </p>
                    <p>
                        Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus.
                        Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
                        Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim.
                        Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.
                    </p>
                </template>            
            </DxPopup>
        </div>
    </template>

    <script>
    // ...

    export default {
        // ...
    }
    </script>


##### React

You can define the content directly between the Popup tags like you would with a normal `<div>`:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Popup
    } from 'devextreme-react/popup';
    import logo from "./assets/images/dx-logo.png";

    function App() {
        return (
            <div className="App">
                <Popup>
                    <img src={logo} alt="logo" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Penatibus et magnis dis parturient. Eget
                        dolor morbi non arcu risus. Tristique magna sit amet
                        purus gravida quis blandit. Auctor urna nunc id cursus
                        metus aliquam eleifend mi in. Tellus orci ac auctor
                        augue mauris augue neque gravida. Nullam vehicula ipsum
                        a arcu. Nullam ac tortor vitae purus faucibus ornare
                        suspendisse sed nisi. Cursus in hac habitasse platea
                        dictumst. Egestas dui id ornare arcu. Dictumst
                        vestibulum rhoncus est pellentesque elit ullamcorper
                        dignissim.
                    </p>
                    <p>
                        Mauris rhoncus aenean vel elit scelerisque mauris
                        pellentesque pulvinar. Neque volutpat ac tincidunt vitae
                        semper quis lectus. Sed sed risus pretium quam vulputate
                        dignissim suspendisse in. Urna nec tincidunt praesent
                        semper feugiat nibh sed pulvinar. Ultricies lacus sed
                        turpis tincidunt id aliquet risus feugiat. Amet cursus
                        sit amet dictum sit amet justo donec enim. Vestibulum
                        rhoncus est pellentesque elit ullamcorper. Id aliquet
                        risus feugiat in ante metus dictum at.
                    </p>
                </Popup>
            </div>
        );
    }

    export default App;


---