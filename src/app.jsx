import { AccordionGroup } from './AccordionGroup';
import { Accordion } from './Accordion';
import '../node_modules/preline/dist/accordion.mjs';
import './app.css'


export function App() {
  function base64_encode(text) {
    return btoa(text);
  }

  return (
    <div class="max-w-3xl">
      <h1 class="text-3xl text-primary">Hello World</h1>
      <AccordionGroup>
        <Accordion title="Hello World" body={base64_encode('<strong>Test</strong> 1234')}></Accordion>
      </AccordionGroup>  
    </div>
  )
}
