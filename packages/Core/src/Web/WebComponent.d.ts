export default class WebComponent {
    protected componentName: string;
    protected template: string | HTMLTemplateElement;
    protected isolated: boolean;
    parentElement: HTMLElement | undefined;
    protected attributes: any;
    protected component: any;
    protected html: any;
    protected usedComponents: Array<any>;
    constructor();
    static register(component: any): void;
    mount(): void;
    unmount(): void;
    beforeMount(): void;
}
