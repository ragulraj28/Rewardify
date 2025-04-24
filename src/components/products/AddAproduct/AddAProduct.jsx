import React, { useState } from "react";
import "./AddAProduct.css";
import ProductPageTemplate from "../ProductPageTemplate";
import ProductPageHeader from "../ProductPageHeader";
import ProductPageHeaderLeft from "../ProductPageHeaderLeft";
import ProductPageHeading from "../ProductPageHeading";
import ProductPageSearchbar from "../ProductPageSearchbar";
import AddAProductBtn from "../AddAProductBtn";
import NoProductAdded from "../NoProductAdded";
import ProductDetails from "./ProductDetails";
import ProductInformation from "./ProductInformation";
import DeliveryDetailsProductImage from "./DeliveryDetailsProductImage";
import { useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../../common/button/Button";

const AddAProduct = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log("Submitted:", data);
  };

  const { allProducts } = useSelector((state) => state.products);
  const [products, setProducts] = useState(allProducts);
  console.log(allProducts);
  // setProducts(allProducts);

  return (
    <div className="add-a-product">
      <ProductPageTemplate>
        <ProductPageHeader>
          <ProductPageHeaderLeft>
            <ProductPageHeading>Add a product</ProductPageHeading>
            {/* <AddAProductBtn />  */}
          </ProductPageHeaderLeft>
          <ProductPageSearchbar />
        </ProductPageHeader>
        {/* <NoProductAdded /> */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProductDetails />
            <ProductInformation />
            <DeliveryDetailsProductImage />
            <div className="savebtn-container">
              <Button type="submit" btnText="Save Product" />
            </div>
          </form>
        </FormProvider>
      </ProductPageTemplate>
    </div>
  );
};

export default AddAProduct;
