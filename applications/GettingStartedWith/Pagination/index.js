const total = 100;
let colors = [];
const apiEndpoint = "https://www.thecolorapi.com/id?hex=";
function fetchData(colorId) {
    return new Promise((resolve, reject) => {
        $.getJSON(apiEndpoint + colorId, function (data) {
            const colorData = {
                image: data.image.bare,
                name: data.name.value
            };
            resolve(colorData);
        }).fail(function () {
            reject(`Error loading color for hex: ${colorId}`);
        });
    });
}

const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.random() * 0.4 + 0.2;
    const brightness = Math.random() * 0.3 + 0.7;
    return hsvToHex(hue, saturation, brightness);
};

const hsvToHex = (h, s, v) => {
    let r, g, b;
    const i = Math.floor(h / 60);
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            (r = v), (g = t), (b = p);
            break;
        case 1:
            (r = q), (g = v), (b = p);
            break;
        case 2:
            (r = p), (g = v), (b = t);
            break;
        case 3:
            (r = p), (g = q), (b = v);
            break;
        case 4:
            (r = t), (g = p), (b = v);
            break;
        case 5:
            (r = v), (g = p), (b = q);
            break;
    }
    const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return toHex(r) + toHex(g) + toHex(b);
};

async function generateColors() {
    const promises = [];
    for (let i = 0; i < total; i++) {
        const hex = getRandomPastelColor();
        promises.push(fetchData(hex));
    }
    try {
        colors = await Promise.all(promises);
        renderCards(5, 3);
    } catch (error) {
        console.error(error);
    }
}

const renderCards = (pageSize, pageIndex) => {
    $("#cards").empty();
    const visibleCards = colors.slice(
        (pageIndex - 1) * pageSize,
        pageIndex * pageSize
    );
    console.log(visibleCards);
    visibleCards.forEach((color) => {
        console.log(color);
        const image = $("<img>").attr({
            src: color.image,
            alt: color.name
        });
        $("#cards").append(image);
    });
};

$(() => {
    generateColors();
    const pagination = $("#pagination")
        .dxPagination({
            showInfo: true,
            showNavigationButtons: true,
            itemCount: total,
            pageIndex: 3,
            pageSize: 5,
            onOptionChanged: (e) => {
                if (e.name === "pageSize") {
                    const pageSize = e.value;
                    pagination.option("pageSize", pageSize);
                    const pageIndex = pagination.option("pageIndex");

                    renderCards(pageSize, pageIndex);
                }

                if (e.name === "pageIndex") {
                    const pageSize = pagination.option("pageSize");
                    const pageIndex = e.value;
                    pagination.option("pageIndex", pageIndex);

                    renderCards(pageSize, pageIndex);
                }
            }
        })
        .dxPagination("instance");
});
