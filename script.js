//Jquery
const $labels = $(".form-control label");

$labels.each(function () {
    const $label = $(this);
    const labelText = $label.text();

    $label.html(
        labelText
            .split("")
            .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
            .join("")
    );
});

//Vanilla JS
const labels = document.querySelectorAll(".form-control label")

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        .join("")
})