import React from 'react'
import Field from '../../toolkit/form/Field'
import Select, {OptionType} from '../../toolkit/form/Select'
import InputText from '../../toolkit/form/InputText'
import {
  changeFilterTime,
  changeFilterFrom,
  changeFilterTo,
  changeFilterPlan
} from '../../store/actions'
import {FilterStyled} from './styles'

type FilterProps = {
  from: OptionType[]
  to: OptionType[]
  time: string
  plans: OptionType[]
}

const Filter = ({from, to, time, plans}: FilterProps) => (
  <FilterStyled>
    <Field label="Origem:">
      <Select onChangeValue={changeFilterFrom} options={from} />
    </Field>

    <Field label="Destino:">
      <Select onChangeValue={changeFilterTo} options={to} />
    </Field>

    <Field label="Tempo(min):">
      <InputText onChangeValue={changeFilterTime} defaultValue={time} />
    </Field>

    <Field label="Plano:">
      <Select onChangeValue={changeFilterPlan} options={plans} />
    </Field>
  </FilterStyled>
)

export default Filter
