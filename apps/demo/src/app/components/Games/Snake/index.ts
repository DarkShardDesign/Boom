import { createTemplate } from '@Boom/Core/src/Shared/Utils';
import WebComponent from '@Boom/Core/src/Web/WebComponent';

const template = require('./template.html').default;
const styles = require('./styles.css').default;

export default class Header extends WebComponent {
    constructor() {
        super();
        this.componentName = 'snake-game';
        this.isolated = false;
        this.template = createTemplate(styles, template);
    }
}