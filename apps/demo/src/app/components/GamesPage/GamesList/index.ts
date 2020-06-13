import { createTemplate } from '@Boom/Core/src/Shared/Utils';
import WebComponent from '@Boom/Core/src/Web/WebComponent';

import GameTiles from './GameTiles';

const template = require('./template.html').default;
const styles = require('./styles.css').default;

export default class GamesList extends WebComponent {
    constructor() {
        super();
        this.componentName = 'games-list-component';
        this.isolated = true;
        this.usedComponents = [GameTiles];
        this.template = createTemplate(styles, template);
    }
}