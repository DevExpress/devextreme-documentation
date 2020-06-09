[note]In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to switch images. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To switch the **Gallery** to the next or previous image, call the [nextItem(animation)](/api-reference/10%20UI%20Widgets/dxGallery/3%20Methods/nextItem(animation).md '/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#nextItemanimation') or [prevItem(animation)](/api-reference/10%20UI%20Widgets/dxGallery/3%20Methods/prevItem(animation).md '/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#prevItemanimation') method, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        const gallery = $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png"
            ],
            height: 300
        }).dxGallery("instance");

        $("#nextButton").dxButton({
            text: "Next",
            onClick: function () {
                gallery.nextItem(true);
            }
        });

        $("#prevButton").dxButton({
            text: "Previous",
            onClick: function () {
                gallery.prevItem(true);
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300">
    </dx-gallery>
    <dx-button
        text="Next"
        (onClick)="goToNextItem()">
    </dx-button>
    <dx-button
        text="Next"
        (onClick)="goToPreviousItem()">
    </dx-button>

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxButtonModule, DxGalleryModule, DxGalleryComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxGalleryComponent, { static: false }) gallery: DxGalleryComponent;
        // Prior to Angular 8
        // @ViewChild(DxGalleryComponent) gallery: DxGalleryComponent;
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png"
        ];
        goToNextItem () {
            this.gallery.instance.nextItem(true);
        }
        goToPreviousItem () {
            this.gallery.instance.prevItem(true);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <DxGallery
                :data-source="dataSource"
                :height="300"
                ref="gallery"
            />
            <DxButton
                text="Next"
                @click="goToNextItem"
            />
            <DxButton
                text="Previous"
                @click="goToPreviousItem"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxGallery } from 'devextreme-vue/gallery';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxGallery,
            DxButton
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
        },
        methods: {
            goToNextItem () {
                this.$refs.gallery.instance.nextItem(true);
            }
            goToPreviousItem () {
                this.$refs.gallery.instance.prevItem(true);
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Gallery } from 'devextreme-react/gallery';
    import { Button } from 'devextreme-react/button';

    const dataSource = [
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png',
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png',
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png',
        'https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png'
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.galleryRef = React.createRef();
            this.goToPreviousItem = this.goToPreviousItem.bind(this);
            this.goToNextItem = this.goToNextItem.bind(this);
        }

        goToPreviousItem() {
            this.galleryRef.current.instance.prevItem(true);
        }

        goToNextItem() {
            this.galleryRef.current.instance.nextItem(true);
        }

        render() {
            return (
                <div>
                    <Gallery
                        dataSource={dataSource}
                        height={300}
                        ref={this.galleryRef}
                    />
                    <Button
                        text="Next"
                        onClick={this.goToNextItem}
                    />
                    <Button
                        text="Previous"
                        onClick={this.goToPreviousItem}
                    />
                </div>
            );
        }
    }

    export default App;

---

To navigate to a specific image, call the [goToItem(itemIndex, animation)](/api-reference/10%20UI%20Widgets/dxGallery/3%20Methods/goToItem(itemIndex_animation).md '/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#goToItemitemIndex_animation') method. The first argument should be the index of the required image in the [dataSource](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#dataSource').

---
##### jQuery

    <!--JavaScript-->
    const gallery = $("#galleryContainer").dxGallery("instance");
    // Goes to the third image
    gallery.goToItem(2, true);

##### Angular

    <!--TypeScript-->
    import { DxGalleryModule, DxGalleryComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxGalleryComponent, { static: false }) gallery: DxGalleryComponent;
        // Prior to Angular 8
        // @ViewChild(DxGalleryComponent) gallery: DxGalleryComponent;
        goToItem (index) {
            this.gallery.goToItem(index, true);
        }
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
            ref="gallery"
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
        methods: {
            goToItem (index) {
                this.$refs.gallery.instance.goToItem(index, true);
            }
        }
    }
    </script>

##### React

    import React from 'react';

    import { Gallery } from 'devextreme-react/gallery';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.galleryRef = React.createRef();
            this.goToItem = this.goToItem.bind(this);
        }

        goToItem(index) {
            this.galleryRef.current.instance.goToItem(index, true);
        }

        render() {
            return (
                <Gallery
                    ref={this.galleryRef}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview)
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')
