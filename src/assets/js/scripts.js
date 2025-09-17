export function initHelpers() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    function isHidden(element) {
        if (!element) return true;

        if (window.getComputedStyle(element).display === "none") {
            return true;
        }

        let parent = element.parentElement;
        while (parent) {
            if (window.getComputedStyle(parent).display === "none") {
                return true;
            }
            parent = parent.parentElement;
        }

        return false;
    }

    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    const calArrowPos = debounce(() => {
        if (isHidden($(".js-dropdown-list"))) return;

        const items = $$(".js-dropdown-list > li");

        items.forEach((item) => {
            const arrowPos = item.offsetLeft + item.offsetWidth / 2;
            item.style.setProperty("--arrow-left-pos", `${arrowPos}px`);
        });
    });

    window.addEventListener("resize", calArrowPos);
    window.addEventListener("template-loaded", calArrowPos);

    window.addEventListener("template-loaded", handleActiveMenu);

    function handleActiveMenu() {
        const dropdowns = $$(".js-dropdown");
        const menus = $$(".js-menu-list");
        const activeClass = "menu-column__item--active";

        const removeActive = (menu) => {
            menu.querySelector(`.${activeClass}`)?.classList.remove(
                activeClass
            );
        };

        const init = () => {
            menus.forEach((menu) => {
                const items = menu.children;
                if (!items.length) return;

                removeActive(menu);
                if (window.innerWidth > 991)
                    items[0].classList.add(activeClass);

                Array.from(items).forEach((item) => {
                    item.onmouseenter = () => {
                        if (window.innerWidth <= 991) return;
                        removeActive(menu);
                        item.classList.add(activeClass);
                    };
                    item.onclick = () => {
                        if (window.innerWidth > 991) return;
                        removeActive(menu);
                        item.classList.add(activeClass);
                        item.scrollIntoView();
                    };
                });
            });
        };

        init();

        dropdowns.forEach((dropdown) => {
            dropdown.onmouseleave = () => init();
        });
    }

    window.addEventListener("template-loaded", initJsToggle);

    function initJsToggle() {
        $$(".js-toggle").forEach((button) => {
            const target = button.getAttribute("toggle-target");
            if (!target) {
                document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
            }
            button.onclick = () => {
                if (!$(target)) {
                    return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
                }
                const isHidden = $(target).classList.contains("hide");

                requestAnimationFrame(() => {
                    $(target).classList.toggle("hide", !isHidden);
                    $(target).classList.toggle("show", isHidden);
                });
            };
        });
    }

    window.addEventListener("template-loaded", handlePressHeartOnProduct);

    function handlePressHeartOnProduct() {
        $$(".like-btn").forEach((btn) => {
            btn.onclick = () => {
                btn.classList.toggle("like-btn--liked");
            };
        });
    }
}
