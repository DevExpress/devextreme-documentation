---
title: UI/UX
---

### v26.1.3

- We updated DevExtreme Fluent and Material themes to improve color-contrast accessibility of multiple DevExtreme components, such as:
    - CardView
    - DataGrid
    - Gantt
    - Scheduler
    - PivotGrid

    We also updated the base colors of Material Blue themes as follows:

    #include full-width-image-container with {
        src: "/images/Changelog/26.1.3/material-fluent-themes.png",
        alt: "A before and after of base colors used in DevExtreme Material Blue Light and Dark themes.",
        minWidth: "360px",
        width: "50vw"
    }

- We updated the listening animation in our [SpeechToText](/Documentation/Guide/UI_Components/SpeechToText/Overview/) component: previously, the whole button flickered, indicating the listening process. Now, only the Stop icon flickers. [See Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SpeechToText/Overview/)

- In jQuery [Popup](/Documentation/Guide/UI_Components/Popup/Overview/), the `.dx-template-wrapper` element is now rendered inside `.dx-popup-title` when using templates.

- DevExtreme [List](/Documentation/Guide/UI_Components/List/Overview/) now allows users to select item text if no swipe actions are enabled (default on desktop).

    #include full-width-image-container with {
        src: "/images/Changelog/26.1.3/list-item-text-selection.png",
        alt: "A DevExtreme List where item text is selected",
        minWidth: "360px",
        width: "50vw"
    }

    Swipe actions are automatically enabled in the following usage scenarios:

    - When [itemDeleteMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDeleteMode) is *"slideItem"* or *"swipe"*
    - When [menuMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#menuMode) is *"slide"*
    - If an [onItemSwipe](/Documentation/ApiReference/UI_Components/dxList/Configuration/#onItemSwipe) handler is defined
