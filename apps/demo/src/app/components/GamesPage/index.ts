import { createTemplate } from '@Boom/Core/src/Shared/Utils';
import WebComponent from '@Boom/Core/src/Web/WebComponent';

import Header from '../Header';
import Footer from '../Footer';
import GamesList from './GamesList';

const template = require('./template.html').default;
const styles = require('./styles.css').default;

export default class GamesPage extends WebComponent {
    constructor() {
        super();
        this.componentName = 'games-page';
        this.usedComponents = [Header, Footer, GamesList]
        this.isolated = false;
        this.parentElement = document.getElementById('app');
        this.template = createTemplate(styles, template);
    }
}