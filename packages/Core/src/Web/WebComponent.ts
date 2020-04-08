export default class WebComponent {
    protected componentName: string;
    protected template: string|HTMLTemplateElement;
    protected isolated: boolean;
    protected parentElement: HTMLElement|undefined;
    protected component: any;

    constructor() {
        this.componentName = 'baseComponent';
        this.template = undefined;
        this.isolated = false;
        this.parentElement = document.body;
        this.component = undefined;
    }

    static register(component) {
        const { usedComponents, componentName, template, isolated } = component;
        // register any components used by this component
        if (usedComponents) {
            usedComponents.forEach(comp => {
                // make sure each sub component required by this component has been registered
                WebComponent.register(new comp())
            });
        }

        if (!customElements.get(componentName) && template) {
            // define the component
            customElements.define(componentName,
                class newElement extends HTMLElement {
                    constructor () {
                        super();
                        if (isolated) {
                            // append the template contents to this component instance as an encapsulated shadow dom
                            this.attachShadow({mode: 'closed'})
                                .appendChild(
                                    template.content.cloneNode(true)
                                );
                        }
                    }

                    connectedCallback() {
                        if (!isolated) {
                            // append the template contents to this component instance as a regular dom component
                            this.appendChild(template.content.cloneNode(true));
                        }
                    }
                }
            );
        }
    }

    mount() {
        // create an instance of the component
        this.component = document.createElement(this.componentName);
        // append to the current dom
        this.parentElement.appendChild(this.component);
    }

    unmount() {
        if (this.component) this.parentElement.removeChild(this.component);
    }
}