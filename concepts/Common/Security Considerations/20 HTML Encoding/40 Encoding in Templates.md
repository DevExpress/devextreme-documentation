Angular, Vue, and React always encode values interpolated in templates. Without these frameworks, use the `encodeHtml` utility method to encode the interpolated values:

    <!-- tab: JavaScript -->
    $(function() {
        const encodeHtml = DevExpress.utils.string.encodeHtml;
        $("#tabs").dxTabs({
            dataSource: tabs,
            width: 600,
            itemTemplate: function (itemData) {
                return encodeHtml(itemData.content);
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

<a href="https://codepen.io/romantsukanov/pen/vYKjzQw?editors=1010" target="_blank">View on CodePen</a>

When you insert unencoded content, it can open your application to XSS attacks:

![DevExtreme Tabs with disabled HTML encoding](/images/UiWidgets/tabs-itemTemplate-unsafe-html.png)

The encoded content is interpreted and displayed as text:

![DevExtreme Tabs with enabled HTML encoding](/images/UiWidgets/tabs-itemTemplate-safe-html.png)
