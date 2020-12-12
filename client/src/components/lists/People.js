import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOAT, GET_PEOPLE } from '../../queries'

import { List } from 'antd'

import Person from '../listItems/Person'

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const People = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_PEOPLE)
  if (loading) return 'Loading...'
  if (error) return `Errror! ${error.message}`
  const { loadingBoat, errorBoat, boatData } = useQuery(GET_BOAT)
  if (loadingBoat) return 'Loading...'
  if (errorBoat) return `Errror! ${errorBoat.message}`
  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.people.map(({ id, firstName, lastName }) => (
        <List.Item key={id}>
          <Person key={id} id={id} firstName={firstName} lastName={lastName} />
          <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
            {boatData.boat.map(({ id, year, make, model, price, personId }) => (
                <List.Item key = {id}>
                  <Boat key={id} id={id} year={year} make={make} model={model} price={price} personId= {personId} />
                </List.Item>
            ))}
          </List>
        </List.Item>
      ))}
    </List>
  )
}

export default People
