type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sathish — Portfolio",
    fullName: "Sathish Venkatesan",
    email: "Sathiz2k02@gmail.com",
  },
  hero: {
    name: "Sathish",
    p: [
      "I'm a Front-end Developer focused on building clean and responsive web applications.",
      "I work mainly with React, JavaScript, HTML, and CSS to create simple and user-friendly interfaces."
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a front-end developer with a strong foundation in HTML, CSS, JavaScript, and React. 
I completed my degree at Periyar Maniammai Institute of Science and Technology and worked as a front-end developer intern at Imaggar Technologies in Thanjavur, where I built real-world UI components and pages. 
One of my key projects is “Musicity”, a Spotify-style music website with features like play/pause, favorite tracks, and multi-language song search. 
I enjoy creating responsive, user-friendly interfaces and I'm always learning new tools and best practices to improve my work.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
      content: `I worked as a Front-end Developer intern at Imaggar Technologies in Thanjavur for 6 months. 
During this time, I used React, JavaScript, HTML, CSS, and basic REST APIs to build and maintain web pages, fix UI bugs, and improve user experience across different screen sizes.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects show my skills and experience through real examples of my work. 
They include personal and internship projects such as “Musicity” (a Spotify-like music web app) and other React-based UIs. 
Each project is briefly described with links to code repositories and, where available, live demos. 
They reflect my ability to work with modern front-end technologies, build responsive layouts, and continuously improve the user experience.`,
    },
  },
};
