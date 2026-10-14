import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch("https://pixgen-plum.vercel.app/category.json");
  const photoCategories = await res.json();
  return (
    <div className="flex gap-3 flex-wrap my-5">
      {photoCategories.map((category) => (
        <Link key={category.id} href={`?category=${category.name.toLowerCase()}`}>
        <Button size="sm" variant="outline">
          {category.name}
        </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
