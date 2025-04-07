import { InfoPageSkeleton } from "../../components/InfoPageSkeleton";

export const FoodPage = () => {
  const pageData = {
    title: "Gastronomía",
    sections: [
      {
        content: "La cultura gastronómica de Bulgaria es una de las más ricas y diversas de los Balcanes, con influencias de la cocina otomana, griega, serbia y de otras culturas vecinas. La gastronomía búlgara se caracteriza por el uso de ingredientes frescos y naturales, y por la combinación de sabores dulces, salados, picantes y ácidos. Los platos búlgaros son conocidos por su sencillez y por la gran variedad de hierbas y especias que se utilizan, como el ajo, el comino, el pimentón, la menta y el eneldo. Además, el yogur búlgaro es mundialmente famoso por sus beneficios para la salud y su sabor único, y es un ingrediente esencial en muchos platos tradicionales.",
        image: "./images/bg-food.png"
      },
      {
        content: "Uno de los platos más emblemáticos de Bulgaria es la 'shopska salad', una ensalada refrescante hecha con tomates, pepinos, cebolla, pimientos, aceitunas y queso blanco búlgaro (sirene). Este plato es muy popular en todo el país y refleja la simplicidad y frescura de la cocina búlgara. Otro plato tradicional es el 'banitsa', un pastel salado relleno de queso y huevos, que se consume generalmente en el desayuno o como merienda. La 'sarma', que consiste en hojas de col rellenas de arroz y carne, es otro de los platos más conocidos, especialmente durante las festividades. Además, las sopas son una parte fundamental de la dieta búlgara, siendo la 'tarator' (una sopa fría de yogur, pepino y ajo) una de las más populares, especialmente en verano.",
        image: "./images/salad.png"
      },
      {
        content: "La bebida más emblemática de Bulgaria es el 'rakia', un licor fuerte hecho principalmente de uvas, aunque también se puede preparar con otras frutas. Es una bebida que acompaña muchas de las comidas y se sirve tradicionalmente en las celebraciones familiares y sociales. Además del rakia, el vino búlgaro tiene una gran tradición, ya que el país cuenta con algunas de las regiones vinícolas más antiguas de Europa. El vino búlgaro es conocido por su sabor distintivo, y las variedades de uva autóctonas como la 'mavrud' y la 'dimyat' son especialmente valoradas. En cuanto a los postres, Bulgaria cuenta con una variedad de dulces deliciosos, entre los que destacan el 'baklava' y el 'kadaif', que reflejan la influencia otomana en la cocina del país.",
        image: "./images/rakia.png"
      }
    ]
  };

  return <InfoPageSkeleton {...pageData} />;
};