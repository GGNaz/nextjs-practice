"use client";
import Loading from "@/app/loading";
import Navbar from "@/components/navbar/Navbar";
import apiGet from "@/utils/apiFunction";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  BsPlusLg,
  BsFilter,
  BsHeartFill,
  // BsChatText,
  BsRobot,
  BsXLg,
  BsSend,
} from "react-icons/bs";
import * as MuiIcons from "@mui/icons-material";
import wide_selection from "@/app/assets/wide_selection.png";
import competitive_prices from "@/app/assets/competitive_prices.png";
import easy_navigation from "@/app/assets/easy_navigation.png";
import secure_transaction from "@/app/assets/secure_transaction.png";
import fast_shipping from "@/app/assets/fast_shipping.png";
import customer_support from "@/app/assets/customer_support.png";
import useSWR from "swr";
import Footer from "@/components/footer/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useRef } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Container,
  Grid,
  Card,
  Fab,
} from "@mui/material";
import { flexCol, flexRow } from "@/utils/customLayout";
import { useAppSelector } from "@/redux/hooks";

interface FilterProps {
  sort_type?: string;
  sort_by?: string;
  isSubmit?: boolean;
}

export default function Homepage() {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showBot, setShowBot] = useState<boolean>(false);
  const ref = useRef(null);

  const [filteredItems, setFilteredItems] = useState<FilterProps>({
    sort_type: "select",
    sort_by: "select",
    isSubmit: false,
  });

  const performFilter = () => {
    const { isSubmit, sort_by, sort_type } = filteredItems ?? {};
    const apiReq = isSubmit
      ? `https://fakestoreapi.com/products${sort_type}${sort_by}`
      : "https://fakestoreapi.com/products?limit=6";
    console.log("🚀 ~ file: page.tsx:31 ~ performFilter ~ apiReq:", apiReq);
    return apiReq;
  };
  const samples = useAppSelector((state) => state.productReducer.product);
  console.log("🚀 ~ file: page.tsx:65 ~ Homepage ~ samples:", samples);
  const { data, error, isLoading } = useSWR(performFilter, apiGet);

  const products = data?.data ?? [];

  console.log("🚀 ~ file: page.tsx:25 ~ Homepage ~ data:", data);

  const choose_us = [
    {
      id: 1,
      image: wide_selection,
      title: "Wide Selection",
      desc: "From electronics and fashion to home decor and beauty products, we offer an extensive selection to cater to your every need. Browse through our vast range of high-quality items and find exactly what you're looking for.",
    },
    {
      id: 2,
      image: competitive_prices,
      title: "Competitive Prices",
      desc: "We understand the importance of value for money. That's why we strive to offer competitive prices without compromising on product quality. Enjoy great deals and discounts, making your shopping experience even more rewarding.",
    },
    {
      id: 3,
      image: easy_navigation,
      title: "Easy Navigation",
      desc: "Our website is designed with your convenience in mind. Effortlessly navigate through categories, filter products based on your preferences, and find the perfect items with just a few clicks. We prioritize a seamless and intuitive user experience.",
    },
    {
      id: 4,
      image: secure_transaction,
      title: "Secure Transactions",
      desc: "Your privacy and security are our top priorities. Rest assured that your personal information and payment details are handled with the utmost care. Our secure checkout process ensures a safe and reliable transaction every time.",
    },
    {
      id: 5,
      image: fast_shipping,
      title: "Fast Shipping",
      desc: "We understand that prompt delivery is essential. We partner with trusted shipping services to ensure your purchases reach you as quickly as possible. Track your orders and stay updated on their progress, allowing you to plan ahead.",
    },
    {
      id: 6,
      image: customer_support,
      title: "Customer Support",
      desc: "Our dedicated customer support team is always ready to assist you. Whether you have questions about products, need help with an order, or require any assistance, we are here to provide timely and friendly support.",
    },
  ];

  return (
    <Box
      sx={{
        ...flexCol,
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(241 245 249 / var(--tw-bg-opacity))",
        overflowY: "scroll",
      }}
      // className="h-full w-full flex flex-col bg-slate-100 overflow-y-scroll "
    >
      {showBot && (
        <Box
          sx={{
            position: "fixed",
            bottom: "5rem",
            right: "5rem",
            zIndex: 50,
            height: "24rem",
            width: "20rem",
            borderTop: "0.75rem",
            backgroundColor: "white",
            borderTopRightRadius: "0.75rem",
            borderTopLeftRadius: "0.75rem",
            boxShadow:
              "ar(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
          }}
          className="animate__animated animate__bounceIn "
        >
          <Box
            sx={{
              ...flexRow,
              justifyContent: "space-between",
              borderTopRightRadius: "0.75rem",
              borderTopLeftRadius: "0.75rem",
              backgroundColor: "#675FA7",
              color: "white",
            }}
            // className=" flex flex-row justify-between rounded-t-xl bg-darkviolet p-3 text-white"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                fontSize: "sm",
                p: 1,
              }}
            >
              <MuiIcons.SmartToy sx={{ fontSize: "1.25rem" }} />
              <Typography sx={{ fontWeight: 600 }}>LazBot</Typography>
            </Box>
            <Button onClick={() => setShowBot(false)}>
              <BsXLg />
            </Button>
          </Box>
          <Box
            sx={{
              ...flexCol,
              height: "80%",

              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              // color: "rgb(156 163 175 / var(--tw-text-opacity))",
              color: "lightgray",
            }}
          >
            <Box>
              <MuiIcons.SmartToy sx={{ fontSize: "3rem" }} />
            </Box>
            <Typography>Chat with me</Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              ...flexRow,
              border: "1px solid #F5F4F4",
              p: 0.5,
            }}
          >
            <TextField
              type="text"
              placeholder="Say something..."
              sx={{
                // fontSize: "0.87rem",
                outline: "none",
                height: "fit",
                width: "100%",
                "& fieldset": { border: "none" },
              }}
            />
            <Button
              sx={{
                color: "white",
                borderRadius: "0.5rem",
                p: 0.5,
              }}
              style={{ backgroundColor: "#675FA7" }}
            >
              <MuiIcons.Send sx={{ fontSize: "1.25rem" }} />
            </Button>{" "}
          </Box>
        </Box>
      )}

      <Fab
        // className="p-5 z-50 fixed bottom-5 right-10 rounded-full bg-darkviolet shadow-lg text-white text-2xl hover:bg-darkviolet/80"
        sx={{
          p: 2,
          // height: "4rem",
          // width: "4rem",
          zIndex: 50,
          position: "fixed",
          bottom: 20,
          right: 20,
          borderRadius: "100%",

          color: "white",
          fontSize: "1.5rem",
        }}
        style={{ backgroundColor: "#675FA7" }}
        onClick={() => setShowBot(!showBot)}
      >
        <MuiIcons.Chat />
      </Fab>

      {showFilter && (
        <FilterModal
          setShowFilter={setShowFilter}
          setFilteredItems={setFilteredItems}
          filteredItems={filteredItems}
        />
      )}
      <Navbar />
      <Box
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          height: "70vh",
          minHeight: "70vh",
          ...flexCol,
          justifyContent: "center",
          backgroundPosition: "center",
          backgroundBlendMode: "soft-light",
          // backgroundColor: "#A69DE0",
        }}

        // className=" flex flex-col justify-center bg-[url(https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center bg-cover bg-brandviolet/20  bg-blend-soft-light"
      >
        <Box
          sx={{
            p: "2.5rem",
            ...flexCol,
            gap: 5,
          }}
        >
          <Box
            sx={{
              ...flexCol,
              color: "white",
              fontWeight: 600,
            }}
          >
            <Typography sx={{ fontSize: { md: "2.25rem", lg: "3rem" } }}>
              Discover the joy of
            </Typography>
            <Typography sx={{ fontSize: { md: "2.25rem", lg: "3rem" } }}>
              online shopping
            </Typography>
          </Box>

          <Box>
            <Button
              sx={{
                width: "9rem",
                border: "1px solid white",
                fontSize: "xs",
                textTransform: "none",
                color: "white",
              }}
              // className=" border text-white border-white text-xs hover:bg-white/20 "
            >
              Shop now
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          my: 10,
          ...flexCol,
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              ...flexCol,
              width: "100%",
              height: "100%",
              gap: 2,
              px: 5,
            }}
            // className="flex h-full w-full   flex-col gap-2 px-5 md:max-w-4xl lg:max-w-7xl"
          >
            <Box
              sx={{
                ...flexRow,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  textTransform: "capitalize",
                  color: "#18181A",
                }}
              >
                {" "}
                Top{" "}
                {filteredItems.sort_type !== "select"
                  ? filteredItems?.sort_by
                  : " Sale's"}
              </Typography>
              {/* <Button
                onClick={() => setShowFilter(!showFilter)}
                sx={{ ...flexRow, width: "5rem", alignItems: "center", justifyContent: "center", gap:1, borderRadius: "0.5rem", p:2, fontSize: "xs", color: "white" }}
                // className="flex w-20 items-center justify-center gap-1  rounded-lg bg-darkviolet p-2 text-xs text-white hover:bg-darkviolet/80 focus:outline-none"
              >
                <BsFilter className="text-lg" /> <span>Filter</span>
              </Button> */}
            </Box>
            {!isLoading ? (
              <Grid container spacing={2}>
                {/* <Grid className="  grid grid-cols-2 gap-5 md:grid-cols-3"> */}
                {products.map((data: any) => {
                  const { category, id, image, price, rating, title } =
                    data ?? {};
                  return (
                    <Grid item sm={6} md={4} key={id}>
                      <ScrollAnimation
                        animateTo={{ y: 0 }}
                        animateFrom={{ y: 70 }}
                        delay={0.2}
                      >
                        <Card
                          sx={{
                            ...flexCol,
                            position: "relative",
                            cursor: "pointer",
                            alignItems: "center",
                            gap: 5,
                            borderRadius: "0.75rem",
                            backgroundColor: "white",
                            p: 5,
                          }}
                          // className="relative flex cursor-pointer flex-col items-center  gap-5 rounded-xl bg-white p-5 shadow-lg"
                          key={id}
                        >
                          <Box
                            sx={{
                              ...flexRow,
                              position: "absolute",
                              right: 0,
                              top: 5,
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 1,
                              p: 2,
                              // color: "white",
                              // boxShadow:
                              //   "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                            }}
                          >
                            <MuiIcons.Star
                              sx={{ color: "#E1C96C" }}
                              // className="h-5 w-5  hover:text-darkviolet"
                            />
                            <Typography>{rating?.rate}</Typography>
                          </Box>
                          <Box
                            sx={{
                              height: { sm: "9rem", md: "13rem" },
                              width: { sm: "9rem", md: "13rem" },
                              ...flexRow,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src={image}
                              alt="title"
                              height={150}
                              width={150}
                              className="h-full w-full"
                            />
                          </Box>
                          <div className="flex w-full flex-col gap-3">
                            <div className="max-w-sm truncate text-sm font-semibold text-customblack">
                              {title}
                            </div>
                            <div className="flex justify-between">
                              <div className="flex flex-col">
                                <div className="rounded-full bg-brandgray px-2 py-1 text-xs capitalize text-white">
                                  {category}
                                </div>
                                <div className="text-gray-500">${price}</div>
                              </div>
                              <button className=" flex h-10 w-10 items-center justify-center rounded-full  bg-darkviolet p-2 text-sm text-white">
                                <BsPlusLg className="text-lg" />{" "}
                              </button>
                            </div>
                          </div>
                        </Card>
                      </ScrollAnimation>
                    </Grid>
                  );
                })}
                {/* </Grid> */}
              </Grid>
            ) : (
              <div>Loading..</div>
            )}
            <div className="flex flex-col gap-5  pt-10">
              <div className="w-full p-5 text-center text-4xl  font-semibold text-customblack ">
                Why Choose Us?
              </div>
              {choose_us?.map(({ id, title, image, desc }) => (
                <ScrollAnimation
                  animateTo={{ y: 0 }}
                  animateFrom={{ y: 70 }}
                  delay={0.5}
                  key={id}
                >
                  <div
                    className={`flex ${
                      id % 2 === 0
                        ? "flex-col divide-x-0 md:flex-row-reverse md:divide-x-2 md:divide-x-reverse"
                        : "flex-col divide-x-0 md:flex-row md:divide-x-2"
                    } w-full justify-evenly  rounded-lg bg-white p-5 shadow-lg`}
                    key={id}
                  >
                    <div className="flex h-56 w-full items-center justify-center md:h-96 md:w-fit">
                      <Image
                        src={image}
                        height={300}
                        width={300}
                        className=""
                        alt={title}
                      />
                    </div>
                    <div className="flex w-full flex-col justify-center">
                      <div className="flex w-full flex-col justify-center gap-5 p-5 ">
                        <div className="text-xl font-semibold">{title}</div>
                        <p className="text-gray-400">{desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </Box>
        </Container>
      </Box>
      <div className="h-56">{/* <Footer /> */}</div>
    </Box>
  );
}

interface ModalProps {
  setShowFilter: Dispatch<SetStateAction<boolean>>;
  setFilteredItems: Dispatch<SetStateAction<FilterProps>>;
  filteredItems: FilterProps;
}

const FilterModal = ({
  setShowFilter,
  setFilteredItems,
  filteredItems,
}: ModalProps) => {
  console.log(
    "🚀 ~ file: page.tsx:98 ~ FilterModal ~ filteredItems:",
    filteredItems,
  );

  const priceArray = [
    {
      value: "asc",
      label: "Min - max price",
    },
    {
      value: "desc",
      label: "Max - min price",
    },
  ];

  const filterChange = ({ target }: any) => {
    const { name, value }: any = target;
    if (name === "sort_type") {
      setFilteredItems({ [name]: value, sort_by: "select" });
    } else {
      setFilteredItems({ ...filteredItems, [name]: value });
    }
  };

  const categoryArray = [
    {
      value: "men's clothing",
      label: "Men's Clothing",
    },
    {
      value: "women's clothing",
      label: "Women's Clothing",
    },
    {
      value: "jewelery",
      label: "Jewelery",
    },
    {
      value: "electronics",
      label: "Electronics",
    },
  ];
  const sortValue =
    filteredItems.sort_type === "?sort=" ? priceArray : categoryArray;
  return (
    <div className="absolute left-0 top-0 z-10 flex h-screen w-full items-center justify-center bg-black/50">
      <div className="animate__animated animate__zoomIn w-full max-w-md rounded-lg bg-white p-5">
        <div className="flex flex-col gap-5">
          <div>Filter</div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col text-sm">
              <div className="text-gray-500">Sort by</div>
              <select
                name="sort_type"
                value={filteredItems?.sort_type}
                onChange={(e) => {
                  filterChange(e);
                }}
                className=" h-9 w-full rounded-lg border border-brandviolet px-2 text-sm focus:outline-none "
              >
                <option value="select">Select</option>
                <option value="?sort=">Price</option>
                <option value="/category/">Category</option>
              </select>
            </div>
            {filteredItems?.sort_type !== "select" && (
              <select
                name="sort_by"
                value={filteredItems?.sort_by}
                onChange={(e) => {
                  filterChange(e);
                }}
                className=" h-9 w-full rounded-lg border border-brandviolet px-2 text-sm focus:outline-none"
              >
                <option value="select">Select</option>
                {sortValue.map(({ value, label }, index) => (
                  <option value={value} key={index}>
                    {label}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex flex-row justify-evenly gap-3">
            <button
              className="w-full bg-darkviolet p-2  text-sm text-white hover:bg-darkviolet/80"
              onClick={() =>
                setFilteredItems({ ...filteredItems, isSubmit: true })
              }
            >
              Filter
            </button>
            <button
              className="w-full border border-red-400 p-2 text-sm  text-red-400 hover:bg-red-400/20"
              onClick={() => setShowFilter(false)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
