import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const AdvicesPage = () => {
  const pageData = {
    title: "Consejos útiles",
    sections: [
      {
        content: "Bulgaria es un país rico en historia y cultura, lo que lo convierte en un destino fascinante para los viajeros interesados en explorar su patrimonio. Una de las principales sugerencias es visitar Sofía, la capital del país, donde se pueden encontrar una gran cantidad de monumentos históricos como la Catedral de Alejandro Nevski, la Iglesia de Boyana, y el Museo Nacional de Historia. Además, la ciudad alberga una vibrante escena artística, con galerías y teatros que ofrecen una visión profunda de la cultura local. Otro lugar imprescindible es Plovdiv, una de las ciudades más antiguas de Europa, que cuenta con una impresionante arquitectura romana, como el Teatro Romano y las ruinas de la antigua ciudad de Filipópolis. Para los amantes de la historia medieval, el monasterio de Rila, declarado Patrimonio de la Humanidad por la UNESCO, es una joya única que se debe visitar, conocido por su belleza y el profundo simbolismo religioso que alberga.",
        image: "./images/add-ons/bus.png"
      },
      {
        content: "Bulgaria también es famosa por sus paisajes naturales, que ofrecen una gran variedad de actividades al aire libre. Una de las recomendaciones más populares es visitar las Montañas Ródope, donde los turistas pueden disfrutar de caminatas, senderismo, y paseos a caballo en medio de paisajes impresionantes. El Parque Nacional de Pirin es otro destino ideal para los amantes del senderismo y la naturaleza, con una red extensa de rutas y una biodiversidad única. El Lago de Rila es un lugar impresionante para aquellos interesados en el turismo de aventura, donde se pueden practicar deportes acuáticos, así como disfrutar de vistas panorámicas. Para los aficionados al esquí, las estaciones de esquí de Bansko y Borovets ofrecen unas condiciones perfectas durante el invierno.",
        image: "./images/add-ons/pari.png"
      },
      {
        content: "La gastronomía búlgara es otra de las grandes atracciones del país. Los visitantes pueden deleitarse con platos tradicionales como el banitsa (un pastel de hojaldre relleno de queso y huevo), el kebabche (carne picada a la parrilla) o el tarator (una sopa fría de pepino y yogur). Además, Bulgaria es famosa por sus vinos y rakiya (una bebida alcohólica fuerte), que son una parte importante de la cultura local. Para una experiencia auténtica, los turistas pueden asistir a festivales folclóricos, como el Festival de Música Folclórica de Koprivshtitsa, donde se celebran danzas tradicionales y música popular, o visitar pueblos pequeños donde aún se conservan las costumbres y tradiciones búlgaras. Estos eventos permiten conocer de cerca la rica herencia cultural del país.",
        image: "./images/dress-sign.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};