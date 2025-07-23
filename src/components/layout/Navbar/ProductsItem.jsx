import React from "react";

const ProductsItem = ({
  href = "#",
  imageSrc,
  title,
  description,
  imageWidth = 40,
  imageHeight = 30,
  imageClassName = "",
}) => {
  return (
    <a href={href} className="py-4 px-2 hover:bg-gray-100 rounded-2xl flex">
      <div
        style={{ width: 60, height: 60 }}
        className="mr-3 border border-gray-300 rounded-xl flex items-center justify-center"
      >
        <img
          src={imageSrc}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className={imageClassName}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </a>
  );
};

export default ProductsItem;
