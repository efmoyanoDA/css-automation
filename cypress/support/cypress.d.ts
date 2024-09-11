declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in using the API.
     * @param user - The username to log in with (default: 'admin')
     */
    loginWithAPI(user?: string): Chainable<string>;

    /**
     * Custom command to select DOM elements by data-cy attribute.
     * @param value - The data-cy attribute value.
     */
    dataCy(value: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to log a custom message to the Cypress console.
     * @param value - The message to log (though not currently used).
     */
    customLog(value: string): Chainable<null>;
  }
}
