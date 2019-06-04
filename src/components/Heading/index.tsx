import React from 'react'
import {HeadingStyled} from './styles'

interface HeadingProps {
  title: string
  subtitle?: string
}

const Heading = ({title, subtitle}: HeadingProps) => (
  <HeadingStyled>
    <h2>{title}</h2>
    {subtitle && <h3>{subtitle}</h3>}
  </HeadingStyled>
)

export default Heading
