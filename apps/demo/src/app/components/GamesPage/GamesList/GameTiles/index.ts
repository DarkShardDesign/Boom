import { createTemplate } from '@Boom/Core/src/Shared/Utils';
import WebComponent from '@Boom/Core/src/Web/WebComponent';

const template = require('./template.html').default;
const styles = require('./styles.css').default;

export default class Header extends WebComponent {
    constructor() {
        super();
        this.componentName = 'game-tiles';
        this.isolated = true;
        this.template = createTemplate(styles, template);
    }

    beforeMount() {
        console.log('bob', this.html);
        console.log('bob', JSON.parse(this.attributes.games.nodeValue));
        // this.attributes[games]
    }
}