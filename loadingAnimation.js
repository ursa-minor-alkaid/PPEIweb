// 等待所有资源加载完成
window.addEventListener('load', function() {
    // 添加一个小延迟，确保所有资源完全加载
    setTimeout(function() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }, 1350); // 1200ms的延迟
});