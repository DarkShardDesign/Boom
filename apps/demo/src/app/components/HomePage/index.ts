import { createTemplate } from '@Boom/Core/src/Shared/Utils';
import WebComponent from '@Boom/Core/src/Web/WebComponent';

import Header from '../Header';
import Footer from '../Footer';
import News from '../News';

const template = require('./template.html').default;
const styles = require('./styles.css').default;

export default class HomePage extends WebComponent {
    constructor() {
        super();
        this.componentName = 'home-page';
        this.isolated = false;
        this.usedComponents = [Header, Footer, News];
        this.parentElement = document.getElementById('app');
        this.template = createTemplate(styles, template);
    }
}