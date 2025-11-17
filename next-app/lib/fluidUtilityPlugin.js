import plugin from "tailwindcss/plugin";

// clamp 計算
const getClampSize = (viewportWidth, minSize, maxSize, sizeType = "max") => {
  const valueSize = sizeType === "max" ? maxSize : minSize;
  const v = valueSize / (viewportWidth / 100);
  return `clamp(${minSize}px, ${v}vw, ${maxSize}px)`;
};

const fluidUtility = plugin(({ matchUtilities }) => {
  const clampProperties = {
    "text-clamp": "fontSize",
    "m-clamp": "margin",
    "mt-clamp": "marginTop",
    "mb-clamp": "marginBottom",
    "ml-clamp": "marginLeft",
    "mr-clamp": "marginRight",
    "p-clamp": "padding",
    "pt-clamp": "paddingTop",
    "pb-clamp": "paddingBottom",
    "pl-clamp": "paddingLeft",
    "pr-clamp": "paddingRight",
    "w-clamp": "width",
    "h-clamp": "height",
  };

  Object.entries(clampProperties).forEach(([className, cssProp]) => {
    matchUtilities({
      [className]: (value) => {
        const parts = value.split(",");
        const viewportWidth = Number(parts[0]);
        const minSize = Number(parts[1]);
        const maxSize = Number(parts[2]);
        const sizeType = parts[3];

        return {
          [cssProp]: getClampSize(viewportWidth, minSize, maxSize, sizeType),
        };
      },
    });
  });
});

export default fluidUtility;