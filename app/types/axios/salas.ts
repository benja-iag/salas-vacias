export type Room = {
  building: string;
  floor: number;
  room: string;
};
type salaNodeResponse = {
  code: String;
  section: String;
  course: String;
  place: String;
  start: String;
  finish: String;
  day: String;
  teacher: String;
};
export interface NodeResponse {
  node: salaNodeResponse;
}

export interface SalaNode extends salaNodeResponse {
  block: number;
  dayString: string;
  room: Room;
}
