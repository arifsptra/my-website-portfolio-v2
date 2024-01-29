import React from 'react'

const page = () => {
  return (
    <>
      <p>Hello World!</p>
      <div>
        <p>Checking themes</p>
        <h1 className="bg-primary">This is primary</h1>
        <h1 className="bg-secondary">This is secondary</h1>
        <h1 className="bg-accent">This is accent</h1>
      </div>
    </>
  );
}

export default page