describe(`M-TOP corona stat`, () => {
  it('corona', () => {
    cy.visitMobile(`https://m.daum.net/?view=news1`);
    cy.get(`.ibox_corona .txt_sick`)
      .then((el) => {
        expect(el.html()).to.be.not.empty;
        let sickCount = el.html().replaceAll(',','').replaceAll('확진환자 ', '');
        sickCount = parseInt(sickCount, 10);
        expect(sickCount).to.above(100);
        cy.get('.ibox_corona .count_increase')
        .then((el) => {
          cy.log(el.html())
          expect(sickCount).to.above(parseInt(el.html().replaceAll(',',''),10))
          expect(sickCount).to.not.equal(parseInt(el.html().replaceAll(',',''),10))
        });
      });
  });
});
