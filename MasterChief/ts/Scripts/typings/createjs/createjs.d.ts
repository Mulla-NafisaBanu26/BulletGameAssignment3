// Type definitions for EaselJS 0.7.1, TweenJS 0.5.1, SoundJS 0.5.2, PreloadJS 0.4.1
// Project: http://www.createjs.com/#!/EaselJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>, Chris Smith <https://github.com/evilangelist>, Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


// Common class and methods for CreateJS.
// Library documentation : http://www.createjs.com/Docs/EaselJS/modules/EaselJS.html
// Library documentation : http://www.createjs.com/Docs/PreloadJS/modules/PreloadJS.html
// Library documentation : http://www.createjs.com/Docs/SoundJS/modules/SoundJS.html
// Library documentation : http://www.createjs.com/Docs/TweenJS/modules/TweenJS.html


declare module createjs {
    export class Event {
        constructor(type: string, bubbles: boolean, cancelable: boolean);

        // properties
        bubbles: boolean;
        cancelable: boolean;
        currentTarget: any; // It is 'Object' type officially, but 'any' is easier to use.
        defaultPrevented: boolean;
        eventPhase: number;
        immediatePropagationStopped: boolean;
        propagationStopped: boolean;
        removed: boolean;
        target: any; // It is 'Object' type officially, but 'any' is easier to use.
        timeStamp: number;
        type: string;
		
		// other event payloads
        data: any;
        delta: number;
        error: string;
        id: string;
        item: any;
        loaded: number;
        name: string;
        next: string;
        params: any;
        paused: boolean;
        progress: number;
        rawResult: any;
        result: any;
        runTime: number;
        src: string;
        time: number;
        total: number;
		
        // methods
        clone(): Event;
        preventDefault(): void;
        remove(): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
        toString(): string;
    }

    export class EventDispatcher {
        constructor();

        // methods
        addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
        addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): Object;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): Object;
        dispatchEvent(eventObj: Object, target?: Object): boolean;
        dispatchEvent(eventObj: string, target?: Object): boolean;
        dispatchEvent(eventObj: Event, target?: Object): boolean;
        hasEventListener(type: string): boolean;
        static initialize(target: Object): void;
        off(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        off(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        off(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        off(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
        on(type: string, listener: (eventObj: Object) => boolean, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        on(type: string, listener: (eventObj: Object) => void, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        on(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
        on(type: string, listener: { handleEvent: (eventObj: Object) => void; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
        removeAllEventListeners(type?: string): void;
        removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
        toString(): string;
        willTrigger(type: string): boolean;
    }
    
    export function indexOf(array: any[], searchElement: Object): number;

    export function proxy(method: (eventObj: Object) => boolean, scope: Object, ...arg: any[]): (eventObj: Object) => any;
    export function proxy(method: (eventObj: Object) => void, scope: Object, ...arg: any[]): (eventObj: Object) => any;
    export function proxy(method: { handleEvent: (eventObj: Object) => boolean; }, scope: Object, ...arg: any[]): (eventObj: Object) => any;
    export function proxy(method: { handleEvent: (eventObj: Object) => void; }, scope: Object, ...arg: any[]): (eventObj: Object) => any;
}