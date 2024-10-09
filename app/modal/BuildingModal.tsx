import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { SalaNode } from "../types/axios/salas";
import { useEffect, useState } from "react";
import { searchEmptyRooms } from "../utils/filters";
import { actualBlock, blocksArray } from "../utils/time";
import { modalStyle } from "./buildingModalStyle";
import Grid from "@mui/material/Grid2";
import CloseIcon from "@mui/icons-material/Close";

type BuildingModalProps = {
  open: boolean;
  handleClose: () => void;
  rooms: SalaNode[];
  keyBuilding: "E441" | "V432";
};
export const BuildingModal = ({
  open,
  handleClose,
  rooms,
  keyBuilding,
}: BuildingModalProps) => {
  const [emptyRooms, setEmptyRooms] = useState<Record<string, string[]>>({});
  useEffect(() => {
    const thisBlock = actualBlock();
    const temp = searchEmptyRooms(keyBuilding, rooms, thisBlock);
    setEmptyRooms(temp);
  }, [open]);
  const changeEmptyRooms = (block: number) => {
    const temp = searchEmptyRooms(keyBuilding, rooms, block);
    setEmptyRooms(temp);
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle.boxModal}>
        <HeaderModal
          changeEmptyRooms={changeEmptyRooms}
          keyBuilding={keyBuilding}
          handleClose={handleClose}
        />
        <FloorList emptyRooms={emptyRooms} />
        <FooterModal handleClose={handleClose} />
      </Box>
    </Modal>
  );
};

type HeaderModalProps = {
  changeEmptyRooms: (block: number) => void;
  keyBuilding: "E441" | "V432";
  handleClose: () => void;
};
const HeaderModal = ({
  changeEmptyRooms,
  keyBuilding,
  handleClose,
}: HeaderModalProps) => {
  const thisBlock = actualBlock();
  const [selectedBlock, setSelectedBlock] = useState<number>(thisBlock - 1);
  const handleChange = (value: number) => {
    setSelectedBlock(value);
    changeEmptyRooms(value + 1);
  };

  return (
    <>
      <Grid sx={modalStyle.gridHeader}>
        <Typography variant="h4" component={"div"}>
          Salas edificio {keyBuilding === "E441" ? "Ejército" : "Vergara"}
        </Typography>
        <Button color="error" onClick={handleClose} sx={{ ml: "auto" }}>
          <CloseIcon />
        </Button>
      </Grid>
      <FormControl sx={{ mt: 2 }} fullWidth>
        <InputLabel>Bloque horario</InputLabel>
        <Select
          sx={{ mt: 1 }}
          value={selectedBlock}
          input={<OutlinedInput label="Bloque horario" />}
          onChange={(e) => {
            e.preventDefault();
            const value = e.target.value as number;
            handleChange(value);
          }}
        >
          {blocksArray.map((block, index) => (
            <MenuItem value={index} key={index + block + "Item select"}>
              {block}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

type FloorListType = {
  emptyRooms: Record<string, string[]>;
};
const FloorList = ({ emptyRooms }: FloorListType) => {
  const PrintRooms = ({ rooms }: { rooms: string[] }) => {
    return (
      <Grid container spacing={1} sx={{ marginBottom: 2, marginLeft: 2 }}>
        {rooms.map((room, indexRoom) => (
          <Grid size={"auto"} key={"singleRoom" + indexRoom + room}>
            <Typography>{room}</Typography>
          </Grid>
        ))}
        {rooms.length === 0 && (
          <Typography variant="body1" component={"div"}>
            Sin salas
          </Typography>
        )}
      </Grid>
    );
  };
  return (
    <Grid container spacing={2} width={"100%"} sx={{ marginY: 1 }}>
      {Object.entries(emptyRooms).map(([floor, rooms], indexFloor) => {
        return (
          <Grid key={indexFloor + floor + "item floor"} size={6}>
            <Card sx={modalStyle.cardFloor}>
              <CardContent>
                <Typography variant="h5" component={"div"}>
                  Piso {floor}
                </Typography>
                <PrintRooms rooms={rooms} />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

const FooterModal = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Grid container>
      <Grid size={2}>
        <Button
          variant="contained"
          color="error"
          onClick={handleClose}
          sx={{ mt: 2 }}
        >
          Salir
        </Button>
      </Grid>
    </Grid>
  );
};
