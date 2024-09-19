declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in using the API.
     * Makes an API request to log in the user with the provided username.
     * @param user - The username to log in with. If no username is provided, defaults to 'admin'.
     * @returns Chainable<string> - The session token or result from the login request.
     */
    loginWithAPI(user?: string): Chainable<string>;

    /**
     * Custom command to select DOM elements by the data-cy attribute.
     * This is useful for selecting elements in a more readable way using the data-cy attribute in the DOM.
     * @param value - The value of the data-cy attribute to select.
     * @returns Chainable<JQuery<HTMLElement>> - The selected DOM element(s).
     */
    dataCy(value: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to log a custom message to the Cypress console.
     * This can be used for debugging or informational logging during a test.
     * @param value - The custom message to log to the console.
     * @returns Chainable<null> - Doesn't return any value.
     */
    customLog(value: string): Chainable<null>;

    /**
     * Custom command to query a database table using a WHERE clause.
     * Executes a database query on the specified table and filters the results using the WHERE clause.
     * @param tableName - The name of the database table to query.
     * @param whereClause - The SQL WHERE clause to filter the results.
     * @returns Chainable<null> - Doesn't return any value directly, can be used to handle query results in a test.
     */
    queryTable(tableName: string, whereClause: string): Chainable<null>;

    /**
     * Custom command to query the database with more flexible options.
     * This command accepts various query options such as table, columns, joins, where clauses, etc.
     * @param options - The query options object, which can include table name, columns to retrieve, where clauses, joins, order, and limits.
     * @returns Chainable<null> - Doesn't return any value directly, can be used to handle query results in a test.
     */
    queryDbExtensible(options: QueryOptions): Chainable<null>;

    /**
     * Custom command to safely delete records from a database table.
     * Executes a DELETE query on the specified table using a WHERE clause and optional parameters.
     * @param options - The delete options object, which includes the table name and a WHERE clause with optional parameters.
     * @returns Chainable<null> - Doesn't return any value directly, can be used to handle query results in a test.
     */
    deleteFromTableSafe(options: DeleteOptions): Chainable<null>;

    /**
     * Custom command to fill a form with fixture data.
     * Automatically fills form fields based on the passed components and fixture data. It can handle text inputs, checkboxes, dropdowns, and date fields.
     * @param components - An object mapping field names to already fetched Cypress chainable elements (e.g., form inputs, checkboxes).
     * @param formData - An object containing the values to fill the form with (typically loaded from a fixture file).
     * @param wait - A boolean that determines whether to wait for an element to become visible or not before filling it (optional).
     * @returns Chainable<null> - Doesn't return any value directly, but interacts with form elements.
     */
    fillForm(
      components: Record<string, Cypress.Chainable>,
      formData: Record<string, object>,
      wait: boolean
    ): Chainable<null>;
  }
}
