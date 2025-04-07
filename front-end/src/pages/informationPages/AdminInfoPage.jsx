import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const AdminInfo = () => {
  const pageData = {
    title: "Información administrativa",
    sections: [
      {
        content:
          "Ubicación: Bulgaria está en el sureste de Europa y tiene fronteras con Rumanía, Serbia, Macedonia del Norte, Grecia y Turquía. Moneda: La moneda oficial es la leva  búlgara (BGN). 1 euro equivale aproximadamente a 1,95 BGN. No se usa el euro en las tiendas.", //"Bulgaria es un país ubicado en el sureste de Europa, en la península de los Balcanes. Limita al norte con Rumanía, al este con el mar Negro, al sur con Turquía y Grecia, y al oeste con Serbia y Macedonia del Norte. Su capital es Sofía, la ciudad más grande y un importante centro cultural, económico y político del país. Bulgaria tiene una población de aproximadamente 7 millones de habitantes, y su territorio abarca más de 110,000 km². Es un miembro de la Unión Europea desde 2007, pero no forma parte de la zona euro. El sistema político del país es una república parlamentaria, y su gobierno está estructurado en tres ramas: ejecutiva, legislativa y judicial.",
        image: "./images/bg-boders.png",
      },
      {
        content: "Idioma: El idioma oficial es el búlgaro y usa el alfabeto cirílico. En las ciudades grandes, muchas personas hablan inglés, pero en los pueblos pequeños, puede ser difícil comunicarse sin saber búlgaro. Zona horaria: Bulgaria usa la hora de Europa del Este (EET, UTC+2) en invierno y UTC+3 en verano.", //"Bulgaria tiene una rica historia que se remonta a miles de años, habiendo sido hogar de varias civilizaciones importantes, como los tracios, los romanos y los búlgaros medievales. Su ubicación geográfica ha sido estratégica durante siglos, lo que le ha permitido ser un cruce de caminos entre Europa y Asia. El país es conocido por su impresionante diversidad natural, que incluye montañas, bosques, ríos y una costa en el mar Negro. Esta variedad geográfica ha favorecido la creación de diferentes climas y ecosistemas, lo que también ha influido en la cultura y tradiciones búlgaras. El folclore, la música y la danza son elementos muy importantes en la identidad cultural de Bulgaria.",
        image: "./images/add-ons/azbuka.png",
      },
      {
        content: "Documentos necesarios: Si eres ciudadano de la UE, no necesitas visado y puedes entrar con tu pasaporte o documento de identidad. Si vienes de otros países, revisa en la embajada de Bulgaria si necesitas visado.", //"Aspectos Políticos y Administrativos: El sistema político de Bulgaria es una república parlamentaria, lo que significa que el presidente es el jefe de estado, pero el primer ministro es el jefe de gobierno y tiene la mayor autoridad en la administración del país. El parlamento de Bulgaria es unicameral, compuesto por una sola cámara de 240 miembros elegidos por votación popular. Bulgaria está dividida en 28 provincias, conocidas como 'óblasti', y cada una de ellas tiene un gobierno regional encargado de coordinar los servicios públicos y la administración local. La estructura administrativa del país refleja su importancia en la región y su enfoque hacia la estabilidad política y el desarrollo económico.",
        image: "./images/add-ons/pasport.png",
      },
    ],
  };

  return <InfoPageSkeleton {...pageData} />;
};
