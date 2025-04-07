import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const ArchitecturePage = () => {
  const pageData = {
    title: "Arquitectura y monumentos",
    sections: [
      {
        content: "Arquitectura histórica y patrimonio cultural de Bulgaria: Bulgaria es un país con una rica herencia arquitectónica que abarca desde la época romana hasta el Renacimiento búlgaro. En ciudades como Sofía, Plovdiv y Veliko Tarnovo, se pueden encontrar testimonios de épocas pasadas. Sofía, la capital del país, cuenta con una notable mezcla de arquitectura clásica y moderna. Entre los ejemplos más representativos están la Iglesia de San Jorge, un edificio de ladrillo rojo de la época romana, y la majestuosa Catedral de Alexander Nevsky, de estilo neobizantino. Por otro lado, Plovdiv, una de las ciudades más antiguas de Europa, destaca por su teatro romano bien conservado, una joya arquitectónica que data del siglo II d.C., y su Barrio Antiguo, donde las casas de estilo renacentista búlgaro adornan las empinadas colinas. En Veliko Tarnovo, la antigua capital del Imperio búlgaro, se encuentra el impresionante Tsarevets, una fortaleza medieval que ofrece una vista panorámica única.",
        image: "./images/bg.png"
      },
      {
        content: "Bulgaria no solo es rica en patrimonio arquitectónico, sino también en belleza natural. El país alberga una variedad impresionante de paisajes, desde las montañas de los Balcanes hasta las costas del Mar Negro. Las montañas de Rila y Pirin son ideales para los amantes del senderismo y la aventura, y el Parque Nacional Rila, hogar del famoso Monasterio de Rila, es un lugar destacado. El Monasterio de Rila, considerado Patrimonio de la Humanidad por la UNESCO, es uno de los monumentos más importantes de Bulgaria, tanto por su valor arquitectónico como por su profundo significado espiritual. Además, la región de los Monasterios de Pirin, con su pintoresco paisaje montañoso, es perfecta para el ecoturismo y el disfrute de la naturaleza. La costa del Mar Negro también es famosa por sus playas de arena dorada y aguas cálidas, especialmente en lugares como Varna y Burgas.",
        image: "./images/bg.png"
      },
      {
        content: "Bulgaria es un destino fascinante para aquellos interesados en el turismo cultural y arquitectónico. Además de sus monumentos y ciudades históricas, el país alberga una gran cantidad de iglesias, monasterios y fortalezas que reflejan su rica historia y cultura. Entre las atracciones más destacadas están las iglesias talladas en roca de Ivanovo, una serie de iglesias medievales y monasterios inscritos en la lista de Patrimonios de la Humanidad. Los viajeros también pueden disfrutar de los festivales culturales que se celebran a lo largo del año, como el Festival de Música de Plovdiv o la Fiesta de la Rosa en Kazanlak, que celebran tanto las tradiciones búlgaras como el patrimonio artístico del país.",
        image: "./images/bg.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};