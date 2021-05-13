const storiesData = {
  food: [
    {
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/food1_jvs30q.jpg`,
      caption: "Delicious 😋",
      captionColor: "white",
      type: "imageCaptionPost",
    },
    {
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/food2_ckef0w.jpg`,
      caption: "Yummy",
      captionColor: "white",
      type: "imageCaptionPost",
    },
    {
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/food3_rpm08i.jpg`,
      caption: "Wow",
      captionColor: "white",
      type: "imageCaptionPost",
    },
  ],
  tech: [
    {
      title: "Apple Apparel Business",
      text: `Do you know Apple also had a clothing line in 1986? The collection was called ‘The Apple Collection’.It is unimaginable today that Apple was once into the apparel business. The company launched its catalog one year after Steve Jobs had left the company.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/tech1_tzyeq4.jpg`,
      bgColor: "#F58529",
      type: "titleImageTextPost",
    },
    {
      title: "Email existed before the world wide web",
      text: `You had to use a computer and a rotary telephone to connect to a service called Micronet. This was pre-WWW, so there were no URLs, just numbered webpages. For emails, the webpage number was 7776.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/tech2_dfriyn.jpg`,
      bgColor: "#2196F3",
      type: "titleImageTextPost",
    },
  ],
  travel: [
    {
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/travel1_erwvl6.jpg`,
      caption: "Beautiful Landscape",
      captionColor: "white",
      type: "imageCaptionPost",
    },
    {
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/travel2_o9gywv.jpg`,
      caption: "Hiking",
      captionColor: "white",
      type: "imageCaptionPost",
    },
  ],
  entertainment: [
    {
      title: "The first modern headphones were produced in the kitchen",
      text: `Nathaniel Baldwin made the first modern headphones(two earpiece with a headband) by hand in his kitchen. It was sold to the Navy as a piece of radio equipment. But because Baldwin were making them in his kitchen, the production rate were very low, around 10 at a time.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/entertainment1_ublrot.jpg`,
      bgColor: "#000000",
      type: "titleImageTextPost",
    },
    {
      title: "Origins of Guitar",
      text: `The oldest guitars came from Persia (modern day Iran), about 3,500 years ago, and were called “Tanbur”. A plucked string instrument that was first called a guitar appeared in Spain around the turn of the fifteenth century. The instrument was actually called a vihuela, and consisted of four double-strings (paired courses).`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/Entertainment2_rp4c8j.jpg`,
      bgColor: "#9C27B0",
      type: "titleImageTextPost",
    },
  ],
  science: [
    {
      title: "Venus Rotation",
      text: `Venus is the only planet in solar system which rotates in clockwise direction. It is hotter than Mercury despite being further away from the Sun and has 90 times the atmospheric pressure of Earth.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/science1_wkmrvk.jpg`,
      bgColor: "#000000",
      type: "titleImageTextPost",
    },
    {
      title: "Plants",
      text: `Plants emit light during photosynthesis which we can't see. They perform photosynthesis in organelles called chloroplasts. Chloroplasts contain chlorophyll, which is used in photosynthesis to make glucose.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/science2_brnnsl.jpg`,
      bgColor: "#4CAF50",
      type: "titleImageTextPost",
    },
  ],
  fitness: [
    {
      title: "Yoga",
      text: `Ancient yogis believed that we only have a limited number of breaths in each life. Hence, it made sense to stretch our life out a bit longer by taking slow and deep breaths. Taking deep breaths can help you in decreasing how much of the stress hormone cortisol is released into your body.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/fitness1_x0xr1y.jpg`,
      bgColor: "#9C27B0",
      type: "titleImageTextPost",
    },
    {
      title: "Barbell",
      text: `In 1928 Kasper Berg of Berg Barbell began making "the first modern Olympic barbell." The Berg Barbell was used in the 1928 Amsterdam Olympic games and soon thereafter York Barbell company, Jackson Barbell and others began copying, thereby standardizing the Berg Olympic barbell.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/fitness2_qihxaq.jpg`,
      bgColor: "#F58529",
      type: "titleImageTextPost",
    },
  ],
  education: [
    {
      title: "Highest School",
      text: `A primary school in Phuma Changthang, Tibet, is thought to be the highest school in the world. At 5,373 metres above sea level, it is 200 metres higher than the base camp of Mount Everest.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/school1_dvvhkk.jpg`,
      bgColor: "#9C27B0",
      type: "titleImageTextPost",
    },
    {
      title: "Largest School",
      text: `The largest school in the world in terms of number of students is the City Montessori School in Lucknow, India. There were more than 56,000 students attending the school on a daily basis`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/school2_i3xrdw.jpg`,
      bgColor: "#2196F3",
      type: "titleImageTextPost",
    },
  ],
  gaming: [
    {
      title: "Jumpman",
      text: `Nintendo's main man, Mario, actually first appeared in the arcade game Donkey Kong on July 9, 1981, and he went by the name Jumpman. When Mario first arrived on the scene, he was actually a carpenter. He had to climb an enormous construction site to save Pauline.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/gaming1_xxcvqt.jpg`,
      bgColor: "#9C27B0",
      type: "titleImageTextPost",
    },
    {
      title: "Gaming in space",
      text: `The Game Boy version of Tetris was the first game played in space. In 1993, Tetris traveled aboard a Soyuz TM-17 rocket to the MIR Space Station, where it was played by Russian cosmonaut Aleksandr A. Serebrov.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/gaming2_wcfsai.jpg`,
      bgColor: "#F58529",
      type: "titleImageTextPost",
    },
  ],
  social: [
    {
      title: "Second largest search engine",
      text: `YouTube is the second largest search engine, taking second to Google with 3 billion searches a month. 37% of all mobile internet traffic belongs to YouTube.`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/social1_mymtgu.jpg`,
      bgColor: "#2196F3",
      type: "titleImageTextPost",
    },
    {
      title: "Social accounts",
      text: `The average internet user has 7.6 social media accounts. We spend a lifetime average of 5 years and 3 months on social media`,
      image: `${process.env.REACT_APP_CLOUDINARY_URL}/social2_xfony1.jpg`,
      bgColor: "#2196F3",
      type: "titleImageTextPost",
    },
  ],
};

export default storiesData;
