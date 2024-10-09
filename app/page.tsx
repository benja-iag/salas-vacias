"use client";
import styles from "./page.module.css";
import { BuildingCard } from "./card/BuildingCard";
import { useEffect, useState } from "react";
import { getSalas } from "./axios/getSalas";
import { countEmptyRooms, filterByBuilding } from "./utils/filters";
import { actualBlock } from "./utils/time";
import { BuildingModal } from "./modal/BuildingModal";
import { Buildings } from "./types/Building";
import { SalaNode } from "./types/axios/salas";

const buildingType = {
  ejercito: [],
  vergara: [],
  all: [],
};
type ModalProps = {
  open: boolean;
  rooms: SalaNode[];
  keyBuilding: "E441" | "V432";
};

export default function Home() {
  const [rooms, setRooms] = useState<Buildings>(buildingType);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<ModalProps>({
    open: false,
    rooms: [],
    keyBuilding: "E441", // just for default value
  });
  const blockNow = actualBlock();
  useEffect(() => {
    setLoading(true);
    getSalas()
      .then((response) => {
        setRooms({
          ejercito: filterByBuilding("E441", response),
          vergara: filterByBuilding("V432", response),
          all: response,
        });
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onClickCard = (keyBuilding: "ejercito" | "vergara") => {
    const keyBuildingShort = keyBuilding === "ejercito" ? "E441" : "V432";
    setModal({
      open: true,
      rooms: rooms[keyBuilding],
      keyBuilding: keyBuildingShort,
    });
  };

  const onCloseModal = () => {
    setModal((prev) => ({ ...prev, open: false }));
  };

  return (
    <main className={styles.main}>
      <BuildingCard
        building="Edificio Ejército"
        emptys={countEmptyRooms("E441", rooms.ejercito, blockNow)}
        imageBuilding="/static/images/ejercito.png"
        loading={loading}
        onClickCard={() => {
          onClickCard("ejercito");
        }}
      />
      <BuildingCard
        building="Edificio Vergara"
        emptys={countEmptyRooms("V432", rooms.vergara, blockNow)}
        imageBuilding="/static/images/vergara.png"
        loading={loading}
        onClickCard={() => {
          onClickCard("vergara");
        }}
      />
      <BuildingModal
        open={modal.open}
        handleClose={() => {
          onCloseModal();
        }}
        rooms={modal.rooms}
        keyBuilding={modal.keyBuilding}
      />
    </main>
  );
}
