/**
 * Developer Portfolio - Main JavaScript
 * 간단한 인터랙션을 위한 스크립트
 */

(function() {
    'use strict';

    // DOM이 로드된 후 실행
    document.addEventListener('DOMContentLoaded', function() {
        initScrollReveal();
    });

    /**
     * 스크롤 시 섹션 페이드인 효과
     */
    function initScrollReveal() {
        const sections = document.querySelectorAll('.section');

        if (!sections.length) return;

        // IntersectionObserver 지원 여부 확인
        if (!('IntersectionObserver' in window)) {
            // 미지원 브라우저에서는 모든 섹션을 바로 표시
            sections.forEach(function(section) {
                section.classList.add('visible');
            });
            return;
        }

        // 초기 스타일 설정
        sections.forEach(function(section) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Intersection Observer 설정
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(function(section) {
            observer.observe(section);
        });
    }

})();
