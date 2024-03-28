import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const coffee = useLoaderData()

    const   { _id, name, quantity, suppliar, taste, category, details, photo } = coffee;
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const  name = form.name.value;
        const  quantity = form.quantity.value;
        const  suppliar = form.suppliar.value;
        const  taste = form.taste.value;
        const  category = form.category.value;
        const  details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {  name, quantity, suppliar, taste, category, details, photo };

    
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                fetch(`http://localhost:5000/coffee/${_id}`, {

                    method: 'PUT',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(updatedCoffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee updated sucssfuly.",
                                icon: "success"
                            });
                        }


                    })


            }
        });


    }
    return (
        <div className="  bg-[#F4F3F0] P-24">
            <h1 className="text-3xl font-extrabold">update   a coffee :{name}</h1>

            <form onSubmit={handleUpdate}>
                {/* form row name and quantity   */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">CoffeeName</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={name} placeholder="name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Qunantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Qunantity"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* form suppliar row  */}

                <div className="md:flex mb-8">



                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">suppliar</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="suppliar" defaultValue={suppliar} placeholder="suppliar"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" defaultValue={taste} placeholder="taste"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>



                {/* form row category and details   */}

                <div className="md:flex mb-8">


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" defaultValue={category} placeholder="category"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" defaultValue={details} placeholder="details"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>



                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URI</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" defaultValue={photo} placeholder="photo"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <input type="submit" value="update a  coffee" className="btn btn-block" />



            </form>
        </div>
    );
};

export default Update;