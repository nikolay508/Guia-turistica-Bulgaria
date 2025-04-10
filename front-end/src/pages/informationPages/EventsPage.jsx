import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const EventsPage = () => {
  const pageData = {
    title: "Eventos y fiestas",
    sections: [
      {
        content: "Las tradiciones búlgaras son profundamente ricas y variadas, y las festividades desempeñan un papel central en la vida del pueblo. Una de las celebraciones más emblemáticas es el 'Koledari', una fiesta tradicional de Navidad que involucra a grupos de jóvenes que recorren las aldeas cantando villancicos y deseando prosperidad a las casas. Además, el 'Baba Marta', celebrado el 1 de marzo, marca el inicio de la primavera y se caracteriza por el intercambio de 'martenitsi' (amuletos rojos y blancos) entre amigos y familiares, simbolizando la salud y la buena suerte. Otra festividad importante es el 'Kupala Night' o 'Noche de San Juan', que se celebra en el solsticio de verano con danzas y rituales en honor al fuego y la naturaleza.",
        image: "./images/koledari.png"
      },
      {
        content: "Bulgaria es conocida por su vibrante calendario de festivales y eventos culturales que celebran la música, la danza, la literatura y las artes visuales. Uno de los más famosos es el 'Festival Internacional de Música de Varna', que reúne a músicos de todo el mundo para ofrecer conciertos y conciertos de música clásica. En Plovdiv, la ciudad cultural de Europa 2019, se celebran eventos anuales como el 'Festival de Cine de Plovdiv', donde se proyectan películas internacionales y locales. Asimismo, el 'Festival de la Rosa' en Kazanlak es otro evento destacado, celebrado cada año en honor a la cosecha de rosas, un símbolo importante de la industria del aceite de rosa de Bulgaria. Este evento se llena de color con desfiles, música y danzas tradicionales.",
        image: "./images/rose-fields.png"
      },
      {
        content: "Las celebraciones folklóricas búlgaras están profundamente conectadas con las estaciones del año, las cosechas y las tradiciones paganas. Un ejemplo de ello es el 'Surva', un festival de máscaras y danzas que se celebra en Pernik, en el suroeste de Bulgaria, donde personas vestidas con trajes tradicionales y máscaras espeluznantes danzan para alejar a los malos espíritus. Además, la danza tradicional 'Horo' es una parte esencial de las festividades búlgaras, y se puede ver en casi todos los eventos importantes, donde la gente se toma de las manos y baila en círculos, celebrando la unidad y la alegría del pueblo. Estos rituales y tradiciones tienen una fuerte carga simbólica y permiten que las personas se conecten con su pasado y sus raíces.",
        image: "./images/add-ons/nestinarstvo.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};