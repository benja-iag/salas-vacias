"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { cardStyle } from "./buildingCardStyle";

type BuildingCardProps = {
  building: string;
  emptys: number;
  imageBuilding: string;
  loading: boolean;
  onClickCard: () => void;
};

export const BuildingCard: React.FC<BuildingCardProps> = ({
  building,
  emptys,
  imageBuilding,
  loading,
  onClickCard,
}) => {
  return (
    <Box sx={cardStyle.boxCard}>
      {loading ? (
        <LoadingCard />
      ) : (
        <Card sx={cardStyle.card} onClick={onClickCard}>
          <CardMedia component="img" image={imageBuilding} sx={cardStyle.img} />
          <Box sx={cardStyle.boxInfo}>
            <Typography variant="h4">{building}</Typography>
            <Typography variant="h6">Salas vacías ahora: {emptys}</Typography>
          </Box>
        </Card>
      )}
    </Box>
  );
};

const LoadingCard: React.FC = () => {
  return (
    <Card sx={{ minWidth: "80%" }}>
      <CardHeader
        title={
          <Box sx={cardStyle.boxCardTitle}>
            <Skeleton width={100}>
              <Typography variant="h4">..</Typography>
            </Skeleton>
            <Skeleton width={100}>
              <Typography variant="h6">.</Typography>
            </Skeleton>
          </Box>
        }
      />
      <CardContent>
        <Skeleton
          variant="rectangular"
          width={"100%"}
          sx={{ height: { xs: 150, sm: 250, md: 350 } }}
        />
      </CardContent>
      <CardActions>
        <Skeleton variant="rectangular" width={"100%"} height={36} />
      </CardActions>
    </Card>
  );
};
