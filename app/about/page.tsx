import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";

export default function page() {
  return (
    <Container>
      <div
        className="max-w-screen-lg 
          mx-auto text-center flex flex-col items-center"
      >
        <Head>
          <title>About Us - HomeStayHaven</title>
        </Head>
        <h1 className="text-3xl font-semibold mb-4 text-center ">About Us</h1>
        <p className="mb-6 font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
          At HomeStayHaven, we believe that the perfect vacation begins with the
          perfect home. We are your gateway to unforgettable getaways, offering
          a curated selection of exquisite vacation homes that promise a unique
          and comfortable retreat for travelers seeking a home away from home.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          Our Commitment to Excellence
        </h2>
        <p className="mb-6 font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
          HomeStayHaven is dedicated to providing a seamless and delightful
          vacation experience. We understand that every traveler is unique, and
          so are their preferences. Our carefully curated portfolio of vacation
          homes caters to a diverse range of tastes, ensuring that you find the
          ideal setting for your dream vacation.
        </p>
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose HomeStayHaven?
          </h2>

          <div className="mb-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
            <p className="font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
              Our team is committed to delivering exceptional service tailored
              to your needs. From the moment you inquire about a property to the
              day you check out, we are here to ensure your stay is smooth and
              enjoyable.
            </p>
          </div>

          <div className="mb-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
            <p className="font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
              We meticulously select each vacation home to meet the highest
              standards of quality, comfort, and style. Expect nothing but the
              best when you choose HomeStayHaven for your getaway.
            </p>
          </div>

          <div className="mb-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Local Insights</h3>
            <p className="font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
              Our team is passionate about the destinations we serve. We provide
              insider tips and recommendations, ensuring you make the most of
              your time in a new and exciting location.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Meet Our CEO - Leonard McCarr Gregory
        </h2>
        <Image
          src="/images/ceo.jpeg"
          alt="our CEO"
          width={250}
          height={250}
          className="rounded-xl mb-4"
        />
        <p className="mb-6 font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
          As the visionary leader behind HomeStayHaven, Leonard McCarr Gregory
          brings a wealth of experience and passion to the world of hospitality.
          With a keen eye for detail and a commitment to excellence, Leonard has
          played a pivotal role in shaping HomeStayHaven into a trusted name in
          the vacation home industry.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          Short Biography of Leonard McCarr Gregory
        </h2>
        <p className="mb-6 font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
          Leonard McCarr Gregory, a seasoned entrepreneur and travel enthusiast,
          founded HomeStayHaven with a simple yet powerful vision – to redefine
          the way people experience vacation accommodations. Leonard&apos;s
          journey in the hospitality industry started with a deep appreciation
          for the personal touches that transform a house into a home.
        </p>
        <p className="mb-6 font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
          Drawing on his background in business and a genuine love for exploring
          new destinations, Leonard has been instrumental in curating a
          collection of vacation homes that reflect his commitment to quality,
          authenticity, and guest satisfaction. His leadership philosophy
          revolves around creating a seamless, personalized experience for every
          traveler, ensuring that HomeStayHaven becomes synonymous with
          unforgettable vacations.
        </p>{" "}
        <p className="mb-6 font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
          Under Leonard&apos;s guidance, HomeStayHaven continues to evolve,
          setting new standards in the vacation home industry. With a passion
          for innovation and a dedication to customer happiness, Leonard McCarr
          Gregory invites you to discover the world of HomeStayHaven and make
          your travel dreams a reality.
        </p>
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6 font-light text-neutral-500 w-full sm:w-3/4 md:w-1/2 lg:w-5/12">
            Ready to embark on your next adventure with HomeStayHaven? Contact
            us today!
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Phone:</h3>
            <Link
              href={"tel:(424) 379-1083"}
              target="_blank"
              rel={"noreferrer noopener"}
            >
              (424) 379-1083
            </Link>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Email:</h3>
            <p className="font-light text-neutral-500">
              info@homestayhaven.com
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
