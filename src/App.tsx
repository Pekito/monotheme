import MButton from "./components/MButton"
import { MTextInput, createValidationResult } from "./components/MTextInput"
import MList from "./components/MList"
import { MTable, MTableBody, MTableCell, MTableFooter, MTableHeader, MTableRow } from "./components/MTable"
import MText from "./components/MText"
import MTree from "./components/MTree"
function App() {
  return (
    <>
      <MText text={"Button"} tag="h2"></MText>
      <MButton
        label="I'm a <div> button"
      />
      <br />
      <MButton
        label="I'm an <a> link button"
        htmlTag="a"
        href="https://github.com/pekito"
        target="_blank"
      />
      <br />
      <MButton
        label="I'm a <button> button"
      />
      <br />
      <MText text={"Lists"} tag="h2"></MText>
      <MText text={"Unordered"} tag="h3"></MText>
      <MList tag="ul" children={[<span key="Pedro">Pedro</span>, <span key="Unordered-List">Unordered List</span>, <span key="Pires">Pires</span>]} />
      <br />
      <MText text={"Ordered"} tag="h3"></MText>
      <MList tag="ol" children={[<span key="Pedro">Pedro</span>, <span key="Ordered-List">Ordered List</span>, <span key="Pires">Pires</span>]} />
      <br />
      <br />
      <br />
      <MText text="Tree" tag="h3"></MText>
      <MTree
        content={<span>Pedro</span>}
        nodes={[
          <MTree
            key="Luiz"
            content={<span>Luiz</span>}
            nodes={[
              <MTree
                key="Ferreira-Luiz"
                content={<span>Ferreira</span>}
                nodes={[<span key="Pires-Luiz-Ferreira">Pires</span>]}
              />,
              <span key="Pires-Luiz">Pires</span>,
            ]}
          />,
          <MTree
            key="Ferreira"
            content={<span>Ferreira</span>}
            nodes={[<span key="Pires-Ferreira">Pires</span>]}
          />,
          <span key="Pires">Pires</span>,
        ]}
      />
      <MText text="Table" tag="h3"></MText>

      <MTable>
        {/* Table Header */}
        <MTableHeader>
          <MTableRow>
            <MTableCell as="heading" expand={false}>Column 1</MTableCell>
            <MTableCell as="heading" expand={true}>Column 2</MTableCell>
            <MTableCell as="heading" expand={false}>Column 3</MTableCell>
          </MTableRow>
        </MTableHeader>

        {/* Table Body */}
        <MTableBody>
          <MTableRow>
            <MTableCell>Data 1</MTableCell>
            <MTableCell>Data 2</MTableCell>
            <MTableCell>Data 3</MTableCell>
          </MTableRow>
          <MTableRow>
            <MTableCell>Data 4</MTableCell>
            <MTableCell>Data 5</MTableCell>
            <MTableCell>Data 6</MTableCell>
          </MTableRow>
        </MTableBody>

        {/* Table Footer */}
        <MTableFooter>
          <MTableRow>
            <MTableCell>Total</MTableCell>
            <MTableCell colSpan={2}>Summary</MTableCell>
          </MTableRow>
        </MTableFooter>
      </MTable>
      <MText text="Input" tag="h2"></MText>
      <MTextInput 
        placeholder="only < 10 strings are valid" 
        label="Pedro Pires" 
        id="input-example-1"
        validationCallback={(value) => {
          if(value.length > 10) return createValidationResult(false, "Too long")
          return createValidationResult(true, "")
        }}
        ></MTextInput>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </>
  )

}

export default App
