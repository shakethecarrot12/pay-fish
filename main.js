"use strict";

let resultNode = document.getElementById('result');

function selectProduct(e) {
    // options에서 selected 된 element의 text 찾기
    const texts = [...e.options]
        .filter(option => option.selected)
        .map(option => option.text);
    const values = [...e.options]
        .filter(option => option.selected)
        .map(option => parseFloat(option.value)); // 숫자로 변환

    // 선택된 데이터 출력
    let resultText = texts.map(text => `<li>${text}</li>`).join('');

    // 총액 계산
    let totalAmount = values.reduce((acc, cur) => acc + cur, 0);
    let additionalText = texts.length > 0 ? `${totalAmount}` : "";

    // 결과를 설정
    resultNode.innerHTML = `<h1>선택한 상품</h1><ul>${resultText}</ul><h3>총액: ${additionalText}</h3>`;
}

function pay() {
    const select = document.getElementById('product');
    const totalAmount = [...select.options]
        .filter(option => option.selected)
        .map(option => parseFloat(option.value))
        .reduce((acc, cur) => acc + cur, 0);

    // 선택된 값이 비어 있는지 확인
    if (select.value === "") {
        alert("결제할 상품을 입력하세요");
    } else {
        // 총액을 URL 파라미터로 전달하여 자식 창을 엽니다.
        window.open(`popup.html?totalAmount=${encodeURIComponent(totalAmount)}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=600");
    }
}
