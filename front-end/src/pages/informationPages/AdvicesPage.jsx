import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const AdvicesPage = () => {
  const pageData = {
    title: "Consejos útiles",
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