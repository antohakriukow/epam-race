import axios, { type CreateAxiosDefaults } from 'axios';

const options: CreateAxiosDefaults = {
  baseURL: process.env.SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export const configuredAxios = axios.create(options);
