document.addEventListener('DOMContentLoaded', () => {
    // 모든 네비게이션 링크를 가져옵니다.
    const navLinks = document.querySelectorAll('nav ul li a');

    // 각 링크에 클릭 이벤트 리스너를 추가합니다.
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // 기본 앵커 동작을 막습니다 (새로고침 방지).
            event.preventDefault();

            // 클릭된 링크의 href 속성에서 대상 섹션의 ID를 가져옵니다.
            const targetId = this.getAttribute('href');
            // 해당 ID를 가진 요소를 찾습니다.
            const targetElement = document.querySelector(targetId);

            // 대상 요소가 존재하면 부드럽게 스크롤합니다.
            if (targetElement) {
                // scrollIntoView 옵션:
                // - behavior: 'smooth' - 부드러운 스크롤 효과
                // - block: 'start' - 요소의 시작 부분이 뷰포트의 시작 부분에 정렬되도록 스크롤
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('수업 지도안 웹페이지 로드 완료! 스크롤 기능 활성화.');
});