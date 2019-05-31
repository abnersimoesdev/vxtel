import React from 'react'
import Select from '../../components/Select'
import InputText from '../../components/InputText'

const Home = () => (
  <div>
    <Select
      options={[
        {
          text: 'Option 1',
          value: '1'
        },
        {
          text: 'Option 2',
          value: '2'
        }
      ]}
    />
    <InputText name="name" />
    <InputText name="email" type="email" />
  </div>
)

export default Home
