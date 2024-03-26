import { LuPizza } from "react-icons/lu";
import { Link } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="mx-auto mb-4 flex max-w-screen-2xl items-center justify-between p-4">
      <Link to="/menu" className="flex w-1/4 items-center gap-2">
        <LuPizza className="h-8 w-8 text-orange-600" />
        <div>
          <h1 className="-mb-1 text-2xl font-bold">React-Restaurant</h1>
          <p className="text-sm text-gray-400">Hey, Hossein!</p>
        </div>
      </Link>
      <div className="w-1/2 text-center">
        <SearchOrder />
      </div>
      <div className="flex w-1/4 items-center justify-end gap-2">
        <CartOverview />
      </div>
    </header>
  );
};

export default Header;
