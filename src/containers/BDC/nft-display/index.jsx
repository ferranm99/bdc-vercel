import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Service from "@components/service";
import { SectionTitleType, ItemType } from "@utils/types";

const NFTDisplaySection = ({ className, id, space, data }) => (
    <div className=" col-lg-6 col-sm-12 bg-dark mintForm ml-3">
        <img src="/images/bdc/nft/bdc300-667px.jpg" className="NFTDisplay" />
    </div>
);
NFTDisplaySection.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
NFTDisplaySection.defaultProps = {
    space: 1,
};

export default NFTDisplaySection;
