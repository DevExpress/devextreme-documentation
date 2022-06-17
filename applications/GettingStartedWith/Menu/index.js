$(() => {
    const menu = $("#menu").dxMenu({
        items: [
            {
                icon: 'home'
            },
            {   
                text: 'About'
            },
            {   
                text: 'Products',
                items: [
                    {
                        text: 'Product 1',
                    },
                    {
                        text: 'Category',
                        items: [
                            {
                                text: 'Product 2'
                            },
                            {
                                beginGroup: true,
                                text: 'Product 3'
                            },
                            {
                                text: 'Product 4'
                            }
                        ]
                    },
                    {   
                        disabled: true,
                        text: 'Product 5'
                    }
                ]
            },
            {
                icon: 'cart'
            }
        ],
        onItemClick: function(e) {
            if (e.itemData.text) {
                console.log(e.itemData.text + ' has been clicked!');
            }
            else if (e.itemData.icon) {
                console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
            }
        }
    }).dxMenu('instance');

    $("#checkbox").dxCheckBox({
        text: 'Enable adaptivity',
        onValueChanged: function(e) {
            menu.option('adaptivityEnabled', e.value)
        }
    });
});