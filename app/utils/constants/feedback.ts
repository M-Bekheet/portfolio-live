export type Feedback = {
  quote: string;
  name: string;
  location: string;
};

// Retained verbatim from early freelance engagements. Attribution is kept to
// the first name and country each client used publicly, with no invented
// titles or logos.
export const feedback: Feedback[] = [
  {
    quote:
      "Very responsive, and very flexible in terms of time and direction. Definitely recommended!",
    name: "Peter",
    location: "United States",
  },
  {
    quote:
      "Mahmoud's understanding and quality of work was exceptional. When challenged with a back end problem that I did not communicate to him in the original proposal, he rose to the challenge and resolved the problem!! Exceptional work, great communication and willing to go above and beyond. Looking forward to working with him again in the future!",
    name: "Darren",
    location: "Australia",
  },
  {
    quote:
      "Mahmoud was very helpful and professional, as well as very kind and responsive. He really knew how to do what was asked and recommended a couple of improvements to the job. He asked all the right questions and described his way of working beforehand. I definitely recommend him and I will work with him again given the opportunity.",
    name: "Ersin",
    location: "Turkey",
  },
];
