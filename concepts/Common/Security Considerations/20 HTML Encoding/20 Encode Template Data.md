To encode values in a template, use a third-party sanitizing tool as follows:

    <!-- tab: JavaScript -->
    $(function() {
        $("#tabs").dxTabs({
            dataSource: tabs,
            width: 600,
            itemTemplate: function (itemData) {
                const encodedContent = // encode the itemData.content value; 
                return encodedContent;
            }
        });
    });

    const tabs = [{     
        id: 0,
        content: "<img src=1 onerror=alert('XSS') \/>" 
    }, { 
        id: 1,
        content: "<script>alert('XSS')<\/script>" 
    }, { 
        id: 2, 
        content: "Tab content" 
    }];


When you insert unencoded content, it can open your application to XSS attacks:

![DevExtreme Tabs with disabled HTML encoding](/images/UiWidgets/tabs-itemTemplate-unsafe-html-wo-codepen.png)

The encoded content is interpreted and displayed as text:

![DevExtreme Tabs with enabled HTML encoding](/images/UiWidgets/tabs-itemTemplate-safe-html.png)

[tags] jquery