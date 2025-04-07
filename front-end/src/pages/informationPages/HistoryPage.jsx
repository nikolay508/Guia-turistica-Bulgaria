import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const HistoryPage = () => {
  const pageData = {
    title: "Historia y cultura",
    sections: [
      {
        content: "Bulgaria tiene más de 7.000 años de historia y ha sido el hogar de muchas civilizaciones y es uno de los países más antiguos de Europa. Algunos momentos importantes son: Los tracios (siglo VI a.C.) → Se consideran los primeros habitantes de nuestras tierras. Dejaron tesoros de oro y tumbas impresionantes entre las cuales destaca la Tumba Tracia que está protegida por la UNESCO.",//"Bulgaria tiene una historia rica y fascinante que se remonta a la antigüedad. Los primeros habitantes de la región fueron tribus tracias, que formaron una cultura avanzada, conocida por sus ritos funerarios y arte. Sin embargo, la historia de Bulgaria comienza con la fundación del Primer Reino Búlgaro en el año 681, cuando los búlgaros, un pueblo de origen turco, se unieron a los eslavos que ya habitaban en los Balcanes. Este reino fue fundado por Khan Asparukh, quien unió a diversas tribus búlgaras y eslavas en una confederación. A lo largo de los siglos, el Reino Búlgaro se expandió y consolidó, convirtiéndose en una potencia importante en Europa del Este durante la Edad Media. Su capital, Pliska, se convirtió en un centro cultural y político.",
        image: "./images/add-ons/traki.png"
      },
      {
        content: "El Imperio Romano (siglo I a IV d.C.) → Construyeron teatros, baños y fortalezas. El Primer Imperio Búlgaro (681-1018) → Uno de los estados más poderosos de Europa. El Segundo Imperio Búlgaro (1185-1396) → Su capital, Veliko Tarnovo, fue un importante centro cultural.",//"El Siglo IX marcó el auge del Imperio Búlgaro bajo el liderazgo de los zares búlgaros, especialmente durante los reinados de los zares Simeón I (r. 893-927) y Borís I (r. 852-889). Bajo el liderazgo de Simeón I, Bulgaria alcanzó su mayor extensión territorial, que incluyó grandes partes de los Balcanes, hasta llegar a las puertas de Constantinopla. En este periodo, Bulgaria también experimentó un florecimiento cultural y religioso, especialmente tras la adopción del cristianismo en el año 864 por parte del zar Borís I. Esta conversión al cristianismo ayudó a consolidar la identidad nacional búlgara y permitió el desarrollo de una rica tradición eclesiástica. Durante la Edad Media, el Imperio Búlgaro se dividió en varias fases, incluyendo invasiones externas, como las del Imperio Bizantino y los invasores otomanos. A pesar de las tensiones, Bulgaria continuó siendo un centro cultural y educativo hasta su caída.",
        image: "./images/theather.png"
      },
      {
        content: "La ocupación otomana (1396-1878) → Duró casi 500 años y dejó una gran influencia en la arquitectura y la gastronomía. La independencia (1878) → Bulgaria se liberó del Imperio Otomano y comenzó su modernización. Hoy en día, los búlgaros son ortodoxos.",//"El Imperio Otomano comenzó su expansión por los Balcanes en el Siglo XIV y, en 1396, Bulgaria fue completamente absorbida por el Imperio Otomano. La ocupación otomana duró casi 500 años, durante los cuales los búlgaros enfrentaron severas dificultades. Sin embargo, a pesar de la opresión, se mantuvo viva la identidad nacional búlgara. La lucha por la independencia búlgaro comenzó a finales del Siglo XIX, inspirada por los movimientos nacionales en toda Europa. El levantamiento nacional de abril en 1876 fue uno de los eventos más significativos, aunque fue sofocado por las fuerzas otomanas. Finalmente, en 1908, Bulgaria proclamó su independencia, después de la Guerra de Independencia de 1877-1878, que fue respaldada por el Imperio Ruso. Desde entonces, Bulgaria ha experimentado diferentes cambios políticos y sociales, pero la independencia y la restauración de su identidad como nación fueron fundamentales en su historia moderna.",
        image: "./images/add-ons/shipka.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};