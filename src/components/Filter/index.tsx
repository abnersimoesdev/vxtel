import React from 'react'
import Field from '../../toolkit/form/Field'
import Select from '../../toolkit/form/Select'
import InputText from '../../toolkit/form/InputText'
import {
  changeFilterTime,
  changeFilterFrom,
  changeFilterTo,
  changeFilterPlan
} from '../../store/actions'
import {FilterStyled} from './styles'
import {locales} from '../../constants/prices'
import {parseSelect} from '../../toolkit/form/helpers'
import {planList} from '../../constants/plans'

type FilterProps = {
  from: string
  to: string
  time: string
  plan: string
}

const Filter = ({from, to, time, plan}: FilterProps) => (
  <FilterStyled>
    <Field label="Origem:">
      <Select onChangeValue={changeFilterFrom} options={parseSelect(locales)} defaultValue={from} />
    </Field>

    <Field label="Destino:">
      <Select onChangeValue={changeFilterTo} options={parseSelect(locales)} defaultValue={to} />
    </Field>

    <Field label="Tempo (em minutos):">
      <InputText onChangeValue={changeFilterTime} defaultValue={time} />
    </Field>

    <Field label="Plano:">
      <Select
        onChangeValue={changeFilterPlan}
        options={parseSelect(planList)}
        defaultValue={plan}
      />
    </Field>
  </FilterStyled>
)

export default Filter
