import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const DontsPage = () => {
  const pageData = {
    title: "Cosas que no hacer",
    sections: [
      {
        content: "En Bulgaria, como en muchos otros países, es importante ser respetuoso con las costumbres locales, especialmente en lugares públicos. Uno de los comportamientos a evitar es hablar en voz muy alta, ya que puede considerarse grosero o disruptivo, especialmente en lugares tranquilos como museos, iglesias o restaurantes. Además, no se recomienda hacer gestos ofensivos, como señalar a las personas con el dedo, ya que puede interpretarse como un acto de falta de educación. También es aconsejable evitar conversaciones políticas o controvertidas con desconocidos, ya que el tema puede ser sensible en ciertas situaciones.",
        image: "./images/add-ons/glavi.png"
      },
      {
        content: "Bulgaria es un país con una gran tradición religiosa, predominantemente ortodoxa, y es fundamental respetar las normas relacionadas con la religión. Cuando se visite una iglesia o monasterio, es importante vestirse de manera apropiada, cubriéndose los hombros y las rodillas, ya que el atuendo inapropiado podría ser considerado una falta de respeto. Asimismo, se recomienda no interrumpir o hacer ruido durante los servicios religiosos o las ceremonias, ya que esto puede ser perturbador para los locales. Evitar el uso excesivo de teléfonos móviles o cámaras en lugares sagrados también es una buena práctica.",
        image: "./images/dress-sign.png"
      },
      {
        content: "En Bulgaria, es fundamental tratar con respeto el patrimonio histórico y el medio ambiente. No se debe dañar o grafitear sitios históricos, como el teatro romano de Plovdiv o la fortaleza de Tsarevets, ya que esto es un delito y va en contra de la preservación de la cultura del país. También es importante no dejar basura en la naturaleza o en espacios públicos, ya que Bulgaria valora enormemente su entorno natural, especialmente las áreas montañosas y costeras. Además, no es adecuado tomar piedras, plantas o cualquier elemento de los parques nacionales como recuerdos, ya que esto puede perjudicar la biodiversidad local.",
        image: "./images/add-ons/politic.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};