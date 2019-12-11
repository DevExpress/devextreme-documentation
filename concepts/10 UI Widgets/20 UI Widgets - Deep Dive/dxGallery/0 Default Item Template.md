<article data-show="Content/Applications/16_1/UIWidgets/dxGallery/DataSource/markup.html,
        Content/Applications/16_1/UIWidgets/dxGallery/DataSource/script.js,
        Content/Applications/16_1/UIWidgets/dxGallery/DataSource/styles.css">

The **Gallery** widget displays images stored in an array specified using the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#dataSource') configuration option. The default item template implies that a data item is an object containing any of the fields described in the [Gallery API reference](/api-reference/10%20UI%20Widgets/dxGallery/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxGallery/Default_Item_Template/').

Two of them specify the image URL and the alternate text.

- **imageSrc**  
 Specifies the URL of the image displayed by the item.

- **imageAlt**  
 Specifies the text passed to the **alt** attribute of the image element.

        <!--JavaScript-->
        var galleryData = [
            { imageSrc: "/Content/images/doc/16_1/PhoneJS/person1.png", imageAlt: "Maria" },
            { imageSrc: "/Content/images/doc/16_1/PhoneJS/person2.png", imageAlt: "John" },
            { imageSrc: "/Content/images/doc/16_1/PhoneJS/person3.png", imageAlt: "Xavier" },
            { imageSrc: "/Content/images/doc/16_1/PhoneJS/person4.png", imageAlt: "Amanda" }
        ];

If a gallery item has a different structure, or you need to specify a custom gallery item markup, [define a custom template](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#UI_Widgets_UI_Widget_Categories_Collection_Containers_Common_Tasks_Customize_Widget_Item_Appearance_Implement_a_Custom_Template) for widget items.

    <!--JavaScript-->
    var galleryData = [
        { path: "/Content/images/doc/16_1/PhoneJS/person1.png", name: "Maria" },
        { path: "/Content/images/doc/16_1/PhoneJS/person2.png", name: "John" },
        { path: "/Content/images/doc/16_1/PhoneJS/person3.png", name: "Xavier" },
        { path: "/Content/images/doc/16_1/PhoneJS/person4.png", name: "Amanda" }
    ];
    
<!--...-->

#####jQuery Approach#####
  
    <!--JavaScript-->
    $("#galleryContainer").dxGallery({
        dataSource: galleryData,
        itemTemplate: function(e){
            e.itemElement.empty();
            e.itemElement.append("<p><b>Name</b>: " + e.itemData.name + "</p>");
            e.itemElement.append("<img src=\"" + e.itemData.path + "\" alt=\"" + e.itemData.name + "\"/>");
        }
    });  

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-gallery="{ dataSource: galleryData }" dx-item-alias="item">
        <div data-options="dxTemplate: { name: 'item' }">
            <p><b>Name</b>: <span>{{item.name}}</span></p>
            <img ng-attr-src="{{item.path}}" ng-attr-alt="{{item.name}}" />
        </div>
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxGallery: { dataSource: galleryData }">
        <div data-options="dxTemplate: { name: 'item' }">
            <p>
                <b>Name</b>: <span data-bind="text: name"></span>
            </p>
            <img data-bind="attr: { src: path, alt: name }" />
        </div>
    </div>


#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

</article>