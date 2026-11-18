alert("Sizda hozir random sonlar chiqishni boshledi 😉");


let randomSon = Math.ceil(Math.random() * 100);
alert("Random chiqqan son: " + randomSon)
let javob = confirm("Siz random sonni 2 ga ko'paytirmoqchimiz?");

if (javob == true) {
    let kopaytirish = randomSon * 2;
    let bolish = kopaytirish / 4;
    let qoldiq = bolish % 3;

    alert(
        "Random orqali chiqqan son: " + randomSon + " edi\n" +
        "Biz uni 2 ga ko'paytirib " + kopaytirish + " sonini chiqardik\n" +
        "Va shu sonni 4 ga bo'lib: " + bolish + " sonini chiqardik\n" +
        "Va shu sonni 3 ga bo'lgandagi qoldiq: " + qoldiq
    );

} else {
}