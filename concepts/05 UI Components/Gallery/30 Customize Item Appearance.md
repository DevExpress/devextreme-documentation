Gallery items are not sctrictly images. They can contain text or other elements of your choice. For a minor customization of Gallery items, you can define [specific fields](/api-reference/10%20UI%20Components/dxGallery/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxGallery/Configuration/items/') in item data objects. For example, the following code generates two items: one is disabled and the other has a specified <a href="http://www.w3schools.com/tags/att_img_alt.asp" target="_blank">alt attribute</a>.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [{
                imageSrc: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
                disabled: true
            }, {
                imageSrc: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png",
                imageAlt: "Peter"
            }],
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
        galleryDataSource = [{
            imageSrc: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
            disabled: true
        }, {
            imageSrc: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png",
            imageAlt: "Peter"
        }];
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
                dataSource: [{
                    imageSrc: 'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png',
                    disabled: true
                }, {
                    imageSrc: 'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png',
                    imageAlt: 'Peter'
                }]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Gallery } from 'devextreme-react/gallery';

    const dataSource = [{
        imageSrc: 'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png',
        disabled: true
    }, {
        imageSrc: 'https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png',
        imageAlt: 'Peter'
    }];

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

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#itemTemplate').

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: galleryData,
            height: 300,
            itemTemplate: function(e){
                e.itemElement.empty();
                e.itemElement.append("<p><b>Name</b>: " + e.itemData.name + "</p>");
                e.itemElement.append("<img src=\"" + e.itemData.path + "\" alt=\"" + e.itemData.name + "\"/>");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        itemTemplate="item">
        <div *dxTemplate="let data of 'item'">
            <p><b>Name</b>: <span>{{data.name}}</span></p>
            <img src="{{data.path}}" alt="{{data.name}}" />
        </div>
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png", name: "Maria" },
            { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png", name: "John" },
            { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person3.png", name: "Xavier" }
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
            item-template="item">
            <template #item="{ data }">
                <div>
                    <p><b>Name</b>: <span>{{data.name}}</span></p>
                    <img :src="data.path" :alt="data.name" />
                </div>
            </template>
        </DxGallery>
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
                    { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png", name: "Maria" },
                    { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png", name: "John" },
                    { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person3.png", name: "Xavier" }
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
        { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png", name: "Maria" },
        { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png", name: "John" },
        { path: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person3.png", name: "Xavier" }
    ];

    const renderGalleryItem = (itemData) => {
        return (
            <div>
                <p><b>Name</b>: <span>{itemData.name}</span></p>
                <img src={itemData.path} alt={itemData.name} />
            </div>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Gallery
                    dataSource={dataSource}
                    height={300}
                    itemRender={renderGalleryItem}
                />
            );
        }
    }

    export default App;

---

---
##### jQuery

You can also customize an individual Gallery item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxGallery/Configuration/items/#template') field of the item's data object.

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    const galleryData = [{
        imageSrc: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
        imageAlt: "Maria",
        template: $("#individualTemplate"),
    },
        // ...
    ];

---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/ItemTemplate/",
    name: "Built-In Template Engine"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Item3rdPartyEngineTemplate/",
    name: "3rd-Party Template Engine"
}

#####See Also#####
- [Gallery - Transform and Combine Images](/concepts/05%20UI%20Components/Gallery/25%20Transform%20and%20Combine%20Images.md '/Documentation/Guide/UI_Components/Gallery/Transform_and_Combine_Images/')
- [Gallery API Reference](/api-reference/10%20UI%20Components/dxGallery '/Documentation/ApiReference/UI_Components/dxGallery/')

[tags]gallery, item appearance, customize, templates
