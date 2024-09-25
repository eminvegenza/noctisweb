document.addEventListener("DOMContentLoaded", function() {
    const metinElementi = document.getElementById("metin");
    const yazilacakMetin = `
        
        4 yıldır yazılımla ilgileniyorum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Autem delectus nobis velit, iure temporibus minima reiciendis.
        Molestiae dolores asperiores quidem laborum, voluptatum tempore,
        blanditiis ut necessitatibus adipisci dolor quo illo sed totam.
        Repellendus doloribus eveniet numquam, unde culpa magnam perspiciatis
        error ut accusantium. Ex dolores cum incidunt, commodi eveniet accusantium.
    `;

    let index = 0;

    function yazdir() {
        if (index < yazilacakMetin.length) {
            metinElementi.innerHTML += yazilacakMetin[index];
            index++;
            setTimeout(yazdir, 20); // 100ms bekleyip bir sonraki harfi yaz
        }
    }

    yazdir(); // Yazma işlemini başlat
});
