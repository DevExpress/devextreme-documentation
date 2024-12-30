The render function determines the subset of cards to be displayed and populates the array with images and alt strings.

---
##### jQuery

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
        </head>
        <body>
            <div id="pagination"></div>
            <div id="cards"></div>
        </body>
    </html>

    <!-- tab: index.js -->
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
        const pagination = $('#pagination')
            .dxPagination({
                // ...
            })
        .dxPagination('instance');

        const pageSize = pagination.option('pageSize');
        const pageIndex = pagination.option('pageIndex');
        renderCards(pageSize, pageIndex);
    });

    <!-- tab: index.css -->
    #cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-pagination ... ></dx-pagination>
    <div id="cards">
        <ng-container *ngFor="let color of visibleCards">
            <img [src]="color.image" [alt]="color.name" />
        </ng-container>
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { firstValueFrom } from 'rxjs';
    import { ColorService, Color } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [ColorService],
    })
    export class AppComponent {
        // ...
        colors: Map<string, Color> = new Map();
        visibleCards: Color[] = [];

        constructor(private readonly colorService: ColorService) {}

        ngOnInit(): void {
            // ...
            void this.fetchColorsForPage();
        }

        async fetchColorsForPage(): Promise<void> {
            const startIndex = (this.pageIndex - 1) * this.pageSize;
            const endIndex = this.pageIndex * this.pageSize;
            const hexSubset = this.hexCodes.slice(startIndex, endIndex);

            const promises: Promise<Color>[] = hexSubset.map((hex) => {
                if (this.colors.has(hex)) {
                    return Promise.resolve(this.colors.get(hex)!);
                } else {
                    return firstValueFrom(this.colorService.fetchColorData(hex)).then((data) => {
                        const colorData: Color = data;
                        this.colors.set(hex, colorData);
                        return colorData;
                    });
                }
            });

            try {
                const fetchedColors = await Promise.all(promises);
                this.visibleCards = fetchedColors;
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        }
    }

    <!-- tab: app.service.ts -->
    // ...
    export interface Color {
        image: string;
        name: string;
    }

    <!-- tab: app.component.css -->
    #cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPagination ... />
        <div id="cards">
            <div v-for="color in visibleCards" :key="color.name">
                <img :src="color.image" :alt="color.name" />
            </div>
        </div>
    </template>

    <script setup lang="ts">
    // ...
    interface Color {
        image: string;
        name: string;
    }

    const visibleCards = ref([] as Color[]);
    const colorCache = new Map<string, Color>();

    const fetchColorsForPage = async () => {
        const startIndex = (pageIndex.value - 1) * pageSize.value;
        const endIndex = startIndex + pageSize.value;
        const hexSubset = hexCodes.value.slice(startIndex, endIndex);

        const promises = hexSubset.map((hex) => {
            if (colorCache.has(hex)) {
                return Promise.resolve(colorCache.get(hex));
            }
            return fetchColorData(hex).then((color) => {
            if (color) {
                colorCache.set(hex, color);
            }
            return color;
            });
        });

        try {
            const results = await Promise.all(promises);
            visibleCards.value = results.filter((color): color is Color => color !== null);
        } catch (error) {
            console.error('Error fetching colors:', error);
        }
    };

    onMounted(() => {
        // ...
        fetchColorsForPage();
    });
    </script>

    <style>
    #cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    </style>

##### React

    <!-- tab: App.tsx -->
    import React, { useState, useRef, useEffect } from 'react';
    // ...
    interface Color {
        image: string;
        name: string;
    }

    function App(): JSX.Element {
        // ...
        const [visibleCards, setVisibleCards] = useState<Color[]>([]);
        const colorsCache = useRef<Map<string, Color>>(new Map());

        const fetchColorsForPage = useCallback(async (): Promise<void> => {
            const startIndex = (pageIndex - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const hexSubset = hexCodes.current.slice(startIndex, endIndex);

            const promises = hexSubset.map((hex) => {
                if (colorsCache.current.has(hex)) {
                    return Promise.resolve(colorsCache.current.get(hex));
                }
                return fetchColorData(hex).then((color) => {
                    if (color) {
                        colorsCache.current.set(hex, color);
                    }
                    return color;
                });
            });

            try {
                const results = await Promise.all(promises);
                const filteredColors = results.filter((color): color is Color => color !== null);
                setVisibleCards(filteredColors);
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        }, [pageIndex, pageSize]);

        useEffect(() => {
            fetchColorsForPage().catch((error) => {
                console.error('Error updating visible cards:', error);
            });
        }, [fetchColorsForPage]);

        return (
            <Pagination ... />
            <div id="cards">
                {visibleCards.map((color, index) => (
                    <div key={index}>
                        <img src={color.image} alt={color.name} />
                    </div>
                ))}
            </div>
        );
    }

    export default App;

    <!-- tab: App.css -->
    #cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

---