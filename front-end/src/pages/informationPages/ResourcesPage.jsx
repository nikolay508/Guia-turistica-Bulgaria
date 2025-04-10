import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const ResourcesPage = () => {
  const pageData = {
    title: "Recursos y referencias",
    sections: [
      {
        content: "Para la creación de esta guía turística, hemos utilizado una amplia variedad de fuentes confiables y actualizadas. Entre las principales fuentes de información histórica y cultural se encuentran los archivos del Museo Nacional de Historia de Bulgaria, así como publicaciones académicas de la Academia Búlgara de Ciencias. Estas fuentes nos han permitido ofrecer información precisa y detallada sobre la rica historia y cultura de Bulgaria.",
        image: "./images/building.jpeg"
      },
      {
        content: "Para complementar la información recopilada, hemos consultado diversas fuentes en línea, como el sitio web Ucha.se, conocido por su contenido relevante, así como Wikipedia, que ofrece resúmenes accesibles sobre varios temas. Además, exploramos otros sitios especializados, blogs y foros, lo que nos permitió obtener una visión más amplia y diversa del tema. Aunque nos aseguramos de utilizar fuentes confiables, siempre es recomendable verificar la información, ya que los contenidos en línea pueden variar con el tiempo.",
        image: "./images/resources.png"
      },
      {
        content: "Para este proyecto, hemos utilizado imágenes obtenidas de internet que son de uso libre y no están sujetas a derechos de autor. Estas imágenes han sido seleccionadas cuidadosamente de plataformas que ofrecen contenido gratuito y de dominio público, asegurándonos de que su utilización no infrinja ninguna normativa de propiedad intelectual. De esta forma, garantizamos que las imágenes empleadas en nuestro trabajo pueden ser utilizadas sin restricciones legales, respetando los derechos de los creadores originales.",
        image: "./images/img-logo.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
}; 