import React, { useRef, useState } from "react";

const Products = () => {
  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(form.id);
    alert(form.title);
    alert(form.description);
    alert(form.price);
    setForm({
      id: "",
      name: "",
      description: "",
      price: "",
    });
  };

  return (
    <div>
      <form
        ref={formRef}
        className="mt-12 bg-black-100 rounded-[20px] px-10 w-[450px] py-5 flex flex-col gap-5 mr-[50px]"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">ID</span>
          <input
            name="id"
            onChange={handleChange}
            type="number"
            placeholder="ID"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
            border-none font-medium"
            value={form.id}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Title</span>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Title"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
            border-none font-medium"
            value={form.title}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Description</span>
          <textarea
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="Description"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
            border-none font-medium"
            value={form.description}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Price</span>
          <input
            name="price"
            onChange={handleChange}
            type="number"
            placeholder="price"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
            border-none font-medium"
            value={form.price}
          />
        </label>

        <button
          className="bg-tertiary py-3 px-8 w-fit rounded-xl outline-none text-white
        font-bold shadow-lg shadow-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Products;
