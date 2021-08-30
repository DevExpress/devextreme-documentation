You can define static content in the Popup's markup or use the [contentTemplate](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#contentTemplate') when the content is dynamic. In the code below, the content is static but we use **contentTemplate** as dynamic content will be added at a later stage.

---
##### jQuery

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
        const popupText = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit.
        Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu.
        Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu.
        Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>

        <p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus.
        Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
        Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim.
        Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.</p>`;
    });
 
##### Angular

    <!-- tab: app.component.html -->
    <dx-popup
        contentTemplate="popup-content">
        <div *dxTemplate="let data of 'popup-content'">
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup
                content-template="popup-content">
                <template #popup-content>
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

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Popup
    } from 'devextreme-react/popup';
    import logo from "./assets/images/dx-logo.png";

    const renderContent = () =>  {
        return (
            <>
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
            </>            
        )
    }

    const App = () => {
        return (
            <div className="App">
                <Popup
                    contentRender={renderContent}
                />
            </div>
        );
    }

    export default App;


---
