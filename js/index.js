var close = document.querySelectorAll('.modal__close-btn');
var openBtn = document.querySelectorAll('.btn');

Array.from(openBtn, openButton => {
    openButton.addEventListener('click', e => {
        let modalId = e.target.getAttribute('data-id');
        document.getElementById(modalId).classList.add("open");

        Array.from(close, closeButton => {
            closeButton.addEventListener('click', e => document.getElementById(modalId).classList.remove("open"));

            window.addEventListener('keydown', (e) => {
                if (e.key === "Escape") {
                    document.getElementById(modalId).classList.remove("open")
                }
            });

            document.querySelector(".modal.open .modal__box").addEventListener('click', event => {
                event._isClickWithInModal = true;
            });
            
            document.getElementById(modalId).addEventListener('click', event => {
                if (event._isClickWithInModal) return;
                event.currentTarget.classList.remove('open');
            });
        });
    });
});

