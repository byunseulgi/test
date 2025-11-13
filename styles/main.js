// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    // 푸터에 현재 연도 표시
    const currentYearElement = document.getElementById('current-year-info');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = `현재 연도: ${currentYear}`;
    }

    // (추가적으로) 네비게이션 활성화 기능 등을 여기에 구현할 수 있습니다.
});