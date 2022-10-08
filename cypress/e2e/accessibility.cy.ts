/// <reference types="cypress"/>
/// <reference types="cypress-axe"/>
/// <reference types="axe-core"/>

type ImpactValue = "minor" | "moderate" | "serious" | "critical" | null;

interface CheckResult {
  id: string;
  impact: string;
  message: string;
  data: any;
}

interface NodeResult {
  html: string;
  impact?: ImpactValue;
  target: string[];
  xpath?: string[];
  ancestry?: string[];
  any: CheckResult[];
  all: CheckResult[];
  none: CheckResult[];
  failureSummary?: string;
  element?: HTMLElement;
}

interface Result {
  description: string;
  help: string;
  helpUrl: string;
  id: string;
  impact?: ImpactValue;
  nodes: NodeResult[];
}

// TODO Import definitions
function terminalLog(violations: Result[]) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} ${
      violations.length === 1 ? "was" : "were"
    } detected`
  );
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length
  }));
  cy.task("table", violationData);
  console.table(violationData);
}

describe("Accessibility testing av forside", () => {
  it("Skal ikke ha noen a11y feilmeldinger", () => {
    cy.visit("/");
    // Vent på at animasjonene skal bli ferdige før vi tester
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
    cy.injectAxe();
    cy.checkA11y(undefined, undefined, terminalLog);
  });
});

export {};
