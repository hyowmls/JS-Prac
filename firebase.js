// Firebase 사용법
// script태그에 type="module"을 써줌
// type="module"을 붙이는 순간 onclick 기능을 사용하지 못하기 때문에 직접 id를 지정해서 click()을 붙여줘야함
<script type="module">

</script>
// Firebase SDK 라이브러리를 가져옴
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// Firebase -> 프로젝트 설정 -> 내 앱에서 SDK 설정 및 구성 -> 구성으로 선택 후 스니펫 복사해서 가져오기
const firebaseConfig = {
    '나의 정보': '위 설명 참고'
};
// Firebase 인스턴트 객체 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);