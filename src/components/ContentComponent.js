import React from 'react';
import {
        Accordion,
        AccordionItem,
        AccordionItemHeading,
        AccordionItemButton,
        AccordionItemPanel,
    } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Content(props) {

    return(
      <div className="container">
          <div className="row">
            <div className="row-content col-12">
               <h2>Content</h2>

                  <Accordion>
                       <AccordionItem>
                           <AccordionItemHeading>
                               <AccordionItemButton>2020</AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                               <p>
                                  <a href="/assets/pdf/article_sample.pdf">Jan - Feb 2020</a> <br />
                                  <a href="/assets/pdf/article_sample.pdf">Mar - Apr 2020</a>
                               </p>
                           </AccordionItemPanel>
                       </AccordionItem>
                       <AccordionItem>
                           <AccordionItemHeading>
                               <AccordionItemButton>2019</AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                               <p>
                                   <a href="/assets/pdf/article_sample.pdf">Jan - Feb 2019</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">Mar - Apr 2019</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">May - Jun 2019</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">Jul - Aug 2019</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">Sep - Oct 2019</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">Nov - Dec 2019</a>
                               </p>
                           </AccordionItemPanel>
                       </AccordionItem>
                       <AccordionItem>
                           <AccordionItemHeading>
                               <AccordionItemButton>2018</AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                               <p>
                                   <a href="/assets/pdf/article_sample.pdf">Jan - Feb 2018</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">Mar - Apr 2018</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">May - Jun 2018</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">Jul - Aug 2018</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">Sep - Oct 2018</a> <br />
                                   <a href="/assets/pdf/article_sample.pdf">Nov - Dec 2018</a>
                               </p>
                           </AccordionItemPanel>
                       </AccordionItem>
                 </Accordion>

            </div>
          </div>
      </div>

    );
}

export default Content;
