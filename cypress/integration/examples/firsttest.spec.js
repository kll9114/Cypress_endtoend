 describe('exercices cypress', function()
    {it ('exercice 1', function(){
     cy.visit (' https://react-redux.realworld.io/#/login')
     cy.get('input[type="email"]').type('test1')
     cy.get('input[type="password"]').type('test1')
     cy.get('button[type="submit"]').click()
     cy.get('input[type="email"]').clear()
      cy.get('input[type="password"]').clear()
     })

     it ('exercice 2', function(){
      cy.visit (' https://react-redux.realworld.io/#/login')
      cy.get('input[type="email"]').clear()
      cy.get('input[type="password"]').clear()
       })
     


    })