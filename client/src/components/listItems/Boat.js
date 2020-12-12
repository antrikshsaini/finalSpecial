import React, { useState } from "react";
import { Card, List } from "antd";

import { EditOutlined, RightOutlined } from '@ant-design/icons'
import UpdateBoat from '../forms/UpdateBoat'
import RemoveBoat from '../buttons/RemoveBoat'

const getStyles = () => ({
  card: {
    width: "500px",
  },
});

const Boat = (props) => {
  const [id] = useState(props.id);
  //   const [firstName, setFirstName] = useState(props.firstName)
  //   const [lastName, setLastName] = useState(props.lastName)
    const [editMode, setEditMode] = useState(false)
  // const [editRightMode, setEditRightMode] = useState(false)
  const [year, setYear] = useState(props.year);
  const [make, setMake] = useState(props.make);
  const [model, setModel] = useState(props.model);
  const [price, setPrice] = useState(props.price);
  const [personId, setPersonId] = useState(props.personId);
  const styles = getStyles();

  const fullName = () => {
    return `${props.year} ${props.make} ${props.model} ${props.price} ${props.personId}`;
  };

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case "year":
        setYear(value);
        break;
      case "make":
        setMake(value);
        break;
      case "model":
        setModel(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "personId":
        setPersonId(value);
        break;
      default:
        break;
    }
  };

  const handleButtonClick = () => setEditMode(!editMode);
  // const handleButtonRightClick = () => setEditRightMode(!editRightMode)

  return (
    <List.Item key={props.id}>
      {editMode ? (
        <UpdateBoat
          id={id}
         year={year}
         make ={make}
         price = {price}
         personId = {personId}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Card
          // actions={[
          //   <EditOutlined key="edit" onClick={handleButtonClick} />,
          //   <RemoveBoat id={id} year={year} make={make} model={model} price={price} personId={personId} />,
          // ]}
          style={styles.card}
        >
         {fullName()}
        </Card>
      )}
    </List.Item>
  );
};

export default Boat;
