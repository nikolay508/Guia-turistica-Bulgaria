import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const ArchitecturePage = () => {
  const pageData = {
    title: "Arquitectura y monumentos",
    sections: [
      {
        content: "Con una rica herencia arquitectónica que abarca desde la época romana hasta el Renacimiento búlgaro, Bulgaria ofrece importantes monumentos históricos en ciudades como Sofía, Plovdiv y Veliko Tarnovo. Sofía, la capital, destaca por su mezcla de arquitectura clásica y moderna, con la Iglesia de San Jorge, de la época romana, y la majestuosa Catedral de Alexander Nevsky, de estilo neobizantino. Plovdiv, una de las ciudades más antiguas de Europa, es conocida por su teatro romano del siglo II d.C. y su Barrio Antiguo, con casas de estilo renacentista búlgaro. Veliko Tarnovo, antigua capital del Imperio búlgaro, alberga la fortaleza medieval de Tsarevets, que ofrece una vista panorámica única de la ciudad.",
        image: "./images/landmarks.png"
      },
      {
        content: "Bulgaria no solo es rica en patrimonio arquitectónico, sino también en belleza natural. El país ofrece paisajes diversos, desde las montañas de los Balcanes hasta las costas del Mar Negro. Las montañas de Rila y Pirin son perfectas para el senderismo y la aventura, y el Parque Nacional Rila, hogar del famoso Monasterio de Rila, es un lugar destacado. Este monasterio, Patrimonio de la Humanidad por la UNESCO, es clave tanto por su valor arquitectónico como por su significado espiritual. Además, la región de los Monasterios de Pirin, con su pintoresco paisaje montañoso, es ideal para el ecoturismo. La costa del Mar Negro es conocida por sus playas de arena dorada y aguas cálidas, especialmente en Varna y Burgas.",
        image: "./images/mountains.png"
      },
      {
        content: "Bulgaria es un destino fascinante para aquellos interesados en el turismo cultural y arquitectónico. Además de sus monumentos y ciudades históricas, el país alberga una gran cantidad de iglesias, monasterios y fortalezas que reflejan su rica historia y cultura. Entre las atracciones más destacadas están las iglesias talladas en roca de Ivanovo, una serie de iglesias medievales y monasterios inscritos en la lista de Patrimonios de la Humanidad. Los viajeros también pueden disfrutar de los festivales culturales que se celebran a lo largo del año, como el Festival de Música de Plovdiv o la Fiesta de la Rosa en Kazanlak, que celebran tanto las tradiciones búlgaras como el patrimonio artístico del país.",
        image: "./images/ivanovo.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};