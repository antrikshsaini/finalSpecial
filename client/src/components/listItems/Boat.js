import React, { useState } from 'react'
import { Card, List } from 'antd'

// import { EditOutlined, RightOutlined } from '@ant-design/icons'
// import UpdatePerson from '../forms/UpdatePerson'
// import RemovePerson from '../buttons/RemovePerson'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Boat = props => {
  const [id] = useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [editMode, setEditMode] = useState(false)
  // const [editRightMode, setEditRightMode] = useState(false)
  const styles = getStyles()

  const fullName = () => {
    return `${props.firstName} ${props.lastName}`
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      default:
        break
    }
  }

  const handleButtonClick = () => setEditMode(!editMode)
  // const handleButtonRightClick = () => setEditRightMode(!editRightMode)

  return (
    <List.Item key={props.id}>
      {editMode ? (
        <UpdatePerson
          id={id}
          firstName={firstName}
          lastName={lastName}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Card
          actions={[
            <EditOutlined key='edit' onClick={handleButtonClick} />,
            <RemovePerson id={id} firstName={firstName} lastName={lastName} />
          ]}
          style={styles.card}
        >
          {fullName()}
          <Boat  id={id} />,
          
        </Card>
      )}
    </List.Item>
  )
}

export default Boat
