By default, the image that the **Gallery** widget displays initially is the first item of the data source. To specify another item to be initially displayed, assign its index in the [dataSource](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#dataSource') to the [selectedIndex](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#selectedIndex') option.

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
            selectedIndex: 2
        });
    });

##### Angular 

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [selectedIndex]="2">
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
            :selected-index="2"
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
                    defaultSelectedIndex={2}
                />
            );
        }
    }

    export default App;

---

As an alternative, you can specify the initial image using its data source object. In this case, assign the object to the [selectedItem](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#selectedItem') option.

---
##### jQuery

    <!--JavaScript-->
    const galleryData = [{
        imageAlt: "Maria",
        imageSrc: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png"
    }, {
        imageAlt: "John",
        imageSrc: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png"
    }, {
        imageAlt: "Xavier",
        imageSrc: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png"
    }];

    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: galleryData,
            height: 300,
            selectedItem: galleryData[1]
        });
    });

##### Angular 

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [selectedItem]="selectedItem">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [{
            imageAlt: "Maria",
            imageSrc: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png"
        }, {
            imageAlt: "John",
            imageSrc: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png"
        }, {
            imageAlt: "Xavier",
            imageSrc: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png"
        }];
        selectedItem = this.galleryDataSource[1];
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
            :data-source="galleryData"
            :height="300"
            :selected-item="selectedItem"
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
                galleryData: [{
                    imageAlt: 'Maria',
                    imageSrc: 'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png'
                }, {
                    imageAlt: 'John',
                    imageSrc: 'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png'
                }, {
                    imageAlt: 'Xavier',
                    imageSrc: 'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png'
                }],
                selectedItem: galleryData[1]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Gallery } from 'devextreme-react/gallery';

    const galleryData = [{
        imageAlt: 'Maria',
        imageSrc: 'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png'
    }, {
        imageAlt: 'John',
        imageSrc: 'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png'
    }, {
        imageAlt: 'Xavier',
        imageSrc: 'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png'
    }];

    const selectedItem = galleryData[1];

    class App extends React.Component {
        render() {
            return (
                <Gallery
                    dataSource={galleryData}
                    height={300}
                    defaultSelectedItem={selectedItem}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Gallery - Switch Between Images](/concepts/05%20Widgets/Gallery/05%20Switch%20Between%20Images '/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/')
- [Gallery - Enable the Slideshow](/concepts/05%20Widgets/Gallery/15%20Enable%20the%20Slideshow.md '/Documentation/Guide/Widgets/Gallery/Enable_the_Slideshow/')
- [Gallery - Animate the Image Change](/concepts/05%20Widgets/Gallery/20%20Animate%20the%20Image%20Change.md '/Documentation/Guide/Widgets/Gallery/Animate_the_Image_Change/')
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview)
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')

[tags]gallery, initial image, selected image, selectedIndex, selectedItem