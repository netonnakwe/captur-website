import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-2">
        <div className="relative w-full h-full col-span-2 md:col-span-3 row-span-2 min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1721048166150-3b2bb2ca3431?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full 
         min-h-[114px]
        ">
          <Image
            src="https://images.unsplash.com/photo-1720789051356-563d1931eec6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1720633314854-db5d2b6d42c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full min-h-[114px]">
          <Image
            src="https://images.unsplash.com/photo-1718723570674-bf5fdda0418f?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1713449585141-0af71bcbfcc2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
