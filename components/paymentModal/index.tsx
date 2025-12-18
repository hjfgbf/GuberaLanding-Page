"use client";

import { useState } from "react";

interface PaymentModelProps {
    open: boolean;
    close: () => void;
}

const plans = [
    {
        name: "Starter",
        price: { monthly: 499, yearly: 4999 },
        features: [
            "Add up to 50 products",
            "Order management",
            "Basic Support",
            "All Core Features",
        ],
        popular: false,
    },
    {
        name: "Pro",
        price: { monthly: 1499, yearly: 9999 },
        features: [
            "Unlimited products",
            "Inventory & order management",
            "Priority Support",
            "Advanced Analytics",
            "All Core Features",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: { monthly: 2999, yearly: 19999 },
        features: [
            "Unlimited Projects",
            "Custom storefront design",
            "Dedicated Support",
            "Priority customer support",
            "All Core Features",
        ],
        popular: false,
    },
];

type BillingType = "monthly" | "yearly";

export default function PaymentModel({ open, close }: PaymentModelProps) {
    const [step, setStep] = useState(1);
    const [selectedBilling, setSelectedBilling] = useState<BillingType>("monthly");
    const [selectedPlan, setSelectedPlan] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    if (!open) return null;

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
                {/* Close Button */}
                <button
                    // onClick={close}
                    onClick={() => { close(), setStep(1), setPaymentSuccess(false) }}
                    className="absolute cursor-pointer top-2 right-4 text-gray-500 text-2xl hover:text-red-500"
                >
                    &times;
                </button>

                {/* Step 1 - Plan Selection */}
                {step === 1 && (
                    <>
                        <h2 className="text-xl font-bold mb-6 text-center">Choose a Plan</h2>

                        {/* Billing Toggle */}
                        <div className="mb-6 flex justify-center gap-2">
                            <button
                                onClick={() => setSelectedBilling("monthly")}
                                className={`px-4 py-2 rounded-l-full font-medium transition ${selectedBilling === "monthly"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-gray-300"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setSelectedBilling("yearly")}
                                className={`px-4 py-2 rounded-r-full font-medium transition ${selectedBilling === "yearly"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-gray-300"
                                    }`}
                            >
                                Yearly
                                <span className="ml-2 text-xs text-blue-300">(Save 20%)</span>
                            </button>
                        </div>

                        {/* Plan Cards */}
                        <div className="grid gap-6 sm:grid-cols-3">
                            {plans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`relative flex flex-col rounded-xl border border-slate-700 bg-gray-900 p-6 shadow-md ${plan.popular ? "border-blue-500 ring-2 ring-blue-500" : ""
                                        }`}
                                >
                                    {plan.popular && (
                                        <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
                                            Most Popular
                                        </span>
                                    )}

                                    <h3 className="mb-2 text-lg font-semibold text-white">
                                        {plan.name}
                                    </h3>

                                    <div className="mb-4 flex items-end justify-start">
                                        <span className="text-2xl font-bold text-white">
                                            ₹{plan.price[selectedBilling]}
                                        </span>
                                        <span className="ml-2 text-gray-400 text-sm font-medium">
                                            /{selectedBilling === "monthly" ? "mo" : "yr"}
                                        </span>
                                    </div>

                                    <ul className="mb-4 space-y-1 text-sm text-gray-300">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center">
                                                <svg
                                                    className="mr-2 h-4 w-4 text-blue-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => {
                                            setSelectedPlan(plan.name);
                                            handleNext();
                                        }}
                                        className="mt-auto w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
                                    >
                                        Choose {plan.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Step 2 - User Info */}
                {step === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-center text-gray-800">
                            Enter Your Details
                        </h2>

                        <form className="space-y-5">
                            {/* Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="peer w-full border border-gray-300 rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-transparent"
                                    placeholder="Your Name"
                                    required

                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    Name
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="peer w-full border border-gray-300 rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-transparent"
                                    placeholder="Email Address"
                                    required

                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    Email
                                </label>
                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <input
                                    id="phone"
                                    type="text"
                                    maxLength={10}
                                    inputMode="numeric"
                                    pattern="\d*"
                                    onInput={(e) => {
                                        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 10);
                                    }}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="peer w-full border border-gray-300 rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-transparent"
                                    placeholder="Phone Number"
                                    required

                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    Phone
                                </label>
                            </div>
                        </form>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between pt-2">
                            <button
                                onClick={handleBack}
                                className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
                            >
                                Back
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={!formData.name || !formData.email || !formData.phone}
                                className={`px-4 py-2 rounded text-white font-medium transition ${formData.name && formData.email && formData.phone
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}


                {/* Step 3 - Payment Placeholder */}
                {step === 3 && !paymentSuccess && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-center text-gray-800">
                            Payment
                        </h2>

                        {/* Price Summary */}
                        <div className="border-t pt-4">
                            <div className="flex justify-between text-lg text-gray-700">
                                <span>Selected Plan:</span>
                                <span className="font-medium text-gray-900">{selectedPlan}</span>
                            </div>
                            <div className="flex justify-between text-lg text-gray-700 mt-1">
                                <span>Total:</span>
                                <span className="font-semibold text-gray-900">
                                    ₹{plans.find(p => p.name === selectedPlan)?.price[selectedBilling] || "0.00"}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between pt-4">
                            <button
                                onClick={handleBack}
                                className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => setPaymentSuccess(true)}
                                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && paymentSuccess && (
                    <div className="flex flex-col items-center justify-center text-center space-y-4 py-10">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                            alt="Success"
                            className="w-20 h-20"
                        />
                        <h2 className="text-2xl font-semibold text-green-600">Payment Successful</h2>
                        <p className="text-gray-600">Thank you for purchasing the {selectedPlan} plan.</p>
                        <button
                            onClick={() => { close(), setStep(1), setPaymentSuccess(false) }}
                            className="mt-4 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                )}


            </div>
        </div>
    );
}
