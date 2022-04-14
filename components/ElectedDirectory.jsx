import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";
import Image1 from "../assets/images/us-president-barack-obama-meets-with-local-elected-officials-and-faith-E7D615.jpg";
import Image2 from "../assets/images/senate-judiciary-smaller.jpg";

export default function ElectedDirectory() {
  return (
    <section className="mx-auto py-4 pt-16">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto justify-between gap-y-[25px]">
          <Link href="/elected-directory" passHref>
            <a className="w-12/12 md:w-[48%]">
              <h2 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px]  my-4 text-[#023a51]">
                Elected Directory
              </h2>
              <div className="img_container">
                <Image
                  src={Image1}
                  alt=""
                  layout="responsive"
                  className="w-[100%] rounded-[20px] h-[200px]"
                />
              </div>
              <p className="w-[100%] md:w-[100%] mt-6 font-regular text-[22px] leading-[34px] text-[#59667d]">
                Discover elected representatives in each state and county of the
                United states
              </p>
            </a>
          </Link>
          <div className="w-12/12 md:w-[48%]">
            <h2 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px] my-4 text-[#023a51]">
              Dictionary of Politics
            </h2>
            <div className="img_container">
              <Image
                src={Image2}
                layout="responsive"
                alt=""
                className="w-[100%] h-[200px] rounded-[20px]"
              />
            </div>
            <p className="w-[100%] md:w-[100%] mt-6 font-regular  text-[22px] leading-[34px] text-[#59667d]">
              While you decide who best represents you, we&apos;ve put together
              a platform that seeks to clear up the noise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
