The Gallery is a UI component that displays a collection of images in a carousel. The UI component is supplied with various navigation controls that allow a user to switch between images.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview/"
}

The following code adds the Gallery UI component to your page. The simplest configuration of the UI component requires only a [dataSource](/api-reference/10%20UI%20Components/dxGallery/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxGallery/Configuration/#dataSource') and [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxGallery/Configuration/#height') to be specified.

---
##### jQuery

    <!--HTML--><div id="galleryContainer"></div>

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person4.png"
            ],
            height: 300
        });
    });

##### Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person4.png"
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxGallery
            :data-source="dataSource"
            :height="300"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxGallery } from 'devextreme-vue/gallery';

    export default {
        components: {
            DxGallery
        },
        data() {
            return {
                dataSource: [
                    'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png',
                    'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png',
                    'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person3.png',
                    'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person4.png'
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Gallery } from 'devextreme-react/gallery';

    const dataSource = [
        'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png',
        'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png',
        'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person3.png',
        'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person4.png'
    ];

    class App extends React.Component {
        render() {
            return (
                <Gallery
                    dataSource={dataSource}
                    height={300}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [Gallery - Switch Between Images](/concepts/05%20UI%20Components/Gallery/05%20Switch%20Between%20Images '/Documentation/Guide/UI_Components/Gallery/Switch_Between_Images/')
- [Gallery - Set the Initial Image](/concepts/05%20UI%20Components/Gallery/10%20Set%20the%20Initial%20Image.md '/Documentation/Guide/UI_Components/Gallery/Set_the_Initial_Image/')
- [Gallery - Enable the Slideshow](/concepts/05%20UI%20Components/Gallery/15%20Enable%20the%20Slideshow.md '/Documentation/Guide/UI_Components/Gallery/Enable_the_Slideshow/')
- [Gallery - Animate the Image Change](/concepts/05%20UI%20Components/Gallery/20%20Animate%20the%20Image%20Change.md '/Documentation/Guide/UI_Components/Gallery/Animate_the_Image_Change/')
- [Gallery - Transform and Combine Images](/concepts/05%20UI%20Components/Gallery/25%20Transform%20and%20Combine%20Images.md '/Documentation/Guide/UI_Components/Gallery/Transform_and_Combine_Images/')
- [Gallery - Customize Item Appearance](/concepts/05%20UI%20Components/Gallery/30%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/Gallery/Customize_Item_Appearance/')
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview)
- [Gallery API Reference](/api-reference/10%20UI%20Components/dxGallery '/Documentation/ApiReference/UI_Components/dxGallery/')

[tags]dxgallery, gallery, overview
