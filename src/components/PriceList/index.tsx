import React from 'react'
import {ListStyled} from './styles'
import {convertRealCoin} from '../../utils/money'
import ColumnKind from './ColumnKind'

interface PriceListProps {
  standard: number
  plan: number
}

const PriceList = ({standard, plan}: PriceListProps) => (
  <ListStyled>
    <ColumnKind title="Sem plano" value={convertRealCoin(standard)} />
    <ColumnKind title="Com plano" value={convertRealCoin(plan)} />
  </ListStyled>
)

export default PriceList
