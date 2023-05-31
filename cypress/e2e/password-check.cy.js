describe("password check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("checks if two passwords are equal", () => {
    cy.get("#equal").should("have.class", "checks__check--failed");

    const passwordInput = "password123";
    cy.get("#pw1").type(passwordInput);
    cy.get("#pw2").type(passwordInput);

    cy.get("#equal").should("have.class", "checks__check--success");
    cy.get("#equal").should("not.have.class", "checks__check--failed");

    cy.get("#lowercase").should("have.class", "checks__check--success");
    cy.get("#lowercase").should("not.have.class", "checks__check--failed");

    cy.get("#uppercase").should("have.class", "checks__check--failed");
    cy.get("#uppercase").should("not.have.class", "checks__check--success");

    cy.get("#numbers").should("have.class", "checks__check--success");
    cy.get("#numbers").should("not.have.class", "checks__check--failed");

    cy.get("#length").should("have.class", "checks__check--success");
    cy.get("#length").should("not.have.class", "checks__check--failed");

    cy.get("#pw1").clear();
    cy.get("#pw2").clear();

    cy.get("#pw1").type("password123");
    cy.get("#pw2").type("password321");

    cy.get("#equal").should("have.class", "checks__check--failed");
  });

  it("shows or hides passwords", () => {
    const passwordInput = "Password123";
    cy.get("#pw1").type(passwordInput);
    cy.get("#pw2").type(passwordInput);

    cy.get("#pw1").should("have.prop", "type", "password");
    cy.get("#pw2").should("have.prop", "type", "password");
    cy.get('[data-cy="toggle-passwords-button"]').should(
      "have.text",
      "Show Passwords"
    );

    cy.get('[data-cy="toggle-passwords-button"]').click();
    cy.get("#pw1").should("have.prop", "type", "text");
    cy.get("#pw2").should("have.prop", "type", "text");
    cy.get('[data-cy="toggle-passwords-button"]').should(
      "have.text",
      "Hide Passwords"
    );

    cy.get('[data-cy="toggle-passwords-button"]').click();
    cy.get("#pw1").should("have.prop", "type", "password");
    cy.get("#pw2").should("have.prop", "type", "password");
    cy.get('[data-cy="toggle-passwords-button"]').should(
      "have.text",
      "Show Passwords"
    );
  });
});
