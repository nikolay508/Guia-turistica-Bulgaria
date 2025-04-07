import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const HealthcarePage = () => {
  const pageData = {
    title: "Sanidad y seguridad",
    sections: [
      {
        content: " Sanidad: Bulgaria tiene hospitales públicos y privados. La calidad de los hospitales privados es mejor. Si eres ciudadano de la UE, trae tu Tarjeta Sanitaria Europea (TSE) para recibir atención médica gratuita o con descuento. Para turistas de otros países, es recomendable contratar un seguro de viaje que cubra emergencias médicas.", //"El sistema de salud de Bulgaria está basado en una combinación de servicios públicos y privados. El sistema público de salud es administrado por el Ministerio de Salud y está financiado principalmente a través de impuestos y cotizaciones de seguridad social. La atención médica pública es accesible para los ciudadanos búlgaros, aunque existen tiempos de espera y limitaciones en ciertos servicios debido a la sobrecarga del sistema. En las áreas urbanas, la infraestructura médica es bastante avanzada, con hospitales y centros de salud bien equipados. Sin embargo, en las zonas rurales, la atención médica puede ser menos accesible y los recursos limitados. Además, los servicios privados están disponibles para quienes prefieren atención más rápida o especializada, y a menudo ofrecen mejores condiciones que el sistema público.",
        image: "./images/pirogov.png"
      },
      {
        content: "Consejos de salud: El agua del grifo es potable en la mayoría del país, pero en algunas zonas es mejor comprar agua embotellada. En verano, usa protector solar, especialmente en la costa del mar Negro. La comida búlgara tiene muchas especias y productos lácteos. Si tienes el estómago sensible, prueba los platos poco a poco.", //"En cuanto a las condiciones de salud, Bulgaria enfrenta varios desafíos. La esperanza de vida es algo menor en comparación con la media europea, con una vida media de 74 años. Las principales causas de mortalidad incluyen enfermedades cardiovasculares, cáncer y enfermedades respiratorias. La obesidad y el consumo de tabaco también son factores que afectan negativamente a la salud de la población. Bulgaria ha implementado programas para mejorar la salud pública, como campañas para reducir el tabaquismo y promover una dieta más saludable. La calidad del aire en algunas ciudades, especialmente en la capital, Sofía, también es un problema, lo que afecta a las personas con problemas respiratorios. Sin embargo, el país ha hecho progresos en la mejora de la atención médica y la concienciación sobre enfermedades prevenibles.",
        image: "./images/add-ons/qdene.png"
      },
      {
        content: "Seguridad: Bulgaria es un país seguro, pero en las ciudades grandes hay ladrones, sobre todo en el metro de Sofía y en los lugares turísticos puedes ver mendigos. Evita cambiar dinero en la calle. Es mejor hacerlo en los bancos o en los cambios oficiales. Por la noche puedes pasear tranquilamente por el centro, no pasa nada, pero evita los suburbios. En caso de emergencia, llama al 112.", //"En cuanto a la seguridad, Bulgaria es generalmente un país seguro para los residentes y los turistas. La tasa de criminalidad es baja, pero como en cualquier país, se recomienda tomar precauciones básicas, especialmente en áreas turísticas o en grandes ciudades. La policía es accesible y confiable, y las leyes son estrictas, lo que contribuye a la seguridad pública. En cuanto a la prevención de riesgos, Bulgaria tiene protocolos de seguridad bien establecidos en relación con accidentes de tráfico, incendios y emergencias médicas. Los servicios de emergencia están disponibles las 24 horas y se pueden contactar fácilmente llamando al número 112. En las áreas de riesgo sísmico, se han implementado medidas de prevención y educación para minimizar el impacto de los terremotos. La seguridad alimentaria también es un área de enfoque, con normativas rigurosas que aseguran la calidad y la higiene de los productos alimenticios disponibles en el mercado.",
        image: "./images/police.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};