import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BiChurch } from "react-icons/bi";
import { LiaInfoSolid } from "react-icons/lia";
import { GiGreekTemple } from 'react-icons/gi';
import { MdRestaurant } from 'react-icons/md';
import { MdOutlineDoNotTouch } from "react-icons/md";
import { BiParty } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";

export const cardData = [
  {
    icon: <LiaInfoSolid className="w-12 h-12 text-green-700" />,
    title: "información inicial",
    description: "Descubre los contrastes naturales y la belleza única de este fascinante país balcánico.",
    link: "/admin-info"
  },
  {
    icon: <GiGreekTemple className="w-12 h-12 text-green-700" />,
    title: "Historia y cultura",
    description: "Miles de años de historia y tradiciones que han forjado una identidad cultural única.",
    link: "/history"
  },
  {
    icon: <MdRestaurant className="w-12 h-12 text-green-700" />,
    title: "Gastronomía",
    description: "Sabores auténticos y platos tradicionales que cuentan historias de generaciones.",
    link: "/food"
  },
  {
    icon: <MdOutlineHealthAndSafety className="w-12 h-12 text-green-700" />,
    title: "Sanidad y seguridad",
    description: "Información esencial para un viaje tranquilo y seguro por el país.",
    link: "/healthcare"
  },
  {
    icon: <BiChurch className="w-12 h-12 text-green-700" />,
    title: "Arquitectura y monumentos",
    description: "Joyas arquitectónicas que reflejan siglos de historia y diferentes culturas.",
    link: "/architecture"
  },
  {
    icon: <BiParty className="w-12 h-12 text-green-700" />,
    title: "Eventos y fiestas",
    description: "Celebraciones tradicionales que muestran el espíritu festivo del pueblo búlgaro.",
    link: "/events"
  },
  {
    icon: <MdOutlineDoNotTouch className="w-12 h-12 text-green-700" />,
    title: "Cosas que no hacer",
    description: "Consejos importantes para respetar la cultura local y evitar malentendidos.",
    link: "/donts"
  },
  {
    icon: <FaRegCommentAlt className="w-12 h-12 text-green-700" />,
    title: "Consejos útiles",
    description: "Recomendaciones prácticas para sacar el máximo provecho a tu visita.",
    link: "/advices"
  },
  {
    icon: <MdOutlineLibraryBooks className="w-12 h-12 text-green-700" />,
    title: "Recursos y referencias",
    description: "Fuentes y referencias utilizadas en la creación de esta guía turística.",
    link: "/resources"
  }
];