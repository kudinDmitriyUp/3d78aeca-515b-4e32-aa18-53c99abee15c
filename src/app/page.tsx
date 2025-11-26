"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboardCorners from "@/components/sections/hero/HeroBillboardCorners";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTwo from "@/components/sections/feature/FeatureCardTwo";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardThree from "@/components/sections/testimonial/TestimonialCardThree";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { TrendingUp, Briefcase, Users, Globe, Zap, CreditCard, Code, Microscope, Leaf, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TechFund"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123881578-kpeqkluz.jpg"
          logoAlt="TechFund Logo"
          button={{
            text: "Contact",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Empowering Innovation in Italy"
          description="We identify and invest in transformative technology companies reshaping industries across Europe. Our approach combines strategic capital with operational expertise."
          tag="European Tech Investment"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123882699-7vtjuvkj.jpg",
              imageAlt: "Investment discussion"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123883173-2vfgr8ge.jpg",
              imageAlt: "Growth trajectory"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123883970-5scnzu6f.jpg",
              imageAlt: "Innovation lab"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123885339-9gzuqq6e.jpg",
              imageAlt: "Team success"
            }
          ]}
          buttons={[
            {
              text: "Our Focus Areas",
              href: "features"
            },
            {
              text: "Portfolio",
              href: "portfolio"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Building Europe's Next Generation of Technology Leaders"
          metrics={[
            {
              icon: TrendingUp,
              label: "Total Capital Deployed",
              value: "€450M+"
            },
            {
              icon: Briefcase,
              label: "Portfolio Companies",
              value: "45+"
            },
            {
              icon: Users,
              label: "Startup Founders Supported",
              value: "150+"
            },
            {
              icon: Globe,
              label: "Years of Expertise",
              value: "20+"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Investment Focus"
          description="We concentrate on sectors with the highest growth potential and societal impact."
          tag="Strategy"
          features={[
            {
              title: "Artificial Intelligence",
              description: "Machine learning, NLP, and AI infrastructure powering enterprise transformation",
              icon: Zap
            },
            {
              title: "FinTech & Payments",
              description: "Next-generation financial services and digital payment platforms",
              icon: CreditCard
            },
            {
              title: "Enterprise Software",
              description: "B2B SaaS solutions solving critical business challenges",
              icon: Code
            },
            {
              title: "Deep Tech",
              description: "Quantum, biotech, and advanced materials innovation",
              icon: Microscope
            },
            {
              title: "Climate Tech",
              description: "Sustainable solutions addressing environmental challenges",
              icon: Leaf
            },
            {
              title: "Web3 & Crypto",
              description: "Blockchain infrastructure and decentralized applications",
              icon: Shield
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Experienced investors, operators, and entrepreneurs guiding portfolio success."
          tag="Leadership"
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Managing Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123886780-fts4352q.jpg",
              imageAlt: "Marco Rossi"
            },
            {
              id: "2",
              name: "Elena Bianchi",
              role: "Investment Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123887634-mvomkpvb.png",
              imageAlt: "Elena Bianchi"
            },
            {
              id: "3",
              name: "Giovanni Ferrari",
              role: "Operating Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123888449-8fvghspz.jpg",
              imageAlt: "Giovanni Ferrari"
            },
            {
              id: "4",
              name: "Francesca Romano",
              role: "Analyst",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123888952-hta9ab36.jpg",
              imageAlt: "Francesca Romano"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Portfolio Success Stories"
          description="Founders and executives share their experience working with TechFund."
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Andrea Conti",
              handle: "@andreaconti_ceo",
              testimonial: "TechFund didn't just provide capital—they opened doors across Europe and brought invaluable industry expertise that accelerated our growth.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123889519-6pjarv5x.jpg",
              imageAlt: "Andrea Conti"
            },
            {
              id: "2",
              name: "Sofia Marchetti",
              handle: "@sofiamarchetti",
              testimonial: "The team's operational support was transformative. They helped us scale from 10 to 100 employees while maintaining our culture.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123890207-4noaq842.jpg",
              imageAlt: "Sofia Marchetti"
            },
            {
              id: "3",
              name: "Luca Gallo",
              handle: "@lucagallo_tech",
              testimonial: "As first-time founders, having patient capital and experienced mentors made all the difference in our journey.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123890739-6g10e0fr.jpg",
              imageAlt: "Luca Gallo"
            },
            {
              id: "4",
              name: "Isabella Moretti",
              handle: "@isabellamoretti_founder",
              testimonial: "TechFund's network and strategic guidance helped us navigate Series B and expand into new markets successfully.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123891220-wly9z6ss.jpg",
              imageAlt: "Isabella Moretti"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Talk"
          description="Whether you're a founder seeking investment or an LP interested in our fund, we'd love to connect."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company name",
              required: true
            },
            {
              name: "interest",
              type: "text",
              placeholder: "How can we help?",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your vision and goals",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123891758-y5i72lbc.jpg"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Fund",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Investment Focus",
                  href: "features"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Portfolio",
                  href: "portfolio"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Blog",
                  href: "blog"
                },
                {
                  label: "Insights",
                  href: "insights"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Cookie Policy",
                  href: "cookies"
                }
              ]
            }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123881578-kpeqkluz.jpg"
          copyrightText="© 2025 TechFund. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}