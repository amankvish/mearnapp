import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src="https://imgs.search.brave.com/BMsIQAAXhSn-3pdwxY-jjC0RfqEEL-cqpWjZNG5nxCo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kbC5t/b3ZpZXNyLm5ldC9p/bWFnZXMvTFlUUm8u/anBn"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card.
          </p>
          <div className="conatiner w-100">
            <select className="m-2 h-100  bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100  bg-success rounded">
              <option value="half">Half </option>
              <option value="full">Full </option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
