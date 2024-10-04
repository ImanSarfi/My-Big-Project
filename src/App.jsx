import styled from 'styled-components';

const Body = styled.body`
font-family: "sans-serif";
background-color: grey;

display: grid;
grid-template-columns: 20rem 1fr;
grid-template-rows: 3rem 1fr;
height: 100vh;

`
const Header = styled.header`
background-color: red ; `

const Sidebar = styled.section`
background-color: green;
grid-row: 1/-1;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:30px`

const Nav=styled.nav`
display: flex;

height: 80%;
`
const List=styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap : 20px;
`
const List2=styled.li`
`

const Link = styled.a`
text-decoration: none;
`


const Article = styled.article`
background-color: orange;`


function App() {
  return (
    <Body>
      <Header>My-Big-Project</Header>
      <Sidebar>
        <div>LOGO</div>
        <Nav>
          <List>
            <List2>
              <Link href="">Home</Link>
            </List2>
            <List2>
              <Link href="">acardion</Link>
            </List2>
            <List2>
              <Link href="">abloutme</Link>
            </List2>
            <List2>
              <Link href="">FlashCart</Link>
            </List2>
          </List>
        </Nav>
      </Sidebar>
      <Article>Content</Article>
    </Body>
  );
}

export default App;
