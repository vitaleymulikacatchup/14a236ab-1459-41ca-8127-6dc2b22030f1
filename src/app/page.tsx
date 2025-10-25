"use client"

import { Award, CheckCircle, HelpCircle, Handshake, Star, Target, Rocket, Users, Zap } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="MVP Solutions"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero" className="mx-auto px-4 md:px-6">
        <HeroSplit
          title="Revolutionary MVP Development Solutions"
          description="Transform your innovative ideas into market-ready products with our comprehensive MVP development services. We help startups and enterprises launch faster with validated solutions."
          tag="Premium MVP Services"
          tagIcon={Award}
          imageSrc="https://images.pexels.com/photos/34369598/pexels-photo-34369598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
          buttons={[
            { text: "Start Your MVP", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about" className="mx-auto px-4 md:px-6">
        <TextAbout
          title="Expert MVP Development Team"
          content="With over a decade of experience in product development, our team specializes in creating minimum viable products that validate your business concepts while minimizing risk and time-to-market. We combine technical expertise with market insights to deliver solutions that resonate with your target audience."
          buttons={[
            { text: "Schedule Consultation", href: "contact" }
          ]}
        />
      </div>
      
      <div id="features" data-section="features" className="mx-auto px-4 md:px-6">
        <FeatureCardTwo
          title="Comprehensive MVP Services"
          description="From ideation to launch, we provide end-to-end MVP development services that help you validate your business ideas efficiently and effectively."
          tag="Core Features"
          tagIcon={Zap}
          features={[
            {
              title: "Rapid Prototyping",
              description: "Quick development cycles with validated learning approaches to test your core assumptions.",
              icon: CheckCircle
            },
            {
              title: "Market Validation",
              description: "Strategic user research and testing to ensure your MVP meets real market demands.",
              icon: Target
            },
            {
              title: "Scalable Architecture",
              description: "Future-ready technical foundation that grows with your successful product launch.",
              icon: Rocket
            },
            {
              title: "User-Centric Design",
              description: "Intuitive interfaces designed for maximum user engagement and conversion rates.",
              icon: Users
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials" className="mx-auto px-4 md:px-6">
        <TestimonialCardOne
          title="Client Success Stories"
          description="Discover how our MVP development services have helped businesses launch successful products and achieve market validation."
          tag="Client Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Founder",
              company: "TechStart",
              content: "Their MVP development expertise helped us launch 3 months ahead of schedule. The market validation insights were invaluable.",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Product Manager",
              company: "InnovaCorp",
              content: "Outstanding service from concept to launch. They understood our vision and delivered beyond expectations.",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "CEO",
              company: "Growth Dynamics",
              content: "The team's expertise in MVP development saved us countless hours and resources. Highly recommended.",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Park",
              role: "Technical Director",
              company: "Future Labs",
              content: "Professional, efficient, and results-driven. They delivered a robust MVP that exceeded our requirements.",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof" className="mx-auto px-4 md:px-6">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of successful companies who have launched their MVPs with our proven development methodology."
          tag="Trusted Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/15624239/pexels-photo-15624239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2379944/pexels-photo-2379944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16629368/pexels-photo-16629368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/303317/pexels-photo-303317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/15624239/pexels-photo-15624239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8185626/pexels-photo-8185626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8373814/pexels-photo-8373814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/303317/pexels-photo-303317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="faq" data-section="faq" className="mx-auto px-4 md:px-6">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our MVP development process, timeline, and services."
          tag="Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How long does MVP development typically take?",
              content: "Most MVP projects take 8-12 weeks from concept to launch, depending on complexity and feature scope. We use agile methodologies to ensure rapid iteration and continuous feedback."
            },
            {
              id: "2",
              title: "What's included in your MVP development service?",
              content: "Our comprehensive service includes market research, user experience design, technical development, testing, deployment, and post-launch support. We also provide analytics setup and user feedback collection systems."
            },
            {
              id: "3",
              title: "Do you provide ongoing support after MVP launch?",
              content: "Yes, we offer various support packages including maintenance, feature enhancements, scaling support, and analytics monitoring to help you iterate based on user feedback and market response."
            },
            {
              id: "4",
              title: "Can you help with market validation and user research?",
              content: "Absolutely. We conduct comprehensive market research, competitor analysis, user interviews, and prototype testing to validate your assumptions before development begins."
            },
            {
              id: "5",
              title: "What technologies do you use for MVP development?",
              content: "We select the most appropriate technology stack based on your specific needs, including modern web frameworks, mobile development platforms, and cloud infrastructure for optimal scalability and performance."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact" className="mx-auto px-4 md:px-6">
        <ContactCenterForm
          title="Ready to Launch Your MVP?"
          description="Let's discuss your project and create a roadmap for your successful product launch. Get in touch with our MVP development experts today."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your MVP idea and requirements...",
            rows: 5,
            required: true
          }}
          buttonText="Start My MVP Project"
        />
      </div>
      
      <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6">
        <FooterLogoEmphasis
          columns={[
            {
              items: [
                { label: "Our Services", href: "features" },
                { label: "About Us", href: "about" },
                { label: "Success Stories", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Get Started", href: "contact" }
              ]
            }
          ]}
          logoText="MVP Solutions"
        />
      </div>
    </ThemeProvider>
  );
}