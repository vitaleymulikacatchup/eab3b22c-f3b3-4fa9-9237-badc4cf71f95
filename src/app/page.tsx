"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Heart, Paw, Star, HeartHandshake, Smile, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Pawsitive Haven"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Adopt", id: "featured" },
            { name: "Services", id: "services" },
            { name: "Stories", id: "testimonials" }
          ]}
          button={{ text: "Donate", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Give Every Pet a Second Chance"
          description="Welcome to Pawsitive Haven, where we provide shelter, care, and love to animals in need. Help us find forever homes for the pets waiting for their families."
          tag="Rescue & Rehoming"
          tagIcon={Heart}
          tagAnimation="entrance-slide"
          buttons={[
            { text: "Explore Adoptable Pets", href: "#featured" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="entrance-slide"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lwdj3n"
          imageAlt="happy dogs cats playing together shelter"
          showDimOverlay={true}
          showBlur={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Mission"
          tagIcon={Paw}
          tagAnimation="entrance-slide"
          title="Dedicated to Animal Welfare"
          buttons={[{ text: "Get Involved", href: "#contact" }]}
          buttonAnimation="entrance-slide"
          useInvertedBackground={false}
        />
      </div>

      <div id="featured" data-section="featured">
        <FeatureCardTwentyThree
          title="Pets Waiting for Their Forever Homes"
          description="Meet some of our wonderful animals ready for adoption. Each one has a unique personality and story."
          tag="Available Now"
          tagIcon={Star}
          tagAnimation="entrance-slide"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "dog-1",              title: "Max",              tags: ["Golden Retriever", "3 years old", "Friendly"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=n3lehc",              imageAlt: "golden retriever portrait friendly smile"
            },
            {
              id: "cat-1",              title: "Luna",              tags: ["Tabby Cat", "2 years old", "Playful"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9a3and",              imageAlt: "tabby cat portrait playful kitten"
            },
            {
              id: "dog-2",              title: "Buddy",              tags: ["Labrador Mix", "5 years old", "Gentle"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vo65mg",              imageAlt: "labrador mix dog gentle face portrait"
            },
            {
              id: "rabbit-1",              title: "Hoppy",              tags: ["Holland Lop", "1 year old", "Energetic"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ur4l0j",              imageAlt: "holland lop rabbit ears fluffy"
            }
          ]}
          buttons={[{ text: "View Full Catalog", href: "#" }]}
          buttonAnimation="entrance-slide"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardThree
          title="How We Help Animals"
          description="Our comprehensive services ensure every animal receives the care they deserve."
          tag="Services"
          tagIcon={HeartHandshake}
          tagAnimation="entrance-slide"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "medical",              name: "Medical Care",              price: "24/7 Support",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=b4ld90",              imageAlt: "veterinary doctor examining pet dog clinic"
            },
            {
              id: "training",              name: "Behavior Training",              price: "Expert Guidance",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6n1gk3",              imageAlt: "dog training behavior lesson outdoor park"
            },
            {
              id: "nutrition",              name: "Nutritious Meals",              price: "Balanced Diet",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e37s0j",              imageAlt: "healthy pet food balanced nutrition bowl"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Success Stories from Our Community"
          description="Hear from families who found their perfect companions at Pawsitive Haven."
          tag="Happy Endings"
          tagIcon={Smile}
          tagAnimation="entrance-slide"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              role: "Dog Parent",              testimonial: "Max has brought so much joy to our family. The shelter staff were incredibly helpful in the adoption process, and we couldn't imagine life without him now.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h4sv8i",              imageAlt: "happy family with dog portrait smile",              icon: Heart
            },
            {
              id: "2",              name: "Michael Chen",              role: "Cat Adoption",              testimonial: "Luna is the sweetest addition to our home. The shelter made sure she was a perfect fit for our lifestyle. Thank you, Pawsitive Haven!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s7ciq9",              imageAlt: "man holding cat smiling portrait",              icon: Heart
            },
            {
              id: "3",              name: "Emma Rodriguez",              role: "Volunteer",              testimonial: "Volunteering at the shelter has been one of the most rewarding experiences. The team is passionate and the work truly changes animals' lives.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=48vtet",              imageAlt: "volunteer at animal shelter smiling work",              icon: Heart
            },
            {
              id: "4",              name: "David Kim",              role: "Adopter",              testimonial: "After rescuing Buddy, I realized how important this shelter's work is. They don't just find homes; they find perfect matches.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vmnffv",              imageAlt: "man with rescue dog outdoor happy",              icon: Heart
            },
            {
              id: "5",              name: "Jessica Martinez",              role: "Donor",              testimonial: "Supporting Pawsitive Haven has given me a sense of purpose. Knowing my donations help save lives is incredibly fulfilling.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=05mrtz",              imageAlt: "generous donor helping animal charity",              icon: Heart
            },
            {
              id: "6",              name: "Thomas Anderson",              role: "Community Partner",              testimonial: "The shelter's commitment to animal welfare is unmatched. They're making a real difference in our community.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bnnqkg",              imageAlt: "community partnership animal shelter event",              icon: Heart
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Our Impact by the Numbers"
          description="Track the difference we're making together in the lives of animals."
          tag="Impact Metrics"
          tagIcon={TrendingUp}
          tagAnimation="entrance-slide"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            {
              id: "rescued",              value: "2,847",              title: "Animals Rescued",              description: "Pets saved from difficult situations since 2015",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oog69o",              imageAlt: "animal rescue emergency save vector icon"
            },
            {
              id: "adopted",              value: "2,612",              title: "Successful Adoptions",              description: "Animals matched with loving forever homes",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=i1a363",              imageAlt: "pet adoption happy family celebration"
            },
            {
              id: "volunteers",              value: "385+",              title: "Active Volunteers",              description: "Dedicated community members supporting our mission",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2y4f63",              imageAlt: "group volunteers team animal shelter"
            },
            {
              id: "medical",              value: "8,924",              title: "Medical Treatments",              description: "Veterinary care procedures performed",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2u8py8",              imageAlt: "veterinary medical care animal treatment"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get Involved"
          tagIcon={Heart}
          tagAnimation="entrance-slide"
          title="Join Our Mission to Save Lives"
          description="Whether you want to adopt, volunteer, donate, or simply learn more, we'd love to hear from you. Together, we can give every animal a second chance."
          buttons={[
            { text: "Adopt a Pet", href: "mailto:adopt@pawsitivehaven.com" },
            { text: "Volunteer", href: "mailto:volunteer@pawsitivehaven.com" },
            { text: "Make a Donation", href: "https://donate.pawsitivehaven.com" }
          ]}
          buttonAnimation="entrance-slide"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Pawsitive Haven"
          copyrightText="© 2025 Pawsitive Haven Pet Shelter. All rights reserved."
          columns={[
            {
              title: "Organization",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Success Stories", href: "#testimonials" }
              ]
            },
            {
              title: "Get Involved",              items: [
                { label: "Adopt a Pet", href: "#featured" },
                { label: "Become a Volunteer", href: "mailto:volunteer@pawsitivehaven.com" },
                { label: "Make a Donation", href: "https://donate.pawsitivehaven.com" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Follow on Facebook", href: "https://facebook.com/pawsitivehaven" },
                { label: "Follow on Instagram", href: "https://instagram.com/pawsitivehaven" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
