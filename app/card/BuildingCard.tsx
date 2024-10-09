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
        <Card sx={{ backgroundColor: "#f5f5f5" }} onClick={onClickCard}>
          <CardHeader
            title={<CardTitle title={building} countEmptyRooms={emptys} />}
          />
          <CardContent>
            <CardMedia
              component={"img"}
              image={imageBuilding}
              sx={{ aspectRatio: "5/4" }}
            />
          </CardContent>
          <CardActions sx={cardStyle.cardActions}>
            {/* Este botón existe solo para el caso en que el usuario no sepa donde apretar, en verdad se usa el onClick del Card*/}
            <Button sx={{ width: "100%" }} variant="contained">
              Ver salas
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

type CardTitleProps = {
  title: string;
  countEmptyRooms: number;
};
const CardTitle = ({ title, countEmptyRooms }: CardTitleProps) => {
  return (
    <Box sx={cardStyle.boxCardTitle}>
      <Typography variant="h4">{title}</Typography>
      <Typography
        variant="h6"
        sx={{
          mt: { sm: 1, md: 1 },
        }}
      >
        Salas vacías ahora: {countEmptyRooms}
      </Typography>
    </Box>
  );
};

// Este componente no tiene ningún brillo
// Es la copia de BuildingCard (tanto en estilo como estructura) pero con un skeleton para el loading
const LoadingCard: React.FC = () => {
  return (
    <Card>
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
