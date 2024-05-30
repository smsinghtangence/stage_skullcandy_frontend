'use client'
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import featureReducer from "../features/FeaturedProduct/featuredSlice";
import bestReducer from "../features/BesrProducts/bestSlice";
import newArrivalReducer from "../features/NewArrival/newSlice";
import productReducer from "../features/ProductDetails/productSlice";
import saleReducer from "../features/SaleProduct/saleSlice";
import comboReducer from "../features/ComboProducts/comboSlice";
import popularReducer from "../features/PopularProducts/popularSlice";
import shopSliceReducer from "../features/shop/shopSlice";
import shopPaylaodSlice from "../features/shop/shopPaylaodSlice";
import shopProductSlice from "../features/ShopProduct/shopProductSlice";
import cartWishReducer from '../features/Cart/cartnWishSlice'
import checkOutReducer from '../features/CheckOut/checkOutSlice'
import FeedbackReducer from '../features/FeedBack/feedbackSlice'
import blogReducer from '../features/Blog/BlogSlice'
import testimonialReducer from '../features/Testimonial/testimonialSlice'
import faqReducer from '../features/FAQ/faqSlice'
import teamReducer from '../features/Team/teamSlice'
import storeReducer from '../features/Store/storeSlice'
import catalogueReducer from '../features/Catalogue/catalogueSlice'
import accountReducer from '../features/Account/accountSlice'
import homeReducer from '../features/Home/homeSlice'
import vendorReducer from '../features/Vendor/vendorSlice'
import influencerReducer from '../features/Influencer/influencerSlice'
import careerReducer from '../features/Carreer/careerSlice'
import aboutReducer from '../features/About/aboutSlice'
import directorReducer from '../features/Director/directorSlice'
import opportunityReducer from '../features/RightCoOpportunities/CoOpportunitiesSlice'
import searchReducer from "../features/Search/searchSlice";
import distributionReducer from '../features/Distribution/distributionSlice'
import schoolReducer from '../features/SchoolConnect/schoolSlice'
import popUpReducer from '../features/PopUpFranchise/PopUpSlice'
import subcribeReducer from '../features/Subscribe/subscribeSlice'
import navReducer from '../features/Nav/navSlice'
import footerReducer from '../features/Footer/footerSlice'
import contactReducer from '../features/Contact/contactSlice'
import newsLetterReducer from '../features/NewsLetter/newsLetterSlice'
import currencyReducer from '../features/Currency/currencySlice'
import countryReducer from '../features/Country/countrySlice'
import giftReducer from '../features/Gift/giftSlice'
import logger, { createLogger } from "redux-logger";

const middlewareList = [logger]

const enhancer = compose(
    applyMiddleware(...middlewareList)
);
export const store = configureStore({
  reducer: {
    auth: authReducer,
    // feature: featureReducer,
    // best: bestReducer,
    // newArrival: newArrivalReducer,
    product: productReducer,
    // sales: saleReducer,
    // combo: comboReducer,
    // popular: popularReducer,
    shop: shopSliceReducer,
    shopPayload: shopPaylaodSlice,
    shopProducts: shopProductSlice,
    cartWish : cartWishReducer,
    checkOut : checkOutReducer,
    // feedBack : FeedbackReducer,
    // blog : blogReducer,
    // testmonial : testimonialReducer,
    // faq:faqReducer,
    // team:teamReducer,
    store:storeReducer,
    catalogue:catalogueReducer,
    account : accountReducer,
    // home : homeReducer,
    // vendor : vendorReducer,
    // influencer : influencerReducer,
    // career : careerReducer,
    // about : aboutReducer,
    // director : directorReducer,
    // coOpportunity : opportunityReducer,
    // search: searchReducer,
    // distribution : distributionReducer,
    // school : schoolReducer,
    // popUp : popUpReducer,
    // subscribe : subcribeReducer,
    // nav : navReducer,
    // footer : footerReducer,
    // contact : contactReducer,
    // newsLetter : newsLetterReducer,
    // currency : currencyReducer,
    // country : countryReducer,
    // gift : giftReducer
  },
   enhancer
});
