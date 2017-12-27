export const newLayers = {
  ellipse: () => {
    return {
      type: "ellipse",
      title: "ellipse",
      order: 0,
      dimensions: {
        x: 450,
        y: 450,
        width: 100,
        height: 100,
        rotation: 0
      },
      adjustments: {
        blending: {
          mode: "normal",
          opacity: 1
        },
        fill: {
          type: "color",
          color: "rgba(11,231,183,1)"
        },
        stroke: {
          color: "rgba(0,0,0)",
          width: 0
        }
      }
    };
  },
  image: image => {
    return {
      imageId: image.id,
      type: "image",
      title: "image",
      order: 0,
      dimensions: {
        x: (1000 - image.width) / 2,
        y: (1000 - image.width) / 2,
        width: image.width,
        height: image.height,
        rotation: 0
      },
      adjustments: {
        blending: {
          mode: "normal",
          opacity: 1
        }
      }
    };
  },
  rectangle: () => {
    return {
      type: "rectangle",
      title: "rectangle",
      order: 0,
      dimensions: {
        x: 450,
        y: 450,
        width: 100,
        height: 100,
        rotation: 0
      },
      adjustments: {
        blending: {
          mode: "normal",
          opacity: 1
        },
        fill: {
          type: "gradient",
          gradient: {
            start: "rgba(11,231,183,1)",
            end: "rgba(11,231,183,1)",
            angle: 0
          }
        },
        stroke: {
          color: "rgba(0,0,0)",
          width: 0
        }
      }
    };
  },
  text: () => {
    return {
      type: "text",
      title: "text",
      text: "Add your own text",
      order: 0,
      dimensions: {
        x: 400,
        y: 450,
        width: 200,
        height: 100,
        rotation: 0
      },
      adjustments: {
        blending: {
          mode: "normal",
          opacity: 1
        },
        text: {
          align: "left",
          fontFamily: "sans",
          fontSize: 24,
          fontWeight: 300,
          italic: false,
          textColor: "rgba(0,0,0)",
          underline: false
        }
      }
    };
  }
};
