export default class WebComponent {
    protected componentName: string;
    protected template: string | HTMLTemplateElement;
    protected isolated: boolean;
    protected parentElement: HTMLElement | undefined;
    protected component: any;
    constructor();
    static register(component: any): void;
    mount(): void;
    unmount(): void;
}
