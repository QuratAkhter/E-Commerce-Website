import Categories from "./Categories"
import Crousel from "./Crousel"

const HomeTab = ({ setSelectedTab }) => {
    return <>
        <Crousel />
        <Categories setSelectedTab={setSelectedTab} />
    </>
}
export default HomeTab