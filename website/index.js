// 获取<a>元素
var linkAboutUs = document.querySelector('#title .guides .about-us a');
linkAboutUs.addEventListener('click', function(event) {
    var element = document.querySelector('#about-us');
    element.scrollIntoView(); // 默认与视口顶部对齐
    // 带配置选项
    console.log('链接被点击:', this.href);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });
    event.preventDefault(); // 阻止默认跳转行为
});

// 获取<a>元素
var linkInvention = document.querySelector('#title .guides .vivew a');
linkInvention.addEventListener('click', function(event) {
    var element = document.querySelector('#invention');
    element.scrollIntoView(); // 默认与视口顶部对齐
    // 带配置选项
    console.log('链接被点击:', this.href);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });
    event.preventDefault(); // 阻止默认跳转行为
});