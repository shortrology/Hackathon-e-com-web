"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId:"v826qxww" , // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2025-01-30', // Toda '2025-01-30'y's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token:"skN10ATLCErJzaGWZD3wNtbSIW7TD3Hi8RB4ghTykGJetWOQZsFrph3zPKyuFVj3sirKjKY70DCmqWnKzQ1RRMqFY0XD1HnSQMIAblCZOj6mHw0JpYfhGcQEVgC4VwHIqk30Bgt3OMcgKgYzSbKMiZNWuBl7Dj5QDmVHMNkEPuuDKzlZ0mjQ" ,
});