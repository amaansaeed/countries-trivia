import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 60px;

  visibility: ${props => (props.pause ? "hidden" : "visible")};
`

const Input = styled.input`
  width: 250px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`

const SearchBar = ({ pause, value, handleChange }) => {
  return (
    <Wrapper pause={pause}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        autocomplete="off"
        placeholder="Enter A Country's Name"
      />
    </Wrapper>
  )
}

export default SearchBar
