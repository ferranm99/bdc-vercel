import PropTypes from "prop-types";
import clsx from "clsx";
import * as dayjs from "dayjs";
import Image from "next/image";
import { getMonth } from "@utils/methods";
import { ImageType } from "@utils/types";

const BlogDetailsArea = ({ className, post }) => {
    const date = new Date(post.date);
    dayjs().format();
    return (
        <div className={clsx("blog-details-area", className)}>
            <div className="blog-content-top">
                <h2 className="title pl_sm--20 pr_sm--20">{post.title}</h2>
                <p className="date pl_sm--20 pr_sm--20">
                    {dayjs(date).format("dddd, MMMM D, YYYY")}
                    {/* {getMonth(date).toLocaleString("default", { month: "long" })}{" "}{date.getDate().toString().padStart(2, "0")}
                    , {date.getFullYear()} */}
                </p>
            </div>
            <div className="bd-thumbnail pl_sm--20 pr_sm--20">
                <div className="large-img mb--30">
                    {post.image?.src && (
                        <Image
                            className="w-100"
                            src={post.image.src}
                            alt="Blog Images"
                            width={919}
                            height={517}
                            layout="responsive"
                        />
                    )}
                </div>
            </div>
            <div
                className="news-details pl_sm--20 pr_sm--20"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
};

BlogDetailsArea.propTypes = {
    className: PropTypes.string,
    post: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        image: ImageType,
        content: PropTypes.string,
    }),
};

export default BlogDetailsArea;
