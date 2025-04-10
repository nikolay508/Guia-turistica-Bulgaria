import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const ResourcesPage = () => {
  const pageData = {
    title: "Recursos y referencias",
    sections: [
      {
        content: "Para la creación de esta guía turística, hemos utilizado una amplia variedad de fuentes confiables y actualizadas. Entre las principales fuentes de información histórica y cultural se encuentran los archivos del Museo Nacional de Historia de Bulgaria, así como publicaciones académicas de la Academia Búlgara de Ciencias. Estas fuentes nos han permitido ofrecer información precisa y detallada sobre la rica historia y cultura de Bulgaria.",
        image: "./images/museum.png"
      },
      {
        content: "Para la información turística y de viajes, hemos consultado guías oficiales del Ministerio de Turismo de Bulgaria, así como datos actualizados de la Organización Mundial del Turismo. También hemos incluido recomendaciones de viajeros experimentados y reseñas verificadas de plataformas de turismo reconocidas. Toda la información práctica sobre transporte, alojamiento y actividades ha sido verificada y actualizada regularmente.",
        image: "./images/tourism.png"
      },
      {
        content: "Las imágenes y fotografías utilizadas en esta guía provienen de fuentes diversas, incluyendo archivos fotográficos oficiales, bancos de imágenes con licencia y fotografías propias. Cada imagen ha sido seleccionada cuidadosamente para representar fielmente los lugares y la cultura búlgara. Agradecemos especialmente a los fotógrafos y organizaciones que han permitido el uso de su material para enriquecer esta guía turística.",
        image: "./images/photography.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
}; 