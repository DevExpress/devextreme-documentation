By default, the **Gallery** widget displays one image at a time. To fit more images into a single **Gallery** view, specify the [initialItemWidth](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/initialItemWidth.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#initialItemWidth') option. In this case, the widget shows as many images scaled down to the **initialItemWidth** as it can display without cropping them.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png"
            ],
            height: 300,
            width: 600,
            initialItemWidth: 250
        });
    });

##### Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [width]="600"
        [initialItemWidth]="250">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png"
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
            :width="600"
            :initial-item-width="250"
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
                    'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png',
                    'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png'
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
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png',
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png'
    ];

    class App extends React.Component {
        render() {
            return (
                <Gallery
                    dataSource={dataSource}
                    height={300}
                    width={600}
                    initialItemWidth={250}
                />
            );
        }
    }

    export default App;

---

When distributing images along the total width, the **Gallery** may add margins between them. To eliminate them, assign **true** to the [stretchImages](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/stretchImages.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#stretchImages') option.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png"
            ],
            height: 200,
            width: 320,
            initialItemWidth: 120,
            stretchImages: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="200"
        [width]="320"
        [initialItemWidth]="120"
        [stretchImages]="true">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png"
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
            :height="200"
            :width="320"
            :initial-item-width="120"
            :stretch-images="true"
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
                    'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png',
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
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png',
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png'
    ];

    class App extends React.Component {
        render() {
            return (
                <Gallery
                    dataSource={dataSource}
                    height={200}
                    width={320}
                    initialItemWidth={120}
                    stretchImages={true}
                />
            );
        }
    }

    export default App;

---

[note]The width of an image when it is displayed in the **Gallery** cannot exceed its actual width. 

The **Gallery** widget allows you to display not only the current image, but also parts of the previous and the next ones. To enable this feature, assign **true** to the [wrapAround](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/wrapAround.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#wrapAround') option. Note that in this case, the width of images will be less than the specified **initialItemWidth**.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png"
            ],
            height: 200,
            width: 320,
            initialItemWidth: 200,
            wrapAround: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="200"
        [width]="320"
        [initialItemWidth]="200"
        [wrapAround]="true">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png"
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
            :height="200"
            :width="320"
            :initial-item-width="200"
            :wrap-around="true"
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
                    'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png',
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
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png',
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png'
    ];

    class App extends React.Component {
        render() {
            return (
                <Gallery
                    dataSource={dataSource}
                    height={200}
                    width={320}
                    initialItemWidth={200}
                    wrapAround={true}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Gallery - Customize Item Appearance](/concepts/05%20Widgets/Gallery/30%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Gallery/Customize_Item_Appearance/')
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview)
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')

[tags]gallery, item width, show several images, stretch image