import SingleBlog from "../Components/Blogs/SingleBlog";
const blogs = [
  {
    img: "/Images/blog-image1.png",
    date: "January 3, 2023",
    title: "How to prepare a delicious gluten free sushi",
  },
  {
    img: "/Images/blog-image2.png",
    date: "January 3, 2023",
    title: "Exclusive baking lessons from the pastry king",
  },
  {
    img: "/Images/blog-image3.png",
    date: "January 3, 2023",
    title: "How to prepare the perfect fries in an air fryer",
  },
  {
    img: "/Images/blog-image4.png",
    date: "January 3, 2023",
    title: "How to prepare delicious chicken tenders",
  },
  {
    img: "/Images/blog-image5.png",
    date: "January 3, 2023",
    title: "5 great cooking gadgets you can buy to save time",
  },
  {
    img: "/Images/blog-image6.png",
    date: "January 3, 2023",
    title: "The secret tips & tricks to prepare a perfect burger",
  },
  {
    img: "/Images/blog-image7.png",
    date: "January 3, 2023",
    title: "7 delicious cheesecake recipes you can prepare",
  },
  {
    img: "/Images/blog-image8.png",
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city",
  },
  {
    img: "/Images/blog-image9.png",
    date: "January 3, 2023",
    title: "5 great cooking gadgets you can buy to save time",
  },
  {
    img: "/Images/blog-image10.png",
    date: "January 3, 2023",
    title: "How to prepare a delicious gluten free sushi",
  },
  {
    img: "/Images/blog-image11.png",
    date: "January 3, 2023",
    title: "Top 20 simple and quick desserts for kids",
  },
];

export default function BlogPage() {
  return (
    <div className="md:py-32 py-16 flex justify-center ">
      <div className="max-w-6xl mx-auto md:px-0 px-3 flex flex-col items-center">
        <h1 className="text-[#2C2F24] text-4xl md:text-6xl font-semibold">
          Our Blog & Articles
        </h1>
        <p className="text-[#414536] w-[500px] text-center mt-6 md:px-0 px-3">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
        <div className="flex flex-wrap justify-center mt-12 space-x-3 space-y-3">
          {blogs.map((blog) => {
            return (
              <SingleBlog
                img={blog.img}
                title={blog.title}
                date_time={blog.date}
                key={blog.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
