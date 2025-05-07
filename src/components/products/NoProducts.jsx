import React, { useEffect } from "react";
import ProductPageHeader from "./ProductPageHeader";
import ProductPageHeaderLeft from "./ProductPageHeaderLeft";
import ProductPageHeading from "./ProductPageHeading";
import ProductPageSearchbar from "./ProductPageSearchbar";
import NoProductAdded from "./NoProductAdded";
import ProductPageTemplate from "./ProductPageTemplate";

const NoProducts = () => {
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://rewardify.dotcod.in/api/v1/store-user/master/products/list`
    );
    const data = await res.json();
  };
  return (
    <div className="noproducts">
      <ProductPageTemplate>
        <ProductPageHeader>
          <ProductPageHeaderLeft>
            <ProductPageHeading>My Product Listing</ProductPageHeading>
            {/* <AddAProductBtn /> */}
          </ProductPageHeaderLeft>
          <ProductPageSearchbar />
        </ProductPageHeader>
        <NoProductAdded />
      </ProductPageTemplate>
    </div>
  );
};

export default NoProducts;
