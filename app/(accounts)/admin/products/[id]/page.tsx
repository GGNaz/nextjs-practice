"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  Button,
  Fab,
} from "@mui/material";
import { flexCol, flexRow } from "@/utils/customLayout";
import useSWR from "swr";
import apiGet from "@/utils/apiFunction";
import * as MuiIcons from "@mui/icons-material";
import HOCLoading from "@/components/loading/HOCLoading";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { addToCartFunc } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";

export default function ViewProducts({ params: { id } }: any) {
  const dispatch = useDispatch();

  const [ctr, setCtr] = useState<number>(1);
  const {
    data: viewProduct,
    error,
    isLoading,
  } = useSWR(`https://fakestoreapi.com/products/${id}`, apiGet);
  const myCart = useAppSelector((state) => state.cartReducer.cart);
  console.log("🚀 ~ file: page.tsx:36 ~ ViewProducts ~ MyCart:", myCart);

  const { title, image, category, price, rating, description } =
    viewProduct?.data ?? {};

  const quantityCounter = (action: string) => {
    if (action === "add") return setCtr((prev) => (prev += 1));
    else return setCtr((prev) => (prev += 1));
  };

  const addToCart = () => {
    const params = { ...viewProduct?.data, quantity: ctr };
    dispatch(addToCartFunc(params));
  };

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Navbar />
      {!isLoading ? (
        <Container maxWidth="lg" sx={{ pt: 9, pb: 3, ...flexCol, gap: 5 }}>
          <Box
            sx={{
              ...flexRow,
              gap: 1,
              alignItems: "center",
            }}
          >
            <Link href={"/admin/home"}>Home</Link>
            <MuiIcons.ArrowForwardIosRounded
              sx={{
                color: "gray",
                fontWeight: 500,
              }}
            />
            <Link href={"/admin/products"}>Products</Link>
            <MuiIcons.ArrowForwardIosRounded
              sx={{
                color: "gray",
                fontWeight: 500,
              }}
            />
            <Typography sx={{ textTransform: "capitalize" }}>
              {category}
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                ...flexCol,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                height: "fit",
                width: "100%",
                p: 5,
                gap: 1,
                minHeight: "100%",
              }}
            >
              <Box>
                <Image
                  src={image}
                  alt={image}
                  height={200}
                  width={200}
                  style={{ width: "fit-content" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ ...flexCol, gap: 2 }}>
                <Typography
                  sx={{
                    color: "#4B485D",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                  }}
                >
                  {title}
                </Typography>
                <Box sx={{ ...flexRow, justifyContent: "space-between" }}>
                  <Box
                    sx={{
                      ...flexRow,

                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <MuiIcons.Star sx={{ color: "#E1C96C" }} />
                    <Typography>{rating?.rate}</Typography>
                  </Box>
                </Box>
                <Typography>{description}</Typography>
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1.5rem", color: "#AFB0B4" }}
                >
                  ${price?.toFixed(2)}
                </Typography>
                <Grid container spacing={2} sx={{ width: "100%" }}>
                  <Grid item xs={6} md={6} sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        ...flexRow,
                        gap: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        p: 0.5,
                        borderRadius: "10px",
                        border: "1px solid #4B485D",
                      }}
                    >
                      <Button
                        sx={{ color: "#4B485D" }}
                        onClick={() => ctr !== 1 && quantityCounter("sub")}
                      >
                        <MuiIcons.KeyboardArrowLeftRounded />
                      </Button>
                      <Typography
                        sx={{
                          color: "#4B485D",
                          fontWeight: 600,
                        }}
                      >
                        {ctr}
                      </Typography>
                      <Button
                        sx={{ color: "#4B485D" }}
                        onClick={() => quantityCounter("add")}
                      >
                        <MuiIcons.KeyboardArrowRightRounded />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={6} sx={{ width: "100%" }}>
                    <Button
                      style={{ backgroundColor: "#675FA7", width: "100%" }}
                      sx={{
                        p: 1,
                        color: "white",
                        height: "100%",
                        borderRadius: "10px",
                        textTransform: "none",
                      }}
                      onClick={() => {
                        addToCart();
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <HOCLoading />
      )}
    </Box>
  );
}
