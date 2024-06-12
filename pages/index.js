/**
 * Internal Dependencies.
 */
import Products from "../src/components/products";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";

/**
 * External Dependencies.
 */
import axios from "axios";
import { getProductsData } from "../src/utils/products";
import Layout from "../src/components/layout";
import BootstrapCarousel from "../src/components/layout/carousels";

export default function Home({ headerFooter, products, categorias }) {
  const seo = {
    title: "Tlhavika",
    description: "Venda de Produtos de Energias Renovaveis",
    og_image: [],
    og_site_name: "React WooCommerce Theme",
    robots: {
      index: "index",
      follow: "follow",
    },
  };
  return (
    <Layout headerFooter={headerFooter || {}} seo={seo}>
      <BootstrapCarousel />
      <div className="container mx-auto py-4 min-h-50vh">
        <Products products={products} categorias={categorias} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: products } = await getProductsData();
  var categorias = [];
  products.map((product) => {
    if (categorias.includes(product.categories[0].name)) {
    } else {
      categorias.push(product.categories[0].name);
    }
  });

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      products: products ?? {},
      categorias: categorias ?? {},
    },

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
