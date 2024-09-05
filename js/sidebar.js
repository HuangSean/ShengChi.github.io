function openNav() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementsByClassName("overlay");
    var main = document.getElementById("main");

    sidebar.classList.add("active");
    overlay.classList.add("active");
    main.classList.add("active");
}

function closeNav() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementsByClassName("overlay");
    var main = document.getElementById("main");

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    main.classList.remove("active");
}

// 點擊頁面時自動關閉 sidebar
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById("sidebar");
    
    if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && !event.target.matches('.openbtn')) {
        closeNav();
    }
} );