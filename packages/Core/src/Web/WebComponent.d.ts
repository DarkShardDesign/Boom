export default class WebComponent {
    private componentName;
    private template;
    private isolated;
    private parentElement;
    private component;
    constructor();
    static register(component: any): void;
    mount(): void;
    unmount(): void;
}
