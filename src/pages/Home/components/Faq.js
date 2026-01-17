import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
            "id": 1,
            "question": "Why should I use BookVault?",
            "answer": "BookVault offers high-quality physical books carefully selected for learners and professionals. We focus on reliable content, affordable pricing, and safe delivery so you can build your knowledge with confidence."
        },
        {
            "id": 2,
            "question": "How long does delivery usually take?",
            "answer": "Delivery usually takes between 3 to 7 business days, depending on your location. Orders are processed quickly, and you will be notified once your book is shipped."
        },
        {
            "id": 3,
            "question": "What should I do if I receive a damaged book?",
            "answer": "If your book arrives damaged, please contact our support team within 48 hours of delivery along with clear photos of the issue. We will arrange a replacement or refund as soon as possible."
        },
        {
            "id": 4,
            "question": "Do you offer refunds?",
            "answer": "Yes, we offer refunds for eligible orders. If you are not satisfied with your purchase or receive a damaged or incorrect item, you can request a refund according to our return policy."
        },
        {
            "id": 5,
            "question": "Can I track my order after purchase?",
            "answer": "Yes, once your order is dispatched, a tracking link will be sent to your registered email so you can track your delivery in real time."
        },
        {
            "id": 6,
            "question": "Do you support international payments?",
            "answer": "Yes, we support international payments using secure and trusted payment gateways. This allows customers from different countries to place orders easily and safely."
        }
    ];

    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}
