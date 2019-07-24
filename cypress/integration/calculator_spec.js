/*describe('My First Test', function() {
	it('Does not do much!', function() {
		expect(true).to.equal(true)
	})
})

describe('My First Test', function() {
	it('Does not do much!', function() {
		expect(true).to.equal(false)
	})
})

describe('My First Test', function() {
	it('Visits the Kitchen Sink', function() {
		cy.visit('https://example.cypress.io')
	})
})

describe('My First Test', function() {
	it('finds the content "type"', function() {
		cy.visit('https://example.cypress.io')

		cy.contains('type').click()
	})
})*/

describe('addition', function() {
	it('adds 2+2', function() {
		cy.visit('/')
		cy.contains('2').click()
		cy.contains('+').click()
		cy.contains('2').click()
		cy.contains('=').click()

		cy.get('.calculator__display')
		  .should('have.text', '4')
	})
})


describe('subtraction', function() {
	it('subtracts 4-2', function() {
		cy.visit('/')
		cy.contains('4').click()
		cy.contains('-').click()
		cy.contains('2').click()
		cy.contains('=').click()

		cy.get('.calculator__display')
		  .should('have.text', '2')
	})
})


describe('multiplication', function() {
	it('multiplies 4*2', function() {
		cy.visit('/')
		cy.contains('4').click()
		cy.contains('×').click()
		cy.contains('2').click()
		cy.contains('=').click()

		cy.get('.calculator__display')
		  .should('have.text', '8')
	})
})


describe('division', function() {
	it('divides 4÷2', function() {
		cy.visit('/')
		cy.contains('4').click()
		cy.contains('÷').click()
		cy.contains('2').click()
		cy.contains('=').click()

		cy.get('.calculator__display')
		  .should('have.text', '2')
	})
})







