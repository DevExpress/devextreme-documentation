The **Gallery** widget supports the display of images in a slideshow. To specify the time span that the widget must wait before moving on to the next image, assign a positive number to the [slideshowDelay](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/slideshowDelay.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#slideshowDelay') option. This number specifies the time span in milliseconds. If it is zero, slideshow is disabled.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png"
            ],
            height: 300,
            slideshowDelay: 1500
        });
    });

##### Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [slideshowDelay]="1500">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png"
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
            :slideshow-delay="1500"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxGallery } from 'devextreme-vue/gallery';

    export default {
        components: {
            DxGallery
        },
        data() {
            return {
                dataSource: [
                    'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png',
                    'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png',
                    'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png'
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Gallery } from 'devextreme-react/gallery';

    const dataSource = [
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png',
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png',
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png'
    ];

    class App extends React.Component {
        render() {
            return (
                <Gallery
                    dataSource={dataSource}
                    height={300}
                    slideshowDelay={1500}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Gallery - Switch Between Images](/concepts/05%20Widgets/Gallery/05%20Switch%20Between%20Images '/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/')
- [Gallery - Animate the Image Change](/concepts/05%20Widgets/Gallery/20%20Animate%20the%20Image%20Change.md '/Documentation/Guide/Widgets/Gallery/Animate_the_Image_Change/')
- [Gallery - Transform and Combine Images](/concepts/05%20Widgets/Gallery/25%20Transform%20and%20Combine%20Images.md '/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/')
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview)
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')

[tags]gallery, loop, slideshow, slideshowDelay