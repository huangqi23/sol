import headModel from "../header";
import descModel from "../description"
import productsModel from "../products"
import bottomModel from "../bottom"
import bg_default from '../../../assets/images/back/2.jpg';

export default {
    name: "index",
    components: {
        [headModel.name]: headModel,
        [descModel.name]: descModel,
        [productsModel.name]: productsModel,
        [bottomModel.name]: bottomModel
    },
    data() {
        return {
            background_image: bg_default,

            note: {
                backgroundImage: "url(" + require("../../../assets/images/back/3.jpg") + ")",
                backgroundRepeat: "no-repeat",
                // backgroundAttachment:"fixed"
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
        };
    },

}
