import styled from '@emotion/styled'

export const UsersGrid = styled.div`
  margin: auto;
  margin-top: 5rem;
  width: 20rem;
  height: 100%;
  background-color: #D8F8F6;
  display: grid;
  padding: 1rem;
  border-radius: 0.2rem;
`
export const User = styled.div`

`
export const Name = styled.p`
  font-weight: bolder;
  margin-left: 6rem;
`
export const Email = styled.p`
  margin-left :4.5rem;
`
export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  display: inline-block;
  margin-top: 1rem;
  border-radius: 0.2rem;
  float: left;
`
export const Button = styled.button`
  width: 4rem;
  height: 2rem;
  margin-left: 66rem;
  margin-top: 1rem;
  background-color:#48C4BD;
  font-weight: bolder;
  border-radius: 0.15rem;
  border:none;
  &:hover {
    background-color:#A5F3EF;
  }
`
