//First block of code is from the Cypress tutorial


/*
describe('My Test 1', function() {
	it('Does not do much!', function() {
		expect(true).to.equal(true)
	})
})


describe('A Failing Test', function() {
	it('Shows what happens when a test fails!', function() {
		expect(true).to.equal(false)
	})
})


describe('My Test 2', function() {
	it('Visits the Kitchen Sink', function() {
		cy.visit('https://example.cypress.io')
	})
})


describe('My Test 3', function() {
	it('finds the content "type"', function() {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()
	})
})


describe('My Test 4', function() {
	it('clicking "type" navigates to a new url', function() {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()
		cy.url().should('include', 'commands/actions')
	})
})


describe('My Test 5', function() {
	it('Gets, types and asserts', function() {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()
		cy.url().should('include', 'commands/actions')
		cy.get('.action-email')
		  .type('fake@email.com')
		  .should('have.value', 'fake@email.com')
	})
})


describe('My Test 6', function() {
	it('clicking "type" shows the right headings', function() {
		cy.visit('https://example.cypress.io')
		cy.pause()
		cy.contains('type').click()
		cy.url().should('include', 'commands/actions')
		cy.get('.action-email')
		  .type('fake@email.com')
		  .should('have.value', 'fake@email.com')
	})
})
*/


//Code below is testing Calculator

describe('addition', function() {
	it('adds 2+2', function() {
		cy.visit('/')
		cy.contains('2').click()
		cy.contains('+').click()
		cy.contains('3').click()
		cy.contains('=').click()

		cy.get('.calculator__display')
		  .should('have.text', '5')
	})
})


describe('subtraction', function() {
	it('subtracts 4-2', function() {
		cy.visit('/')
		cy.contains('5').click()
		cy.contains('-').click()
		cy.contains('3').click()
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
		cy.contains('6').click()
		cy.contains('÷').click()
		cy.contains('3').click()
		cy.contains('=').click()

		cy.get('.calculator__display')
		  .should('have.text', '2')
	})
})


describe('decimal after number', function() {
	it('displays number with decimal', function() {
		cy.visit('/')
		cy.contains('0').click()
		cy.contains('.').click()
		cy.get('.calculator__display')
		  .should('have.text', '0.')
	})
})


describe('decimal after operator', function() {
	it('displays decimal after operator', function() {
		cy.visit('/')
		cy.contains('1').click()
		cy.contains('+').click()
		cy.contains('.').click()
		cy.get('.calculator__display')
		  .should('have.text', '0.')
	})
})


describe('decimal after equals', function() {
	it('displays decimal after equals', function() {
		cy.visit('/')
		cy.contains('1').click()
		cy.contains('+').click()
		cy.contains('3').click()
		cy.contains('=').click()
		cy.contains('.').click()
		cy.get('.calculator__display')
		  .should('have.text', '0.')
	})
})


describe('clear with AC', function() {
	it('clears all previous inputs', function() {
		cy.visit('/')
		cy.contains('1').click()
		cy.contains('+').click()
		cy.contains('3').click()
		cy.contains('CE').click()
		cy.contains('AC').click()
		cy.get('.calculator__display')
		  .should('have.text', '0')
	})
})


describe('clear button shows CE', function() {
	it('clear button turns from AC to CE', function() {
		cy.visit('/')
		cy.contains('1').click()
		cy.get('.AC--button')
		  .should('have.text', 'CE')
	})
})


describe('clear with CE', function() {
	it('CE clears last input', function() {
		cy.visit('/')
		cy.contains('1').click()
		cy.contains('+').click()
		cy.contains('2').click()
		cy.contains('+').click()
		cy.contains('4').click()
		cy.contains('+').click()
		cy.contains('1').click()
		cy.contains('CE').click()
		cy.contains('=').click()
		cy.get('.calculator__display')
		  .should('have.text', '7')
	})
})



