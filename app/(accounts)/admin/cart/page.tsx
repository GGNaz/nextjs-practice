"use client";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import bdo from "@/app/assets/bdo.jpg";
import gcash from "@/app/assets/gcash.png";
import { BsCashCoin, BsDash, BsDashLg, BsPlus, BsPlusLg } from "react-icons/bs";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useAppSelector } from "@/redux/hooks";
import {
  Box,
  Button,
  Container,
  Fade,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Checkbox,
  Typography,
  Card,
} from "@mui/material";
import { flexCol, flexRow } from "@/utils/customLayout";
import { styled, alpha } from "@mui/material/styles";
import * as MuiIcons from "@mui/icons-material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  addQuantityCtr,
  addToCartFunc,
  removeSpecificItem,
  subQuantityCtr,
} from "@/redux/features/cartSlice";
import HOCLoading from "@/components/loading/HOCLoading";

interface IsHoverProps {
  isHover?: boolean;
  indexNumber?: number;
}

export default function Cart() {
  const dispatch = useDispatch();
  const myCart = useAppSelector((state) => state.cartReducer.cart);

  console.log("🚀 ~ file: page.tsx:36 ~ ViewProducts ~ MyCart:", myCart);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isDeleteHover, setIsDeleteHover] = useState<IsHoverProps>({});
  const [loading, setLoading] = useState<boolean>(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const deleteFunc = (isHover: boolean, indexNumber: number) => {
    setIsDeleteHover({
      isHover,
      indexNumber,
    });
  };

  const computeTotal = () => {
    if (myCart?.length > 0) {
      const sum = myCart?.reduce((accumulator, object) => {
        return object.price && object.quantity
          ? accumulator + object.price * object.quantity
          : 0;
      }, 0);

      return sum?.toFixed(2);
    } else {
      return 0;
    }
  };

  return (
    <Box sx={{ ...flexCol, height: "100%", width: "100%", bgcolor: "#F2F4F6" }}>
      <Navbar />
      {loading && <HOCLoading />}
      <Container maxWidth="lg">
        <Box sx={{ pt: 9, pb: 3, ...flexCol, gap: 2 }}>
          <Box
            sx={{
              ...flexRow,
              gap: 1,
              alignItems: "center",
            }}
          >
            <Link href={"/admin/home"} onClick={() => setLoading(true)}>
              Home
            </Link>
            <MuiIcons.ArrowForwardIosRounded
              sx={{
                color: "gray",
                fontWeight: 500,
              }}
            />
            <Link href={"/admin/products"} onClick={() => setLoading(true)}>
              Products
            </Link>
            <MuiIcons.ArrowForwardIosRounded
              sx={{
                color: "gray",
                fontWeight: 500,
              }}
            />
            <Typography sx={{ textTransform: "capitalize" }}>
              My Cart
            </Typography>
          </Box>
          <Box
            sx={{
              ...flexRow,
              bgcolor: "white",
              justifyContent: "space-between",
              p: 2,
              borderRadius: "10px",
              boxShadow: "10px 10px 15px 1px #D2DAE5",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <Checkbox defaultChecked color="secondary" /> */}
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Category</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Category"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Clothing</MenuItem>
                <MenuItem value={20}>Electronics</MenuItem>
                <MenuItem value={30}>Jewelry</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ ...flexRow, gap: 1 }}>
              <Search>
                <SearchIconWrapper>
                  <MuiIcons.Search />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box>
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MuiIcons.MoreVert />
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Checkout all</MenuItem>
                  <MenuItem onClick={handleClose} sx={{ color: "#EA5858" }}>
                    Remove all
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Grid container columnSpacing={2}>
              <Grid item md={8}>
                {myCart?.map((data, index) => (
                  <Card
                    sx={{
                      ...flexRow,
                      gap: 1,
                      alignItems: "center",
                      position: "relative",
                      overflow: "hidden",
                      // bgcolor: "white",
                      p: 2,
                      my: 1,
                      borderRadius: "10px",
                      boxShadow: "10px 10px 15px 1px #D2DAE5",
                    }}
                    key={data.id}
                  >
                    {isDeleteHover.isHover &&
                      isDeleteHover.indexNumber === index && (
                        <Box
                          className="animate__animated animate__fadeInRight"
                          sx={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            // top: 1,
                            height: "100%",
                            width: "4vw",
                            cursor: "pointer",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 10,
                            borderRadius: "none",
                            boxShadow: "10px 10px 15px 20px #D2DAE5",
                            ...flexCol,
                          }}
                          style={{ backgroundColor: "#EA5858" }}
                          onMouseEnter={() => deleteFunc(true, index)}
                          onMouseLeave={() => deleteFunc(false, index)}
                          onClick={() => dispatch(removeSpecificItem(data?.id))}
                        >
                          <MuiIcons.DeleteRounded sx={{ color: "white" }} />
                          <Typography sx={{ color: "white", fontSize: "10px" }}>
                            Remove
                          </Typography>
                        </Box>
                      )}
                    <Checkbox defaultChecked color="secondary" />
                    <Box
                      sx={{
                        ...flexRow,
                        textTransform: "capitalize",
                        gap: 2,
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Image
                        src={data.image ?? ""}
                        alt={data.title ?? ""}
                        height={80}
                        width={80}
                        style={{
                          borderRadius: "15px",
                          padding: "10px",
                          boxShadow: "5px 5px 15px 1px #D2DAE5",
                          width: "5rem",
                          height: "5rem",
                        }}
                      />
                      <Box
                        sx={{
                          ...flexRow,
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Box sx={{ ...flexCol }}>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              maxWidth: "20rem",
                            }}
                          >
                            {data.title}
                          </Typography>
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
                            style={{ width: "fit-content" }}
                          >
                            {data.category}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            ...flexRow,
                            gap: 2,
                            justifyContent: "center",
                            alignItems: "center",
                            // width: "100%",

                            borderRadius: "10px",
                            border: "1px solid #4B485D",
                          }}
                        >
                          <Box
                            sx={{
                              color: "#4B485D",
                              px: 1,
                              borderRight: "1px solid lightgray",
                              cursor: "pointer",
                              // borderRadius: "10px",
                            }}
                            onClick={() => dispatch(subQuantityCtr(data))}
                          >
                            <MuiIcons.KeyboardArrowLeftRounded
                            // sx={{ borderRight: "1px solid #4B485D", mr: 2 }}
                            />
                          </Box>

                          <Typography
                            sx={{
                              color: "#4B485D",
                              fontWeight: 600,
                            }}
                          >
                            {data.quantity}
                          </Typography>
                          <Box
                            sx={{
                              color: "#4B485D",
                              px: 1,
                              borderLeft: "1px solid lightgray",
                              cursor: "pointer",
                              // borderRadius: "10px",
                            }}
                            onClick={() => dispatch(addQuantityCtr(data))}
                          >
                            <MuiIcons.KeyboardArrowRightRounded
                            // sx={{ borderLeft: "1px solid #4B485D", ml: 2 }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => deleteFunc(true, index)}
                    >
                      <MuiIcons.DeleteRounded sx={{ color: "#EA5858" }} />
                    </Box>
                  </Card>
                ))}
                <Box
                  sx={{
                    ...flexRow,
                    justifyContent: "end",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <Button style={{ backgroundColor: "white" }}>
                    <MuiIcons.KeyboardArrowLeftRounded />
                  </Button>
                  <Button style={{ backgroundColor: "white" }}>1</Button>
                  <Button style={{ backgroundColor: "white" }}>2</Button>
                  <Button style={{ backgroundColor: "white" }}>
                    <MuiIcons.KeyboardArrowRightRounded />
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Card
                  sx={{
                    ...flexCol,
                    gap: 1,
                    // alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    // bgcolor: "white",
                    p: 2,
                    my: 1,
                    borderRadius: "10px",
                    boxShadow: "10px 10px 15px 1px #D2DAE5",
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>Order</Typography>
                  <Box sx={{ ...flexCol }}>
                    <Box sx={{ ...flexCol }}>
                      <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                        Name
                      </Typography>
                      <Typography sx={{ fontSize: "11px" }}>
                        Nazer Somera
                      </Typography>
                    </Box>

                    <Box sx={{ ...flexCol }}>
                      <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                        Address
                      </Typography>
                      <Typography sx={{ fontSize: "11px" }}>
                        Salawag Dasmarinas Cavite
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        ...flexRow,
                        justifyContent: "space-between",
                        pt: 1,
                      }}
                    >
                      <Typography>Subtotal</Typography>
                      <Typography sx={{ ...flexRow, alignItems: "center" }}>
                        <MuiIcons.AttachMoneyRounded
                          sx={{ fontSize: "18px" }}
                        />
                        <span>213</span>
                      </Typography>
                    </Box>
                    <Box sx={{ ...flexRow, justifyContent: "space-between" }}>
                      <Typography>Delivery fee</Typography>
                      <Typography sx={{ ...flexRow, alignItems: "center" }}>
                        <MuiIcons.AttachMoneyRounded
                          sx={{ fontSize: "18px" }}
                        />
                        <span>213</span>
                      </Typography>
                    </Box>
                    <Box sx={{ ...flexRow, justifyContent: "space-between" }}>
                      <Typography>Total Payment</Typography>
                      <Typography sx={{ ...flexRow, alignItems: "center" }}>
                        <MuiIcons.AttachMoneyRounded
                          sx={{ fontSize: "18px" }}
                        />
                        <span>{computeTotal()}</span>
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    style={{ backgroundColor: "#675FA7" }}
                    sx={{ color: "white", width: "100%", borderRadius: "10px" }}
                  >
                    Checkout
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
