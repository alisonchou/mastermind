import styled, { css, keyframes } from 'styled-components';

const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

const flexAlignCenterDirCol = css`
  ${flexAlignCenter};
  flex-direction: column;
`;

export const FlexAlignCenter = styled.div`
  ${flexAlignCenter};
`;

export const FlexAlignCenterCol = styled.div`
  ${flexAlignCenterDirCol};
`;

export const Page = styled(FlexAlignCenterCol)`
  padding: 1em;
`;

export const GuessContainer = styled(FlexAlignCenter)`
  justify-content: flex-end;
`;

export const GuessInputContainer = styled(GuessContainer)`
  margin-bottom: .2em;
`;

export const GuessInput = styled.input`
  outline: 0;
  border-width: 0 0 .08em;
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  background: none;
  font-size: ${({ theme }) => theme.fontSizes.guess};
  width: 3em;
  letter-spacing: .2em;
  font-family: ${({ theme }) => theme.fontFamily};
  margin: 0 .75em 0 1.24em;
`;

export const PlayerStatBox = styled(FlexAlignCenterCol)`
  padding: .2em 1em;
`;

export const StatContainer = styled(FlexAlignCenter)`
  margin-bottom: .7em;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: ${({ fontSize, theme }) => theme.fontSizes[fontSize] || theme.fontSizes.normal};
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.primary};
  letter-spacing: ${({ letterSpace }) => letterSpace || 0};
  ${({ casing }) => (casing && `text-transform: ${casing}`)};
`;

export const HintText = styled.div`
  ${({ active }) => (!active && `
    opacity: 0;
    visibility: hidden;
  `)};
  ${({ collapse }) => (collapse && 'height: .9em')};
  transition: opacity .5s;
  color: ${({ theme, hintSet }) => (hintSet ? theme.colors.gray : theme.colors.secondary)};
  &:hover {
    ${({ active, hintSet, theme }) => (active && !hintSet && `
      cursor: pointer;
      color: ${theme.colors.gray};
    `)};
  }
`;

export const GuessStat = styled(Text)`
  margin: .2em 1em .2em 1.3em;
`;

export const GuessNum = styled(Text)`
  width: 1em;
  text-align: right;
`;

export const GuessClues = styled(Text)`
  ${flexAlignCenter};
  flex-wrap: wrap;
  width: 1.3em;
`;

export const LoadingText = styled(Text)`
  padding: .2em 1em;
`;

export const NewGameText = styled(Text)`
  margin-bottom: .2em;
`;

export const ClueDot = styled.span`
  height: .5em;
  width: .5em;
  margin: .05em;
  background-color: ${({ white, theme }) => (
    white
      ? theme.colors.light
      : theme.colors.dark
  )};
  ${({ white, theme }) => (!white && `box-shadow: inset 0 0 0 .05em ${theme.colors.light}`)};
  border-radius: 50%;
  display: inline-block;
`;

export const GameArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GameColumn = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`;

export const PlayerArea = styled(GameColumn)`
  width: 13em;
`;

export const InfoArea = styled(GameColumn)`
  ${flexAlignCenterDirCol};
  width: 10em;
`;

export const Timer = styled.div`
  width: 5em;
  color: ${({ theme }) => theme.colors.gray};
  border: ${({ theme }) => `.1em solid ${theme.colors.secondary}`};
  padding: .5em;
  border-radius: 1.2em;
  margin-bottom: 1.3em;
`;

export const Button = styled.button`
  width: 6em;
  border-radius: .5em;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.5em;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 1.3em;
  ${({ casing }) => (casing && `text-transform: ${casing}`)};
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModeButton = styled(Button)`
  width: 5em;
  ${({ active, theme }) => (
    !active && `
      color: ${theme.colors.primary};
      box-shadow: inset 0 0 0 .08em ${theme.colors.secondary};
      background: none;
    `
  )};
  border-radius: ${({ left }) => (left ? '.5em 0 0 .5em' : '0 .5em .5em 0')};
  &:hover {
    ${({ active, theme }) => (!active && `background: ${theme.colors.darkGreen}`)};
  }
`;

const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeaderSpan = styled.span`
  display: inline-block;
  width: .7em;
  height: .12em;
  margin-bottom: -.22em;
  background: ${({ theme }) => theme.colors.primary};
  animation-name: ${blinkAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export const Header = styled.h2`
  margin-top: 0;
`;

export const InfoMsg = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  margin-top: 0;
`;

export const ModeContainer = styled(FlexAlignCenter)`
  justify-content: center;
`;

export const CodeReveal = styled.span`
  background: ${({ theme }) => theme.colors.darkGray};
  padding: 0 .1em;
  margin: 0 -.1em;
`;
