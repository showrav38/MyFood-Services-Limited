import React, { useRef } from 'react';

const AddNewOrder = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();
  const makingRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const availableTimeRef = useRef();
  const shopNameRef = useRef();

  const handleAddUser = e => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const rating = ratingRef.current.value;
    const makingTime = makingRef.current.value;
    const price = priceRef.current.value;
    const img = imgRef.current.value;
    const availableTime = availableTimeRef.current.value;
    const shopName = shopNameRef.current.value;

    const newUser = { name, img, description, makingTime, rating, price, availableTime, shopName };
    fetch('https://young-springs-85818.herokuapp.com/services', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('successfully added the user');
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div className="pt-4 bt-4 mt-4 fw-bolder bg-secondary bccol">
      <h2 className="pt-4 bt-4 mt-4">Add New Food Item</h2>
      <form onSubmit={handleAddUser} className="row g-3 p-4 b-4 m-4">
        <div class="col-md-6">
          <label for="inputName4" class="form-label">
            Food Name
          </label>
          <input type="text" class="form-control" id="inputName4" ref={nameRef} required />
        </div>
        <div class="col-md-6">
          <label for="inputImg4" class="form-label">
            Image URL
          </label>
          <input type="text" class="form-control" id="inputImg4" ref={imgRef} required />
        </div>
        <div class="col-12">
          <label for="inputPrice" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="inputPrice"
            placeholder=""
            ref={priceRef}
            required
          />
        </div>
        <div class="col-12">
          <label for="inputdescription2" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder=""
            ref={descriptionRef}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Food Making Time (Min)
          </label>
          <input type="text" class="form-control" id="inputCity" ref={makingRef} required />
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Rating (Out 0f 5)
          </label>
          <input type="text" class="form-control" id="inputZip" ref={ratingRef} required />
        </div>
        <div class="col-md-2">
          <label for="input" class="form-label">
            Shop Name
          </label>
          <input type="text" class="form-control" id="input" ref={shopNameRef} required />
        </div>
        <div class="col-md-2">
          <label for="inputZi" class="form-labl">
            Available Time
          </label>
          <input type="text" class="form-control" id="inputZi" ref={availableTimeRef} required />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewOrder;
