import React from "react";
import Title from "../shared/Title";
import Card from "./Card";
import { featuresData } from "./../../constants/CardsData";

const Features = () => {
  return (
    <section id="features" className="w-full h-auto py-10 md:py-20">
      <Title title="Features" description="What I do" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-10">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
