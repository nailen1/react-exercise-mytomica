import { useState } from 'react';
import './App.css';
import Data from './data.js';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import fxx from './tomica-ferrari-fxx-01.jpeg';
import pajero from './tomica-pajero-01.jpeg';
import countach from './tomica-lambo-countach-01.jpeg';
import { Link, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import data2 from './data2.json'

function App() {

  let [product, setProduct] = useState(Data);
  let [inventory, setInventory] = useState([10, 11, 12]);
  // let [thumbnail, setThumbnail] = useState([fxx, pajero, countach])

  let navigate = useNavigate();

  return (
    <div className="App">
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand className="text-logo" href="/">MYTOMICA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                {/* <Nav.Link onClick={() => {
                  history.push('/')
                }}>Home</Nav.Link> */}
                {/* Link to 의 렌더에러? 문제로 이렇게 씀. 이러면 재로딩 되는건가? 괜찮은건가? */}
                <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
                {/* <Nav.Link onClick={() => {
                  history.push('/detail')
                }}>Detail</Nav.Link> */}
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>

      <Routes>

        <Route path="/" element={
          <>
            <div className="Jumbotron mb-3">
              <h1>이번주 한정상품</h1>
              <p>토미카 클래식 대한민국 한정판 기아 프라이드 1970년형 출시</p>
              <p>토미카 클래식 대한민국 한정판 현대 포니트럭 1970년형 출시</p>
              <Button variant="light">상세보기</Button>
            </div>
            <div className="container">
              <div className="row">
                <div className="product bd-red col-sm-4">
                  <div className="imgBx">
                    <img src={fxx} alt="ferrari-fxx" />
                  </div>
                  <h4 className="name red">{product[0].title}</h4>
                  <p className="text-main rred">{product[0].content}</p>
                  <p className="text-sub rrred">{product[0].price}</p>
                </div>

                <div className="product bd-blue col-sm-4">
                  <div className="imgBx">
                    <img src={pajero} alt="ferrari-fxx" />
                  </div>
                  <h4 className="name blue">미츠비시-PAJERO</h4>
                  <p className="text-main bblue">일본</p>
                  <p className="text-sub bbblue">1억</p>
                </div>

                <div className="product bd-crimson col-sm-4">
                  <div className="imgBx">
                    <img src={countach} alt="ferrari-fxx" />
                  </div>
                  <h4 className="name crimson">람보르기니-CT</h4>
                  <p className="text-main ccrimson">이탈리아</p>
                  <p className="text-sub cccrimson">6억</p>
                </div>

                <p style={{ margin: "20px" }}>AUTOMATA CARDS</p>

                {
                  product.map((a, i) => {
                    return (
                      <Card product={product[i]} key={i} id={i} _navigate={navigate} ></Card>
                    )
                  })
                }
              </div>
              <button className="btn btn-primary" onClick={() => {
                // 로딩중이라는 UI 띄움

                //ajax 이용해서 서버에 데이터 보내기도 가능 
                // axios.post('서버URL', { id: 'naieln1', pw: 1234})

                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    // 요청성공 후 로딩중이라는 UI 안보이게 처리함 
                    console.log('데이터 수신 성공');
                    console.log(result.data);
                    // setProduct([...product, ...result.data]);
                  })
                  .catch(() => { console.log('데이터 수신 실패') })
              }}>더보기</button>
            </div>
          </>

        } />


        <Route path="/detail/:id" element={
          <Detail _product={product} _inventory={inventory} _setInventory={setInventory}></Detail>
        } />

        <Route path="*" element={<div> 404 error page. data none</div>} />

        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>가격별 정리탭</div>} />
          <Route path="location" element={<div>날짜별 정리탭</div>} />
        </Route>
      </Routes>
    </div >
  );
}

function Card(props) {
  return (
    <div className="product bd-gray col-sm-4" >
      <div className="imgBx">
        <img src={props.product.thumbnail} alt="thumbnail" />
      </div>
      <h4 className="name gray" onClick={() => {
        props._navigate('/detail/${props.key}')
      }}>{props.product.title}</h4>
      <p className="text-main ggray">{props.product.content}</p>
      <p className="text-sub gggray">{props.product.price}</p>
    </div >
  )
}

function About() {
  return (
    <div>
      <h4>한눈 보기 페이지 제목입니다.</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
