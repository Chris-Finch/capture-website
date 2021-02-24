//Import Images
import athlete from "./img/run2.jpg";
import goodtimes from "./img/mntclimb3.jpg";
import theracer from "./img/cycling4.jpg";
import athlete2 from "./img/run3.jpg";
import goodtimes2 from "./img/mntclimb4.jpg";
import theracer2 from "./img/cycling3.jpg";

export const MovieState = () => {
  return [
    {
      title: "Running",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Speed",
          description:
            "“Our coaches will help you increase your speed to accomplish your racing goals.”",
        },
        {
          title: "Endurance",
          description:
            "“Increase your distance and run further than you thought you could.”",
        },
        {
          title: "Efficiency",
          description:
            "“We'll help you run farther and faster while using less energy.”",
        },
      ],
    },
    {
      title: "Mountain",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Mountain Strong",
          description:
            "“Build the necessary strength for carrying weight at high altitude.”",
        },
        {
          title: "Speed",
          description:
            "“Faster is safer in the mountains. Increase your cardiovascular strength to move faster than ever before.”",
        },
        {
          title: "Nutrition",
          description:
            "“Learn to fuel your body correctly for long days in the mountains.”",
        },
      ],
    },
    {
      title: "Cycling",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Speed",
          description:
            "“Our coaches will help you increase your speed to accomplish your racing goals.”",
        },
        {
          title: "Endurance",
          description:
            "“Increase your distance and ride further than you thought you could.”",
        },
        {
          title: "Efficiency",
          description:
            "“We'll help you ride farther and faster while using less energy.”",
        },
      ],
    },
  ];
};
