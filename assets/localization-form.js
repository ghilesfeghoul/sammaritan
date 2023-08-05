if (!customElements.get("localization-form")) {
  customElements.define(
    "localization-form",
    class LocalizationForm extends HTMLElement {
      constructor() {
        super();
        this.elements = {
          input: this.querySelector(
            'input[name="locale_code"], input[name="country_code"]'
          ),
          panel: this.querySelector("ul"),
        };
        console.log(this.elements);
        this.addEventListener("keyup", this.onContainerKeyUp.bind(this));

        this.querySelectorAll("a").forEach((item) =>
          item.addEventListener("click", this.onItemClick.bind(this))
        );
      }


      onContainerKeyUp(event) {
        if (event.code.toUpperCase() !== "ESCAPE") return;
      }

      onItemClick(event) {
        event.preventDefault();
        const form = this.querySelector("form");
        this.elements.input.value = event.currentTarget.dataset.value;
        if (form) form.submit();
      }
    }
  );
}
