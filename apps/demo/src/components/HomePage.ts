import { createTemplate } from '@Boom/Core/src/Shared/Utils';
import WebComponent from '@Boom/Core/src/web/WebComponent';

export default class HomePage extends WebComponent {
    constructor() {
        super();
        this.componentName = 'home-page';
        this.isolated = false;
        this.parentElement = document.getElementById('app');
        this.template = createTemplate(`
        <style>
        section {
            display: flex;
            flex: 1 1 100%;
            flex-direction: row;
            color: white;
            background-color: blue;
            padding: 5px;
        }
    </style>
    <section>
        <slot name="head">default header</slot>
        <slot name="body">default body</slot>
        <slot name="tail">default footer</slot>
    </section>`);
    }
}