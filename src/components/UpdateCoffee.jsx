import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, name, quantity, suplier, taste, category, details, photo } =
      coffee;

    
 const handleUpdateCoffee = (event) => {
   event.preventDefault();
   const form = event.target;

   const name = form.name.value;
   const quantity = form.quantity.value;
   const suplier = form.suplier.value;
   const taste = form.taste.value;
   const category = form.category.value;
   const details = form.details.value;
   const photo = form.photo.value;

   const updateCoffee = {
     name,
     quantity,
     suplier,
     taste,
     category,
     details,
     photo,
   };
   console.log(updateCoffee);

   fetch(`http://localhost:5000/coffee/${_id}`, {
     method: "PUT",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(updateCoffee),
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
         if (data.modifiedCount > 0) {
           Swal.fire({
             title: "Success!",
             text: "Coffee updated successfully",
             icon: "success",
             confirmButtonText: "Cool",
           });
     }
     });
 };

    return (
      <div className="container mx-auto bg-[#F4F3F0] p-24">
        <h2 className="text-2xl font-bold">Update Coffee: {name}</h2>
        <form onSubmit={handleUpdateCoffee} action="#" className="space-y-4">
          {/* form row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                defaultValue={name}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                defaultValue={quantity}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* form row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Suplier Name</span>
              </label>
              <input
                type="text"
                name="suplier"
                placeholder="Suplier"
                defaultValue={suplier}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                defaultValue={taste}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* form row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={category}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Details"
                defaultValue={details}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* form row */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                defaultValue={photo}
                className="input input-bordered w-full "
              />
            </div>
            <input
              type="submit"
              className="btn btn-block mt-6 bg-black text-white"
              value="UPDATE COFFEE"
            />
          </div>
        </form>
      </div>
    );
};

export default UpdateCoffee;