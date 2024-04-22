describe('empty spec', () => {
  it('should visit the page and validate all page elements', () => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        "urls": [
          {
              "id": 1,
              "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
              "short_url": "http://localhost:3001/useshorturl/1",
              "title": "Awesome photo"
          },
          {
              "long_url": "https://unsplash.com/photos/a-white-balloon-floating-in-a-blue-sky-gUhMocUj1ow",
              "title": "White Balloon Blue Sky",
              "id": 2,
              "short_url": "http://localhost:3001/useshorturl/2"
          },
          {
              "long_url": "https://unsplash.com/photos/a-woman-holding-a-white-purse-on-the-street-uhWdD5OMQNg",
              "title": "Cluuuutch",
              "id": 3,
              "short_url": "http://localhost:3001/useshorturl/3"
          }
        ]
      }
    })
    cy.visit('http://localhost:3000/')

  })
})