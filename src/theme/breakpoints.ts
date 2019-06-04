import {css} from 'styled-components'

export enum MediaQuery {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

const breakpoints = {
  xs: '30rem',
  sm: '48rem',
  md: '62rem',
  lg: '80rem'
}

const getBreakpoint = (name: MediaQuery): string => breakpoints[name]

const mobileLandscape = (style: string) =>
  css`
    @media (min-width: ${getBreakpoint(MediaQuery.xs)}) {
      ${style}
    }
  `

const tabletPortrait = (style: string) =>
  css`
    @media (min-width: ${getBreakpoint(MediaQuery.sm)}) {
      ${style}
    }
  `

const tabletLandscape = (style: string) =>
  css`
    @media (min-width: ${getBreakpoint(MediaQuery.md)}) {
      ${style}
    }
  `

const desktop = (style: string) =>
  css`
    @media (min-width: ${getBreakpoint(MediaQuery.md)}) {
      ${style}
    }
  `

export {getBreakpoint, mobileLandscape, tabletPortrait, tabletLandscape, desktop}
