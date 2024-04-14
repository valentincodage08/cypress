describe('template spec', () => {

  it('connects to website', () => {
    cy.visit('index.html')
  });

  it('goes to topics-detail', () => {
    cy.visitUrl('index.html')
    cy.xpath("//*[@id='top']/main/section[2]/div/div/div[1]/div/a").click()
  });
});