const form = document.getElementById("rsvpForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const guestName = document.getElementById("guestName").value;

        const attendance =
            document.querySelector('input[name="attendance"]:checked').value;

        localStorage.setItem("guestName", guestName);

        if (attendance === "coming") {

            window.location.href = "telegram.html";

        } else {

            window.location.href = "goodbye.html";

        }

    });

}