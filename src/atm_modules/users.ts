import { Users } from "./type.js";

const users: Users[] = [
  {
    accountNumber: 1,
    name: "John Doe",
    password: "123",
    balancce: Math.floor(Math.random() * 10000 + 1),
  },
  {
    accountNumber: 2,
    name: "Shad Chad",
    password: "456",
    balancce: Math.floor(Math.random() * 10000 + 1),
  },
  {
    accountNumber: 3,
    name: "trump",
    password: "789",
    balancce: Math.floor(Math.random() * 10000 + 1),
  },
];

export default users;
