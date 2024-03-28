import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const  name = form.name.value;
        const  quantity = form.quantity.value;
        const  suppliar = form.suppliar.value;
        const  taste = form.taste.value;
        const  category = form.category.value;
        const  details = form.details.value;
        const photo = form.photo.value;

        const newCoffer = {name,quantity,suppliar,taste,category,details,photo}

        
        console.log (newCoffer);

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newCoffer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "success!",
                    text: "Added successfully!",
                    icon: "success"
                  });
            }

           
        })


    }
    return (
        <div className="  bg-[#F4F3F0] P-24">
            <h1 className="text-3xl font-extrabold">Add  a coffe</h1>

            <form onSubmit={handleSubmit}>
                {/* form row name and quantity   */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">CoffeeName</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="name" placeholder="name"
                             className="input input-bordered w-full"/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Qunantity</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="quantity" placeholder="Available Qunantity"
                             className="input input-bordered w-full"/>
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
                        
                            <input type="text" name="suppliar" placeholder="suppliar"
                             className="input input-bordered w-full"/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="taste" placeholder="taste"
                             className="input input-bordered w-full"/>
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
                        
                            <input type="text" name="category" placeholder="category"
                             className="input input-bordered w-full"/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">details</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="details" placeholder="details"
                             className="input input-bordered w-full"/>
                        </label>
                    </div>

                </div>
                


                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URI</span>
                        </label>
                        <label className="input-group">
                        
                            <input type="text" name="photo" placeholder="photo"
                             className="input input-bordered w-full"/>
                        </label>
                    </div>
                </div>

            
                <input type="submit" value="Add coffee" className="btn btn-block" />



            </form>
        </div>
    );
};

export default AddCoffee;