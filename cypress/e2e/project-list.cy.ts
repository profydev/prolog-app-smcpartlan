import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
    cy.get("main").find("img").should("be.visible");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusMap: { [key: string]: string } = {
        error: "critical",
        warning: "warning",
        info: "stable",
      };

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(
            capitalize(statusMap[mockProjects[index].status]),
          );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });

    it("displays error", () => {
      // set network error for test
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        statusCode: 500,
        body: "",
      }).as("getProjectsError");

      // set page and wait on callout
      cy.visit("http://localhost:3000/dashboard");
      cy.wait("@getProjectsError");

      // confirm elements rendered on error are showing
      cy.get('[data-cy="error"]').should("be.visible");
      cy.get('[data-cy="retry"').should("be.visible");
    });

    it("reloads data when try again button clicked", () => {
      // set  network error stub for try again button to be rendered
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        statusCode: 500,
        body: "",
      }).as("getProjectsError");

      // set page and wait on callout
      cy.visit("http://localhost:3000/dashboard");
      cy.wait("@getProjectsError");

      // set mock projects data for retry
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      }).as("retryGetProjects");

      // click retry button and confim rendered correctly.
      cy.get('[data-cy="retry"]').click();
      cy.wait("@retryGetProjects");
      cy.get("main").find("img").should("be.visible");
    });
  });
});
