import PropTypes from "prop-types";
import clsx from "clsx";
import BlogCard from "@components/blog/blog-card";

const RelatedPostsArea = ({ space, className, relatedPosts }) => (
    <div className={clsx("row g-5", space === 1 && "pt--60", className)}>
        <div className="col-lg-12 pl_sm--20 pr_sm--20">
            <h3 className="title">Related Post</h3>
        </div>
        {relatedPosts?.map((post) => (
            <div key={post.slug} className="col-xl-4 col-lg-6 col-md-6 col-12 pl_sm--30 pr_sm--30">
                <BlogCard
                    title={post.title}
                    slug={post.slug}
                    category={post.category}
                    timeToRead={post.timeToRead}
                    image={post.image}
                />
            </div>
        ))}
    </div>
);

RelatedPostsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

RelatedPostsArea.defaultProps = {
    space: 1,
};

export default RelatedPostsArea;
