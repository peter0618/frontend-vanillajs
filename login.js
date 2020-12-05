document.getElementById('loginform-container').addEventListener('submit', (e) => {
    e.preventDefault(); // submit 이벤트가 발생했을 때의 원래 동작을 막습니다.
    const id = e.target.id.value;
    const password = e.target.password.value;
    console.log(`id : ${id}, password : ${password}`);

    // id, password 로 서버에 요청

    // 로그인 성공 시, 메인화면으로 이동

    // 로그인 실패 시, alert 창으로 로그인 실패를 알림.
});
