"use client"
import Image from "next/image";
import Home from "../pages/home/Home"
import "./globals.css";
import { Router } from "react-router-dom"
import Header from "@/components/header/Header";

export default function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
