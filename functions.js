// 컨텐츠 붙이기 (temp_html) 예시
function q1() {
    let url = '주소'
    $('#id').empty() // 데이터를 붙이기 전에 한번 초기화를 해줌
    fetch(url).then(res => res.json()).then(data => {
        let rows = data // fetch로 데이터를 가져와 필요한 데이터만 변수에 담아줌
        rows.forEach(a => {
            let array1 = a['key1']
            let array2 = a['key2']
            let temp_html = ``; // 처음에 비워둔 상태로 만들어줌
            if (array1 > 40) {
                temp_html = `<li class="bad">${array1} : ${array2}</li>`
                // class를 추가해 꾸미기 가능
            } else {
                temp_html = `<li>${array1} : ${array2}</li>`
            }
            $('#id').append(temp_html) // 해당 위치(원하는 위치)에 데이터를 붙이기
        });
    })
}

// 웹 페이지 실행 시 자동 업데이트
$(document).ready(function () {
    // 실행할 코드
})

//script type="module" 사용시 토글 사용법
$('#savebtn').click(async function () {
    $('#postbox').toggle()
})

// fetch 기본 뼈대
fetch("여기에 URL을 입력").then(res => res.json()).then(data => {
    console.log(data)
})


//Firebase에 data 저장하기 기본 뼈대
$("#id").click(async function () {
    let var1 = $('#id').val()
    let var2 = $('#id').val()
    let var3 = $('#id').val()
    let var4 = $('#id').val()

    let doc = {
        'var1': var1,
        'var2': var2,
        'var3': var3,
        'var4': var4
    };
    await addDoc(collection(db, "저장할 파일명"), doc);
    alert('저장완료')
    window.location.reload();
})

//Firebase에서 data를 가져와 붙이기
let docs = await getDocs(collection(db, "가져올 파일명"));
docs.forEach((doc) => {
    console.log(doc)
    let row = doc.data();
    let var1 = row['가져올 정보의 id값'];
    let var2 = row['가져올 정보의 id값'];
    let var3 = row['가져올 정보의 id값'];
    let var4 = row['가져올 정보의 id값'];
    let temp_html = `            
    <div class="col">
        <div class="card">
            <img src="${var1}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${var2}</h5>
                <p class="card-text">${var3}</p>
                <p class="card-text">${var4}</p>
            </div>
        </div>
    </div>`
    $('#id').append(temp_html)
});
