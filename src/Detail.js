import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Detail(props) {

    let [alertOn, setAlertOn] = useState(true);
    //모달창. 현재창 보이는. 현재 상태 저장해둬야 함.
    useEffect(() => {
        let timer = setTimeout(() => { setAlertOn(false) }, 2000);
        return () => clearTimeout(timer)
    }, []);
    //시간이 지나 실행되는 기능. 마지막 ,[]추가하면 []안의 데이터가 변결될때만 실행되게 만드는 조건 기능. 빈칸시 언제나 단 한번만 수행됨.

    let navigate = useNavigate();
    let { id } = useParams();
    let pickProduct = props._product.find(function (x) {
        return x.id == id
        // 이 리턴에 의해 주소창에 입력한 파라미터 id 와 동일한 값인 id를 가진 상품이 pickProduct 에 담김.
    });
    console.log(pickProduct);
    return (
        <div className="container">
            {
                alertOn == true ?
                    (<div className="my-alert">
                        <p>오늘 새로 입고된 상품입니다</p>
                    </div>)
                    :
                    null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={pickProduct.thumbnail} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{pickProduct.title}</h4>
                    <p>{pickProduct.content}</p>
                    <p>{pickProduct.price}</p>
                    <Inventory __inventory={props._inventory}></Inventory>
                    <button className="btn btn-danger" onClick={() => {
                        props._setInventory([9, 11, 12])
                    }}>주문하기</button>
                    <button className="btn btn-danger" onClick={() => {
                        navigate(-1);
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

function Inventory(props) {
    return (
        <p>재고: {props.__inventory[0]}</p>
    )
}
export default Detail;