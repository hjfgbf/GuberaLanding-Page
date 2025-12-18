"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";

interface PlanDialogProps {
    open: boolean;
    onClose: () => void;
    planName: string;
}

export default function PlanDialog({ open, onClose, planName }: PlanDialogProps) {
    const [step, setStep] = useState<"form" | "otp" | "payment" | "confirmation">("form");
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        otp: "",
    });

    const dialogRef = useRef<HTMLDivElement>(null);

    // Close on ESC key
    useEffect(() => {
        if (!open) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);

    // Reset state on open
    useEffect(() => {
        if (open) {
            setStep("form");
            setFormData({ name: "", mobile: "", email: "", otp: "" });
        }
    }, [open]);

    // Close on background click
    const handleBgClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === dialogRef.current) {
                onClose();
            }
        },
        [onClose]
    );

    if (!open) return null;

    return (
        <div
            ref={dialogRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50"
            onClick={handleBgClick}
        >
            <div className="relative w-full max-w-md rounded-2xl bg-white px-6 py-10 shadow-2xl">
                {/* Close Button */}
                <button
                    aria-label="Close"
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                >
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                        <path
                            d="M6 6l8 8M14 6l-8 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                {step === "form" && (
                    <>
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">
                            Start with {planName} Plan
                        </h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-full rounded-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <button
                                onClick={() => setStep("otp")}
                                className={`btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]`}
                            >
                                Send OTP
                            </button>
                        </div>
                    </>
                )}

                {step === "otp" && (
                    <>
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">
                            Enter OTP
                        </h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                className="w-full rounded-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                value={formData.otp}
                                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                            />
                            <button
                                onClick={() => setStep("payment")}
                                className={`btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]`}
                            >
                                Verify & Proceed to Payment
                            </button>
                        </div>
                    </>
                )}

                {step === "payment" && (
                    <>
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">
                            Complete Payment
                        </h2>
                        <p className="mb-6 text-center text-gray-700">
                            Redirecting to payment gateway for <span className="font-semibold">{planName}</span> plan...
                        </p>
                        <button
                            onClick={() => setStep("confirmation")}
                            className={`btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]`}
                        >
                            Simulate Payment Success
                        </button>
                    </>
                )}

                {step === "confirmation" && (
                    <>
                        <h2 className="mb-4 text-center text-2xl font-bold text-green-700">
                            Thank You!
                        </h2>
                        <p className="mb-2 text-center text-gray-900 font-semibold">We've received your payment.</p>
                        <p className="mb-4 text-center text-gray-500">
                            Check your email. Our team will contact you within 60 minutes.
                        </p>
                        <button
                            onClick={onClose}
                            className={`btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]`}
                        >
                            Close
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
