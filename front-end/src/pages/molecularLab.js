import React, { useState, useEffect } from 'react';

const ChemicalTable = () => {
  const [labChemicals, setLabChemicals] = useState([]);
  const labName = 'Molecular'; // Set the lab name directly

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/chemical/labs/getLabChemical?labName=${labName}`);
        const data = await response.json();
        console.log(data);
        setLabChemicals(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [labName]);

  return (
    <div>
      <h2>Lab Chemicals Table</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Chemical Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Brand</th>
            <th>Received Date</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>
          {labChemicals.map((labChemical) => (
            <tr key={labChemical.id}>
              <td>{labChemical.chemical.chemicalName}</td>
              <td>{labChemical.quantity}</td>
              <td>{labChemical.chemical.unitPrice}</td>
              <td>{labChemical.chemical.brand}</td>
              <td>{labChemical.chemical.receivedDate}</td>
              <td>{labChemical.chemical.expirationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChemicalTable;
