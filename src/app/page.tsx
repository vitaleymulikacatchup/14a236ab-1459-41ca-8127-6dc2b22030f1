"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart, Calendar, CheckCircle, FileText, Handshake, Heart, HelpCircle, MessageCircle, Phone, Shield, Star, Stethoscope, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="MediCare Plus"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Navigate Medicare with Confidence"
          description="Expert guidance for Medicare enrollment, plan comparison, and benefits optimization. We help you find the right coverage for your healthcare needs."
          tag="Medicare Experts"
          tagIcon={Shield}
          imageSrc="https://images.pexels.com/photos/8376148/pexels-photo-8376148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
          buttons={[
            {
              text: "Get Free Consultation",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Your Trusted Medicare Partners"
          description="With over 15 years of experience helping seniors navigate Medicare, we provide personalized guidance to ensure you get the best coverage for your needs and budget."
          tag="About Us"
          tagIcon={Heart}
          imageSrc="https://images.pexels.com/photos/5726809/pexels-photo-5726809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="left"
          bulletPoints={[
            {
              title: "Expert Knowledge",
              description: "Licensed Medicare specialists with comprehensive training on all plan types and regulations",
              icon: Award
            },
            {
              title: "Personalized Service",
              description: "One-on-one consultations tailored to your specific health needs and financial situation",
              icon: Users
            },
            {
              title: "Ongoing Support",
              description: "Year-round assistance with claims, plan changes, and benefit optimization",
              icon: Phone
            }
          ]}
          buttons={[
            {
              text: "Schedule Consultation",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Comprehensive Medicare Services"
          description="We offer complete Medicare support services to help you make informed decisions about your healthcare coverage."
          tag="Our Services"
          tagIcon={Stethoscope}
          features={[
            {
              title: "Medicare Enrollment",
              description: "Expert assistance with initial enrollment, annual open enrollment, and special enrollment periods.",
              icon: FileText
            },
            {
              title: "Plan Comparison",
              description: "Side-by-side analysis of Medicare plans to find the best coverage and savings for your needs.",
              icon: BarChart
            },
            {
              title: "Benefits Review",
              description: "Annual review of your current plan to ensure it still meets your health and financial requirements.",
              icon: CheckCircle
            },
            {
              title: "Claims Assistance",
              description: "Help with understanding and resolving Medicare claims, billing questions, and coverage issues.",
              icon: HelpCircle
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Hear from satisfied clients who found the perfect Medicare coverage with our help."
          tag="Client Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Dorothy Johnson",
              role: "Retired Teacher",
              company: "Medicare Advantage Member",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/19995471/pexels-photo-19995471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              testimonial: "The team at MediCare Plus made choosing my Medicare plan so much easier. Their expertise saved me hundreds of dollars and gave me better coverage than I thought possible."
            },
            {
              id: "2",
              name: "Robert Martinez",
              role: "Former Engineer",
              company: "Medicare Supplement Client",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7551646/pexels-photo-7551646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              testimonial: "I was overwhelmed by all the Medicare options until I found MediCare Plus. They explained everything clearly and helped me find a plan that perfectly fits my needs and budget."
            },
            {
              id: "3",
              name: "Mary and John Wilson",
              role: "Retirees",
              company: "Dual Coverage Members",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6972784/pexels-photo-6972784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              testimonial: "As a couple, we had different healthcare needs. MediCare Plus found plans that work for both of us and saved us money. Their ongoing support has been invaluable."
            },
            {
              id: "4",
              name: "Patricia Davis",
              role: "Healthcare Worker",
              company: "Part D Plan Member",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/23496503/pexels-photo-23496503.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              testimonial: "Even with my healthcare background, navigating Medicare was confusing. MediCare Plus guided me through every step and ensured I got the best prescription drug coverage."
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Insurance Partners"
          description="We work with all major Medicare insurance providers to offer you the widest selection of coverage options."
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/16033963/pexels-photo-16033963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/208474/pexels-photo-208474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/15483517/pexels-photo-15483517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18530623/pexels-photo-18530623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/208474/pexels-photo-208474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6972784/pexels-photo-6972784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about Medicare enrollment, coverage options, and our services."
          tag="FAQ"
          tagIcon={MessageCircle}
          faqs={[
            {
              id: "1",
              title: "When can I enroll in Medicare?",
              content: "You can first enroll in Medicare during your Initial Enrollment Period, which begins 3 months before you turn 65 and ends 3 months after. There's also an Annual Open Enrollment Period from October 15 to December 7 each year."
            },
            {
              id: "2",
              title: "What's the difference between Medicare Advantage and Medicare Supplement?",
              content: "Medicare Advantage (Part C) replaces Original Medicare and often includes prescription drug coverage. Medicare Supplement (Medigap) works alongside Original Medicare to help cover out-of-pocket costs like copays and deductibles."
            },
            {
              id: "3",
              title: "How much does Medicare cost?",
              content: "Medicare Part A is typically premium-free if you've worked 40+ quarters. Part B has a standard premium of $164.90 in 2023, though this can vary based on income. Additional costs depend on the plans you choose for Part C or D coverage."
            },
            {
              id: "4",
              title: "Do I need to enroll in Medicare if I have employer insurance?",
              content: "If you have creditable employer coverage, you may be able to delay Medicare enrollment without penalty. However, it's important to understand the rules and deadlines to avoid late enrollment penalties when you do sign up."
            },
            {
              id: "5",
              title: "Can I change my Medicare plan after enrollment?",
              content: "Yes, you can change your Medicare Advantage or Part D prescription drug plan during the Annual Open Enrollment Period (October 15 - December 7). Some people may also qualify for Special Enrollment Periods due to life events."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          title="Ready to Get Started?"
          description="Schedule your free Medicare consultation today. Our licensed agents will help you understand your options and find the best coverage for your needs."
          tag="Free Consultation"
          tagIcon={Calendar}
          imageSrc="https://images.pexels.com/photos/8376148/pexels-photo-8376148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Schedule Consultation"
          termsText="By submitting, you agree to receive Medicare information and updates. We respect your privacy and never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Medicare Enrollment",
                  href: "features"
                },
                {
                  label: "Plan Comparison",
                  href: "features"
                },
                {
                  label: "Benefits Review",
                  href: "features"
                },
                {
                  label: "Claims Assistance",
                  href: "features"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Medicare Guide",
                  href: "faq"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "about"
                },
                {
                  label: "Testimonials",
                  href: "testimonials"
                }
              ]
            }
          ]}
          copyrightText="© 2025 MediCare Plus Agency. Licensed Medicare Insurance Agency."
        />
      </div>
    </ThemeProvider>
  );
}