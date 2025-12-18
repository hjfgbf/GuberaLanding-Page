export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Pricing from "@/components/pricing";
import ClientLogos from "@/components/clients";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <ClientLogos/>
      <Pricing /> 
      <LargeTestimonial />
      <Cta />
      <ContactForm/>

    </>
  );
}

