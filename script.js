document.addEventListener("DOMContentLoaded", function() {
    const metinElementi = document.getElementById("metin");
    const yazilacakMetin = `
        
        4 yıldır yazılımla ilgileniyorum. 
        Bu süre zarfında C#, JavaScript, Python, HTML ve CSS dilleriyle çeşitli projelerde yer aldım. 
        C# ile masaüstü uygulamaları geliştirirken, JavaScript ve HTML/CSS ile web uygulamaları üzerinde çalışmalar yaptım. 
        Python, veri analizi ve otomasyon projelerinde önemli bir rol üstlendi. 
        Bu projeler sayesinde farklı becerilerimi geliştirme fırsatı buldum ve yeni teknolojilere adapte olmayı öğrendim. 
        Edindiğim deneyimler, yazılım geliştirme sürecine dair daha derin bir anlayış kazanmama yardımcı oldu. 
        Yazılım alanında kendimi geliştirmeye devam etmekteyim ve yeni projelere açık bir yaklaşım sergiliyorum.
    `;

    let index = 0;

    function yazdir() {
        if (index < yazilacakMetin.length) {
            metinElementi.innerHTML += yazilacakMetin[index];
            index++;
            setTimeout(yazdir, 20); 
        }
    }

    yazdir(); // Yazma işlemini başlat
});

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('item1').classList.add('revealed');
    }, 500);

    setTimeout(function() {
        document.getElementById('item2').classList.add('revealed');
    }, 1000);

    setTimeout(function() {
        document.getElementById('item3').classList.add('revealed');
    }, 1500); 
});

