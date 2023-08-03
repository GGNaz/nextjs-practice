"use client";

import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "@/components/loading/lottieload.json";
import { Box, Typography } from "@mui/material";
import { flexRow } from "@/utils/customLayout";

export default function HOCLoading() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        ...flexRow,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          ...flexRow,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie
          animationData={loadingLottie}
          loop={true}
          height={50}
          width={50}
          style={{ height: "10rem", width: "10rem" }}
        />
        <Typography
          sx={{
            ml: -3,
            zIndex: 10,
            fontSize: "1.5rem",
            color: "#490098",
            fontWeight: 500,
          }}
        >
          Loading...
        </Typography>
      </Box>
    </Box>
  );
}
