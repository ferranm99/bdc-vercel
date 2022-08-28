import PropTypes from "prop-types";
import clsx from "clsx";
import TopSeller from "@components/top-seller/layout-01";
import { ImageType } from "@utils/types";

const NftCollection = ({ className, collection }) => (
    <div className={clsx("collection", className)}>
        <span>Collection</span>
        <TopSeller
            name={collection.name}
            // name="Genesis"
            slug={collection.slug}
            image={{ src: collection.image.src, width: 44, height: 44 }}
        // image={{ src: "/images/bdc/logo/bdc-yellow-logo-50px.png", width: 44, height: 44 }}
        />
    </div>
);

NftCollection.propTypes = {
    className: PropTypes.string,
    collection: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        image: ImageType,
    }),
};

export default NftCollection;
