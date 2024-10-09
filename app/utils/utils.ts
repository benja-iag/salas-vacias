import { Room } from "../types/axios/salas";

export const splitByBuilding = (data: any) => {
  const buildings = {};
  data.forEach((item: any) => {});
};

export const convertToRoomType = (data: any): Room => {
  const room = data.split(".");
  const size = room.length;
  let output: Room;
  switch (size) {
    case 1:
      output = {
        building: "V32",
        floor: -1,
        room: room[0],
      };
      break;
    case 2:
      output = {
        building: "E441",
        floor: 5,
        room: room[0] + " " + room[1],
      };
      break;
    case 3:
      output = {
        building: room[0],
        floor: room[1],
        room: room[2],
      };
      break;
    case 4:
      output = {
        building: room[0],
        floor: room[1],
        room: room[2] + " " + room[3],
      };
      break;
    default:
      output = {
        building: "",
        floor: 0,
        room: "",
      };
      break;
  }
  return output;
};
