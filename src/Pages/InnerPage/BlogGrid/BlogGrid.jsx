/* eslint-disable no-unused-vars */
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import blogGridImg from "/images/blog-1.png";
import blogGridImg2 from "/images/blog-2.png";
import blogGridImg3 from "/images/blog-3.png";
import blogGridImg4 from "/images/blog-4.png";
import blogGridImg5 from "/images/blog-5.png";
import blogGridImg6 from "/images/blog-6.png";
import BlogGridCard from "./BlogGridCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { LuArrowUpRight } from "react-icons/lu";
import { blogPosts } from "../BlogDetails/blogDetailsData";

const blogData = [
  {
    id: 1,
    blogGridImg: blogGridImg,
    thumbContent: blogPosts["/blog_details"].category,
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details",
    blogGridTitle: blogPosts["/blog_details"].title,
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc: blogPosts["/blog_details"].intro.slice(0, 90) + "...",
  },
  {
    id: 2,
    blogGridImg: blogGridImg2,
    thumbContent: blogPosts["/blog_details2"].category,
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details2",
    blogGridTitle: blogPosts["/blog_details2"].title,
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc: blogPosts["/blog_details2"].intro.slice(0, 90) + "...",
  },
  {
    id: 3,
    blogGridImg: blogGridImg3,
    thumbContent: blogPosts["/blog_details3"].category,
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details3",
    blogGridTitle: blogPosts["/blog_details3"].title,
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc: blogPosts["/blog_details3"].intro.slice(0, 90) + "...",
  },
  {
    id: 4,
    blogGridImg: blogGridImg4,
    thumbContent: blogPosts["/blog_details4"].category,
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details4",
    blogGridTitle: blogPosts["/blog_details4"].title,
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc: blogPosts["/blog_details4"].intro.slice(0, 90) + "...",
  },
  {
    id: 5,
    blogGridImg: blogGridImg5,
    thumbContent: blogPosts["/blog_details5"].category,
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details5",
    blogGridTitle: blogPosts["/blog_details5"].title,
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc: blogPosts["/blog_details5"].intro.slice(0, 90) + "...",
  },
  {
    id: 6,
    blogGridImg: blogGridImg6,
    thumbContent: blogPosts["/blog_details6"].category,
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details6",
    blogGridTitle: blogPosts["/blog_details6"].title,
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc: blogPosts["/blog_details6"].intro.slice(0, 90) + "...",
  },
];

const BlogGrid = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Blog"}
      />
      <section className="pt-28">
        <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogGridImg,
                thumbContent,
                thumbBtn,
                blogGridUrl,
                blogGridTitle,
                postBy,
                comments,
                blogGridDesc,
              }) => {
                return (
                  <div key={id}>
                    <BlogGridCard
                      blogGridImg={blogGridImg}
                      thumbContent={thumbContent}
                      thumbBtn={thumbBtn}
                      blogGridUrl={blogGridUrl}
                      blogGridTitle={blogGridTitle}
                      postBy={postBy}
                      comments={comments}
                      blogGridDesc={blogGridDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <div>
        <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[80px]">
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              01
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              02
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              03
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogGrid;
