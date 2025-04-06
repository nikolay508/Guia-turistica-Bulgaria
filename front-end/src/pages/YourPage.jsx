import Skeleton from '../components/Skeleton';

const YourPage = () => {
  const pageData = {
    title: "Header",
    sections: [
      {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab saepe quaerat ad veritatis ullam vero animi fugit harum earum sit, ea non maxime corporis iure quo expedita accusamus ut id nemo cumque, nobis sapiente? Ipsam vero corrupti officia sint voluptatum harum est saepe. Eaque ducimus iure inventore aperiam, debitis officia numquam, consequatur dolorem corporis vero alias sit impedit. Impedit cumque soluta sit odio quidem enim, quasi tenetur architecto, pariatur eos laborum, maiores ipsam molestias a vero! Iste repellendus accusamus ratione facere sed iure ad optio laudantium fugit? Voluptatum laboriosam aut voluptas accusamus alias placeat fugiat debitis saepe illum facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sequi fugit velit commodi unde quis quam doloribus ab voluptates, nostrum quibusdam exercitationem sit odio quos ex quae? Explicabo, inventore blanditiis.sectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "./bg.png"
      },
      {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab saepe quaerat ad veritatis ullam vero animi fugit harum earum sit, ea non maxime corporis iure quo expedita accusamus ut id nemo cumque, nobis sapiente? Ipsam vero corrupti officia sint voluptatum harum est saepe. Eaque ducimus iure inventore aperiam, debitis officia numquam, consequatur dolorem corporis vero alias sit impedit. Impedit cumque soluta sit odio quidem enim, quasi tenetur architecto, pariatur eos laborum, maiores ipsam molestias a vero! Iste repellendus accusamus ratione facere sed iure ad optio laudantium fugit? Voluptatum laboriosam aut voluptas accusamus alias placeat fugiat debitis saepe illum facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sequi fugit velit commodi unde quis quam doloribus ab voluptates, nostrum quibusdam exercitationem sit odio quos ex quae? Explicabo, inventore blanditiis.sectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "./bg.png"
      },
      {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab saepe quaerat ad veritatis ullam vero animi fugit harum earum sit, ea non maxime corporis iure quo expedita accusamus ut id nemo cumque, nobis sapiente? Ipsam vero corrupti officia sint voluptatum harum est saepe. Eaque ducimus iure inventore aperiam, debitis officia numquam, consequatur dolorem corporis vero alias sit impedit. Impedit cumque soluta sit odio quidem enim, quasi tenetur architecto, pariatur eos laborum, maiores ipsam molestias a vero! Iste repellendus accusamus ratione facere sed iure ad optio laudantium fugit? Voluptatum laboriosam aut voluptas accusamus alias placeat fugiat debitis saepe illum facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sequi fugit velit commodi unde quis quam doloribus ab voluptates, nostrum quibusdam exercitationem sit odio quos ex quae? Explicabo, inventore blanditiis.sectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "./bg.png"
      }
    ]
  };

  return <Skeleton {...pageData} />;
};

export default YourPage; 