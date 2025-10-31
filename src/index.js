import express from "express";
import { renderBanner } from "./cli/banner.js";

async function main() {
    renderBanner()
}

main();