"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { FcOk } from "react-icons/fc";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kanwal ",
      rating: 5,
      feedback:
        "“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      feedback:
        "“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    },
    {
      id: 3,
      name: "Fizza F.",
      rating: 5,
      feedback:
        "“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
      id: 4,
      name: "James L.",
      rating: 5,
      feedback:
        "“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    },
    {
      id: 5,
      name: "Mooen P.",
      rating: 5,
      feedback:
        "“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    },
    {
      id: 6,
      name:"Sumana Za.",
      rating: 5,
      feedback:
        "“The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. I 've received so many compliments on it already. I can't wait to wear it again!”",
    },
    {
      id: 7,
      name: "Farah M.",
      rating: 5,
      feedback:
        "“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
      id: 8,
      name: "Irfan M.",
      rating: 5,
      feedback:
        "“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends”",
    },
  ];

  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-8 max-w-[150px] md:max-w-full">
        OUR HAPPY CUSTOMERS
      </h1>
      <Carousel className="relative w-full">
        <CarouselContent className="flex gap-5">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="p-6 space-y-4 bg-white rounded-lg shadow-md sm:basis-1/2 md:basis-1/3"
            >
              <p className="text-2xl text-yellow-500">
                {"★ ".repeat(testimonial.rating).trim()}
              </p>
              <b className="flex items-center gap-2 text-2xl">
                {testimonial.name} <FcOk size={20} />
              </b>
              <p className="text-black/60">{testimonial.feedback}</p>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-[75%] md:left-[90%] transform -translate-y-1/2 -top-16 md:-top-9">
          ❮
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 transform -translate-y-1/2 -top-16 md:-top-9">
          ❯
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default Testimonial;
