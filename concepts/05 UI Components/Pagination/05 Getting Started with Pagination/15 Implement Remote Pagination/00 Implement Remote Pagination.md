This section explains how to implement remote pagination. Client code generates a color list and requests a remote service for cards representing color entries on the screen. The pagination component helps users browse the resulting color cards.

Implementation can be broken down into three steps:

1. Generate 100 hex codes.
2. Fetch color cards from [The Color API](https://www.thecolorapi.com/) service when necessary:
    - On page load
    - On page size changes
    - On page index changes
3. Display color cards obtained from the service. 

Implement the first step. Generate 100 random pastel hex codes and add them to an array:

---
##### jQuery

    <!-- tab: index.js -->
    const hexCodes = [];

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
    $(() => {
        for (let i = 0; i < total; i += 1) {
            hexCodes.push(getRandomPastelColor());
        }
        
        const pagination = $('#pagination')
            .dxPagination({
                // ...
            })
        .dxPagination('instance');
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { ColorService } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [ColorService],
    })
    export class AppComponent {
        // ...
        hexCodes: string[] = [];

        constructor(private readonly colorService: ColorService) {}

        ngOnInit(): void {
            this.generateHexCodes();
        }

        generateHexCodes(): void {
            for (let i = 0; i < this.total; i++) {
                this.hexCodes.push(this.colorService.getRandomPastelColor());
            }
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    @Injectable({
        providedIn: 'root',
    })
    export class ColorService {
        private hsvToHex(h: number, s: number, v: number): string {
            let r = 0;
            let g = 0;
            let b = 0;
            const i = Math.floor(h / 60);
            const f = h / 60 - i;
            const p = v * (1 - s);
            const q = v * (1 - f * s);
            const t = v * (1 - (1 - f) * s);

            switch (i % 6) {
                case 0: [r, g, b] = [v, t, p]; break;
                case 1: [r, g, b] = [q, v, p]; break;
                case 2: [r, g, b] = [p, v, t]; break;
                case 3: [r, g, b] = [p, q, v]; break;
                case 4: [r, g, b] = [t, p, v]; break;
                case 5: [r, g, b] = [v, p, q]; break;
            }

            const toHex = (x: number): string => Math.round(x * 255).toString(16).padStart(2, '0');
            return `${toHex(r)}${toHex(g)}${toHex(b)}`;
        }

        getRandomPastelColor(): string {
            const hue = Math.floor(Math.random() * 360);
            const saturation = Math.random() * 0.4 + 0.2;
            const brightness = Math.random() * 0.3 + 0.7;
            return this.hsvToHex(hue, saturation, brightness);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
    </template>

    <script setup lang="ts">
    // ...
    import { ref, onMounted } from 'vue';
    import { getRandomPastelColor } from '../assets/colorService';

    const hexCodes = ref<string[]>([]);

    const generateHexCodes = () => {
        for (let i = 0; i < total; i++) {
            hexCodes.value.push(getRandomPastelColor());
        }
    };

    onMounted(() => {
        generateHexCodes();
    });
    </script>

    <!-- tab: colorService.ts -->
    export const getRandomPastelColor = (): string => {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.random() * 0.4 + 0.2;
        const brightness = Math.random() * 0.3 + 0.7;
        return hsvToHex(hue, saturation, brightness);
    };

    const hsvToHex = (h: number, s: number, v: number): string => {
        let r: number, g: number, b: number;
        const i = Math.floor(h / 60) % 6;
        const f = h / 60 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);

        switch (i) {
            case 0: [r, g, b] = [v, t, p]; break;
            case 1: [r, g, b] = [q, v, p]; break;
            case 2: [r, g, b] = [p, v, t]; break;
            case 3: [r, g, b] = [p, q, v]; break;
            case 4: [r, g, b] = [t, p, v]; break;
            case 5: [r, g, b] = [v, p, q]; break;
            default: throw new Error("Unexpected case in HSV to RGB conversion");
        }

        const toHex = (x: number): string => Math.round(x * 255).toString(16).padStart(2, '0');
        return `${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

##### React

    <!-- tab: App.tsx -->
    import React, { useState, useEffect } from 'react';
    import { getRandomPastelColor } from './colorService';
    // ...

    function App(): JSX.Element {
        // ...
        const hexCodes = useRef<string[]>([]);

        useEffect(() => {
            for (let i = 0; i < total; i++) {
                hexCodes.current.push(getRandomPastelColor());
            }
        }, []);

        return (
            <!-- ... -->
        );
    }

    export default App;

    <!-- tab: colorService.ts -->
    export const getRandomPastelColor = (): string => {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.random() * 0.4 + 0.2;
        const brightness = Math.random() * 0.3 + 0.7;
        return hsvToHex(hue, saturation, brightness);
    };

    const hsvToHex = (h: number, s: number, v: number): string => {
        let r: number, g: number, b: number;
        const i = Math.floor(h / 60) % 6;
        const f = h / 60 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);

        switch (i) {
            case 0: [r, g, b] = [v, t, p]; break;
            case 1: [r, g, b] = [q, v, p]; break;
            case 2: [r, g, b] = [p, v, t]; break;
            case 3: [r, g, b] = [p, q, v]; break;
            case 4: [r, g, b] = [t, p, v]; break;
            case 5: [r, g, b] = [v, p, q]; break;
            default: throw new Error("Unexpected case in HSV to RGB conversion");
        }

        function toHex(x: number): string {
            if (isNaN(x) || x < 0 || x > 1) {
                return '00';
            }
                return Math.round(x * 255).toString(16).padStart(2, '0');
        }
        return `${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

---