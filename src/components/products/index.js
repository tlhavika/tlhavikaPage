import { isArray, isEmpty } from "lodash";
import Product from "./product";
import {
  BurgerIcon,
  TailwindIcon,
  Bag,
  User,
  Wishlist,
} from "../../components/icons";
import { useContext, useState } from "react";
const Products = ({ products, categorias }) => {
  const [isFilter, setIsFilter] = useState(false);
  const [isFilterLista, setIsFilterLista] = useState([]);
  const [isMenuVisible, setMenuVisibility] = useState(false);
  var produtosListaVolatel = [];
  if (isEmpty(products) || !isArray(products)) {
    return null;
  }
  if (isEmpty(categorias) || !isArray(categorias)) {
    return null;
  }
  function categoriaSelected(categoria) {
    if (categoria === "Ver Tudo") {
      setIsFilter(false);
    } else {
      products.map((product) => {
        if (product.categories[0].name === categoria) {
          produtosListaVolatel.push(product);
        }
      });
      setIsFilterLista(produtosListaVolatel);
      setIsFilter(true);
      setMenuVisibility(!isMenuVisible);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="block lg:hidden">
          <div className="block lg:hidden">
            <div className="flex flex-row gap-4">
              <div>Categorias</div>
              <button
                onClick={() => setMenuVisibility(!isMenuVisible)}
                className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black"
              >
                <BurgerIcon className="fill-current h-3 w-3" />
              </button>
            </div>
          </div>
          <div
            className={`${
              isMenuVisible ? "max-h-full" : "h-0"
            } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="shadow-lg rounded">
              {!isEmpty(categorias) && categorias.length
                ? categorias.map((categoria) => {
                    return (
                      <div
                        className="hover:bg-blue-500 hover:text-white my-2 cursor-pointer"
                        key={categoria}
                        onClick={() => categoriaSelected(categoria)}
                      >
                        <small className="m-4">{categoria}</small>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="hidden lg:block">
            <h6 className="font-bold uppercase my-2 tracking-0.5px">
              categorias
            </h6>
            <div className="shadow-lg rounded">
              {categorias.length
                ? categorias.map((categoria) => {
                    return (
                      <div
                        className="hover:bg-blue-500 hover:text-white my-2 cursor-pointer"
                        key={categoria}
                        onClick={() => categoriaSelected(categoria)}
                      >
                        <small className="m-4">{categoria}</small>
                      </div>
                    );
                  })
                : null}
              <div
                className="hover:bg-blue-500 hover:text-white my-2 cursor-pointer"
                onClick={() => categoriaSelected("Ver Tudo")}
              >
                <small className="m-4">Ver Tudo</small>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            {isFilter ? (
              <>
                <div className="flex flex-wrap -mx-3 overflow-hidden">
                  {isFilterLista.length
                    ? isFilterLista.map((product) => {
                        return <Product key={product?.id} product={product} />;
                      })
                    : null}
                </div>
              </>
            ) : (
              <div className="flex flex-wrap -mx-3 overflow-hidden">
                {products.length
                  ? products.map((product) => {
                      return <Product key={product?.id} product={product} />;
                    })
                  : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
