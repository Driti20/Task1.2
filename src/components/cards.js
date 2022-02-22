import React from "react";
import Card from "./card";

const Cards = (props) => {
  const data = [
    {
      date: "3.3.0 (14/05/2018)",
      status: "New",
      color: "green",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now network drive Verous bug fixes and stability inprovements share permissions re-desiong and optimization",
    },

    {
      date: "3.1.0 (20/05/2015)",
      status: "Fix",
      color: "Blue",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "Introducing Host Cloud Drive - virtual drive functionality \nNew Share Options and menagment New, more user friendly desing Sync optimization Various performance inprovements and bug fix",
    },
    {
      date: "3.1.0 (20/05/2015)",
      status: "Improvment",
      color: "purple",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "Added Settings for Auto start Added Update Notification Speed Optimization \nBug Fixes",
    },
    {
      date: "3.3.0 (14/05/2018)",
      status: "New",
      color: "green",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now network drive Verous bug fixes and stability inprovements share permissions re-desiong and optimization",
    },

    {
      date: "3.1.0 (20/05/2015)",
      status: "Fix",
      color: "Blue",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "Introducing Host Cloud Drive - virtual drive functionality \nNew Share Options and menagment New, more user friendly desing Sync optimization Various performance inprovements and bug fix",
    },
    {
      date: "3.1.0 (20/05/2015)",
      status: "Improvment",
      color: "purple",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "Added Settings for Auto start Added Update Notification Speed Optimization \nBug Fixes",
    },
    {
      date: "3.3.0 (14/05/2018)",
      status: "New",
      color: "green",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now network drive Verous bug fixes and stability inprovements share permissions re-desiong and optimization",
    },

    {
      date: "3.1.0 (20/05/2015)",
      status: "Fix",
      color: "Blue",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "Introducing Host Cloud Drive - virtual drive functionality \nNew Share Options and menagment New, more user friendly desing Sync optimization Various performance inprovements and bug fix",
    },
    {
      date: "3.1.0 (20/05/2015)",
      status: "Improvment",
      color: "purple",
      img: require("../img/profile.PNG"),
      name: "Kevin Joe",
      description:
        "Added Settings for Auto start Added Update Notification Speed Optimization \nBug Fixes",
    },
  ];

  return (
    <>
      {data.map((card) => (
        <div className="card">
        <Card
          date={card.date}
          status={card.status}
          color={card.color}
          img={card.img}
          name={card.name}
          description={card.description}
        />
    </div>
      ))}
      </>
    
  );
};
export default Cards;
