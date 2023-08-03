"use client";

import apiGet from "@/utils/apiFunction";
import React, { useState } from "react";
import useSWR from "swr";
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
import Navbar from "@/components/navbar/Navbar";
import * as MuiIcons from "@mui/icons-material";
import ScrollAnimation from "@/components/ScrollAnimation";
import { flexCol, flexRow } from "@/utils/customLayout";
import Image from "next/image";
import HOCLoading from "@/components/loading/HOCLoading";
import { useRouter } from "next/navigation";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      // role="tabpanel"
      hidden={value !== index}
      // id={`simple-tabpanel-${index}`}
      // aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Products() {
  const router = useRouter();
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("https://fakestoreapi.com/products", apiGet);
  const { data } = products ?? {};
  console.log("🚀 ~ file: page.tsx:7 ~ Products ~ data:", data);
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const selectedTab = (tabNumber: number) => {
    switch (tabNumber) {
      case 0:
        return data;
      case 1:
        return data?.filter((data: any) => data.category.includes("clothing"));
      case 2:
        return data?.filter((data: any) => data.category.includes("jewelery"));
      case 3:
        return data?.filter((data: any) =>
          data.category.includes("electronics"),
        );
    }
  };

  const renderLayout = (tabno: number) => {
    return (
      <Grid container spacing={2}>
        {!isLoading &&
          data?.length > 0 &&
          selectedTab(tabno)?.map((data: any) => {
            const { category, id, image, price, rating, title } = data ?? {};
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
                    key={id}
                    onClick={() => router.push(`/admin/products/${id}`)}
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
                        alt={image}
                        height={120}
                        width={120}
                        className="h-full w-full"
                      />
                    </Box>
                    <Box
                      sx={{ ...flexCol, width: "100%", gap: 3 }}
                      className="flex w-full flex-col gap-3"
                    >
                      <Typography
                        sx={{
                          flex: 1,
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                          color: "#18181A",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {title}
                      </Typography>
                      <Box sx={{ ...flexRow, justifyContent: "space-between" }}>
                        <Box sx={{ ...flexCol, gap: 1 }}>
                          <Typography
                            sx={{
                              textDecoration: "capitalize",
                              borderRadius: "20px",
                              py: 0.5,
                              px: 3,
                              fontSize: "0.75rem",
                              color: "white",
                              bgcolor: "#A6C6DB",
                            }}
                          >
                            {category}
                          </Typography>
                          <Typography sx={{ color: "#675FA7" }}>
                            ${price}
                          </Typography>
                        </Box>
                        <Fab
                          style={{
                            backgroundColor: "#675FA7",
                          }}
                          sx={{
                            ...flexRow,
                            alignItems: "center",
                            justifyContent: "center",
                            p: 2,
                            color: "white",
                            fontSize: "14px",
                          }}
                        >
                          <MuiIcons.Add />
                        </Fab>
                      </Box>
                    </Box>
                  </Card>
                </ScrollAnimation>
              </Grid>
            );
          })}
      </Grid>
    );
  };

  const tabData = [
    {
      _id: 1,
      name: "All",
    },
    {
      _id: 2,
      name: "Clothing",
    },
    {
      _id: 3,
      name: "Jewelery",
    },
    {
      _id: 4,
      name: "Electronics",
    },
  ];

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Navbar />
      {!isLoading ? (
        <Container maxWidth="lg" sx={{ height: "100%", pt: 8 }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab
                  sx={{ textTransform: "none" }}
                  label="All"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Clothing"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Jewelery"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Electronics"
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
            {tabData?.map((data, index) => (
              <CustomTabPanel value={value} index={index} key={data._id}>
                {renderLayout(index)}
              </CustomTabPanel>
            ))}
          </Box>
        </Container>
      ) : (
        <HOCLoading />
      )}
    </Box>
  );
}
