"use client";
import { useState } from "react";
import Recepie from "../Components/Recepie/Recepie";
import Partner from "../Components/Partner/Partner";
let allRecepies = [
  {
    img: "/Images/blog-section-image1.png",
    price: "9.99",
    recepieName: "Fried Egg",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: "/Images/blog-section-image2.png",
    price: "15.99",
    recepieName: "Hawaiian Pizza",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: "/Images/blog-section-image3.png",
    price: "7.25",
    recepieName: "Martinez Cocktail",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
];
let desserts = [
  {
    img: "/Images/blog-section-image2.png",
    price: "15.99",
    recepieName: "Hawaiian Pizza",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: "/Images/blog-section-image3.png",
    price: "7.25",
    recepieName: "Martinez Cocktail",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: "/Images/blog-section-image1.png",
    price: "9.99",
    recepieName: "Fried Egg",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
];
let breakfast = [
  {
    img: "/Images/blog-section-image2.png",
    price: "15.99",
    recepieName: "Hawaiian Pizza",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: "/Images/blog-section-image3.png",
    price: "7.25",
    recepieName: "Martinez Cocktail",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: "/Images/blog-section-image2.png",
    price: "15.99",
    recepieName: "Hawaiian Pizza",
    recepieDescription:
      "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
];
export default function Menu() {
  const [menuState, setMenuState] = useState("all");
  return (
    <div className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-2 flex flex-col items-center md:px-0">
        <h1 className="text-4xl text-[#2C2F24] md:text-6xl">Our Menu</h1>
        <p className="text-[#495460] w-[470px] text-center">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
        {/* button */}
        <div className="mt-12 space-x-5">
          <button
            className={`${
              menuState === "all"
                ? "text-white bg-[#AD343E]"
                : "text-[#2C2F24] border border-[#DBDFD0]"
            } w-[140px] py-4 rounded-full text-xl`}
            onClick={() => setMenuState("all")}
          >
            All
          </button>
          <button
            className={`${
              menuState === "breakfast"
                ? "text-white bg-[#AD343E]"
                : "text-[#2C2F24] border border-[#DBDFD0]"
            } w-[140px] py-4 rounded-full text-xl`}
            onClick={() => setMenuState("breakfast")}
          >
            Breakfast
          </button>
          <button
            className={`${
              menuState === "main-dishes"
                ? "text-white bg-[#AD343E]"
                : "text-[#2C2F24] border border-[#DBDFD0]"
            } w-[140px] py-4 rounded-full text-xl`}
            onClick={() => setMenuState("main-dishes")}
          >
            Main Dishes
          </button>
          <button
            className={`${
              menuState === "drinks"
                ? "text-white bg-[#AD343E]"
                : "text-[#2C2F24] border border-[#DBDFD0]"
            } w-[140px] py-4 rounded-full text-xl`}
            onClick={() => setMenuState("drinks")}
          >
            Drinks
          </button>
          <button
            className={`${
              menuState === "desserts"
                ? "text-white bg-[#AD343E]"
                : "text-[#2C2F24] border border-[#DBDFD0]"
            } w-[140px] py-4 rounded-full text-xl`}
            onClick={() => setMenuState("desserts")}
          >
            Desserts
          </button>
        </div>
        <div className="mt-12">
          {/* for all recepie */}
          {menuState === "all" && (
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-3">
              {allRecepies.map((recepie) => {
                return (
                  <Recepie
                    img={recepie.img}
                    price={recepie.price}
                    recepieName={recepie.recepieName}
                    recepieDescription={recepie.recepieDescription}
                  />
                );
              })}
            </div>
          )}
          {/* for breakefast */}
          {menuState === "breakfast" && (
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-3">
              {breakfast.map((recepie) => {
                return (
                  <Recepie
                    img={recepie.img}
                    price={recepie.price}
                    recepieName={recepie.recepieName}
                    recepieDescription={recepie.recepieDescription}
                  />
                );
              })}
            </div>
          )}
          {/* for main dishes */}
          {menuState === "main-dishes" && (
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-3">
              {desserts.map((recepie) => {
                return (
                  <Recepie
                    img={recepie.img}
                    price={recepie.price}
                    recepieName={recepie.recepieName}
                    recepieDescription={recepie.recepieDescription}
                  />
                );
              })}
            </div>
          )}
          {menuState === "drinks" && (
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-3">
              {allRecepies.map((recepie) => {
                return (
                  <Recepie
                    img={recepie.img}
                    price={recepie.price}
                    recepieName={recepie.recepieName}
                    recepieDescription={recepie.recepieDescription}
                  />
                );
              })}
            </div>
          )}
          {menuState === "desserts" && (
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-3">
              {allRecepies.map((recepie) => {
                return (
                  <Recepie
                    img={recepie.img}
                    price={recepie.price}
                    recepieName={recepie.recepieName}
                    recepieDescription={recepie.recepieDescription}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Partner />
    </div>
  );
}
