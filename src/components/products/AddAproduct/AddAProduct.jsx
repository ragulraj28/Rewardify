import React from "react";
import "./AddAProduct.css";
import ProductPageTemplate from "../ProductPageTemplate";
import ProductPageHeader from "../ProductPageHeader";
import ProductPageHeaderLeft from "../ProductPageHeaderLeft";
import ProductPageHeading from "../ProductPageHeading";
import ProductPageSearchbar from "../ProductPageSearchbar";
import ProductDetails from "./ProductDetails";
import ProductInformation from "./ProductInformation";
import DeliveryDetailsProductImage from "./DeliveryDetailsProductImage";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../../common/button/Button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToStockProducts,
  selectProduct,
} from "../../../utils/slices/productSlice";

const AddAProduct = ({}) => {
  const methods = useForm();
  const { register, handleSubmit, reset, getValues } = methods;
  const navigate = useNavigate();
  const stockProducts = useSelector((state) => state.products.stockProducts);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const values = getValues();
    const productExists = stockProducts.some(
      (product) => product.productName === data.productName
    );

    if (productExists) {
      alert("This product already exists in the list.");
    } else {
      dispatch(addToStockProducts(data));
      dispatch(selectProduct(null));
      navigate("/products");
    }
  };

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
            <input {...register("availability")} value="true" disabled hidden />
            <div className="savebtn-container">
              <Button btnType="submit" btnText="Save Product" />
            </div>
          </form>
        </FormProvider>
      </ProductPageTemplate>
    </div>
  );
};

export default AddAProduct
