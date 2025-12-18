"use client"

import { useState } from "react";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import PlanDialog from "./plan-dialog";




const plans = [
  {
    name: "Starter",
    price: { monthly: 499, yearly: 4999 },
    features: ["Add up to 50 products","Order management", "Basic Support", "All Core Features"],
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 1499, yearly: 9999 },
    features: [
      " Unlimited products",
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
      // "Custom Integrations",
      "Priority customer support",
      "All Core Features",
    ],
    popular: false,
  },
];

type BillingType = "monthly" | "yearly";

interface PricingProps {
  billing?: BillingType;
}

export default function Pricing({ billing = "monthly" }: PricingProps) {
  const [selectedBilling, setSelectedBilling] = useState<BillingType>(billing);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [plan, setPlan] = useState("");
  return (
    <section>

      <PlanDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        planName={plan}
      />
      <div
        // className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
        className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900"
      // data-aos="zoom-y-out"
      >
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        >
          <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
        </div>
        {/* Stripes illustration */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={Stripes}
            width={768}
            height={432}
            alt="Stripes"
          />
        </div>
        <div className="px-4 py-12 md:px-12 md:py-20">
          {/* Toggle */}
          <div className="mb-10 flex justify-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedBilling("monthly")}
              className={`px-4 py-2 rounded-l-full font-medium transition ${selectedBilling === "monthly"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
                }`}
              aria-pressed={selectedBilling === "monthly"}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setSelectedBilling("yearly")}
              className={`px-4 py-2 rounded-r-full font-medium transition ${selectedBilling === "yearly"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
                }`}
              aria-pressed={selectedBilling === "yearly"}
            >
              Yearly
              <span className="ml-2 text-xs text-blue-300">(Save 20%)</span>
            </button>
          </div>
          {/* Pricing Cards */}
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border border-slate-700 bg-gray-900 p-8 shadow-lg ${plan.popular ? "border-blue-500 ring-2 ring-blue-500" : ""
                  }`}
              >
                {plan.popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-4 text-xl font-bold text-gray-100">
                  {plan.name}
                </h3>
                <div className="mb-6 flex items-end justify-center">
                  <span className="text-4xl font-extrabold text-white">
                  ₹{plan.price[selectedBilling]}
                  </span>
                  <span className="ml-2 text-gray-400 text-base font-medium">
                    /{selectedBilling === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
                <ul className="mb-8 space-y-2 text-gray-300 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="mr-2 h-5 w-5 text-blue-400"
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
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPlan(plan.name);
                    setDialogOpen(true);
                  }}
                  className={`btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] ${plan.popular ? "ring-2 ring-blue-400" : ""
                    }`}
                >
                  Choose {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
