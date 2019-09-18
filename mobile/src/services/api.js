import axios from "axios";
import socket from "socket.io-client";
const baseURL = "http://localhost:4000";
export const api = axios.create({ baseURL });

export const io = socket(baseURL);
