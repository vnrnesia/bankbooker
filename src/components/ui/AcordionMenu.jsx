"use client";

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "./acordion";

export default function AccordionMenu() {
  return (
    <>
      <div className="flex flex-col items-center text-center mx-auto">
        <h3 className="text-gray-500 text-lg mb-1">Есть вопрос?</h3>
        <h2 className="text-4xl text-center font-medium ">
          Часто задаваемые вопросы
        </h2>
      </div>
      <div className="grid max-w-7xl  mx-auto mt-10">
        <Accordion defaultValue={["item-1"]} multiple>
          <AccordionItem value="item-1">
            <AccordionHeader>
              В какие страны вы сопровождаете платежи?
            </AccordionHeader>
            <AccordionPanel>
              Мы проводим платежи в любую страну мира по вашему поручению.{" "}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionHeader>
              Какую валюту для платежа можно использовать?
            </AccordionHeader>
            <AccordionPanel>
              включая криптовалюту (дописать это к основному ответу)
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionHeader>Какой срок прохождения платежа?</AccordionHeader>
            <AccordionPanel>
              проведём Ваш платеж день в день или на след день.{" "}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionHeader>
              {" "}
              Чем у вас обеспечивается безопасность проведения платежей?{" "}
            </AccordionHeader>
            <AccordionPanel>
              ⁠⁠Обеспечиваем оплаты своей ликвидностью зарубежом.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
