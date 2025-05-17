// 요리 데이터 예시 (기본적인 음식과 재료)
const recipes = [
    {
        name: "김치볶음밥",
        ingredients: ["밥", "김치", "달걀", "대파", "식용유"]
    },
    {
        name: "계란말이",
        ingredients: ["달걀", "소금", "당근", "대파", "식용유"]
    },
    {
        name: "떡볶이",
        ingredients: ["떡", "고추장", "어묵", "설탕", "대파", "물"]
    },
    {
        name: "된장찌개",
        ingredients: ["된장", "두부", "애호박", "양파", "마늘", "물"]
    },
    {
        name: "토스트",
        ingredients: ["식빵", "달걀", "치즈", "버터"]
    },
    {
        name: "김치찌개",
        ingredients: ["김치", "두부", "돼지고기", "대파", "마늘", "고춧가루", "간장"]
    },
    {
        name: "불고기",
        ingredients: ["소고기", "간장", "설탕", "마늘", "대파", "참기름", "배"]
    },
    {
        name: "라면",
        ingredients: ["라면", "물", "고추가루", "달걀"]
    },
    {
        name: "닭볶음탕",
        ingredients: ["닭", "감자", "양파", "대파", "간장", "고추장", "마늘"]
    },
    {
        name: "김밥",
        ingredients: ["김", "밥", "단무지", "시금치", "당근", "오이", "계란"]
    },
    {
        name: "스파게티",
        ingredients: ["스파게티 면", "토마토 소스", "올리브유", "마늘", "파마산 치즈"]
    },
    {
        name: "샐러드",
        ingredients: ["상추", "토마토", "오이", "양파", "드레싱"]
    },
    {
        name: "떡국",
        ingredients: ["떡국 떡", "육수", "계란", "대파", "소금"]
    },
    {
        name: "샤브샤브",
        ingredients: ["소고기", "배추", "버섯", "두부", "마늘", "간장", "미소"]
    },
    {
        name: "피자",
        ingredients: ["피자 도우", "토마토 소스", "치즈", "페퍼로니", "버섯", "양파"]
    },
    {
        name: "비빔밥",
        ingredients: ["밥", "고추장", "계란", "시금치", "콩나물", "당근", "오이", "김"]
    },
    {
        name: "짬뽕",
        ingredients: ["면", "돼지고기", "어묵", "오징어", "양파", "마늘", "고추", "국물용 육수"]
    },
    {
        name: "된장국",
        ingredients: ["된장", "두부", "양파", "대파", "마늘", "물"]
    },
    {
        name: "잡채",
        ingredients: ["당면", "소고기", "당근", "양파", "시금치", "버섯", "간장", "설탕"]
    },
    {
        name: "삼겹살구이",
        ingredients: ["삼겹살", "마늘", "대파", "소금", "후추", "간장", "참기름"]
    },
    {
        name: "갈비찜",
        ingredients: ["갈비", "간장", "마늘", "배", "양파", "설탕", "대파"]
    }
];

// 버튼 클릭 시 이벤트 처리
document.getElementById("searchButton").addEventListener("click", function() {
    const input = document.getElementById("recipeInput").value.trim().toLowerCase();
    const matchedRecipe = recipes.find(recipe => recipe.name.toLowerCase() === input);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // 결과 초기화

    if (matchedRecipe) {
        const ingredientsList = matchedRecipe.ingredients.map(ingredient => {
            return `<li>${ingredient}</li>`;
        }).join("");

        resultsDiv.innerHTML = `
            <div class="result-item">
                <h3>${matchedRecipe.name}</h3>
                <p>이 요리를 만들기 위한 재료는:</p>
                <ul>${ingredientsList}</ul>
            </div>
        `;
    } else {
        resultsDiv.innerHTML = "<p>❌ 해당 음식은 목록에 없습니다. 다른 음식을 시도해 보세요.</p>";
    }
});
