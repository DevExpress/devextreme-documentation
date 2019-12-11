---
default: undefined
type: Object
---
---
##### shortDescription
Specifies the [animation presets](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/') that are used to animate different UI elements in the current application.

---
To animate a DevExtreme application, specify the **animationSet** option. You can assign one of the following predefined animation sets.

- *'default'*  
A default animation set for DevExtreme applications. This set is characterized by a big number of different animations so that your application looks 'live' and attractive out-of-the-box.

- *'native'*  
This animation set is organized so that your DevExtreme looks and behave as a native application on any device.

- *'slide'*  
This animation set is similar to the 'default' animation set, but a 'slide' animation is used instead of a 'drop' animation.

- *'zoom'*  
This animation set is similar to the 'default' animation set, but a 'zoom' animation is used instead of a 'drop' animation.

These predefined animation sets are available in the **DevExpress.framework.html.animationSets** collection.

    <!--JavaScript-->MyApp.app = new DevExpress.framework.html.HtmlApplication({
        //...
        animationSet: DevExpress.framework.html.animationSets['slide'],
    });

In this instance, if you use [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/'), the transition from a view to a view will be animated. This is because the animation presets contained in the predefined animation sets are used in the predefined layouts for the [dxTransition](/api-reference/40%20SPA%20Framework/Markup%20Components/dxTransition '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxTransition/') and [dxContentPlaceholder](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContentPlaceholder '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/') elements. You can also animate other parts of your application using the animation presets from the application's animation set. To learn how to do this, as well as how to define custom animation sets, refer to the [Animation](/Documentation/Guide/SPA_Framework/Animation/#Animation) article.