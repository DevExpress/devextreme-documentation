[note]

- When the HTML Editor loads its **value**, the component removes redundant tags:

        <!-- from -->
        <p><span>Hello</span><em><span>World</span></em></p>

        <!-- to -->
        <p>Hello<em>World</em></p>

- The component merges consecutive inline tags that match and contain identical attributes:

        <!-- from -->
        <a href="/">Hello</a><a href="/">World</a>
        
        <!-- to -->
        <a href="/">HelloWorld</a>

    To avoid this behavior, separate identical inline tags with other tags.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/"
}