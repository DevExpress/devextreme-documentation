---
id: dxFileUploader.Options.onValueChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when one or several files are added to or removed from the selection.

##### param(e): ui/file_uploader:ValueChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam This field is **undefined** if the value is changed programmatically.

##### field(e.previousValue): Array<File>
Previously selected files.

##### field(e.value): Array<File>
Newly selected files.

---

The following code snippet demonstrates how to add image previews before uploading. It uses [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API) to get image details and create a thumbnail.

---
##### jQuery

    <!-- tab: index.html -->
    <div id="fileUploader"></div>
    <div id="list">

    <!-- tab: index.js -->
    $(function () {
        function previewImages(file) {
            const reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    const span = $("<span>");
                    span.html(
                        [
                            '<img class="thumb" src="',
                            e.target.result,
                            '" title="',
                            escape(theFile.name),
                            '"/>'
                        ].join("")
                    );
                    $("#list").append(span);
                };
            })(file);
            reader.readAsDataURL(file);
        }

        const fileUploader = $("#fileUploader").dxFileUploader({
            accept: "image/*",
            uploadMode: "useButtons",
            multiple: true,
            onValueChanged: function (args) {
                const files = args.value;
                $("#list").html("");
                if (files.length == 0) return;
                for (let i = 0; i < files.length; i+=1) {
                    const file = files[i];
                    previewImages(file);
                }
            }
        }).dxFileUploader("instance");
    });

    <!-- tab: index.css -->
    .thumb {
        height: 150px;
        max-width: 150px;
        border: 1px solid #000;
        margin: 10px 5px 0 0;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader
        [multiple]="true"
        uploadMode="useButtons"
        accept="image/*"
        (onValueChanged)="onFileSelected($event)"
    >
    </dx-file-uploader>
    <div id="list">
        <span *ngFor="let image of imagePreviews">
            <img class="thumb" [src]="image.src" [title]="image.name" />
        </span>
    </div>

    <!-- tab: app.component.ts -->
    import { DxFileUploaderTypes } from 'devextreme-angular/file-uploader';
    // ...
    export class AppComponent {
        imagePreviews: { src: string; name: string }[] = [];

        onFileSelected(e: DxFileUploaderTypes.ValueChangedEvent) {
            const input = e.value;
            this.imagePreviews = [];
            input.forEach((file) => {
                const reader = new FileReader();
                reader.onload = () => {
                    this.imagePreviews.push({
                        src: reader.result as string,
                        name: file.name,
                    });
                };
                reader.readAsDataURL(file);
            });
        }
    }

    <!-- tab: app.component.css -->
    .thumb {
        height: 150px;
        max-width: 150px;
        border: 1px solid #000;
        margin: 10px 5px 0 0;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            :multiple="true"
            accept="image/*"
            upload-mode="useButtons"
            @value-changed="onFileSelected"
        />
        <div id="list">
            <span v-for="(image, index) in imagePreviews" :key="index">
            <img class="thumb" :src="image.src" :title="image.name" />
            </span>
        </div>
    </template>
    <script setup lang="ts">
    import { ref } from "vue";
    import DxFileUploader from "devextreme-vue/file-uploader";
    import type { DxFileUploaderTypes } from "devextreme-vue/file-uploader";

    interface ImagePreview {
        src: string;
        name: string;
    }

    const imagePreviews = ref<ImagePreview[]>([]);

    const onFileSelected = (e: DxFileUploaderTypes.ValueChangedEvent) => {
        const input = e.value;
        imagePreviews.value = [];
        input.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                imagePreviews.value.push({
                    src: reader.result as string,
                    name: file.name,
                });
            };
            reader.readAsDataURL(file);
        });
    };
    </script>
    <style>
    .thumb {
        height: 150px;
        max-width: 150px;
        border: 1px solid #000;
        margin: 10px 5px 0 0;
    }
    </style>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from "react";
    import FileUploader, { FileUploaderTypes } from "devextreme-react/file-uploader";

    interface ImagePreview {
        src: string;
        name: string;
    }

    export default function App() {
        const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
        const onFileSelected = useCallback((e: FileUploaderTypes.ValueChangedEvent) => {
            const input = e.value;
            setImagePreviews([]);
            input.forEach((file) => {
                const reader = new FileReader();
                reader.onload = () => {
                    setImagePreviews((prevImages) => [
                        ...prevImages,
                        { src: reader.result, name: file.name },
                    ]);
                };
                reader.readAsDataURL(file);
            });
        }, []);
        return (
            <div>
                <FileUploader
                    multiple={true}
                    uploadMode="useButtons"
                    accept="image/*"
                    onValueChanged={onFileSelected}
                />
                <div id="list">
                    {imagePreviews.map((image, index) => (
                    <span key={index}>
                        <img
                        className="thumb"
                        src={image.src}
                        title={image.name}
                        alt={image.name}
                        />
                    </span>
                    ))}
                </div>
            </div>
        );
    }

    <!-- tab: styles.css -->
    .thumb {
        height: 150px;
        max-width: 150px;
        border: 1px solid #000;
        margin: 10px 5px 0 0;
    }

---

For details on how to retrieve file data after uploading, refer to the following demo:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}