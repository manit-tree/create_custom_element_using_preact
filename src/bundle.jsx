import register from 'preact-custom-element';
import { render } from 'preact';
import { AccordionGroup } from './AccordionGroup';
import { Accordion } from './Accordion';
import './bundle.css'
import '../node_modules/preline/dist/accordion.js';

/*
class TAccordionGroup extends HTMLElement {
    connectedCallback() {
        render(<AccordionGroup />, this);
    }
}

class TAccordion extends HTMLElement {
    connectedCallback() {
        render(<Accordion />, this);
    }
}

customElements.define('x-accordion-group', TAccordionGroup);
customElements.define('x-accordion', TAccordion);
*/

register(AccordionGroup, 'x-accordion-group', []);
register(Accordion, 'x-accordion', ['title', 'body']);
