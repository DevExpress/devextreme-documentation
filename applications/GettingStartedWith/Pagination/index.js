const total = 100;
const hexCodes = [];
const apiEndpoint = 'https://www.thecolorapi.com/id?hex=';
const cache = new Map();

function fetchData(colorId) {
    return new Promise((resolve, reject) => {
        if (cache.has(colorId)) {
            resolve(cache.get(colorId));
        } else {
            $.getJSON(apiEndpoint + colorId, (data) => {
                const colorData = {
                    image: data.image.bare,
                    name: data.name.value,
                };
                cache.set(colorId, colorData);
                resolve(colorData);
            }).fail(() => {
                reject(new Error(`Error loading color for hex: ${colorId}`));
            });
        }
    });
}

const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.random() * 0.4 + 0.2;
    const brightness = Math.random() * 0.3 + 0.7;
    return hsvToHex(hue, saturation, brightness);
};

const hsvToHex = (h, s, v) => {
    let r = 0;
    let g = 0;
    let b = 0;
    const i = Math.floor(h / 60);
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }
    const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    };
    return toHex(r) + toHex(g) + toHex(b);
};

const renderCards = async (pageSize, pageIndex) => {
    $('#cards').empty();
    const startIndex = (pageIndex - 1) * pageSize;
    const endIndex = pageIndex * pageSize;

    const hexSubset = hexCodes.slice(startIndex, endIndex);
    const promises = hexSubset.map((hex) => fetchData(hex));
    try {
        const pageColors = await Promise.all(promises);
        pageColors.forEach((color) => {
            const image = $('<img>').attr({
                src: color.image,
                alt: color.name,
            });
            $('#cards').append(image);
        });
    } catch (error) {
        console.error('Error rendering cards:', error);
    }
};

$(() => {
    for (let i = 0; i < total; i += 1) {
        hexCodes.push(getRandomPastelColor());
    }

    const loadPanel = $('#load-panel')
        .dxLoadPanel({
            position: {
                my: 'top',
                at: 'top',
                of: '#cards',
            },
            visible: false,
            showIndicator: true,
            showPane: true,
            hideOnOutsideClick: false,
        })
        .dxLoadPanel('instance');

    const pagination = $('#pagination')
        .dxPagination({
            showInfo: true,
            showNavigationButtons: true,
            itemCount: total,
            pageIndex: 1,
            pageSize: 5,
            onOptionChanged: (e) => {
                if (e.name === 'pageSize' || e.name === 'pageIndex') {
                    const pageIndex = pagination.option('pageIndex');
                    const pageSize = pagination.option('pageSize');
                    loadPanel.show();
                    renderCards(pageSize, pageIndex).finally(() => loadPanel.hide());
                }
            },
        })
        .dxPagination('instance');

    const pageSize = pagination.option('pageSize');
    const pageIndex = pagination.option('pageIndex');
    loadPanel.show();
    renderCards(pageSize, pageIndex).finally(() => loadPanel.hide());
});
