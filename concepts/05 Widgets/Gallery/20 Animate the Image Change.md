By default, the change of the image is animated. You can specify how long the animation is using the [animationDuration](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/animationDuration.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#animationDuration') option. The lower its value, the faster the animation. In case you need to disable animation completely, set the [animationEnabled](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/animationEnabled.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#animationEnabled') option to **false**.

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
            loop: true,
            animationDuration: 100
        });
    });

##### Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [loop]="true"
        [animationDuration]="100">
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
            :loop="true"
            :animation-duration="100"
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
                    loop={true}
                    animationDuration={100}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Gallery - Enable the Slideshow](/concepts/05%20Widgets/Gallery/15%20Enable%20the%20Slideshow.md '/Documentation/Guide/Widgets/Gallery/Enable_the_Slideshow/')
- [Gallery - Switch Between Images](/concepts/05%20Widgets/Gallery/05%20Switch%20Between%20Images '/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/')
- [Gallery - Transform and Combine Images](/concepts/05%20Widgets/Gallery/25%20Transform%20and%20Combine%20Images.md '/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/')
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview)
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')

[tags]gallery, animate, animation duration, disable animation