import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';
import ima1 from "../assets/1.jpg"
import ima2 from "../assets/2.jpg"
import ima3 from "../assets/3.jpg"
import ima4 from "../assets/4.jpg"
import ima5 from "../assets/5.jpg"
import ima6 from "../assets/6.jpg"


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Sessions() {
  return (
    <>
      <Box>
        <Typography
          sx={{
            color: "#006838",
            textAlign: "center",
            fontSize: "46px",
            fontWeight: "Bold",
            marginBottom: "30px",
          }}
        >
          Glimpses Of Sessions Conducted By Jawan Pakistan
        </Typography>
      </Box>
      <ImageList
        sx={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          marginBottom: "30px",
          overflow: "hidden",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", 
            sm: "repeat(2, 1fr)", 
            md: "repeat(4, 1fr)", 
          },
        }}
        variant="quilted"
        cols={4} 
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: ima1,
    title: "car",
    rows: 2,
    cols: 2,
  },
  {
    img: ima2,
    title: "Burger",
  },
  {
    img: ima3,
    title: "Camera",
  },
  {
    img: ima4,
    title: "Coffee",
    cols: 2,
  },
  {
    img: ima5,
    title: "Hats",
    cols: 2,
  },
  {
    img: ima6,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: ima3,
    title: "Hats",
    cols: 2,
  },
];
