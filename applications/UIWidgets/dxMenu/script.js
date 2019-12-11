menuItems = [{
    text: 'Guides',
    items: [
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/VSIntegration.png',
            text: 'VS Integration',
            items: [
                { text: 'Project Templates' },
                { text: 'Design-Time Features' },
                { text: 'Simulation Tools' },
                { text: 'Packaging' }
            ]
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/SPAFramework.png',
            text: 'SPA Framework',
            items: [
                { text: 'Application Design' },
                { text: 'Application Project' },
                { text: 'Actions' }
            ]
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/none.png',
            text: 'Demos Inside'
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/UIWidgets.png',
            text: 'UI Widgets',
            items: [
                { text: 'Basics' },
                { text: 'UI Widgets Categories' },
                { text: 'UI Widgets - Deep Dive' },
                { text: 'DataGrid' }
            ]
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/DataVisualization.png',
            text: 'Data Visualization',
            items: [
                { text: 'Charts' },
                { text: 'Guages' },
                { text: 'RangeSelector' },
                { text: 'VectorMap' }
            ]
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/DataLayer.png',
            text: 'Data Layer'
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/none.png',
            text: 'Themes'
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/none.png',
            text: 'Common'
        }
    ]
},
{
    text: 'Reference',
    disabled: true,
    items: [
        { text: 'Data Library' },
        { text: 'Application Framework' },
        { text: 'Framework Markup Components' },
        { text: 'UI Widgets' },
        { text: 'Data Visualization Widgets' },
        { text: 'CSS Classes' },
        { text: 'UI Events' },
        { text: 'Common Object Structures' },
        { text: 'Utils' }
    ]
}];
itemClicked = function(data) {
    if (!data.itemData.items) {
        DevExpress.ui.notify("The \"" + data.itemData.text + "\" item is clicked", "success", 500);
    }
}