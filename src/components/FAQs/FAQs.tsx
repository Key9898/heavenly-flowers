import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import Breadcrumbs from '../Layout/Breadcrumbs'
import faqsImg from '../../assets/Help&Info/help_info_img.jpg'

const faqs = [
    {
        question: "How to Order?",
        answer:
            "Phone call, online booking, or direct visit to our shop.",
    },
    {
        question: 'How much advance notice do I need to give for delivery?',
        answer:
            'Special events require a 24-hour notice. Regular bouquets need a 3-hour booking.',
    },
    {
        question: 'When will I receive order confirmation?',
        answer:
            'All orders require confirmation within 1 hour of placement.',
    },
    {
        question: 'What are your delivery service hours?',
        answer:
            "Daily delivery from 9:00 AM to 6:00 PM within city limits.",
    },
    {
        question: "How much is the delivery fee?",
        answer:
            'Standard rate of ฿100 for all city deliveries. However, orders over ฿1,000 qualify for free delivery.',
    },
    {
        question: 'What if I enter wrong delivery address?',
        answer:
            "The customer is responsible for the correct delivery addresses provided.",
    },
    {
        question: 'What payment methods do you accept?',
        answer:
            "Cash, bank transfer, mobile banking, and major credit cards.",
    },
    {
        question: 'When is payment required?',
        answer:
            "Advance payment is preferred for all special event orders.",
    },
    {
        question: 'What is your refund policy?',
        answer:
            "Returns accepted within 2 hours with a valid reason and undamaged products.",
    },
    {
        question: 'How long will my flowers last?',
        answer:
            "5-7 days with proper care and daily water changes.",
    },
    {
        question: 'How should I care for my flowers?',
        answer:
            "Keep in a cool environment away from direct sunlight.",
    },
    {
        question: 'Will my flowers look exactly like the picture?',
        answer:
            "Color and size may vary due to natural flower characteristics.",
    },
]

interface FAQsProps {
    onNavigate?: (page: string) => void
}

export default function FAQs({ onNavigate }: FAQsProps) {
    const breadcrumbPages = [
        { name: 'FAQs', href: '#faqs', current: true }
    ]

    return (
        <>
            <Header onNavigate={onNavigate} activePage="faqs" />
            <div className="bg-white">
                <div aria-hidden="true" className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" /> {/* Dark Thing */}
                    <img
                        alt="Floral Haven Frequently Asked Questions - Flower delivery and care instructions"                        
                        src={faqsImg}
                        className="h-96 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-white" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
                    </div>
                </div>

                <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                    <div className="mx-auto max-w-2xl text-left lg:max-w-4xl">
                        <h2 className="text-4xl font-semibold tracking-tight text-cyan-500 sm:text-5xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-6 text-lg text-slate-700">
                            Comprehensive answers to help you understand our flower delivery service. Please browse through our most frequently asked questions to find quick solutions and detailed information about ordering, delivery, and care instructions.
                        </p>
                        <div className="mt-16 divide-y divide-slate-900/10">
                            {faqs.map((faq) => (
                                <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                    <div>
                                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-slate-900">
                                            <span className="text-base/7 font-semibold">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <PlusIcon aria-hidden="true" className="size-4 group-data-open:hidden" />
                                                <MinusIcon aria-hidden="true" className="size-4 group-not-data-open:hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </div>
                                    <DisclosurePanel as="div" className="mt-2 pr-12">
                                        <p className="text-base/7 text-slate-700">{faq.answer}</p>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer onNavigate={onNavigate} />
        </>
    )
}