

const CoffeeCard = ({ coffee }) => {
    const {
        name,
        quantity,
        suplier,
        taste,
        category,
        details,
        photo,
    } = coffee;
    // console.log(coffee);
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
          <div className="flex justify-between border-2 w-full pr-4">
            <div>
              <h2 className="card-title">Name: {name}</h2>
              <p>{quantity}</p>
              <p>{suplier}</p>
              <p>{taste}</p>
            </div>
            <div className="card-actions justify-end">
              <div className="join join-vertical space-y-4">
                <button className="btn btn-primary">View</button>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-primary">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;