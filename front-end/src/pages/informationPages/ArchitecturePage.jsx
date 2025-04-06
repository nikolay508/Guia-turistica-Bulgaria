import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const ArchitecturePage = () => {
  const pageData = {
    title: "Arquitectura y monumentos",
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