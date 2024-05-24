$(() => {
    $("#splitter").dxSplitter({
        items: [
            {
                text: "Pane 1",
            },
            {
                splitter: {
                    orientation: "vertical",
                    items: [
                        {
                            text: "Pane 2",
                        },
                        {
                            template() {
                                const htmlContent =
                                    "<div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque at justo non suscipit. Nulla non blandit dolor, non vulputate augue. Praesent at lectus mollis, consectetur ex id, congue tortor. Proin feugiat tempor iaculis. Maecenas in lectus eget magna pretium posuere. Integer ac pellentesque libero, a cursus orci. Morbi iaculis nisl in ex malesuada, eget pellentesque tellus aliquam. Sed in fermentum diam. Nulla lectus nunc, molestie eget mi eu, tincidunt cursus ipsum. Maecenas hendrerit commodo sem, quis tincidunt ipsum semper vitae. Vestibulum leo lectus, imperdiet ut luctus in, euismod id tellus. Integer gravida, sem sagittis egestas placerat, mi orci bibendum tellus, quis sodales sapien tellus ut neque.</div>";
                                const $scrollView = $("<div/>");
                                $scrollView.append($("<div/>").html(htmlContent));
                                $scrollView.dxScrollView({
                                    width: "100%",
                                    height: "100%",
                                    direction: "both",
                                });
                                return $scrollView;
                            },
                        },
                    ],
                },
            },
            {
                text: "Pane 4",
            },
        ],
    });
});
