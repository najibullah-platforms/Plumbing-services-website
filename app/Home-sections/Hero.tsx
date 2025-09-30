import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
        {/* wrapper */}
        <div className="bg-primaryClr pt-28">
          <div className="container grid gap-[51px] lg:grid-cols-2 lg:items-center relative z-10">
            {/* content */}
            <div className="text-white">
              <p className="subtitle mb-1.5">Read for help you</p>
              <h1 className="text-4xl sm:text-5xl xl:text-[56px]">Expert plumgin <span className="text-secondaryClr">services</span> provider</h1>
              <p className="mt-4 mb-10 max-w-lg">
                Emergency plumbing repairs available 24/7. Fast response time
                guaranteed.Licensed and insured plumbing professionals with over
                10 years of experience.
              </p>

              {/* Btn */}
              <Link href={"/about"}>learn more</Link>
            </div>
            {/* image */}
            <div>
              <Image
                src="/images/hero-img.png"
                width={647}
                height={600}
                alt="hero images"
                priority
              />
            </div>
          </div>
        </div>
        {/* hero cards */}
        <div>
          {/* Card 01 */}
          <div>
            {/* icon */}
            <div>
              <Image
                src={"/images/icon-1.svg"}
                alt="hero icon one"
                width={64}
                height={64}
              />
            </div>
            {/* Text */}
            <p className="">
              Complete pipe repair and replacement services. Licensed
              professionals with proven results.
            </p>
          </div>
          {/* Card 02 */}
          <div>
            {/* icon */}
            <div>
              <Image
                src={"/images/icon-2.svg"}
                alt="hero icon two"
                width={70}
                height={71}
              />
            </div>
            {/* Text */}
            <p className="">
              Complete pipe repair and replacement services. Licensed
              professionals with proven results.
            </p>

            {/* Btn */}
            <button className="">hire us</button>
          </div>
        </div>
      
    </section>
  );
}
