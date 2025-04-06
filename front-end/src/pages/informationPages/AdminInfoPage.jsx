import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const AdminInfo = () => {
  const pageData = {
    title: "Header",
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