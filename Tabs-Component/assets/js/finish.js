// #region Start   Tabs Component functionality
// Caching the needed Dom Elements
const tabsControlBtns = window.document.querySelectorAll(".tabs__control__btn");
const tabsContentItems = window.document.querySelectorAll(
  ".tabs__content__item"
);

tabsControlBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetContentClass = btn.getAttribute("data-tab-content");

    const tragetContent = window.document.querySelector(targetContentClass);

    tabsControlBtns.forEach((btnEl) => {
      if (btnEl === btn) {
        btnEl.classList.add("active");
      } else {
        btnEl.classList.remove("active");
      }
    });

    tabsContentItems.forEach((contentItem) => {
      if (contentItem === tragetContent) {
        contentItem.classList.add("active");
      } else {
        contentItem.classList.remove("active");
      }
    });
  });
});
// #endregion

// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll(".current-year");
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
  ele.textContent = currentYear;
});
// #endregion
