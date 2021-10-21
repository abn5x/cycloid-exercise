export default function createFormItems(formData) {
  return [
    {
      inputConfig: { name: "name", label: "Fruit Name", type: "text" },
      events: [
        {
          type: "input",
          handler: (e) => {
            formData[e.target.name] = e.target.value;
          },
          debounce: 300,
        },
      ],
    },
    {
      inputConfig: {
        name: "isFruit",
        label: "Is a fruit?",
        type: "checkbox",
      },
      events: [
        {
          type: "input",
          handler: (e) => {
            formData[e.target.name] = e.target.checked;
          },
          debounce: 0,
        },
      ],
    },
    {
      inputConfig: {
        name: "price",
        label: "Price",
        type: "number",
        min: 0,
      },
      isRequired: true,
      events: [
        {
          type: "input",
          handler: (e) => {
            formData[e.target.name] = Number.parseFloat(e.target.value);
          },
          debounce: 300,
        },
      ],
    },
    {
      inputConfig: {
        name: "expires",
        label: "Expire Date",
        type: "date",
        min: new Date().toISOString().split("T")[0],
      },
      events: [
        {
          type: "input",
          handler: (e) => {
            formData[e.target.name] = new Date(e.target.value).toISOString();
          },
          debounce: 300,
        },
      ],
    },
    {
      inputConfig: {
        name: "description",
        label: "Description",
        type: "textarea",
      },
      isRequired: true,
      events: [
        {
          type: "input",
          handler(e) {
            formData[e.target.name] = e.target.value;
            this.$emit("validate-input", e.target.value);
          },
          debounce: 300,
        },
      ],
    },
    {
      inputConfig: {
        name: "taste",
        label: "Taste",
        type: "text",
      },
      events: [
        {
          type: "input",
          handler: (e) => {
            formData[e.target.name] = e.target.value;
          },
          debounce: 300,
        },
      ],
    },
    {
      inputConfig: {
        name: "color",
        label: "Color",
        type: "color",
      },
      events: [
        {
          type: "input",
          handler: (e) => {
            formData[e.target.name] = e.target.value;
          },
          debounce: 300,
        },
      ],
    },
    {
      inputConfig: {
        name: "image",
        label: "Image url",
        type: "text",
        withImage: true,
        image: formData.image,
      },
      events: [
        {
          type: "input",
          handler: (e) => {
            formData[e.target.name] = e.target.value;
          },
          debounce: 300,
        },
        {
          type: "error",
          handler: (e) => {
            formData.image =
              "http://cdn.shopify.com/s/files/1/2047/1523/products/fruitbowl_macbook_decal_sticker_grande.png";
          },
          debounce: 300,
        },
      ],
    },
  ];
}
