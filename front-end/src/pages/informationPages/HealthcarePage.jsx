import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const HealthcarePage = () => {
  const pageData = {
    title: "Sanidad y seguridad",
    sections: [
      {
        content: "Lorem50",
        image: "./bg.png"
      },
      {
        content: "Lorem50",
        image: "./bg.png"
      },
      {
        content: "Lorem50",
        image: "./bg.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};