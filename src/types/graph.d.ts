export const typeDefs = ["type Chat {\n  id: Int!\n  message: [Message]!\n  participants: [User]!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  chat: Message!\n  user: User!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  createdAt: String!\n  updatedAt: String\n  user: User!\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: String!\n  dropOffAddress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  duration: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype User {\n  _id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean\n  createdAt: String\n  updatedAt: String\n  fullName: String\n  fbId: String\n  isDriving: Boolean\n  isRiding: Boolean\n  isTaken: Boolean\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float\n}\n\ntype Query {\n  User: User!\n}\n\ntype Verification {\n  target: String\n  key: String!\n  payload: String!\n  verified: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  User: User;
}

export interface User {
  _id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean | null;
  createdAt: string | null;
  updatedAt: string | null;
  fullName: string | null;
  fbId: string | null;
  isDriving: boolean | null;
  isRiding: boolean | null;
  isTaken: boolean | null;
  lastLng: number | null;
  lastLat: number | null;
  lastOrientation: number | null;
}

export interface Chat {
  id: number;
  message: Array<Message>;
  participants: Array<User>;
  createdAt: string;
  updatedAt: string | null;
}

export interface Message {
  id: number;
  text: string;
  chat: Message;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
  createdAt: string;
  updatedAt: string | null;
  user: User;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLng: string;
  dropOffAddress: string;
  dropOffLat: number;
  dropOffLng: number;
  price: number;
  duration: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Verification {
  target: string | null;
  key: string;
  payload: string;
  verified: boolean;
}
