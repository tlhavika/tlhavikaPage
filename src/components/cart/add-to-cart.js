import { isEmpty } from "lodash";
import { addToCart } from "../../utils/cart";
import { useContext, useState } from "react";
import { AppContext } from "../context";
import Link from "next/link";
import cx from "classnames";

const AddToCart = ({ product }) => {
  const [cart, setCart] = useContext(AppContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const addToCartBtnClasses = cx(
    "duration-500 bg-brand-orange hover:bg-brand-royal-blue font-semibold py-2 px-4 rounded shadow text-white",
    {
      "bg-white hover:bg-gray-100": !loading,
      "bg-gray-200": loading,
    }
  );

  if (isEmpty(product)) {
    return null;
  }

  return (
    <>
      <button
        className={addToCartBtnClasses}
        onClick={() =>
          addToCart(product?.id ?? 0, 1, setCart, setIsAddedToCart, setLoading)
        }
        disabled={loading}
      >
        {loading ? "Adicionando..." : "Adicionar"}
      </button>
      {isAddedToCart && !loading ? (
        <Link href="/cart">
          <a className=" bg-brand-orange hover:bg-brand-royal-blue font-semibold ml-4 py-11px px-4 border text-white rounded shadow">
            Carrinho
          </a>
        </Link>
      ) : null}
    </>
  );
};

export default AddToCart;
