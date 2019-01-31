import Form from "../components/form";
import ValidatorManager from "../components/validators/validator-manager";
import Validators from "../components/validators/validators";
import PostHttp from "../http/post-http";
import Page from "./page";

class PostNewPage implements Page {
  constructor(private postHttp: PostHttp) {
    this.init();
  }

  public init(): void {
    document
      .querySelector("#my-form")
      .addEventListener("submit", (event: Event) => {
        event.preventDefault();
        this.submit();
        return false;
      });
  }

  public submit(): void {
    if (this.isvalid()) {
      return;
    }

    this.postHttp
      .save({
        body: Form.getValueFromField("#body"),
        title: Form.getValueFromField("#title"),
      })
      .then((obj) => this.goToListPost());
  }

  public goToListPost(): void {
    window.location.href = "/post/post-list.html";
  }

  public isvalid(): boolean {
    const validator = new ValidatorManager([
      {
        selectorField: "#title",
        // tslint:disable-next-line:object-literal-sort-keys
        rules: [Validators.required],
        messageInvalid: "Titulo invalido",
      },
      {
        selectorField: "#body",
        // tslint:disable-next-line:object-literal-sort-keys
        rules: [Validators.required],
        messageInvalid: "Conteudo invalido",
      }
    ]);
    return validator.isValid();
  }
}

new PostNewPage(new PostHttp());
