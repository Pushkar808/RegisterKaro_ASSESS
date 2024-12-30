import BlogCard from "@/components/blogCard";
import FeedCard from "@/components/feedCard";
import Metrics from "@/components/Metrics";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import pool from "@/database/config";
import Image from "next/image";
import React from "react";
import { FaCheck, FaFileAlt } from "react-icons/fa";

export default async function Home() {
  const images = ["/Brand (1).png", "/Brand (2).png", "/Brand (3).png", "/Brand (4).png", "/Brand (5).png",]
  const services = [
    { imageUrl: "/service1.svg", heading: "Company Formation", description: "Build web-based solutions that enhance customer experience." },
    { imageUrl: "/service2.svg", heading: "Company Secretarial Services", description: "Make data-driven decisions and utilize technology to reach business goals." },
    { imageUrl: "/service3.svg", heading: "Virtual Office Address", description: "Foster customer relationships by effectively serving your market." },
    { imageUrl: "/service4.png", heading: "Annual Compliance Services", description: "Turn your ideas into modern products with our design experts." },
    { imageUrl: "/service5.png", heading: "Payroll Services", description: "Expand your business across the globe with minimal effort." },
    { imageUrl: "/service6.png", heading: "Bookkeeping Services", description: "Steering user behaviours with creative design, data insights & technology." },

  ]

  try {
    const client = await pool.connect();
    console.log("connected")
    const result = await client.query("Select * from public.companies")
    console.log("fetchedData", result.rows)
    const data = result?.rows;
  } catch (error) {
    console.log(error)
  }

  return (
    <div className="">
      {/* Banner Section */}
      <section>
        <div className='flex bg-gradient-to-r from-[#fff9f1] justify-between  to-[#dde3ee] px-5 pt-5 mb-4'>
          <div className='md:w-[700px] text-wrap flex flex-col gap-5 my-10 mx-4'>
            <h2 className='text-[50px]'>Your Trusted Partner <br /> for compliance business needs </h2>
            <hr className='border-2 border-red-500 w-32' />
            <p className='text-xl text-[#4F4F4F]'>An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.</p>
            <div className=''><img src="/Group-2.png" /></div>
            <div>
              <Button className='bg-[#011B5B] hover:bg-[#011B5B] md:w-[200px] font-medium p-5 rounded-sm'>Talk An Expert</Button>
            </div>
          </div>
          <div className='w-[42%] pt-5 md:block hidden'><Image alt="banner" src="/Group-1.png" width={100} height={100} className='w-full h-full' /></div>
        </div>
      </section>

      {/* Marquee section */}
      <section className="md:px-[70px]">
        <div className="w-full flex flex-col gap-2 items-center my-5">
          <div>
            <h5 className="text-[22px] font-bold p-5">Trusted Over 100+ Startups and freelance Business</h5>
          </div>
          <div className="flex gap-10 scroll-x-auto p-5 md:flex-row flex-col">
            {images.map((image, index) => {
              return (
                <img src={image} alt="BrandImg" key={index} />
              )
            })}
          </div>
        </div>
      </section>

      {/* service section */}
      <section className="md:px-[70px] p-5">
        <div className="w-full flex flex-col items-center md:px-[70px] pt-[50px] pb-[100px]">
          <div className="uppercase text-sm text-[#FFA229] my-1">welcome to registerkaro.in</div>
          <div className="text-2xl font-bold my-1">Explore our Services</div>
          <div className="grid md:grid-cols-3 my-10 gap-10">
            {services.map((service, index) => {
              return (
                <ServiceCard {...service} />
              )
            })}

          </div>
          <div>
            <Button className="bg-[#011B5B] hover:bg-[#011B5B] p-6 rounded-sm">See All Services</Button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="md:px-[70px]">
        <div className="flex justify-between w-full md:flex-row flex-col">
          <div className="px-5 flex flex-col gap-6 pb-[100px] w-full md:order-1 order-2">
            <div className="uppercase text-sm text-[#FFA229]">welcome to registerkaro.in</div>
            <div className="text-3xl font-bold">About <span className="text-[#FFA229]">Register Karo</span></div>
            <div>
              <p>
                We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.
              </p>
              <br />
              <p>
                I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
              </p>
            </div>
            <div>
              <Button className="bg-[#011B5B] hover:bg-[#011B5B] p-6 rounded-sm">Learn More</Button>
            </div>
          </div>
          <div className="h-full w-full order-1 md:order-2 py-5">
            <img src="/about.png" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="md:p-[70px] p-5 bg-[#011B5B] text-white ">
        <div className="flex md:flex-row flex-col gap-4 items-center ">
          <div className="flex flex-col gap-6 w-full">
            <div className="text-3xl font-bold">Our Video Introductions</div>
            <div className="text-sm">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</div>
            <div className="flex gap-4">
              <div><img src="/Display Icon.png" width={50} height={50} /></div>
              <div>
                <div className="text-xl">Explore ideas together</div>
                <div className="text-[#AAB5CD]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div><img src="/Display Icon (1).png" width={50} height={50} /></div>
              <div>
                <div className="text-xl">Bring those ideas to life</div>
                <div className="text-[#AAB5CD]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</div>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <img src="Group 1261153023.png" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Cleint Section */}

      <section className="">
        <div className="w-full flex flex-col items-center md:px-[70px] p-5 pt-[50px] pb-[100px]">
          <div className="text-2xl font-bold my-1">Our Happy Clients</div>
          <div className="text-center text-sm text-[#666666] my-1">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</div>
          <div>
            <img src="/pagination.png" className="w-full h-full" />
          </div>
        </div>
      </section>

      <section className="md:px-[70px] bg-[#FFA229] py-[60px]">
        <div className="flex w-full gap-[47px] justify-center md:flex-row flex-col items-center">
          <div className="flex items-center gap-2 font-semibold">
            <div className="rounded-full bg-amber-500 text-white p-3 text-center"><FaFileAlt /></div>
            <div>Executive will Process Application</div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <div className="rounded-full bg-red-500 text-white p-3 text-center"><FaFileAlt /></div>
            <div>Fill up Application Form</div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <div className="rounded-full bg-green-500 text-white p-3 text-center"><FaFileAlt /></div>
            <div>Make Online Payment</div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <div className="rounded-full bg-gray-500 text-white p-3 text-center"><FaFileAlt /></div>
            <div>Get Confirm Mail</div>
          </div>
        </div>
      </section>

      {/* blogs section */}
      <section className="md:px-[70px] p-5">
        <div className="w-full flex flex-col items-center md:px-[70px] pt-[50px] pb-[50px]">
          <div className="uppercase text-sm text-[#FFA229] my-1">EXPLORE OUR BLOGS</div>
          <div className="text-2xl font-bold my-1">Accelerate Digital Transformation</div>
          <div className="grid md:grid-cols-3 my-10 gap-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div>
            <Button className="bg-[#011B5B] hover:bg-[#011B5B] p-6 rounded-sm">Show more blogs</Button>
          </div>
        </div>
      </section>

      {/* blogs section */}
      <section className="md:px-[70px] p-5 bg-[#011B5B]">
        <div className="w-full flex flex-col md:px-[70px] py-[30px]">
          <div className="text-2xl font-bold my-3 text-white">What peoples says about us</div>
          <div >
            <Carousel
              className=""
            >
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 mr-24 md:basis-1/2 lg:basis-1/3">
                    <FeedCard />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>



      <section className="md:px-[70px]">
        <div className="w-full flex flex-col items-center px-[70px] py-[30px]">
          <div className="uppercase text-sm text-[#FFA229] my-1">why register karo</div>
          <div className="text-2xl font-bold my-1">Some Numbers are important</div>
          <div className="grid md:grid-cols-6 my-10 gap-4 ">
            <Metrics title="1M" description="customers" />
            <Metrics title="12" description="Years of excellence" />
            <Metrics title="41" description="R&D Engineers" />
            <Metrics title="78" description="countries" />
            <Metrics title="3287" description="partners" />
            <Metrics title="41" description="award received" />
          </div>
        </div>
      </section>


      <section className="md:px-[70px] p-5 bg-gradient-to-r from-[#c28c48]  to-[#2f5795] text-white">
        <div className="w-full flex flex-col items-center md:px-[70px] py-[30px]">
          <div className="uppercase text-sm my-1">1% of the industry</div>
          <div className="text-2xl font-bold my-1">Welcome to your new digital reality. Now.</div>
          <div className="flex md:w-1/2 my-4">
            <Input type="email" placeholder="Email" />
            <Button type="submit" className="text-white bg-[#FFA229] hover:bg-[#FFA229] mx-1">Subscribe</Button>
          </div>
          <div className="flex gap-5">

            <div className="flex text-sm gap-2 items-center">
              <div className="text-[#2f5795] p-1 rounded-full bg-white">
                <FaCheck />
              </div>
              Instant results
            </div>

            <div className="flex text-sm gap-2 items-center">
              <div className="text-[#2f5795] p-1 rounded-full bg-white">
                <FaCheck />
              </div>
              User-friendly interface
            </div>

            <div className="flex text-sm gap-2 items-center">
              <div className="text-[#2f5795] p-1 rounded-full bg-white">
                <FaCheck />
              </div>
              Personalized customization
            </div>
          </div>

        </div>
      </section>


      <section className="md:px-[70px]">
        <div className="flex md:flex-row flex-col justify-evenly items-center py-10 gap-2 ">
          <img src="/Company logo.png" width={80} />
          <img src="/Company logo 1.png" />
          <img src="/Company logo 2.png" />
          <img src="/Company logo 3.png" />
          <img src="/Company logo 4.png" />
          <img src="/Company logo 5.png" />
        </div>
      </section>
    </div>
  );
}
