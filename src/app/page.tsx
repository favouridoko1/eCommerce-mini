import React from "react";
import { blob, bottle, flower, group, group2, group3, group4 } from "../assets";
import Image from "next/image";
const categories = [
  {
    title: "Essential oils",
    icon: group,
    selected: false,
  },
  {
    title: "Natural cosmetics",
    icon: group2,
    selected: false,
  },
  {
    title: "Diffusers",
    icon: group3,
    selected: true, // Selected card
  },
  {
    title: "Aromatherapy",
    icon: group4,
    selected: false,
  },
];

const Home = () => {
  return (
    <>
      <main>
        <section className="md:p-[70px] grid grid-cols-2 items-center justify-between">
          <div className="">
            <h2 className="text-6xl md:text-[96px] text-[#5FD788] font-semibold tracking-[0px]">
              Pear kiwi <br /> & Mint
            </h2>
            <p className="w-[374px]">
              They say that home is where the heart is. Perhaps that’s why a
              feeling of loss is so apparent when you are far from the ones you
              love.
            </p>
          </div>
          <figure>
            <Image src={bottle} alt="" />
          </figure>
        </section>
        <section className="py-10 px-[176.8px]">
          <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-1">
            {categories.map(({ title, icon, selected }, idx) => (
              <article
                key={idx}
                className={`flex flex-col items-center justify-center p-6 h-[274px] font-semibold text-[16px] rounded-tr-[20px] rounded-bl-[20px] shadow-sm transition-all ${
                  selected
                    ? "bg-[#5FD788] text-white"
                    : "bg-[#F9FAFB] text-[#5FD788]"
                }`}
              >
                <div className="mb-4">
                  <Image alt="" src={icon} />
                </div>
                <h3 className="text-sm font-medium">{title}</h3>
              </article>
            ))}
          </div>
        </section>
        <section className="md:px-[85px] flex items-center justify-between gap-[120px] relative h-[887.68px]">
          {/* Absolute positioned Image */}
          <Image src={blob} alt="A blob" className="absolute top-15 -left-10 z-0" />
          <figure className="max-w-[601.28369140625px] z-20">
            <Image alt="A flower" src={flower} className="z-20" />
          </figure>
          <article className="flex flex-col items-end gap-6">
            <h3 className="font-semibold text-end md:text-[40px] tracking-[1%] text-[#5FD788] leading-[108%] max-w-[673px] ">
              Improve your well-being with Aromatherapy
            </h3>
            {/* <h3 className="font-semibold text-end md:text-[40px] tracking-[1%] text-[#5FD788] leading-[108%] ">
            </h3> */}
            <p className="text-[#9CA3AF] text-sm text-end font-semibold tracking-[0px] leading-[140%] max-w-[404px]">
              Diffusing can be exactly what you need to add purpose and focus to
              your daily tasks. We've got tons of fun diffuser blends, with
              scents to suit every mood, day and situation.
            </p>
            <button className="bg-[#5FD788] text-white rounded-lg text-base font-bold px-8 py-2">
              Explore the Collection
            </button>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
