import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const DontsPage = () => {
  const pageData = {
    title: "Cosas que no hacer",
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