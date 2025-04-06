import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const HistoryPage = () => {
  const pageData = {
    title: "Historia y cultura",
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