import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
`

export const MainPictureWrap = styled.div`
  flex: 5;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  padding: 40px;
  margin-left: -40px;
  margin-top: 4vw;
  box-sizing: unset;
  position: relative;

  ${({ theme }: { theme: TTheme }) => theme.overlays.plusPattern};
`

export const SecondaryPictureWrap = styled.div`
  z-index: 10;
  flex: 4;
`

export const StyledImg = styled.img`
  width: 100%;
  z-index: 10;
  position: relative;
`
