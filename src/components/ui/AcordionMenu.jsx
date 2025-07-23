'use client';

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from './acordion';

export default function AccordionMenu() {
  return (
    <>
     <div className="flex flex-col items-center mx-auto">
        <h3 className="text-gray-500 text-lg mb-1">Have a question?</h3>
      <h2 className="text-4xl font-medium ">Frequently Asked Questions</h2>
    
     </div>
      <div className="grid max-w-6xl px-10 mx-auto mt-10">


        <Accordion defaultValue={['item-1']} multiple>
          <AccordionItem value="item-1">
            <AccordionHeader>What is Bankbooker?</AccordionHeader>
            <AccordionPanel>
              Bankbooker is a financial platform designed to streamline your banking and investment tasks.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionHeader>How do I apply?</AccordionHeader>
            <AccordionPanel>
              You can apply by clicking on the "Apply Now" button on the top right corner and filling out the form.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionHeader>Is there a demo available?</AccordionHeader>
            <AccordionPanel>
              Yes! You can schedule a live demo with our sales team using the "Schedule Demo" option in the chat or homepage.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionHeader>Is there a demo available?</AccordionHeader>
            <AccordionPanel>
              Yes! You can schedule a live demo with our sales team using the "Schedule Demo" option in the chat or homepage.
            </AccordionPanel>
          </AccordionItem>
         
          
        </Accordion>
      </div>
    </>
  );
}
